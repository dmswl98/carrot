"use client";

import { type ReactNode, type RefObject, useRef } from "react";
import { type Variants, motion, useReducedMotion } from "motion/react";

const titleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: (prefersReducedMotion: boolean) => ({
    opacity: 1,
    y: 0,
    transition: prefersReducedMotion
      ? undefined
      : {
          duration: 0.5,
          delay: 0.2,
          ease: "easeOut",
        },
  }),
};

const descriptionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: (prefersReducedMotion: boolean) => ({
    opacity: 1,
    y: 0,
    transition: prefersReducedMotion
      ? undefined
      : {
          duration: 0.5,
          delay: 0.4,
          ease: "easeOut",
        },
  }),
};

interface Props {
  children: ReactNode;
  title: string;
  description?: string;
  isInView: boolean;
  cardRef: RefObject<HTMLDivElement>;
}

const Card = ({ children, title, description, isInView, cardRef }: Props) => {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef(null);

  const animate = isInView ? "visible" : "hidden";

  return (
    <div
      ref={cardRef}
      className="border-muted flex flex-col overflow-hidden rounded-xl bg-white shadow-sm relative h-64 md:h-80 lg:h-96"
    >
      <div className="absolute top-0 left-0 w-full h-full">{children}</div>
      <div
        className="absolute bottom-0 flex flex-col w-full h-full py-10 px-6 z-10 justify-end"
        ref={ref}
      >
        <motion.h3
          initial="hidden"
          animate={animate}
          variants={titleVariants}
          custom={prefersReducedMotion}
          className="mb-1 text-xl font-bold text-[rgba(245,245,247,0.6)]"
        >
          {title}
        </motion.h3>
        <motion.p
          initial="hidden"
          animate={animate}
          variants={descriptionVariants}
          custom={prefersReducedMotion}
          className="text-[26px] font-extrabold text-stone-100 leading-[1.3]"
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
};

export { Card };
