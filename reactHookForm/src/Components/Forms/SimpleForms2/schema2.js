import { z } from "zod";

const schemaFormSimple2 = z.object({
  tasks: z.array(
    z.object({
      title: z
        .string()
        .min(1, { message: "title is requierd" })
        .max(20, { message: "you can type just 20 char" }),
      discripton: z.string(),
    })
  ),
});

export default schemaFormSimple2