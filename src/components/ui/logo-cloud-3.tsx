import { type ComponentProps } from "react";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  className?: string;
};

type LogoCloudProps = ComponentProps<"div"> & {
  logos: Logo[];
};

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        "overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className,
      )}
    >
      <InfiniteSlider gap={56} reverse duration={32} durationOnHover={55}>
        {logos.map((logo) => (
          <div
            key={`logo-${logo.alt}`}
            className="flex h-10 w-40 items-center justify-center overflow-visible md:h-12 md:w-52"
          >
            <img
              alt={logo.alt}
              className={cn(
                "pointer-events-none max-h-full max-w-full select-none object-contain will-change-transform",
                logo.className,
              )}
              loading="lazy"
              src={logo.src}
            />
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
}
