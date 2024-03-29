"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Movies } from "@/typings";

interface FeaturedCarouselProps {
  data: Movies;
}

const FeaturedCarousel = (props: FeaturedCarouselProps) => {
  return (
    <div className="flex items-center justify-center">
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
          loop: true,
        }}
        className="w-full mx-12 lg:mx-20 max-w-[1920px]"
      >
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="basis-[100%] lg:basis-[75%]">
              <div className="p-1">
                <div className="">
                  <div className="relative flex h-60 lg:h-[500px] items-center justify-center cursor-pointer">
                    <span className="custom-title-text text-white absolute bottom-6 left-6 text-lg z-10">
                      {props.data.results[index].title}
                    </span>
                    <img
                      src={`https://image.tmdb.org/t/p/original${props.data.results[index].backdrop_path}`}
                      alt="Movie Image"
                      className="object-cover object-top w-full h-full rounded-md"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-white/0 hover:bg-white/0 active:bg-white/0 hover:text-white text-white border-0 h-full rounded-xl" />
        <CarouselNext className="bg-white/0 hover:bg-white/0 active:bg-white/0 hover:text-white text-white border-0 h-full rounded-xl" />
      </Carousel>
    </div>
  );
};

export default FeaturedCarousel;
