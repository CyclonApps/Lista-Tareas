import z from 'zod'

const taskSchema = z.object({
  userId: z.number().int().positive(),
  content: z.string(),
  status: z.boolean()
})

export function validateTask (object) {
  return taskSchema.safeParse(object)
}
