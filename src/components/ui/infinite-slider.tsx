import { motion, useMotionValue } from "framer-motion";
import { type ReactNode, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type InfiniteSliderProps = {
  children: ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [size, setSize] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const translation = useMotionValue(0);
  const targetDurationRef = useRef(duration);
  const currentDurationRef = useRef(duration);
  const frameRef = useRef<number | null>(null);
  const previousTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const element = contentRef.current;

    if (!element) {
      return;
    }

    const updateSize = () => {
      const nextSize = direction === "horizontal" ? element.offsetWidth : element.offsetHeight;
      setSize(nextSize);
    };

    updateSize();

    const observer = new ResizeObserver(() => {
      updateSize();
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [direction, children]);

  useEffect(() => {
    if (!size) {
      return;
    }

    const distance = size + gap;
    const normalize = (value: number) => {
      if (reverse) {
        return ((value + distance) % distance + distance) % distance - distance;
      }

      return -((((-value) % distance) + distance) % distance);
    };

    translation.set(normalize(translation.get()));
    previousTimeRef.current = null;

    const step = (time: number) => {
      if (previousTimeRef.current === null) {
        previousTimeRef.current = time;
      }

      const deltaSeconds = (time - previousTimeRef.current) / 1000;
      previousTimeRef.current = time;

      const durationDelta = targetDurationRef.current - currentDurationRef.current;
      if (Math.abs(durationDelta) > 0.01) {
        currentDurationRef.current += durationDelta * Math.min(deltaSeconds * 8, 1);
      } else {
        currentDurationRef.current = targetDurationRef.current;
      }

      const pixelsPerSecond = distance / Math.max(currentDurationRef.current, 0.001);
      const directionMultiplier = reverse ? 1 : -1;
      const next = translation.get() + directionMultiplier * pixelsPerSecond * deltaSeconds;

      translation.set(normalize(next));
      frameRef.current = window.requestAnimationFrame(step);
    };

    frameRef.current = window.requestAnimationFrame(step);

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
      frameRef.current = null;
      previousTimeRef.current = null;
    };
  }, [translation, size, gap, reverse]);

  const hoverProps = durationOnHover
    ? {
        onHoverStart: () => {
          targetDurationRef.current = durationOnHover;
        },
        onHoverEnd: () => {
          targetDurationRef.current = duration;
        },
      }
    : {};

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        className="flex w-max"
        style={{
          ...(direction === "horizontal" ? { x: translation } : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
        }}
        {...hoverProps}
      >
        <div ref={contentRef} className="flex w-max shrink-0" style={{ gap: `${gap}px`, flexDirection: direction === "horizontal" ? "row" : "column" }}>
          {children}
        </div>
        <div aria-hidden className="flex w-max shrink-0" style={{ gap: `${gap}px`, flexDirection: direction === "horizontal" ? "row" : "column" }}>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
