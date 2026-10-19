import React from "react";
import Image from "next/image";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ImageAsset } from "@/lib/images";

export interface PhotoSlotProps {
  image: ImageAsset;
  priority?: boolean;
  className?: string;
  caption?: string;
  sizes?: string;
}

export const PhotoSlot: React.FC<PhotoSlotProps> = ({
  image,
  priority = false,
  className,
  caption,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}) => {
  const aspectClass = image.aspectRatio === "16/9" ? "aspect-[16/9]" : "aspect-[4/3]";

  return (
    <figure className={twMerge("group relative overflow-hidden rounded-card border border-border bg-surface", className)}>
      <div className={twMerge("relative w-full overflow-hidden", aspectClass)}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover transition-transform duration-300 group-hover:scale-[1.01]"
        />
      </div>
      <figcaption className="sr-only">
        {caption || image.alt} (Foto ilustrasi)
      </figcaption>
    </figure>
  );
};
