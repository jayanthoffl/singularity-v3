"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  mission: string;
}

export default function LabMission({ mission }: Props) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".mission-content", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="max-w-4xl mx-auto px-4 md:px-6 py-14 md:py-28 text-center"
    >
      <h2 className="mission-content text-3xl md:text-4xl font-black uppercase tracking-tight mb-8 md:mb-10">
        Our Mission
      </h2>
      <p className="mission-content text-white/70 leading-relaxed text-base md:text-lg">
        {mission}
      </p>
    </section>
  );
}
