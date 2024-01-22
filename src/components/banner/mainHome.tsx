import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BannerItem {
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

const MainHomeBanner: React.FC<Banner> = ({ items }) => {
  const { title, description, image, cta } = items[0];
  const { originalSrc } = image.reference.image;

  return (
    <section className="relative">
      <div className="absolute left-12 top-52 z-10 w-96 px-4 pt-2 pb-3 bg-slate-950/75">
        <h1 className="text-3xl">{title.value}</h1>
        <p className="text-lg leading-6">{description.value}</p>
        {cta && (
          <Link href={cta.value} className="btn btn-primary">
            Shop Now
          </Link>
        )}
      </div>
      <figure className="h-176 relative">
        <Image src={originalSrc} alt="Banner Image" fill={true} />
      </figure>
    </section>
  );
};

export default MainHomeBanner;
