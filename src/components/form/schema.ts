// Zod import
import {z} from 'zod'

export const schema = z.object({
    name: z.string().min(4, "Seu nome precisa ter mais de 4 caracteres"),
    email: z.string().email().min(4, "Insira um email válido"),
  });
  
export type formProps = z.infer<typeof schema>;