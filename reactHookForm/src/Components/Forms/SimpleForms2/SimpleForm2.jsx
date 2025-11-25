import { useForm, Controller, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import schemaFormSimple2 from "./schema2";

function SimpleForm2() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaFormSimple2),
    defaultValues: {
      tasks: [{ title: "", discripton: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "tasks",
  });
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Box component={"form"} onSubmit={handleSubmit(onSubmit)} sx={{ mt: 5 }}>
        {fields.map((field, index) => (
          <Box key={field.id}>
            <Controller
              name={`tasks.${index}.title`}
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="task title"
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name={`tasks.${index}.discripton`}
              control={control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="task discripton"
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <Button
              variant="outlined"
              color="error"
              onClick={() => remove(index)}
            >
              remove
            </Button>
          </Box>
        ))}
        <Button
          variant="contained"
          color="success"
          onClick={() => append({ title: "", discripton: "" })}
        >
          add task
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginLeft: "15px" }}
        >
          submit
        </Button>
      </Box>
    </>
  );
}

export default SimpleForm2;
