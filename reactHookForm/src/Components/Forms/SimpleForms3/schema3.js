import { z } from "zod";

const schema3 = z.object({
  title: z
    .string()
    .min(1, { message: "title is requierd" })
    .max(15, { message: "you can't type more than 15 char" }),
  slug: z.string().min(1, { message: "slug is requierd" }),
  subtasks: z.array(
    z.object({
      name: z.string(),
    })
  ),
});

export default schema3