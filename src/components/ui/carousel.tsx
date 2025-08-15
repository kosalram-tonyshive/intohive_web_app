"use client";

import type { EmblaOptionsType, EmblaPluginType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import * as React from "react";
import { cn } from "@/lib/utils";

export type CarouselProps = React.HTMLAttributes<HTMLDivElement> & {
  opts?: EmblaOptionsType;
  plugins?: EmblaPluginType[];
  orientation?: "horizontal" | "vertical";
};

interface CarouselContextType {
  embla: ReturnType<typeof useEmblaCarousel>[1];
  orientation: "horizontal" | "vertical";
}

const CarouselContext = React.createContext<CarouselContextType | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within <Carousel>");
  }
  return context;
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ orientation = "horizontal", opts, plugins = [], className, children, ...props }, ref) => {
    const [carouselRef, embla] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins,
    );

    return (
      <CarouselContext.Provider value={{ embla, orientation }}>
        <div ref={ref} className={cn("relative", className)} {...props}>
          <div ref={carouselRef} className="h-full w-full overflow-hidden">
            {children}
          </div>
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return (
      <div
        ref={ref}
        className={cn("flex h-full", orientation === "vertical" && "flex-col", className)}
        {...props}
      />
    );
  },
);
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("relative min-w-full", className)} {...props} />
  ),
);
CarouselItem.displayName = "CarouselItem";

export { Carousel, CarouselContent, CarouselItem, useCarousel };
