"use client";

import { useEffect, useState } from "react";

export function MotionLayer() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.08 },
    );

    document
      .querySelectorAll("[data-reveal]")
      .forEach((item) => observer.observe(item));
    window.addEventListener("scroll", updateProgress, { passive: true });
    updateProgress();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[100] h-px origin-left bg-gradient-to-r from-blue-400 via-violet-400 to-emerald-300 shadow-[0_0_14px_rgba(96,165,250,0.8)]"
      style={{ transform: `scaleX(${progress})` }}
    />
  );
}
