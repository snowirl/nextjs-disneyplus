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
import { Movies, Result } from "@/typings";

interface ShowsCarouselProps {
  results: Result[];
}

const ShowsCarousel = (props: ShowsCarouselProps) => {
  return (
    <div className="flex items-center justify-center">
      <Carousel
        opts={{
          loop: false,
        }}
        className="w-full mx-12 lg:mx-20 max-w-[1920px]"
      >
        <CarouselContent>
          {Array.from({ length: props.results.length }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-[60%] md:basis-[40%] lg:basis-[20%]"
            >
              <div className="p-1">
                <div className="">
                  <div className="relative flex  items-center justify-center cursor-pointer">
                    <span className="custom-title-text text-white absolute bottom-2 left-2 text-base z-10">
                      {props.results[index].title}
                    </span>
                    <Image
                      width={1920}
                      height={1280}
                      src={`https://image.tmdb.org/t/p/original${props.results[index].backdrop_path}`}
                      alt="Movie Image"
                      className="object-cover object-top w-full h-full rounded-md "
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

export default ShowsCarousel;
