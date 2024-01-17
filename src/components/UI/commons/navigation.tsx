"use client";

import React from "react";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { MenuItem } from "@shopify/hydrogen-react/storefront-api-types";

import { AcmeLogo } from "./AcmeLogo";

export default function MainNav({ menuItems }: { menuItems: MenuItem[] }) {
  return (
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
                href={`/${item.title.toLowerCase()}`}
              >
                {item.title}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="center">
          <NavbarItem className="hidden lg:flex">
            <NavbarBrand>
              <Link href="/">
                <AcmeLogo className="w-20 h-20" />
              </Link>
            </NavbarBrand>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem>
            <Link href="/login">
              <span className="material-icons">account_circle</span>
            </Link>
          </NavbarItem>
        </NavbarContent>
      </div>
    </Navbar>
  );
}
