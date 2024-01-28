import { z } from "zod";

export const userSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, "small password min is 8")
    .max(32, "password length is to much max is 32"),
});
