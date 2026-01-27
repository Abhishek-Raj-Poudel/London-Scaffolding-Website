import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    cta: z.object({
      title: z.string().default('Ready to start your project?'),
      description: z.string().default('Contact us today for a free, no-obligation scaffolding quote in London.'),
      buttonText: z.string().default('Get a Free Quote'),
      phoneText: z.string().default('020 XXXX XXXX'),
    }).optional(),
  }),
});

const areas = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
    cta: z.object({
      title: z.string().default('Need scaffolding near you?'),
      description: z.string().default('We provide professional scaffolding services across London and the surrounding areas.'),
      buttonText: z.string().default('Get a Free Quote'),
      phoneText: z.string().default('020 XXXX XXXX'),
    }).optional(),
  }),
});

export const collections = {
  'services': services,
  'areas': areas,
};
