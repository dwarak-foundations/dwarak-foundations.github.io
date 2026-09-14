import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    location: z.string(),
    address: z.string(),
    status: z.enum(["completed", "ongoing", "upcoming"]),
    completion: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().int(),
    hero: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    gallery: z.array(
      z.object({
        src: z.string(),
        alt: z.string(),
        caption: z.string().optional(),
      }),
    ),
    facts: z.array(
      z.object({
        label: z.string(),
        value: z.string(),
      }),
    ),
    rera: z.string().optional(),
    brochure: z.string().optional(),
    coordinates: z.object({
      latitude: z.number().min(-90).max(90),
      longitude: z.number().min(-180).max(180),
    }),
    mapEmbed: z.url(),
    legacyPath: z.string().optional(),
    seoDescription: z.string(),
  }),
});

const testimonials = defineCollection({
  loader: glob({ base: "./src/content/testimonials", pattern: "**/*.md" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    project: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().int(),
  }),
});

export const collections = { projects, testimonials };
