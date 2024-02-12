import React from "react";
import Link from "next/link";
import Image from "next/image";

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

const MainHomeBanner = ({ items }: Banner) => {
  return items.map(({ handle, title, description, image, cta }: BannerItem) => (
    <section className="relative" key={handle}>
      <div className="absolute left-12 top-52 z-10 w-96 px-4 pt-2 pb-3 bg-slate-950/75">
        <h1 className="text-3xl text-white">{title.value}</h1>
        <p className="text-lg leading-6 text-white">{description.value}</p>
        {cta && (
          <Link href={cta.value} className="btn btn-primary">
            Shop Now
          </Link>
        )}
      </div>
      <figure className="h-176 relative">
        <Image
          src={image.reference.image.originalSrc}
          alt="Banner Image"
          fill={true}
          priority={false}
          fetchPriority="low"
        />
      </figure>
    </section>
  ));
};

export default MainHomeBanner;
