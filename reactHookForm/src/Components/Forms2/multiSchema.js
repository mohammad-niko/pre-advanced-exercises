import z from "zod";

const multiSchema = z.object({

  personal: z.object({
    firstName: z.string().min(1, { message: "first name is requierd" }),
    lastName: z.string().min(1, { message: "last name is required" }),
    age: z
      .string()
      .min(1, { message: "age is required" })
      .pipe(
        z.coerce
          .number({
            invalid_type_error: "Age must be a number",
          })
          .int("Age must be a whole number")
          .positive("Age must be positive")
          .min(18, "Must be at least 18 years old")
          .max(50, "Must be at under 50 years old")
      ),
  }),


  address: z.object({
    city: z.string().min(1, { message: "city is required" }),
    postalCode: z.string().min(1, { message: "postal code is required" }) .pipe(
        z.coerce
          .number({
            invalid_type_error: "postal code must be a number",
          })
          .int("postal code must be a whole number")
          .positive("postal code must be positive")
         
      ),
  }),



  taskes: z.array(
    z.object({ name: z.string().min(1, { message: "task is required" }) })
  ),
});

export default multiSchema;
