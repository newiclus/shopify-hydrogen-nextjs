"use client"

import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { MenuItem } from "@shopify/hydrogen-react/storefront-api-types";

import { AcmeLogo } from "./AcmeLogo";


export default function MainNav({ menuItems }: { menuItems: MenuItem[] }) {
  return (
    <Navbar maxWidth="xl" height="6rem">
      <div className="flex w-full flex-wrap">
        <aside className="w-full">
          <NavbarBrand>
            <AcmeLogo />
          </NavbarBrand>
        </aside >

        <NavbarContent justify="start" className="hidden sm:flex gap-4 items-center">
          {menuItems.map((item) => (
            <NavbarItem key={item.id}>
              <Link color="foreground" href="#">
                {item.title}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>

          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </div>
    </Navbar >
  )
}
