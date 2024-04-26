import shopifyAdapter from "@/config/adapter";
import { getMenuQuery, createCartQuery } from "@/data/query";
import { MainMenu } from "@/data/types";

const cartInput = {
  lines: [],
  buyerIdentity: {
    email: "example@example.com",
    countryCode: "CA",
    deliveryAddressPreferences: [
      {
        deliveryAddress: {
          address1: "150 Elgin Street",
          address2: "8th Floor",
          city: "Ottawa",
          province: "Ontario",
          country: "CA",
          zip: "K2P 1L4",
          phone: "123-456-7890",
        },
      },
    ],
  },
  discountCodes: [],
  attributes: [
    {
      key: "cart_attribute",
      value: "This is a cart attribute",
    },
  ],
  metafields: [],
  note: "Its a note",
};

export default class StoreService {
  async getMenu(): Promise<MainMenu> {
    return shopifyAdapter.getMenu(getMenuQuery, "main-menu");
  }

  async createCart() {
    return shopifyAdapter.createCart(createCartQuery, cartInput);
  }
}
