import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-scaffolding.png";
import areasImage from "@/assets/london-areas.png";

const projects = [
  {
    title: "Central London Commercial Hub",
    description:
      "Multi-story complex scaffolding for a major office redevelopment in the City.",
    location: "City of London",
    image: heroImage.src,
  },
  {
    title: "Period Property Restoration",
    description:
      "Delicate access solutions for the restoration of a Grade II listed townhouse.",
    location: "Kensington",
    image: areasImage.src,
  },
  {
    title: "Industrial Loading Bays",
    description:
      "Heavy-duty loading bay construction for a logistics facility expansion.",
    location: "Barking",
    image: heroImage.src,
  },
  {
    title: "Temporary Roof Solution",
    description:
      "Full weather protection for a residential block during roof replacement.",
    location: "Croydon",
    image: areasImage.src,
  },
];

export function ProjectSlider() {
  return (
    <div className="w-full relative mt-12 mb-20 px-0">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full overflow-visible"
      >
        <CarouselContent className="overflow-visible -ml-4">
          {projects.map((project, index) => (
            <CarouselItem
              key={index}
              className="pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-white border-slate-200 h-full flex flex-col shadow-none overflow-hidden group pt-0 gap-0">
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    {project.location}
                  </div>
                </div>
                <CardContent className="p-8 grow flex flex-col gap-4">
                  <h3 className="typo-xl font-bold">{project.title}</h3>
                  <p className="typo-base text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter className="px-8 pb-8 pt-0">
                  <Button
                    variant="link"
                    className="p-0 text-primary font-bold hover:no-underline flex items-center gap-2 group/btn"
                  >
                    View Project Case Study
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex justify-end gap-3 mt-12">
          <CarouselPrevious className="static h-12 w-12 translate-y-0 border-primary text-primary hover:bg-primary hover:text-white" />
          <CarouselNext className="static h-12 w-12 translate-y-0 border-primary text-primary hover:bg-primary hover:text-white" />
        </div>
      </Carousel>
    </div>
  );
}
