import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Using placeholder images or passed in images
import heroImage from "@/assets/hero-scaffolding.png";
import areasImage from "@/assets/london-areas.png";

const defaultImages = [
  { src: heroImage.src, alt: "Scaffolding Project 1" },
  { src: areasImage.src, alt: "Scaffolding Project 2" },
  { src: heroImage.src, alt: "Scaffolding Project 3" },
  { src: areasImage.src, alt: "Scaffolding Project 4" },
  { src: heroImage.src, alt: "Scaffolding Project 5" },
  { src: areasImage.src, alt: "Scaffolding Project 6" },
];

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryMasonryProps {
  images?: GalleryImage[];
}

export function GalleryMasonry({
  images = defaultImages,
}: GalleryMasonryProps) {
  const [index, setIndex] = React.useState(-1);

  return (
    <div className="w-full">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((image, i) => (
          <div
            key={i}
            className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl"
            onClick={() => setIndex(i)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images.map((img) => ({ src: img.src, alt: img.alt }))}
      />
    </div>
  );
}
