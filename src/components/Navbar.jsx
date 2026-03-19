"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { labs } from '../data/labs';

export default function Navbar() {
  const [labsOpen, setLabsOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);

  const events = [
    {
      id: "schrodingers-cat",
      name: "Schrödinger's Cat",
      url: "https://schrodingerscat.singularitylabsrmap.space/"
    }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-100 p-8 flex justify-between items-center mix-blend-difference">
      <div className="font-black italic text-xl tracking-tighter text-white">SINGULARITY</div>
      <div className="flex gap-8 font-mono text-[10px] tracking-widest text-white/60">
        <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
        
        {/* Labs Dropdown */}
        <div className="relative group">
          <button 
            className="hover:text-white transition-colors flex items-center gap-1"
            onMouseEnter={() => setLabsOpen(true)}
            onMouseLeave={() => setLabsOpen(false)}
          >
            LABS
            <ChevronDown size={12} className={`transition-transform duration-200 ${labsOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {labsOpen && (
            <div 
              className="absolute top-full mt-2 left-0 bg-black/95 border border-white/20 rounded-lg shadow-lg py-2 min-w-50 backdrop-blur-sm"
              onMouseEnter={() => setLabsOpen(true)}
              onMouseLeave={() => setLabsOpen(false)}
            >
              {labs.map((lab) => (
                <Link
                  key={lab.id}
                  href={`/labs/${lab.id}`}
                  className="block px-4 py-2 hover:bg-white/10 transition-colors text-white/80 hover:text-white text-xs"
                >
                  {lab.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Events Dropdown */}
        <div className="relative group">
          <button 
            className="hover:text-white transition-colors flex items-center gap-1"
            onMouseEnter={() => setEventsOpen(true)}
            onMouseLeave={() => setEventsOpen(false)}
          >
            EVENTS
            <ChevronDown size={12} className={`transition-transform duration-200 ${eventsOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {eventsOpen && (
            <div 
              className="absolute top-full mt-2 left-0 bg-black/95 border border-white/20 rounded-lg shadow-lg py-2 min-w-55 backdrop-blur-sm"
              onMouseEnter={() => setEventsOpen(true)}
              onMouseLeave={() => setEventsOpen(false)}
            >
              {events.map((event) => (
                <a
                  key={event.id}
                  href={event.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 hover:bg-white/10 transition-colors text-white/80 hover:text-white text-xs"
                >
                  {event.name}
                </a>
              ))}
            </div>
          )}
        </div>

        <a href="#contact" className="hover:text-white transition-colors">CONTACT</a>
      </div>
    </nav>
  );
}