import React from "react";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { Card } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

const testimonials = [
  {
    id: "1",
    name: "Xavier",
    city: "Vancouver",
    quote: "This is a great product. I love it!",
    image: "https://picsum.photos/id/10/800/600",
  },
  {
    id: "2",
    name: "Xavier",
    city: "Vancouver",
    quote: "This is a great product. I love it!",
    image: "https://picsum.photos/id/20/800/600",
  },
  {
    id: "3",
    name: "Xavier",
    city: "Vancouver",
    quote: "This is a great product. I love it!",
    image: "https://picsum.photos/id/30/800/600",
  },
  {
    id: "4",
    name: "Xavier",
    city: "Vancouver",
    quote: "This is a great product. I love it!",
    image: "https://picsum.photos/id/40/800/600",
  },
  {
    id: "5",
    name: "Xavier",
    city: "Vancouver",
    quote: "This is a great product. I love it!",
    image: "https://picsum.photos/id/50/800/600",
  },
  {
    id: "6",
    name: "Xavier",
    city: "Vancouver",
    quote: "This is a great product. I love it!",
    image: "https://picsum.photos/id/60/800/600",
  },
];

const TestimonialsBanner: React.FC = () => {
  const handleClick = (image: string) => {
    // Handle click event here
    console.log(`Clicked on ${image}`);
  };

  return (
    <section className="testimonial_banner flex">
      <div className="panel w-96 flex-none">
        <span className="stars"></span>
        <h2 className="text-2xl">This is a great product. I love it!</h2>
        <p>
          --<small>Xavier/Vancouver</small>
        </p>
      </div>

      <ScrollShadow orientation="horizontal" className="max-w-full relative">
        <aside className="testimonial_items flex w-max">
          {testimonials.map((item, index) => (
            <Card
              key={index}
              shadow="none"
              className="w-80 h-70 m-2"
              isPressable
            >
              <Image src={item.image} alt={`Image ${index + 1}`} />
            </Card>
          ))}
        </aside>
      </ScrollShadow>
    </section>
  );
};

export { TestimonialsBanner };
