"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const bannerImages = [
  { src: "/assets/1.png", url: "/contact" },
  { src: "/assets/Banner2.jpg", url: "/contact" },
  { src: "/assets/3.png", url: "/contact" },
];

const MovingImages: React.FC = () => {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="w-full py-10 md:py-16 flex flex-col items-center justify-center bg-[#fefce8] text-[#1D4ED8] text-center rounded-l-[20%]">
      <Carousel
        className="w-full max-w-6xl mx-auto px-4"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className=" ">
          {bannerImages.map((banner, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/2 lg:basis-1/2 cursor-pointer"
            >
              <Link
                href={banner.url}
                className="block h-full aspect-[16/8] overflow-hidden rounded-lg transition-all duration-300 transform hover:-translate-y-2 shadow-md hover:shadow-lg relative"
                style={{ marginLeft: "5%" }}
              >
                <Image
                  src={banner.src}
                  alt={`Banner ${index + 1}`}
                  className="object-cover"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index < 2}
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default MovingImages;
