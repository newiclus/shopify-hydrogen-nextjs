import { z } from "zod";

const HomeProductSchema = z.object({
  id: z.string(),
  title: z.string(),
  featuredImage: z.object({
    altText: z.string(),
    url: z.string(),
  }),
});

const HomeDataSchema = z.object({
  data: z.object({
    shop: z.object({
      name: z.string(),
      description: z.string(),
    }),
    products: z.object({
      edges: z.array(HomeProductSchema),
    }),
    metaobjects: z.object({
      nodes: z.array(
        z.object({
          handle: z.string(),
          type: z.string(),
          title: z.object({ value: z.string() }),
          description: z.object({ value: z.string() }),
          cta: z.object({ value: z.string() }),
          display: z.object({ value: z.string() }),
          image: z.object({
            reference: z.object({
              image: z.object({
                originalSrc: z.string(),
              }),
            }),
          }),
        }),
      ),
    }),
  }),
});

export type HomeData = z.infer<typeof HomeDataSchema>;
export type HomeProduct = z.infer<typeof HomeProductSchema>;
