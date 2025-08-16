"use client";

import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Jennifer Martin",
    role: "Business Woman",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=80&h=80&q=80",
    content:
      "At Into Hive, we believe that every space has the potential to inspire. As a full-service interior design firm, we are dedicated to transforming homes and businesses into stylish, functional environments that reflect our clients' unique personalities and visions.",
  },
  {
    name: "David Thompson",
    role: "Business Man",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&h=80&q=80",
    content:
      "At Into Hive, we believe that every space has the potential to inspire. As a full-service interior design firm, we are dedicated to transforming homes and businesses into stylish, functional environments that reflect our clients' unique personalities and visions.",
  },
  {
    name: "Jennifer",
    role: "Designer",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=80&h=80&q=80",
    content:
      "At Into Hive, we believe that every space has the potential to inspire. As a full-service interior design firm, we are dedicated to transforming homes and businesses into stylish, functional environments that reflect our clients' unique personalities and visions.",
  },
  {
    name: "Michael Lee",
    role: "Architect",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=80&h=80&q=80",
    content:
      "At Into Hive, we believe that every space has the potential to inspire. As a full-service interior design firm, we are dedicated to transforming homes and businesses into stylish, functional environments that reflect our clients' unique personalities and visions.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <h2 className="mb-8 text-4xl font-extralight text-primary">Testimonials</h2>
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[Autoplay({ delay: 5000 })]}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6 overflow-x-auto">
            {testimonials.map((t) => (
              <CarouselItem
                key={t.name}
                className="pl-4 md:pl-6 min-w-full sm:!min-w-[515px] sm:max-w-[515px] sm:h-[551px]"
              >
                <div className="flex h-full flex-col rounded-md border bg-[#f4f3f2] p-6 shadow-sm w-full">
                  <div className="mb-4 flex items-center">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-sm text-gray-600">{t.role}</p>
                    </div>
                  </div>
                  <p className="flex-1 text-gray-700">{t.content}</p>
                  <button
                    type="button"
                    className="mt-6 inline-block rounded-md bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white"
                  >
                    Read More
                  </button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
