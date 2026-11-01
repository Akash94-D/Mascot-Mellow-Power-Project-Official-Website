"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const slideImages = [
  "/assets/home-photos/about-collage.png.png",
  "/assets/home-photos/automation.jpg.JPG",
  "/assets/home-photos/civil-works.jpg.jpg",
  "/assets/home-photos/civil-jcb.jpg.jpg",
  "/assets/home-photos/transformers.jpg.jpg",
  "/assets/home-photos/electrical-works.jpg.jpg",
  "/assets/home-photos/industry-banner.jpeg.jpeg",
];

export default function HeroSlideshow() {
  const slidesWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slidesWrap = slidesWrapRef.current;
    if (!slidesWrap) return;
    const slides = Array.from(
      slidesWrap.querySelectorAll<HTMLElement>(".hero-slide")
    );
    const prev = document.querySelector<HTMLButtonElement>(".hero-arrow--prev");
    const next = document.querySelector<HTMLButtonElement>(".hero-arrow--next");
    let idx = 0;
    let timer: ReturnType<typeof setInterval> | null = null;
    const show = (i: number) => {
      idx = (i + slides.length) % slides.length;
      slidesWrap.classList.add("manual");
      slides.forEach((s, n) => s.classList.toggle("is-active", n === idx));
    };
    const arm = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (timer) clearInterval(timer);
      timer = setInterval(() => show(idx + 1), 5000);
    };
    const onPrev = () => {
      show(idx - 1);
      arm();
    };
    const onNext = () => {
      show(idx + 1);
      arm();
    };
    prev?.addEventListener("click", onPrev);
    next?.addEventListener("click", onNext);
    return () => {
      prev?.removeEventListener("click", onPrev);
      next?.removeEventListener("click", onNext);
      if (timer) clearInterval(timer);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-slides" aria-hidden="true" ref={slidesWrapRef}>
        {slideImages.map((src) => (
          <div
            key={src}
            className="hero-slide"
            style={{ backgroundImage: `url('${src}')` }}
          />
        ))}
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <button
        className="hero-arrow hero-arrow--prev"
        type="button"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        className="hero-arrow hero-arrow--next"
        type="button"
        aria-label="Next slide"
      >
        ›
      </button>
      <div className="container">
        <div className="hero-content">
          <h1 className="sr-only">
            Mascot Mellow Power Project — Engineering, Infrastructure,
            Innovation
          </h1>
          <div className="eyebrow">Engineering • Infrastructure • Innovation</div>
          <div className="actions">
            <Link className="btn" href="/divisions">
              Explore our divisions →
            </Link>
            <Link className="btn secondary" href="/contact">
              Talk to our team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
