"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

interface Props {
  name: string
  focus: string
  description: string
  video: string
  color: string
}

const CLOUDINARY_BASE =
  "https://res.cloudinary.com/djtemmctt/video/upload/q_auto:eco,f_auto/"

export default function LabHero({ name, focus, description, video, color }: Props) {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.05 })

    // Start: page is black, video invisible
    gsap.set(videoRef.current, { opacity: 0, scale: 1.12 })
    gsap.set(contentRef.current, { opacity: 0, y: 40 })
    gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left center" })

    // Black overlay fades out — revealing the bloomed video
    tl.to(overlayRef.current, {
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    })

    // Video settles in
    tl.to(videoRef.current, {
      opacity: 0.65,
      scale: 1,
      duration: 1.1,
      ease: "expo.out",
    }, "-=0.3")

    // Content rises up
    tl.to(contentRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "expo.out",
    }, "-=0.7")

    // Color line sweeps in
    tl.to(lineRef.current, {
      scaleX: 1,
      duration: 0.8,
      ease: "expo.out",
    }, "-=0.5")

  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-[85vh] flex items-center justify-center text-center overflow-hidden"
    >
      {/* Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={`${CLOUDINARY_BASE}${video}.mp4`}
      />

      {/* Black entry curtain — starts opaque, fades out on mount */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black z-20"
      />

      {/* Permanent dark scrim */}
      <div className="absolute inset-0 bg-black/55 backdrop-blur-[2px] z-10" />

      {/* Bottom color line */}
      <div
        ref={lineRef}
        className="absolute bottom-0 left-0 w-full h-[3px] z-30"
        style={{ backgroundColor: color }}
      />

      {/* Content */}
      <div ref={contentRef} className="relative z-30 max-w-3xl px-6">
        <p className="text-[11px] font-mono tracking-[0.4em] text-white/40 uppercase mb-6">
          {focus}
        </p>
        <h1 className="text-[5.5vw] font-black uppercase tracking-tighter leading-none">
          {name}
        </h1>
        <p className="text-white/55 mt-8 leading-relaxed text-sm max-w-xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  )
}