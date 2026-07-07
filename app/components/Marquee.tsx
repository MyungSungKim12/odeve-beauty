"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

const WORDS = [
  "semi-permanent beauty",
  "eyebrow",
  "eye line",
  "lip blush",
  "lash perm",
];

export default function Marquee() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const track = ref.current;
    if (!track || reduce) return;

    let raf = 0;
    let last = performance.now();
    let carry = 0;
    const speed = 12;

    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      if (dt < 200) {
        carry += (speed * dt) / 1000;
        if (carry >= 1) {
          const step = Math.floor(carry);
          carry -= step;
          const half = Math.floor(track.children.length / 2);
          if (half > 0) {
            const loopWidth =
              (track.children[half] as HTMLElement).offsetLeft -
              (track.children[0] as HTMLElement).offsetLeft;
            let next = track.scrollLeft + step;
            if (loopWidth > 0 && next >= loopWidth) next -= loopWidth;
            track.scrollLeft = next;
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduce]);

  return (
    <div className="marquee" aria-hidden>
      <div className="marquee-track" ref={ref}>
        {[0, 1].map((row) => (
          <div className="marquee-row font-serif" key={row}>
            {WORDS.map((word) => (
              <span key={word}>{word}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
