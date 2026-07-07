"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { siteContent } from "../content";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Hero() {
  const { brand, hero } = siteContent;
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const markY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 54]);

  const fadeUp = (delay: number) => ({
    initial: reduce ? false : ({ opacity: 0, y: 24 } as const),
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: EASE },
  });

  return (
    <section id="top" className="hero" ref={ref}>
      <motion.div
        className="hero-mark font-serif"
        aria-hidden
        style={reduce ? undefined : { y: markY }}
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        {brand.name}
      </motion.div>
      <motion.div
        className="hero-visual"
        style={reduce ? undefined : { y: visualY }}
        initial={reduce ? false : { opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.1, ease: EASE }}
      >
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="(max-width: 480px) 66vw, 270px"
        />
      </motion.div>
      <div className="hero-content">
        <motion.p className="eyebrow" {...fadeUp(0.15)}>
          ({hero.eyebrow})
        </motion.p>
        <motion.h1 className="hero-title" {...fadeUp(0.25)}>
          {hero.title}
        </motion.h1>
        <motion.p className="hero-body" {...fadeUp(0.38)}>
          {hero.body}
        </motion.p>
        <motion.div
          className="hero-chips"
          aria-label="주요 시술"
          {...fadeUp(0.5)}
        >
          {hero.chips.map((chip) => (
            <span key={chip}>{chip}</span>
          ))}
        </motion.div>
        <motion.div className="hero-actions" {...fadeUp(0.6)}>
          <a href={hero.primaryCta.href} className="btn btn-primary">
            {hero.primaryCta.label}
          </a>
          <a href={hero.secondaryCta.href} className="btn btn-soft">
            {hero.secondaryCta.label}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
