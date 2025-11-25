import { z } from "zod";

export const schemaFormSimple = z.object({
  name: z.string().min(3, "too small"),
  email: z.email().refine(
    (email) => {
      const localpart = email.split("@")[0];

      return localpart.length > 4;
    },
    { message: "your username shoud be more than 4 char" }
  ),
  age: z
    .string()
    .min(1, "age is required")
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
});
