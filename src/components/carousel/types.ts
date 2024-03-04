import { HTMLAttributes, ReactNode } from "react";

export interface CarouselSettings {
  autoplay: boolean;
  draggable: boolean;
  dots: boolean;
  loop: boolean;
  speed: number;
  onNext: () => void;
  onPrevious: () => void;
  onChange: (index: number) => void;
  onSwipe: (index: number) => void;
}

export type SlideItem = {
  image: string;
  sideContent?: React.ReactNode;
  isActive?: boolean;
  index?: number;
};

export type CarouselProps = HTMLAttributes<HTMLElement> & {
  nodeId: string;
  settings?: Partial<CarouselSettings>;
  children: ReactNode;
};
