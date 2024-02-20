import { z } from "zod";

export const NoteSchema = z.object({
  id: z.number(),
  title: z
    .string()
    .min(1, { message: "should not be empty." })
    .max(25, { message: "Must be 25 or fewer characters long" }),
  body: z
    .string()
    .min(5, {
      message: "should be 5 or more characters.",
    })
    .max(500),
});

export type Note = z.infer<typeof NoteSchema>;
