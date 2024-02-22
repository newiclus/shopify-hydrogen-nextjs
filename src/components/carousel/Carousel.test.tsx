import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import Carousel from "./index";

describe("Carousel component test", () => {
  it("Should be render a <Carousel /> component", () => {
    render(
      <Carousel nodeId="main-carousel">
        <h2>Carousel</h2>
      </Carousel>,
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
      </Carousel>,
    );

    expect(screen.getByText("Slide 1")).toBeTruthy();
    expect(screen.getByText("Slide 2")).toBeTruthy();
  });

  it("Should be no render <img /> if image value not passed", () => {
    render(
      <Carousel nodeId="main-carousel">
        <Carousel.Item sideContent="Slide 1" image="" />
      </Carousel>,
    );

    expect(screen.queryByRole("img")).toBeNull();
  });

  it("Should be render a <Carousel /> component with custom classes", () => {
    render(
      <Carousel nodeId="main-carousel" className="custom-class">
        <h2>Carousel</h2>
      </Carousel>,
    );

    expect(screen.getByTestId("main-carousel")).toHaveClass("custom-class");
  });
});
