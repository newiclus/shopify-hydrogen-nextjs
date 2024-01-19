import React from "react";
import Link from "next/link";
import { Image } from "@nextui-org/image";

interface BannerItem {
  title: { value: string };
  description: { value: string };
  image: { value: string };
  cta?: { value: string };
}

type Banner = {
  items: BannerItem[];
};

const MainHomeBanner: React.FC<Banner> = ({ items }) => {
  const { title, description, image, cta } = items[0];

  return (
    <section className="banner-container">
      <div className="text-container">
        <h1>{title.value}</h1>
        <p>{description.value}</p>
        {cta && (
          <Link href={cta.value} className="btn btn-primary">
            Shop Now
          </Link>
        )}
      </div>
      <figure className="image-container">
        <Image src={image.value} alt="Banner Image" width={500} height={500} />
      </figure>
    </section>
  );
};

export default MainHomeBanner;
