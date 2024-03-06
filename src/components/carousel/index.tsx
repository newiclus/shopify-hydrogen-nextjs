import React, { Children, ReactNode, isValidElement, useState } from "react";
import Image from "next/image";

import {
  CarouselSettings,
  SlideItem,
  CarouselProps,
} from "@/components/carousel/types";

export const defaultSettings: CarouselSettings = {
  autoplay: false,
  draggable: false,
  dots: false,
  loop: false,
  speed: 500,
  onNext: () => {},
  onPrevious: () => {},
  onChange: () => {},
  onSwipe: () => {},
};

export default function Carousel({
  nodeId,
  children,
  className,
  settings = defaultSettings,
}: CarouselProps) {
  const { dots, loop, speed, onNext, onChange, onPrevious } = {
    ...defaultSettings,
    ...settings,
  };
  const [activeSlide, setActiveSlide] = useState({
    value: 0,
    atEnd: false,
    atStart: !loop ? true : false,
  });
  const slides: ReactNode[] = [];

  const handleNext = () => {
    setActiveSlide((prev) => {
      let next = prev.value + 1;

      if (next >= slides.length) {
        next = 0;
      }

      return {
        value: next,
        atEnd: !loop && next === slides.length - 1,
        atStart: !loop && next === 0,
      };
    });
    onNext();
    onChange(activeSlide.value);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => {
      let next = prev.value - 1;

      if (next < 0) {
        next = slides.length - 1;
      }

      return {
        value: next,
        atEnd: !loop && next === slides.length - 1,
        atStart: !loop && next === 0,
      };
    });
    onPrevious();
    onChange(activeSlide.value);
  };

  Children.forEach(children, (child) => {
    if (isValidElement(child)) {
      const name = (child.type as any).displayName;

      if (name !== "CarouselItem") {
        throw new Error(
          "Carousel only accepts children of type `Carousel.Item`"
        );
      }

      const { index } = child.props;
      const isActive = index === activeSlide.value;
      const activeIndex = activeSlide.value;
      const props = { ...child.props, isActive, activeIndex, speed };
      const Child = React.cloneElement(child, props);

      slides.push(Child);
    }
  });

  return (
    <section
      id={nodeId}
      data-testid={nodeId}
      className={`${className || ""} relative w-full`}
    >
      <div className="md:h-126 lg:h-176 relative h-80 overflow-hidden">
        {slides}
      </div>

      <aside className="carousel_prev_next absolute z-50 top-2 right-2">
        <button
          className={`carousel_arrow bg-white leading-3 m-1 p-1 ${
            activeSlide.atStart ? "opacity-75" : ""
          }`}
          role="prevbutton"
          onClick={handlePrev}
          disabled={activeSlide.atStart}
        >
          <span className="material-icons-outlined text-3xl text-gray-800">
            arrow_back
          </span>
        </button>

        <button
          className={`carousel_arrow bg-white leading-3 m-1 p-1 ${
            activeSlide.atEnd ? "opacity-75" : ""
          }`}
          role="nextbutton"
          onClick={handleNext}
          disabled={activeSlide.atEnd}
        >
          <span className="material-icons-outlined text-3xl text-gray-800">
            arrow_forward
          </span>
        </button>
      </aside>

      {dots && (
        <footer className="carousel_dots">
          {Children.map(children, (_, index) => (
            <button
              key={index}
              data-slide-to={index}
              className="carousel_dots__item"
              role="dot"
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </footer>
      )}
    </section>
  );
}

const Item: React.FC<SlideItem> = ({
  activeIndex = 0,
  image,
  sideContent,
  isActive,
  index,
  speed = 500,
}) => {
  let translateClass = "-translate-x-full z-10 hidden";

  const beforeActive = index === activeIndex - 1;
  const afterActive = index === activeIndex + 1;

  if (beforeActive) {
    translateClass = "-translate-x-full z-10";
  }

  if (afterActive) {
    translateClass = "translate-x-full z-20";
  }

  if (isActive) {
    translateClass = "translate-x-0 z-30";
  }

  return (
    <aside
      className={`carousel_slide absolute transform w-full inset-0 h-full ease-in-out ${translateClass}`}
      aria-hidden={!isActive}
      data-active={isActive}
      data-slide={index || 0}
      style={{ transitionDuration: `${speed}ms` }}
      data-testid="carousel-slideItem"
    >
      <div className="carousel_slide__content">{sideContent}</div>
      {image && (
        <Image
          className="carousel_slide__image absolute object-cover left-1/2 top-1/2 block w-full h-full -translate-x-1/2 -translate-y-1/2"
          src={image}
          alt="Banner Image"
          width={1600}
          height={700}
          priority={true}
          fetchPriority="low"
        />
      )}
    </aside>
  );
};
Item.displayName = "CarouselItem";

Carousel.Item = Item;
