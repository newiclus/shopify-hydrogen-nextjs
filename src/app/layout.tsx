import "@/styles/globals.css";
import "material-icons/iconfont/outlined.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { UIProvider } from "@/providers/nextUIprovider";
import { ShopifyUIProvider } from "@/providers/shopifyUIProvider";
import { ThemeProvider } from "@/providers/themeUIprovider";
import Header from "@/components/commons/header";
import Footer from "@/components/commons/footer";

export const metadata: Metadata = {
  title: "Shopify Store with NextJS",
  description: "Generated by create next app",
};

const roboto = Roboto({
  weight: ["100", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <UIProvider>
          <ShopifyUIProvider>
            <ThemeProvider>
              <Header />
              <section className="m-auto">{children}</section>
              <Footer />
            </ThemeProvider>
          </ShopifyUIProvider>
        </UIProvider>
      </body>
    </html>
  );
}
