"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Props = {
  children: ReactNode;
  className?: string;
  /** 등장 지연(초). 카드 목록처럼 순차 등장시킬 때 index * 0.08 정도를 준다 */
  delay?: number;
  /** 시작 시 아래에서 올라오는 거리(px) */
  y?: number;
  as?: "div" | "article";
};

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
  as = "div",
}: Props) {
  const reduce = useReducedMotion();
  const Component = as === "article" ? motion.article : motion.div;

  return (
    <Component
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </Component>
  );
}
