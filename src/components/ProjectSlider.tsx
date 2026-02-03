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

interface Project {
  title: string;
  description: string;
  location: string;
  image: string;
  slug?: string;
}

interface ProjectSliderProps {
  projects: Project[];
}

export function ProjectSlider({ projects }: ProjectSliderProps) {
  if (!projects) return null;
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
              <a href={`/projects/${project.slug}`}>
                <Card className="bg-white border-slate-200 h-full flex flex-col shadow-none overflow-hidden group pt-0 gap-0">
                  <div className="relative h-64 lg:h-80 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
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
              </a>
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
