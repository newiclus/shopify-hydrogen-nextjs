import shopifyAdapter from "@/config/adapter";
import { getMenuQuery } from "@/data/query";
import { MainMenu } from "@/data/types";

export default class StoreService {
  async getMenu(): Promise<MainMenu> {
    return shopifyAdapter.getMenu(getMenuQuery, "main-menu");
  }
}
