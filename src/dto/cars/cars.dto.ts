import { z } from "zod";

export const createCarsDto= z.object({
  brand: z
    .string()
    .min(1, "Brand is required")
    .max(50, "Brand must not exceed 50 characters"),

  model: z
    .string()
    .min(1, "Model is required")
    .max(50, "Model must not exceed 50 characters"),

  year: z.number().min(1990, "Year must be at least 1990"),

  color: z.string().min(3, "Color is required"),

  price: z.number(),

  isAvailable: z.boolean().default(true),

  description: z.string().optional(),
});

export type CreateCarsDTO = z.infer<typeof createCarsDto>;