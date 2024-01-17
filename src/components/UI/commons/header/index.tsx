import { Menu } from "@shopify/hydrogen-react/storefront-api-types";

import { getMenu } from "@/data/api";
import MainNav from "@/components/UI/commons/navigation";

export default async function Header({
  children,
}: {
  children?: React.ReactNode;
}) {
  const { data: menuData } = await getMenu("main-menu");
  const menu = menuData.menu as Menu;

  return (
    <header id="main-header">
      <MainNav menuItems={menu.items} />
      {children && children}
    </header>
  );
}
