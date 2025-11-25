import { useForm, Controller } from "react-hook-form";
import { schemaFormSimple } from "./Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function SimpleForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaFormSimple),
    defaultValues: {
      name: "",
      email: "",
      age: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  const onError = (error) => {
    console.error(error);
  };

  return (
    <>
      <Box
        component={"form"}
        onSubmit={handleSubmit(onSubmit, onError)}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Name"
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Email"
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="age"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Age"
              fullWidth
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />

        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>
    </>
  );
}

export default SimpleForm;

// function SimpleForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(schemaFormSimple),
//   });

//   const onSubmit = (data) => {
//     console.log(data);
//   };
//   const onError = (error) => {
//     console.error(error);
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit(onSubmit, onError)}>
//         <input type="text" placeholder="name" {...register("name")} />
//         {errors.name && <p style={{ color: "red" }}>{errors?.name?.message}</p>}
//         <input type="email" placeholder="email" {...register("email")} />
//         {errors.email && (
//           <p style={{ color: "red" }}>{errors?.email?.message}</p>
//         )}
//         <input type="number" placeholder="age" {...register("age")} />
//         {errors.age && <p style={{ color: "red" }}>{errors?.age?.message}</p>}
//         <button type="submit">submit</button>
//       </form>
//     </>
//   );
// }

// export default SimpleForm;
