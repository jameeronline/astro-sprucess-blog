import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

// const blogCollection = defineCollection({
//   type: "content",
//   schema: z.object({
//     title: z.string(),
//     description: z.string(),
//     pubDate: z.date(),
//     updatedDate: z.date().optional(),
//     author: z.string().default("Admin"),
//     tags: z.array(z.string()).default([]),
//     lang: z.enum(["en", "ar"]),
//     image: z.string().optional(),
//   }),
// });

const movies = defineCollection({
  loader: file("src/content/movies/index.json"),
  schema: z.object({
    title: z.string(),
    year: z.number(),
    language: z.string(),
    releaseDate: z.string(),
    genre: z.string()
  }),
});

const users = defineCollection({
  loader: file("src/content/users/index.json"),
  schema: z.object({
    id: z.number(),
    name: z.string(),
    username: z.string(),
    email: z.string().email(),
    address: z.object({
      street: z.string(),
      suite: z.string(),
      city: z.string(),
      zipcode: z.string(),
      geo: z.object({
        lat: z.string(),
        lng: z.string(),
      }),
    }),
    phone: z.string(),
    website: z.string(),
    company: z.object({
      name: z.string(),
      catchPhrase: z.string(),
      bs: z.string(),
    }),
  }),
});

export const collections = { users, movies };
