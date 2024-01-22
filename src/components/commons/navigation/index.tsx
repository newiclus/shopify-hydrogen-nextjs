import React from "react";
import Link from "next/link";
import { MenuItem } from "@shopify/hydrogen-react/storefront-api-types";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";

import { dashesBySpaces } from "@/utils";
import { AcmeLogo } from "@/components/commons/AcmeLogo";
import ToggleTheme from "@/components/commons/toogleTheme";

const MainNav: React.FC<{ menuItems: MenuItem[] }> = ({ menuItems }) => (
  <Navbar maxWidth="xl" className="py-1.5">
    <div className="flex w-full flex-wrap items-center">
      <NavbarContent
        justify="start"
        className="hidden sm:flex gap-4 items-center"
      >
        {menuItems.map((item) => (
          <NavbarItem key={item.id}>
            <Link
              className="menu_link relative block overflow-hidden px-0.5 pb-0.5"
              href={`/${dashesBySpaces(item.title)}`}
            >
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="center">
        <NavbarItem className="hidden lg:flex">
          <NavbarBrand>
            <Link href="/" title="Home page">
              <AcmeLogo className="w-20 h-20" />
            </Link>
          </NavbarBrand>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <button
            title="Search products"
            className="opacity-60 hover:opacity-100"
          >
            <span className="material-icons-outlined text-3xl">search</span>
          </button>
        </NavbarItem>

        <NavbarItem>
          <Link
            href="/account"
            title="Account page"
            className="opacity-60 hover:opacity-100"
          >
            <span className="material-icons-outlined text-3xl">
              account_circle
            </span>
          </Link>
        </NavbarItem>

        <NavbarItem>
          <button title="Cart" className="opacity-60 hover:opacity-100">
            <span className="material-icons-outlined text-3xl">
              shopping_bag
            </span>
          </button>
        </NavbarItem>

        <NavbarItem>
          <ToggleTheme />
        </NavbarItem>
      </NavbarContent>
    </div>
  </Navbar>
);

export default MainNav;
