"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { siteContent } from "../content";
import Reveal from "./motion/Reveal";

export default function Portfolio() {
  const { portfolio } = siteContent;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    loop: true,
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  return (
    <section id="portfolio" className="section portfolio-section">
      <Reveal className="section-heading portfolio-heading">
        <div>
          <p className="eyebrow">({portfolio.eyebrow})</p>
          <h2 className="section-title">{portfolio.title}</h2>
        </div>
        <a href={portfolio.more.href} target="_blank" rel="noopener noreferrer">
          {portfolio.more.label}
        </a>
      </Reveal>
      <Reveal className="portfolio-carousel" delay={0.08} y={20}>
        <div className="portfolio-viewport" ref={emblaRef}>
          <div className="portfolio-track">
            {portfolio.items.map((item) => (
              <article className="portfolio-card" key={item.label}>
                <div className="portfolio-photo">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 480px) 72vw, 250px"
                  />
                  <span>Dummy</span>
                </div>
                <div className="portfolio-copy">
                  <p>{item.label}</p>
                  <small className="font-serif">{item.en}</small>
                  <em>{item.note}</em>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="portfolio-dots" aria-label="포트폴리오 슬라이드 선택">
          {portfolio.items.map((item, index) => (
            <button
              key={item.label}
              type="button"
              className={selectedIndex === index ? "is-active" : undefined}
              aria-label={`${item.label} 보기`}
              aria-current={selectedIndex === index}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
