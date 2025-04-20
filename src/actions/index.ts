
import { getLikes } from './post/get-likes.action';
import { updateLikeCount } from './post/update-like-count.action';

export const server = {
    getLikes,
    updateLikeCount,

    // obtenerSaludo: defineAction({
    //     input: z.object({
    //         name: z.string(),
    //         age: z.number(),
    //         isActive: z.boolean(),
    //     }),
    //     handler: async ({ age, name, isActive }) => {
    //         console.log(`Desde el server ${age} ${name}`)
    //         console.log({ name, age, isActive })

    //         return `Hello, ${name} - ${age}!`
    //     }
    // })
}