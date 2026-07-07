"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** 자동 스크롤 속도 (px/초) */
  speed?: number;
  /** 사용자 조작 후 자동 스크롤을 재개하기까지 대기 시간 (ms) */
  resumeDelay?: number;
};

/**
 * 콘텐츠를 천천히 자동 스크롤하는 가로 레일.
 * 무한 루프를 위해 children은 같은 목록을 두 번 렌더해서 넣어야 한다.
 * 사용자가 터치/휠/드래그하면 잠시 멈췄다가 다시 흐른다.
 */
export default function AutoRail({
  children,
  className,
  speed = 22,
  resumeDelay = 3000,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;
    // 마운트 직후에는 레이아웃이 완성 안 됐을 수 있으니 약간 지연
    const initTimer = setTimeout(() => {
      let raf = 0;
      let last = performance.now();
      let pausedUntil = 0;
      let carry = 0;
      const pause = () => {
        pausedUntil = performance.now() + resumeDelay;
      };
      const getLoopWidth = () => {
        const half = Math.floor(el.children.length / 2);
        if (half === 0) return 0;
        const first = el.children[0] as HTMLElement;
        const mirror = el.children[half] as HTMLElement;
        const width = mirror.offsetLeft - first.offsetLeft;
        // 너비가 0이면 아직 렌더 안 됨 — 매 프레임마다 재계산하도록 반환
        return width;
      };
      const tick = (now: number) => {
        const dt = now - last;
        last = now;
        if (now > pausedUntil && dt < 200) {
          carry += (speed * dt) / 1000;
          if (carry >= 1) {
            const step = Math.floor(carry);
            carry -= step;
            const loop = getLoopWidth();
            // loopWidth가 아직 0이면 이번 프레임은 건너뛰고 다음 프레임 기다림
            if (loop > 0) {
              let next = el.scrollLeft + step;
              if (next >= loop) next -= loop;
              el.scrollLeft = next;
            }
          }
        }
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      el.addEventListener("pointerdown", pause);
      el.addEventListener("wheel", pause, { passive: true });
      el.addEventListener("touchstart", pause, { passive: true });
      el.addEventListener("touchmove", pause, { passive: true });
      return () => {
        cancelAnimationFrame(raf);
        el.removeEventListener("pointerdown", pause);
        el.removeEventListener("wheel", pause);
        el.removeEventListener("touchstart", pause);
        el.removeEventListener("touchmove", pause);
      };
    }, 100);
    return () => clearTimeout(initTimer);
  }, [reduce, speed, resumeDelay]);

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
}
