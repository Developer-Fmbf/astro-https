import prisma from "@db";
import { defineAction } from "astro:actions";
import { z } from "astro:schema";


export const getLikes = defineAction({
    accept: "json",
    input: z.string(),
    handler: async (postId) => {

        const post = await prisma.post.findUnique({
            where: {
                id: postId
            }
        });

        if (!post) {
            return { likes: 0 }
        }


        return {
            likes: post.likes
        }
    }
})