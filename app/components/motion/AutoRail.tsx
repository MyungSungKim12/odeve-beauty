"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  resumeDelay?: number;
};

export default function AutoRail({
  children,
  className,
  speed = 22,
  resumeDelay = 3000,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const timer = setTimeout(() => {
      let raf = 0;
      let last = performance.now();
      let pausedUntil = 0;
      let carry = 0;
      let totalScrolled = 0;

      const pause = () => {
        pausedUntil = performance.now() + resumeDelay;
      };

      const calcLoopWidth = () => {
        const half = Math.floor(el.children.length / 2);
        if (half === 0) return 0;
        const firstChild = el.children[0] as HTMLElement;
        const mirrorChild = el.children[half] as HTMLElement;
        return mirrorChild.offsetLeft - firstChild.offsetLeft;
      };

      let loopWidth = calcLoopWidth();

      const tick = (now: number) => {
        const dt = now - last;
        last = now;

        if (loopWidth === 0) {
          loopWidth = calcLoopWidth();
        }

        if (now > pausedUntil && dt < 200 && loopWidth > 0) {
          carry += (speed * dt) / 1000;
          if (carry >= 1) {
            const step = Math.floor(carry);
            carry -= step;
            totalScrolled += step;

            if (totalScrolled >= loopWidth) {
              totalScrolled -= loopWidth;
            }
            el.scrollLeft = totalScrolled;
          }
        }

        raf = requestAnimationFrame(tick);
      };

      raf = requestAnimationFrame(tick);

      const handlers = {
        pointerdown: pause,
        wheel: pause,
        touchstart: pause,
        touchmove: pause,
      };

      Object.entries(handlers).forEach(([event, handler]) => {
        el.addEventListener(event, handler as EventListener, {
          passive: event !== "pointerdown",
        });
      });

      return () => {
        cancelAnimationFrame(raf);
        Object.entries(handlers).forEach(([event, handler]) => {
          el.removeEventListener(event, handler as EventListener);
        });
      };
    }, 1500);

    return () => clearTimeout(timer);
  }, [speed, resumeDelay]);

  return (
    <div
      className={className}
      ref={ref}
      style={{ scrollBehavior: "auto", overscrollBehavior: "contain" }}
    >
      {children}
    </div>
  );
}
