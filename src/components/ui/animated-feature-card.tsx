import { forwardRef, type CSSProperties, type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

import { cn } from "@/lib/utils";

export type AnimatedFeatureCardTone = "accent" | "success" | "primary";
export type AnimatedFeatureCardVisualVariant = "framed" | "plain" | "hidden";

interface AnimatedFeatureCardProps extends Omit<HTMLMotionProps<"div">, "title"> {
  cardHoverOffset?: number;
  heading: ReactNode;
  contentHoverOffset?: number;
  description?: ReactNode;
  details?: ReactNode;
  eyebrow?: ReactNode;
  placeholderLabel?: string;
  visual?: ReactNode;
  tone?: AnimatedFeatureCardTone;
  visualVariant?: AnimatedFeatureCardVisualVariant;
  visualClassName?: string;
  contentClassName?: string;
}

type FeatureToneStyles = CSSProperties & {
  "--feature-glow": string;
  "--feature-glow-soft": string;
  "--feature-chip-bg": string;
  "--feature-chip-text": string;
  "--feature-stage-border": string;
  "--feature-stage-fill": string;
  "--feature-stage-line": string;
};

const toneStyles: Record<AnimatedFeatureCardTone, FeatureToneStyles> = {
  accent: {
    "--feature-glow": "hsl(var(--accent) / 0.24)",
    "--feature-glow-soft": "hsl(var(--accent) / 0.14)",
    "--feature-chip-bg": "hsl(var(--accent) / 0.12)",
    "--feature-chip-text": "hsl(var(--accent))",
    "--feature-stage-border": "hsl(var(--accent) / 0.2)",
    "--feature-stage-fill": "linear-gradient(180deg, hsl(var(--accent) / 0.14) 0%, hsl(var(--accent) / 0.03) 100%)",
    "--feature-stage-line": "hsl(var(--accent) / 0.16)",
  },
  success: {
    "--feature-glow": "hsl(var(--success) / 0.2)",
    "--feature-glow-soft": "hsl(var(--success) / 0.12)",
    "--feature-chip-bg": "hsl(var(--success) / 0.12)",
    "--feature-chip-text": "hsl(var(--success))",
    "--feature-stage-border": "hsl(var(--success) / 0.18)",
    "--feature-stage-fill": "linear-gradient(180deg, hsl(var(--success) / 0.12) 0%, hsl(var(--success) / 0.03) 100%)",
    "--feature-stage-line": "hsl(var(--success) / 0.14)",
  },
  primary: {
    "--feature-glow": "hsl(var(--primary) / 0.18)",
    "--feature-glow-soft": "hsl(var(--primary) / 0.1)",
    "--feature-chip-bg": "hsl(var(--primary) / 0.08)",
    "--feature-chip-text": "hsl(var(--primary))",
    "--feature-stage-border": "hsl(var(--primary) / 0.16)",
    "--feature-stage-fill": "linear-gradient(180deg, hsl(var(--primary) / 0.12) 0%, hsl(var(--primary) / 0.03) 100%)",
    "--feature-stage-line": "hsl(var(--primary) / 0.14)",
  },
};

const springTransition = {
  type: "spring",
  stiffness: 220,
  damping: 20,
  mass: 0.9,
} as const;

const AnimatedFeatureCard = forwardRef<HTMLDivElement, AnimatedFeatureCardProps>(
  (
    {
      cardHoverOffset = -10,
      className,
      contentHoverOffset = -6,
      contentClassName,
      description,
      details,
      eyebrow,
      heading,
      placeholderLabel = "Espacio para imagen",
      tone = "accent",
      visual,
      visualVariant = "framed",
      visualClassName,
      ...props
    },
    ref,
  ) => {
    const toneStyle = toneStyles[tone];
    const hasVisualStage = visualVariant !== "hidden";
    const isFramedVisual = visualVariant === "framed";

    return (
      <motion.div
        ref={ref}
        style={toneStyle}
        initial="rest"
        whileHover="hover"
        transition={springTransition}
        variants={{
          rest: {
            y: 0,
            boxShadow: "0 14px 38px hsl(var(--foreground) / 0.08)",
          },
          hover: {
            y: cardHoverOffset,
            boxShadow: "0 26px 70px hsl(var(--foreground) / 0.14)",
          },
        }}
        className={cn(
          "group relative flex h-full min-h-[392px] w-full flex-col overflow-hidden rounded-[30px] border border-white/60 bg-card/85 p-4 text-card-foreground backdrop-blur-md",
          className,
        )}
        {...props}
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.78)_0%,rgba(255,255,255,0.58)_38%,rgba(255,255,255,0.92)_100%)]" />
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(circle at 18% 0%, var(--feature-glow-soft) 0%, transparent 38%), radial-gradient(circle at 82% 12%, var(--feature-glow) 0%, transparent 28%), radial-gradient(circle at 50% 90%, hsl(var(--background)) 0%, transparent 42%)",
          }}
        />

        {hasVisualStage ? (
          <motion.div
            variants={
              isFramedVisual
                ? {
                    rest: { y: 0, scale: 1 },
                    hover: { y: -18, scale: 1.035 },
                  }
                : {
                    rest: { y: 0, scale: 1 },
                    hover: { y: 0, scale: 1 },
                  }
            }
            transition={springTransition}
            className={cn(
              isFramedVisual
                ? "relative z-10 mx-1 mt-2 flex min-h-[188px] flex-1 items-center justify-center overflow-hidden rounded-[26px] border border-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]"
                : "relative z-10 mt-2 flex min-h-[136px] items-center justify-center",
              visualClassName,
            )}
            style={
              isFramedVisual
                ? {
                    borderColor: "var(--feature-stage-border)",
                    background: "var(--feature-stage-fill)",
                  }
                : undefined
            }
          >
            {isFramedVisual ? (
              <>
                <motion.div
                  variants={{
                    rest: { scale: 0.92, opacity: 0.7 },
                    hover: { scale: 1.12, opacity: 1 },
                  }}
                  transition={springTransition}
                  className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
                  style={{ backgroundColor: "var(--feature-glow)" }}
                />
                <motion.div
                  variants={{
                    rest: { rotate: -7, scale: 1 },
                    hover: { rotate: 0, scale: 1.04 },
                  }}
                  transition={springTransition}
                  className="absolute inset-6 rounded-[24px] border border-white/60"
                  style={{ boxShadow: "inset 0 0 0 1px var(--feature-stage-line)" }}
                />
                <motion.div
                  variants={{
                    rest: { y: 0, opacity: 0.8 },
                    hover: { y: -8, opacity: 1 },
                  }}
                  transition={springTransition}
                  className="absolute inset-8 rounded-[22px] border border-dashed"
                  style={{ borderColor: "var(--feature-stage-line)" }}
                />
                <div className="absolute inset-y-8 left-1/2 w-px -translate-x-1/2" style={{ backgroundColor: "var(--feature-stage-line)" }} />
                <div className="absolute inset-x-8 top-1/2 h-px -translate-y-1/2" style={{ backgroundColor: "var(--feature-stage-line)" }} />
              </>
            ) : null}
            {visual ? (
              <motion.div
                variants={
                  isFramedVisual
                    ? {
                        rest: { scale: 1, y: 0 },
                        hover: { scale: 1.18, y: -14 },
                      }
                    : {
                        rest: { scale: 1, y: 0 },
                        hover: { scale: 1, y: 0 },
                      }
                }
                transition={springTransition}
                className={cn(
                  "relative z-10 flex items-center justify-center",
                  isFramedVisual ? "h-full w-full" : "h-auto w-auto",
                )}
              >
                {visual}
              </motion.div>
            ) : isFramedVisual ? (
              <motion.div
                variants={{
                  rest: { y: 0, opacity: 0.75, scale: 0.98 },
                  hover: { y: -6, opacity: 1, scale: 1.02 },
                }}
                transition={springTransition}
                className="relative z-10 flex flex-col items-center gap-3 text-center"
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-[28px] border border-white/65 bg-white/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-sm">
                  <div className="grid h-10 w-10 grid-cols-2 gap-1">
                    <span className="rounded-[6px] bg-foreground/12" />
                    <span className="rounded-[6px] bg-foreground/8" />
                    <span className="rounded-[6px] bg-foreground/8" />
                    <span className="rounded-[6px] bg-foreground/12" />
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-foreground/45">
                    {placeholderLabel}
                  </p>
                  <p className="text-xs text-muted-foreground/80">Añade aquí tu asset cuando lo tengas listo</p>
                </div>
              </motion.div>
            ) : null}
          </motion.div>
        ) : null}

        <motion.div
          variants={{
            rest: { y: 0 },
            hover: { y: contentHoverOffset },
          }}
          transition={springTransition}
          className={cn(
            hasVisualStage ? "relative z-20 mt-4 rounded-[24px] border border-white/70 bg-background/78 p-5 shadow-[0_16px_36px_hsl(var(--foreground)/0.08)] backdrop-blur-xl" : "relative z-20 mt-2 rounded-[24px] border border-white/70 bg-background/78 p-5 shadow-[0_16px_36px_hsl(var(--foreground)/0.08)] backdrop-blur-xl",
            contentClassName,
          )}
        >
          <div className="space-y-3">
            {eyebrow ? (
              <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-foreground/45">
                {eyebrow}
              </div>
            ) : null}
            <h3 className="font-heading text-[1.35rem] font-bold leading-tight text-foreground sm:text-[1.45rem]">
              {heading}
            </h3>
            {description ? (
              <div className="text-sm leading-relaxed text-muted-foreground">{description}</div>
            ) : null}
            {details ? <div className="pt-1">{details}</div> : null}
          </div>
        </motion.div>
      </motion.div>
    );
  },
);

AnimatedFeatureCard.displayName = "AnimatedFeatureCard";

export { AnimatedFeatureCard };
