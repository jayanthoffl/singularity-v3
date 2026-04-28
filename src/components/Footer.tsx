"use client";

import Link from "next/link";
import { Instagram, Linkedin, Mail, MapPin } from "lucide-react";

const singularityLogo =
  "https://res.cloudinary.com/djtemmctt/image/upload/v1771104005/singularity_new_logo_knedxr.png";

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] border-t border-white/10 pt-12 md:pt-20 pb-8 md:pb-10 px-4 md:px-10 z-[100] text-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 mb-12 md:mb-20">
          {/* Col 1: Branding */}
          <div className="md:col-span-4">
            <Link href="/">
              <div className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity mb-6">
                <img
                  src={singularityLogo}
                  alt="Singularity Logo"
                  className="w-10 h-10 object-contain"
                />
                <div className="font-black text-xl tracking-tighter uppercase leading-none">
                  Singularity
                  <br />
                  Student Lab
                </div>
              </div>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed font-mono">
              Decode // Innovate // Transform. <br />
              SRM University AP's premier student-led research initiative.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-2 md:col-start-6">
            <h3 className="text-white font-bold uppercase tracking-widest text-[10px] mb-6 font-mono opacity-30">
              Navigation
            </h3>
            <div className="flex flex-col gap-4 text-sm text-white/50 font-mono uppercase tracking-wider">
              <Link
                href="/"
                className="hover:text-white transition-colors w-fit"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-white transition-colors w-fit"
              >
                About Us
              </Link>
              <Link
                href="/#contact"
                className="hover:text-white transition-colors w-fit"
              >
                Ping Us
              </Link>
            </div>
          </div>

          {/* Col 3: Connect */}
          <div className="md:col-span-3">
            <h3 className="text-white font-bold uppercase tracking-widest text-[10px] mb-6 font-mono opacity-30">
              Connect
            </h3>
            <div className="flex flex-col gap-4 text-sm text-white/50 font-mono tracking-tight">
              <a
                href="mailto:singularitylab@srmap.edu.in"
                className="flex items-center gap-3 hover:text-white transition-colors w-fit"
              >
                <Mail size={14} className="opacity-50 shrink-0" />
                <span className="break-all">singularitylab@srmap.edu.in</span>
              </a>
              <a
                href="https://www.instagram.com/thesingularity.srmap"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors w-fit"
              >
                <Instagram size={14} className="opacity-50" />
                <span>thesingularity.srmap</span>
              </a>
              <a
                href="https://www.linkedin.com/company/singularity-student-lab-srmap/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition-colors w-fit"
              >
                <Linkedin size={14} className="opacity-50" />
                <span>Singularity Student Lab</span>
              </a>
            </div>
          </div>

          {/* Col 4: Location & Map */}
          <div className="md:col-span-3">
            <h3 className="text-white font-bold uppercase tracking-widest text-[10px] mb-6 font-mono opacity-30">
              Location
            </h3>
            <div className="flex items-start gap-3 text-xs text-white/50 mb-6 font-mono tracking-tight">
              <MapPin size={14} className="shrink-0 mt-1 opacity-50" />
              <p className="leading-relaxed">
                S-209, SR Block,
                <br />
                SRM University AP,
                <br />
                Andhra Pradesh 522502
              </p>
            </div>

            {/* The Corrected SRM AP Map */}
            <div className="w-full h-28 md:h-32 rounded-lg overflow-hidden border border-white/10 opacity-60 hover:opacity-100 transition-opacity duration-500 bg-white/5">
              <iframe
                src="https://www.google.com/maps?q=Singularity+Student+Lab+-+SRMAP&output=embed"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "grayscale(1) invert(0.9) contrast(1.2)",
                }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-white/20 font-mono text-[8px] md:text-[9px] tracking-[0.3em] md:tracking-[0.4em] uppercase text-center">
          <p>
            © {new Date().getFullYear()} Singularity Student Lab. All rights
            reserved.
          </p>
          <p className="mt-4 md:mt-0">SRM University AP // Amaravati</p>
        </div>
      </div>
    </footer>
  );
}
