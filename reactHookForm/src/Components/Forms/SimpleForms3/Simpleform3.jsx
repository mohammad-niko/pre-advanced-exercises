import { useForm, useFieldArray, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import schema3 from "./schema3";
import { useEffect } from "react";
export const Simpleform3 = () => {
  const {
    handleSubmit,
    reset,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema3),
    defaultValues: {
      title: "",
      slug: "",
      subtasks: [{ name: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "subtasks",
  });

  const titleWatch = watch("title");

  useEffect(() => {
    const slugValue = titleWatch.toLocaleLowerCase().replace(/\s+/g, "-");
    setValue("slug", slugValue, { shouldValidate: true });
  }, [titleWatch]);

  return (
    <>
      <Box
        component={"form"}
        onSubmit={handleSubmit(
          (data) => console.log(data),
          (error) => console.log(error)
        )}
      >
        <Controller
          name="title"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="title"
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="slug"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              fullWidth
              label="slug"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />

        {fields.map((field, index) => (
          <Box key={field.id} sx={{ mt: 5 }}>
            <Controller
              name={`subtasks.${index}.name`}
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="name"
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <Button
              type="button"
              variant="outlined"
              color="error"
              onClick={() => remove(index)}
              sx={{ marginTop: 1 }}
            >
              remove
            </Button>
          </Box>
        ))}
        <Button
          type="button"
          variant="outlined"
          color="error"
          onClick={() => append({ name: "" })}
          sx={{ marginTop: 1 }}
        >
          add subtask
        </Button>
        <Button
          type="button"
          variant="outlined"
          color="warning"
          onClick={() => reset()}
          sx={{ marginTop: 1 }}
        >
          reset
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="success"
          sx={{ marginTop: 1 }}
        >
          submit
        </Button>
      </Box>
    </>
  );
};
