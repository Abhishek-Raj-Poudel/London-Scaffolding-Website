import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Scaffolding1 from "@/assets/Scaffolding1.jpeg";
import Scaffolding2 from "@/assets/Scaffolding2.jpeg";
import Scaffolding4 from "@/assets/Scaffolding4.jpeg";

const fallbacks = [Scaffolding1.src, Scaffolding2.src, Scaffolding4.src];

interface Service {
  title: string;
  description: string;
  slug: string;
  image?: string;
}

interface ServiceCarouselProps {
  services: Service[];
}

export function ServiceCarousel({ services }: ServiceCarouselProps) {
  return (
    <div className="w-full relative">
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full mr-[calc(-50vw+50%)] overflow-visible"
      >
        <CarouselContent className="overflow-visible -ml-4">
          {services.map((service, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <a href={`/services/${service.slug}`}>
                <Card className="group bg-transparent border-slate-200 h-full flex flex-col shadow-none pb-0">
                  <CardHeader className="pt-8 px-8">
                    <CardTitle className="typo-xl font-bold">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-8 grow">
                    <p className="typo-base text-muted-foreground line-clamp-3 mb-6">
                      {service.description}
                    </p>
                    <Button
                      variant="outline"
                      className="rounded-full border-primary text-primary group-hover:bg-primary group-hover:text-white transition-all font-bold"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                  <CardFooter className="pb-6 mt-8 overflow-hidden rounded-b-3xl">
                    <img
                      src={service.image || fallbacks[index % fallbacks.length]}
                      alt={service.title}
                      className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 rounded-md"
                    />
                  </CardFooter>
                </Card>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex justify-end gap-3 mt-12 pr-[5%] lg:pr-20">
          <CarouselPrevious className="static h-12 w-12 translate-y-0 border-primary text-primary hover:bg-primary hover:text-white" />
          <CarouselNext className="static h-12 w-12 translate-y-0 border-primary text-primary hover:bg-primary hover:text-white" />
        </div>
      </Carousel>
    </div>
  );
}
