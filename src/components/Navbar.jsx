"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { labs } from '../data/labs'; 

const singularityLogo = "https://res.cloudinary.com/djtemmctt/image/upload/v1771104005/singularity_new_logo_knedxr.png";

export default function Navbar() {
  const [labsDropdownOpen, setLabsDropdownOpen] = useState(false);
  const [eventsDropdownOpen, setEventsDropdownOpen] = useState(false);
  const labsDropdownRef = useRef(null);
  const eventsDropdownRef = useRef(null);

  const events = [
    {
      id: "schrodingers-cat",
      name: "Schrödinger's Cat",
      url: "https://schrodingerscat.singularitylabsrmap.space/"
    }
  ];

  useEffect(() => {
    // Removed the ': MouseEvent' and 'as Node' types
    const handleOutsideClick = (e) => {
      if (labsDropdownRef.current && !labsDropdownRef.current.contains(e.target)) {
        setLabsDropdownOpen(false);
      }
      if (eventsDropdownRef.current && !eventsDropdownRef.current.contains(e.target)) {
        setEventsDropdownOpen(false);
      }
    };

    if (labsDropdownOpen || eventsDropdownOpen) {
      document.addEventListener('click', handleOutsideClick);
      return () => document.removeEventListener('click', handleOutsideClick);
    }
  }, [labsDropdownOpen, eventsDropdownOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-10 py-6 flex justify-between items-center mix-blend-difference text-white">
      
      <Link href="/">
        <div className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
          <img src={singularityLogo} alt="Logo" className="w-10 h-10 object-contain" />
          <div className="font-black text-xl tracking-tighter uppercase leading-none">
            Singularity Student Lab
          </div>
        </div>
      </Link>
      
      <div className="flex gap-10 font-mono text-[11px] tracking-[0.3em] opacity-60 uppercase">
        <Link href="/about" className="hover:opacity-100 transition-opacity cursor-pointer">
          About Us
        </Link>
        
        <div ref={labsDropdownRef} className="relative">
          <button 
            onClick={() => setLabsDropdownOpen(!labsDropdownOpen)}
            className="hover:opacity-100 transition-opacity cursor-pointer flex items-center gap-2"
          >
            LABS
            <ChevronDown size={12} className={`transition-transform duration-200 ${labsDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {labsDropdownOpen && (
            <div className="absolute top-full mt-2 left-0 bg-black/95 border border-white/20 rounded-lg shadow-lg py-2 min-w-50 backdrop-blur-sm z-50">
              {labs.map((lab) => (
                <Link
                  key={lab.id}
                  href={`/labs/${lab.id}`}
                  onClick={() => setLabsDropdownOpen(false)}
                  className="block w-full text-left px-4 py-2 hover:bg-white/10 transition-colors text-white/80 hover:text-white text-xs whitespace-nowrap"
                >
                  {lab.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <div ref={eventsDropdownRef} className="relative">
          <button 
            onClick={() => setEventsDropdownOpen(!eventsDropdownOpen)}
            className="hover:opacity-100 transition-opacity cursor-pointer flex items-center gap-2"
          >
            EVENTS
            <ChevronDown size={12} className={`transition-transform duration-200 ${eventsDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {eventsDropdownOpen && (
            <div className="absolute top-full mt-2 left-0 bg-black/95 border border-white/20 rounded-lg shadow-lg py-2 min-w-55 backdrop-blur-sm z-50">
              {events.map((event) => (
                <a
                  key={event.id}
                  href={event.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setEventsDropdownOpen(false)}
                  className="block px-4 py-2 hover:bg-white/10 transition-colors text-white/80 hover:text-white text-xs whitespace-nowrap"
                >
                  {event.name}
                </a>
              ))}
            </div>
          )}
        </div>

        <Link href="/#contact" className="hover:opacity-100 transition-opacity cursor-pointer">
          Contact
        </Link>
      </div>
    </nav>
  );
}