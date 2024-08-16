import { z } from 'zod'

export const Domains = z.array(
    z.object({
        id: z.string(),
        name: z.string().min(3, 'URL must be at least 3 characters').regex(/^[a-zA-Z]+\.[a-zA-Z]+$/g, 'Invalid URL'),
        isActive: z.boolean(),
        published_date: z.date(),
    })
)