import adapter from "@/config/adapter";
import { HomeData } from "@/modules/home/types";
import { getHomeDataQuery } from "@/modules/home/service/query";

export default class HomeService {
  getData(): Promise<HomeData> {
    return adapter.getData(getHomeDataQuery);
  }
}
