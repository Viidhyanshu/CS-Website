"use client";
import React, { useState } from "react";
import { TeamMember } from "@/data/teamData";

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

export default function MemberCard({ member }: { member: TeamMember }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative w-full group"
      style={{
        perspective: "1000px",
      }}
    >
      {/* Ambient Gold Glow behind card on hover */}
      <div
        className="absolute inset-0 bg-[#EF9E00] rounded-2xl opacity-0 group-hover:opacity-[0.12] blur-[35px] transition-all duration-700 ease-out -z-10"
        style={{
          transform: "translateZ(-20px) scale(0.95)",
        }}
      />

      {/* Main Card Frame */}
      <div
        className="relative w-full aspect-[3/4] bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-900 group-hover:border-[#EF9E00]/30 transition-all duration-700 ease-out shadow-2xl flex flex-col justify-end"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Subtle Noise / Paper grain on card */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-[0.02] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)'/%3E%3C/svg%3E")`
          }}
        />

        {/* Grayscale portrait with dynamic scale zoom & color reveal */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover grayscale contrast-[1.1] brightness-[0.88] group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
            loading="lazy"
          />
          {/* Gold lighting / ambient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#EF9E00]/0 via-[#EF9E00]/5 to-[#EF9E00]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out pointer-events-none" />
        </div>

        {/* Elegant thin lines framing (Awwwards style) */}
        <div className="absolute inset-4 border border-white/5 rounded-xl pointer-events-none group-hover:border-[#EF9E00]/15 transition-all duration-700 ease-out" />

        {/* Content Block (Magnetic-effect slide up) */}
        <div className="relative z-10 p-6 flex flex-col w-full">
          
          {/* Card Meta / Social Icons Slider */}
          <div className="h-0 group-hover:h-9 overflow-hidden transition-all duration-500 ease-out flex items-center gap-2 mb-1">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-8 h-8 rounded-full bg-neutral-900/90 border border-neutral-800 hover:border-[#EF9E00]/50 hover:bg-[#EF9E00] hover:text-black flex items-center justify-center text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                style={{ transitionDelay: '0.05s' }}
              >
                <LinkedInIcon />
              </a>
            )}
            {member.instagram && (
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-8 h-8 rounded-full bg-neutral-900/90 border border-neutral-800 hover:border-[#EF9E00]/50 hover:bg-[#EF9E00] hover:text-black flex items-center justify-center text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                style={{ transitionDelay: '0.1s' }}
              >
                <InstagramIcon />
              </a>
            )}
            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-8 h-8 rounded-full bg-neutral-900/90 border border-neutral-800 hover:border-[#EF9E00]/50 hover:bg-[#EF9E00] hover:text-black flex items-center justify-center text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                style={{ transitionDelay: '0.15s' }}
              >
                <GithubIcon />
              </a>
            )}
          </div>

          {/* Name & Role */}
          <div className="transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-500 ease-out">
            <h4 className="font-playfair text-lg md:text-xl font-bold text-white tracking-wide leading-tight mb-1 group-hover:text-[#EF9E00] transition-colors duration-300">
              {member.name}
            </h4>
            <p className="text-xs uppercase tracking-[0.2em] text-[#EF9E00]/80 group-hover:text-white font-geist-mono transition-colors duration-300">
              {member.role}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
