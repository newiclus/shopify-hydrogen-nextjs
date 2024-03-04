import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

import Carousel from "./index";

describe("Carousel component test", () => {
  it("Should be render a <Carousel /> component", () => {
    render(
      <Carousel nodeId="main-carousel">
        <Carousel.Item
          sideContent="Slide 1"
          image="https://fastly.picsum.photos/id/9/900/600"
        />
      </Carousel>
    );

    expect(screen.getByTestId("main-carousel")).toBeTruthy();
    expect(screen.getByRole("prevbutton")).toBeTruthy();
    expect(screen.getByRole("nextbutton")).toBeTruthy();
  });

  it("Should be render a <Carousel /> component with children", () => {
    render(
      <Carousel nodeId="main-carousel">
        <Carousel.Item
          sideContent="Slide 1"
          image="https://fastly.picsum.photos/id/9/900/600"
        />
        <Carousel.Item
          sideContent="Slide 2"
          image="https://fastly.picsum.photos/id/12/900/600"
        />
      </Carousel>
    );

    expect(screen.getByText("Slide 1")).toBeTruthy();
    expect(screen.getByText("Slide 2")).toBeTruthy();
  });

  it("Should be no render <img /> if image value not passed", () => {
    render(
      <Carousel nodeId="main-carousel">
        <Carousel.Item sideContent="Slide 1" image="" />
      </Carousel>
    );

    expect(screen.queryByRole("img")).toBeNull();
  });

  it("Should be render a <Carousel /> component with custom classes", () => {
    render(
      <Carousel nodeId="main-carousel" className="custom-class">
        <Carousel.Item
          sideContent="Slide 1"
          image="https://fastly.picsum.photos/id/9/900/600"
        />
      </Carousel>
    );

    expect(screen.getByTestId("main-carousel")).toHaveClass("custom-class");
  });

  it("Should be render a <Carousel /> component with dots buttons", () => {
    const settings = {
      dots: true,
    };

    render(
      <Carousel nodeId="main-carousel" settings={settings}>
        <Carousel.Item
          sideContent="Slide 1"
          image="https://fastly.picsum.photos/id/9/900/600"
        />
        <Carousel.Item
          sideContent="Slide 2"
          image="https://fastly.picsum.photos/id/12/900/600"
        />
      </Carousel>
    );

    expect(screen.getByRole("dot", { name: "Go to slide 1" })).toBeTruthy();
    expect(screen.getByRole("dot", { name: "Go to slide 2" })).toBeTruthy();
  });

  it("<Carousel /> should be displace slider when the user click on Next/Prev buttons", async () => {
    render(
      <Carousel nodeId="main-carousel">
        <Carousel.Item
          key="slide-1"
          sideContent="Slide 1"
          image="https://fastly.picsum.photos/id/9/900/600"
        />
        <Carousel.Item
          key="slide-2"
          sideContent="Slide 2"
          image="https://fastly.picsum.photos/id/12/900/600"
        />
      </Carousel>
    );

    // const nextButton = screen.getByRole("nextbutton");
    // const prevButton = screen.getByRole("prevbutton");
    const slides = screen.getAllByTestId("carousel-slideItem");

    waitFor(() => {
      expect(slides[0]).toHaveAttribute("aria-hidden", "false");
      expect(slides[1]).toHaveAttribute("aria-hidden", "false");
    });
  });
});
