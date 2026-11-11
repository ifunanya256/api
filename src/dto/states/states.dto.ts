import { z } from "zod";

export const createStatesDto = z.object({
  name: z
    .string()
    .min(2, "State name must be at least 2 characters")
    .max(50, "State name must not be to long"),

  capital: z.string().min(2, "Capital name is required"),

  geopoliticalZone: z.string().min(4, "Geopolitical zone is required"),
});

export type CreateStatesDTO = z.infer<typeof createStatesDto>