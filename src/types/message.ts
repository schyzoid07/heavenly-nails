import { z } from "zod"

export const messageSchema = z.object({
  text: z.string(),
  role: z.union([z.literal("user"), z.literal("model")]),
})

export type Message = z.infer<typeof messageSchema>
