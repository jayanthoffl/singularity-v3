"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { LogoParticles } from "./logo-particles";

interface LoadingScreenProps {
  onEnter: () => void;
}

export function LoadingScreen({ onEnter }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [hexCode, setHexCode] = useState("0x00000000");

  const containerRef = useRef<HTMLDivElement>(null);
  const ringGroupRef = useRef<SVGGElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Circle Math
  const radius = 140;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    let currentProgress = 0;

    const interval = setInterval(() => {
      // Slower, more dramatic easing near the end
      const increment =
        currentProgress > 80 ? Math.random() * 1.5 : Math.random() * 3 + 1;
      currentProgress += increment;

      if (currentProgress >= 100) {
        currentProgress = 100;
        setIsReady(true);
        clearInterval(interval);
      }

      setProgress(currentProgress);

      // Generate a random flashing hex code for the tech aesthetic
      setHexCode(
        "0x" +
          Math.floor(Math.random() * 16777215)
            .toString(16)
            .toUpperCase()
            .padStart(6, "0"),
      );
    }, 45);

    return () => clearInterval(interval);
  }, []);

  const handleEnterClick = () => {
    if (!containerRef.current || !ringGroupRef.current || !contentRef.current)
      return;

    const tl = gsap.timeline({ onComplete: onEnter });

    // 1. Fade out the text and button instantly
    tl.to(contentRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.4,
      ease: "power2.inOut",
    })
      // 2. The Singularity Effect: The ring expands infinitely, pulling the user through the center
      .to(
        ringGroupRef.current,
        {
          scale: 15, // Zoom way past the camera bounds
          strokeWidth: 0.5, // Thins out as it gets closer
          duration: 1.2,
          ease: "expo.inOut",
        },
        "-=0.2",
      )
      // 3. Fade the whole black screen away to reveal the site
      .to(
        containerRef.current,
        {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.6",
      );
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full bg-[#050505] z-[9999] flex items-center justify-center text-white overflow-hidden"
    >
      <LogoParticles />

      {/* Decorative Tech Elements - Corners */}
      <div className="absolute top-8 left-8 text-[10px] font-mono text-white/30 tracking-widest hidden md:block">
        SYS.REQ // {hexCode}
      </div>
      <div className="absolute bottom-8 right-8 text-[10px] font-mono text-white/30 tracking-widest hidden md:block">
        LATENCY: {Math.floor(Math.random() * 12 + 4)}ms
      </div>

      {/* The Core Ring SVG */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] -rotate-90"
          viewBox="0 0 300 300"
        >
          <g ref={ringGroupRef} style={{ transformOrigin: "center" }}>
            {/* Background track circle */}
            <circle
              cx="150"
              cy="150"
              r={radius}
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
            />
            {/* The actual progress circle */}
            <circle
              cx="150"
              cy="150"
              r={radius}
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              style={{ transition: "stroke-dashoffset 0.1s linear" }}
              strokeLinecap="round"
            />
          </g>
        </svg>
      </div>

      {/* Central Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-center h-[240px] w-[240px] md:h-[300px] md:w-[300px]"
      >
        {!isReady ? (
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-6xl font-black tracking-tighter tabular-nums">
              {Math.floor(progress).toString().padStart(3, "0")}
            </span>
            <span className="text-[9px] font-mono text-white/40 tracking-[0.4em] uppercase mt-4">
              Compiling Data
            </span>
          </div>
        ) : (
          <button
            ref={buttonRef}
            onClick={handleEnterClick}
            className="group relative px-6 py-3 overflow-hidden cursor-pointer"
          >
            {/* Bracket corners for a targeting reticle look */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/50 group-hover:border-white transition-colors" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/50 group-hover:border-white transition-colors" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/50 group-hover:border-white transition-colors" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/50 group-hover:border-white transition-colors" />

            <span className="text-xs font-mono tracking-[0.5em] text-white/70 group-hover:text-white transition-all duration-300 ml-1">
              INITIALIZE
            </span>

            {/* Subtle background glow on hover */}
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 -z-10" />
          </button>
        )}
      </div>
    </div>
  );
}
