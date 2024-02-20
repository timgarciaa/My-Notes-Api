import { z } from "zod";

export const NoteSchema = z.object({
  id: z.number(),
  title: z
    .string()
    .min(3, { message: "Must be 3 or more characters long" })
    .max(25, { message: "Must be 25 or fewer characters long" }),
  body: z.string(),
});

export type Note = z.infer<typeof NoteSchema>;
