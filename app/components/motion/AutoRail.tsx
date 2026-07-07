"use client";

import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  resumeDelay?: number;
};

/**
 * 모바일 호환 자동 스크롤 레일
 * CSS transform 기반으로 성능 최적화
 */
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

    // 초기 레이아웃 안정화 대기
    const timer = setTimeout(() => {
      let raf = 0;
      let last = performance.now();
      let pausedUntil = 0;
      let carry = 0;
      let totalScrolled = 0;

      const pause = () => {
        pausedUntil = performance.now() + resumeDelay;
      };

      // 루프 너비 계산 (절반이 실제 콘텐츠)
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

        // 루프 너비가 아직 0이면 다음 틱에 재계산
        if (loopWidth === 0) {
          loopWidth = calcLoopWidth();
        }

        // 사용자가 멈춘 상태 아니면서, 프레임 시간이 정상 범위
        if (now > pausedUntil && dt < 200 && loopWidth > 0) {
          carry += (speed * dt) / 1000;
          if (carry >= 1) {
            const step = Math.floor(carry);
            carry -= step;
            totalScrolled += step;

            // 무한 루프: 한 사이클 끝나면 처음으로
            if (totalScrolled >= loopWidth) {
              totalScrolled -= loopWidth;
              el.scrollLeft = totalScrolled;
            } else {
              el.scrollLeft = totalScrolled;
            }
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
    }, 150); // 레이아웃 완성 대기

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