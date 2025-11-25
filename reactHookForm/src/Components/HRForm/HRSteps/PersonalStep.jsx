import { Controller, useFormContext } from "react-hook-form";
import { useNavigate } from "react-router";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormHelperText from "@mui/material/FormHelperText";
import Box from "@mui/material/Box";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function PersonalStep() {
  const {
    control,
    trigger,
    formState: { errors },
  } = useFormContext();
  const navigate = useNavigate();

  // Scroll to the first error field (tries to find by name attr)
  const scrollToFirstError = (errorsObj) => {
    // Flatten nested error paths to "personal.firstName" etc.
    const findFirstPath = (obj, prefix = "") => {
      if (!obj || typeof obj !== "object") return null;
      for (const key of Object.keys(obj)) {
        const val = obj[key];
        const path = prefix ? `${prefix}.${key}` : key;
        // if val has 'message' or 'type' it's an error leaf
        if (val && (val.message || val.type)) return path;
        const nested = findFirstPath(val, path);
        if (nested) return nested;
      }
      return null;
    };

    const firstPath = findFirstPath(errorsObj);
    if (!firstPath) return;

    // Try selectors for controlled MUI inputs:
    // 1) name attr (Controller spreads name automatically on some inputs)
    // 2) data-rhf-name custom fallback (not used here, but we try name)
    // Replace dots so querySelector can match [name="personal.firstName"]
    try {
      const selector = `[name="${firstPath}"]`;
      const el = document.querySelector(selector);
      if (el && typeof el.focus === "function") {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.focus();
      }
    } catch (e) {
      // ignore selector errors
    }
  };

  const handleNext = async () => {
    const valid = await trigger("personal");
    if (valid) {
      navigate("/hr/job");
    } else {
      scrollToFirstError(errors.personal);
    }
  };

  return (
    <Box sx={{ maxWidth: 960, margin: "0 auto", p: 2 }}>
      <form noValidate>
        <Grid container spacing={2} alignItems="center">
          {/* First Name */}
          <Grid>
            <Controller
              name="personal.firstName"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="First Name"
                  required
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  inputProps={{ name: "personal.firstName" }}
                />
              )}
            />
          </Grid>

          {/* Last Name */}
          <Grid>
            <Controller
              name="personal.lastName"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="Last Name"
                  required
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  inputProps={{ name: "personal.lastName" }}
                />
              )}
            />
          </Grid>

          {/* National Code */}
          <Grid>
            <Controller
              name="personal.nationalCode"
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="National Code"
                  required
                  fullWidth
                  inputProps={{ maxLength: 10, name: "personal.nationalCode" }}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message || "10 digits"}
                />
              )}
            />
          </Grid>

          {/* Birth Date */}
          <Grid>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Controller
                name="personal.birthDate"
                control={control}
                render={({ field, fieldState }) => (
                  <DatePicker
                    {...field}
                    // DatePicker doesn't forward `name`, so apply to the rendered input
                    onChange={(date) => field.onChange(date)}
                    value={field.value ?? null}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Birth Date"
                        required
                        fullWidth
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                        inputProps={{
                          ...params.inputProps,
                          name: "personal.birthDate",
                        }}
                      />
                    )}
                  />
                )}
              />
            </LocalizationProvider>
          </Grid>

          {/* Gender (RadioGroup) */}
          <Grid item xs={12}>
            <FormControl
              error={!!errors.personal?.gender}
              component="fieldset"
              variant="standard"
            >
              <FormLabel component="legend">Gender</FormLabel>

              <Controller
                name="personal.gender"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    row
                    {...field}
                    // ensure name attribute is present for accessibility & scroll finder
                    name="personal.gender"
                    aria-label="gender"
                  >
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                  </RadioGroup>
                )}
              />

              {errors.personal?.gender && (
                <FormHelperText>
                  {errors.personal.gender.message}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>

          {/* Action Buttons */}
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}
          >
            <Button variant="outlined" onClick={() => navigate(-1)}>
              Cancel
            </Button>

            <Button variant="contained" color="primary" onClick={handleNext}>
              Next →
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
