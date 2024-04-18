import { z } from "zod";

const MainMenuSchema = z.object({
  data: z.object({
    menu: z.object({
      id: z.string(),
      handle: z.string(),
      title: z.string(),
      items: z.array(
        z.object({
          id: z.string(),
          title: z.string(),
          type: z.string(),
          url: z.string(),
        }),
      ),
    }),
  }),
});

const CartCreateSchema = z.object({
  cartCreate: z.object({
    cart: z.object({
      id: z.string(),
    }),
    userErrors: z.array(
      z.object({
        field: z.string(),
        message: z.string(),
      }),
    ),
  }),
});

export type MainMenu = z.infer<typeof MainMenuSchema>;
export type CartCreate = z.infer<typeof CartCreateSchema>;
