import { z } from "zod";

const hrSchema = z.object({
  personal: z.object({
    firstName: z
      .string()
      .min(1, { message: "first name is required" })
      .max(15, { message: "you can't type more than 1 char" }),
    lastName: z
      .string()
      .min(1, { message: "last name is required" })
      .max(20, { message: "you can't type more than 20 char" }),
    nationalCode: z.coerce
      .string()
      .min(10, { message: "National code must be 10 " })
      .max(10, { message: "National code must be 10 digits" }),

    birthDate: z.date({
      required_error: "Birth date is required",
    }),
    gender: z.enum(["male", "female"], {
      errorMap: () => ({ message: "Gender is required" }),
    }),
  }),

  job: z.object({
    jobTitle: z.string().min(1, { message: "job title is required" }),
    department: z.string().min(1, { message: "Department is required" }),
    employeeType: z.enum(["full-time", "part-time", "contract"], {
      errorMap: { message: "Employee type is required" },
    }),
    startDate: z.date(),
  }),

  address: z.object({
    city: z.string().min(1, { message: "City is required" }),
    street: z.string().min(1, { message: "Street is required" }),
    postalCode: z
      .string()
      .min(1, { message: "postal code is required" })
      .pipe(z.coerce.number().positive()),
  }),

  skills: z.array(
    z.object({ name: z.string().min(1, { message: "Skill is required" }) })
  ),

  documents: z.array(
    z.object({
      type: z.string().min(1, { message: "Document is required" }),
      file: z.any().optional(),
    })
  ),
});

export default hrSchema;
