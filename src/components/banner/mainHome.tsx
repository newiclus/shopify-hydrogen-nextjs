"use client";

import React from "react";
import Link from "next/link";

import Carousel from "@/components/carousel";

interface BannerItem {
  handle: string;
  title: { value: string };
  description: { value: string };
  cta?: { value: string };
  image: {
    reference: {
      image: {
        originalSrc: string;
      };
    };
  };
}

type Banner = {
  items: BannerItem[];
};

const MainHomeBanner = ({ items }: Banner) => (
  <Carousel nodeId="main-carousel">
    {items.map(
      ({ handle, title, description, image, cta }: BannerItem, index) => (
        <Carousel.Item
          key={handle}
          index={index}
          image={image.reference.image.originalSrc}
          sideContent={
            <div className="min-h-1/3 absolute left-12 top-52 z-10 w-96 bg-slate-950/50 px-6 pb-3 pt-3">
              <h1 className="text-3xl text-white mb-2">{title.value}</h1>
              <p className="text-lg leading-6 text-white">
                {description.value}
              </p>
              {cta && (
                <Link href={cta.value} className="btn btn-primary">
                  Shop Now
                </Link>
              )}
            </div>
          }
        />
      )
    )}
    ;
  </Carousel>
);

export default MainHomeBanner;
