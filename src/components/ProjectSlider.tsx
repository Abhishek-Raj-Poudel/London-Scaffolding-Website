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
import Scaffolding1 from "@/assets/Scaffolding1.jpeg";
import Scaffolding2 from "@/assets/Scaffolding2.jpeg";
import Scaffolding3 from "@/assets/scaffolding3.jpeg";
import Scaffolding4 from "@/assets/Scaffolding4.jpeg";
import Scaffolding5 from "@/assets/Scaffolding5.jpeg";
import Scaffolding6 from "@/assets/Scaffolding6.jpeg";

const projects = [
  {
    title: "Central London Commercial Hub",
    description:
      "Multi-story complex scaffolding for a major office redevelopment in the City.",
    location: "City of London",
    image: Scaffolding1.src,
  },
  {
    title: "Period Property Restoration",
    description:
      "Delicate access solutions for the restoration of a Grade II listed townhouse.",
    location: "Kensington",
    image: Scaffolding2.src,
  },
  {
    title: "Industrial Loading Bays",
    description:
      "Heavy-duty loading bay construction for a logistics facility expansion.",
    location: "Barking",
    image: Scaffolding3.src,
  },
  {
    title: "Temporary Roof Solution",
    description:
      "Full weather protection for a residential block during roof replacement.",
    location: "Croydon",
    image: Scaffolding4.src,
  },
  {
    title: "Domestic Scaffold Hire",
    description:
      "Safe and secure access for a large residential renovation project.",
    location: "Wandsworth",
    image: Scaffolding5.src,
  },
  {
    title: "High-Rise Access",
    description:
      "Complex scaffolding for high-rise window replacement and facade repairs.",
    location: "Canary Wharf",
    image: Scaffolding6.src,
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
