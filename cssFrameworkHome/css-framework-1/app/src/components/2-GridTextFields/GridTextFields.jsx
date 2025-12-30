import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function GridTextFields() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Typography variant="h3" component={"h1"} sx={{ textAlign: "center" }}>
        Create Your Acount
      </Typography>
      <Box
        component={"form"}
        sx={{ mt: "20px" }}
        onSubmit={(e) => {
          //   e.preventDefault();
        }}
      >
        <Grid container spacing={2}>
          <Grid sm={4} xs={12}>
            <TextField md={12} fullWidth label="FullName" variant="outlined" />
          </Grid>
          <Grid sm={4} xs={12}>
            <TextField fullWidth label="UserName" variant="outlined" />
          </Grid>
          <Grid sm={4} xs={12}>
            <TextField fullWidth label="Age" variant="outlined" />
          </Grid>
          <Grid sm={6} xs={12}>
            <TextField fullWidth label="Email" variant="outlined" />
          </Grid>
          <Grid sm={6} xs={12}>
            {" "}
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Grid>
          <Grid sm={12} xs={12}>
            {" "}
            <TextField
              fullWidth
              label="Bio"
              variant="outlined"
              multiline
              rows={3}
            />
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          <Button type="submit" variant="contained" sx={{ px: 10, py: 1 }}>
            SING UP
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default GridTextFields;
