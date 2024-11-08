"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const HeroCarousel = () => {
  return (
    <div >
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className=" w-full"
      >
        <CarouselContent className="w-full ">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} >
              <div className="border border-neutral-500 h-[400px] relative w-full">
                <Image
                  src={"/bannerImages/grocey_store.avif"}
                  fill
                  className="h-full w-full object-cover"
                  alt={`bannerImage${index}`}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute  -bottom-8 right-[50%]">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
