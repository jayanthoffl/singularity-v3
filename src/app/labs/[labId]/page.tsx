"use client"

import { use, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { labs } from "../../../data/labs"
import LabHero from "../../../components/lab/LabHero"
import LabMission from "../../../components/lab/LabMission"
import LabTeam from "../../../components/lab/LabTeam"
import { notFound } from "next/navigation"
import Footer from "../../../components/Footer"

gsap.registerPlugin(ScrollTrigger)

interface PageProps {
  params: Promise<{ labId: string }>
}

export default function LabPage({ params }: PageProps) {
  const { labId } = use(params) 

  const lab = labs.find(l => l.id === labId)

  useEffect(() => {
    ScrollTrigger.refresh()
    gsap.to(".lab-page", { opacity: 1, duration: 0.8 })
  }, [])

  if (!lab) return notFound()

  return (
    <main className="bg-black text-white opacity-0 lab-page">
      <LabHero
        name={lab.name}
        focus={lab.focus}
        description={lab.description}
        video={lab.video_id}
        color={lab.color}
      />
      <LabMission mission={lab.mission} />
      <LabTeam
        executives={lab.executives}
        members={lab.members}
        logo={lab.logo}
        color={lab.color}
      />
      <Footer />
    </main>
  )
}