"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MemberCard from "./MemberCard";
import { EC_MEMBERS, WEB_MEMBERS, CORE_MEMBERS, TeamMember } from "@/data/teamData";

// Department definitions
const DEPARTMENTS = [
  { id: "programs", name: "Programs & Operations", desc: "Crafting memorable events and seamless campus operations." },
  { id: "tech", name: "Technical Projects", desc: "Building software, running accelerators, and pioneering open source." },
  { id: "design", name: "Graphic Design", desc: "Creating visual masterpieces, brand systems, and sleek interfaces." },
  { id: "promotions", name: "Promotions & PR", desc: "Expanding reach, establishing connections, and leading publicity." },
  { id: "editorial", name: "Editorial & Content", desc: "Writing narratives, styling copy, and documenting technical legacy." },
  { id: "corporate", name: "Corporate Affairs", desc: "Securing sponsorships, corporate networking, and industrial relations." },
  { id: "curations", name: "Curations", desc: "Designing premium content directories, talk shows, and workshops." },
  { id: "logistics", name: "Logistics", desc: "The foundational backbone managing resource deployment and setups." },
  { id: "social", name: "Social Media", desc: "Creating engaging digital campaigns, reels, and visual storytelling." },
  { id: "coverage", name: "Media & Coverage", desc: "Documenting high-fidelity photography, showreels, and event archives." },
  { id: "community", name: "Community Outreach", desc: "Connecting thousands of developers and building safe, diverse spaces." }
];

// Helper to determine department id based on member role
const getMemberDepartmentId = (role: string): string => {
  const r = role.toLowerCase();
  if (r.includes("programs")) return "programs";
  if (r.includes("technical") || r.includes("tech")) return "tech";
  if (r.includes("graphic") || r.includes("design")) return "design";
  if (r.includes("promotions")) return "promotions";
  if (r.includes("editorial")) return "editorial";
  if (r.includes("corporate")) return "corporate";
  if (r.includes("curations")) return "curations";
  if (r.includes("logistics")) return "logistics";
  if (r.includes("social")) return "social";
  if (r.includes("coverage") || r.includes("media")) return "coverage";
  if (r.includes("community")) return "community";
  return "programs"; // fallback
};

export default function StackedSections() {
  const [activeDept, setActiveDept] = useState("programs");

  // Calculate member counts for departments
  const deptCounts = DEPARTMENTS.reduce((acc, dept) => {
    const count = CORE_MEMBERS.filter(m => getMemberDepartmentId(m.role) === dept.id).length;
    acc[dept.id] = count;
    return acc;
  }, {} as Record<string, number>);

  // Get active department members
  const activeMembers = CORE_MEMBERS.filter(
    (m) => getMemberDepartmentId(m.role) === activeDept
  );

  const activeDeptInfo = DEPARTMENTS.find((d) => d.id === activeDept) || DEPARTMENTS[0];

  // Motion variants for cascading animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 90,
        damping: 18,
      },
    },
  } as const;

  return (
    <div className="relative w-full bg-transparent text-white overflow-x-hidden">

      {/* Dynamic Background Atmospheric Lighting */}
      <div className="absolute top-[10%] left-[-10%] w-[50%] h-[40%] bg-radial-gradient from-[#EF9E00]/5 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-15%] w-[60%] h-[50%] bg-radial-gradient from-[#EF9E00]/4 to-transparent blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[20%] w-[40%] h-[30%] bg-radial-gradient from-[#EF9E00]/3 to-transparent blur-[120px] pointer-events-none" />

      {/* ── CHAPTER 01: THE EXECUTIVE COMMITTEE ──────────────────────────────── */}
      <section className="relative w-full px-6 md:px-12 lg:px-8 border-b border-white/5" style={{ paddingTop: 'clamp(6rem, 10vh, 9rem)', paddingBottom: 'clamp(10rem, 18vh, 16rem)' }}>
        <div className="w-full max-w-[1240px] mx-auto" style={{ width: '100%', maxWidth: '1240px', marginLeft: 'auto', marginRight: 'auto' }}>
          {/* Chapter Heading */}
          <div
            className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 lg:mb-28 w-full"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', width: '100%', marginBottom: 'clamp(4rem, 10vh, 8rem)' }}
          >

            <h2
              className="font-playfair text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-wide leading-tight text-white text-center w-full"
              style={{ textAlign: 'center', width: '100%' }}
            >
              The <span className="text-[#EF9E00]">Executive</span> Committee
            </h2>
          </div>

          {/* Asymmetrical Editorial Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8 md:gap-x-6 md:gap-y-10 lg:gap-x-8">
            {EC_MEMBERS.map((member, index) => {
              // Create staggered offsets on desktop
              const offsets = [
                "lg:mt-0",     // Chairperson
                "lg:mt-8",     // Vice Chairperson
                "lg:mt-2",     // Gen Sec
                "lg:mt-12",    // Managing Director
                "lg:mt-4",     // Treasurer
                "lg:mt-16",    // HR Director
                "lg:mt-6"      // Tech Secretary
              ];
              const offsetClass = offsets[index % offsets.length];

              return (
                <div
                  key={member.name}
                  className={`${offsetClass} transform transition-all duration-700`}
                >
                  <MemberCard member={member} />
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ── CHAPTER 02: THE WEBSITE COMMITTEE (WEBSITE TEAM) ───────────────── */}
      <section className="relative w-full px-6 md:px-12 lg:px-8 border-b border-white/5 bg-transparent" style={{ paddingTop: 'clamp(10rem, 18vh, 16rem)', paddingBottom: 'clamp(10rem, 18vh, 16rem)' }}>
        <div className="w-full max-w-[1240px] mx-auto" style={{ width: '100%', maxWidth: '1240px', marginLeft: 'auto', marginRight: 'auto' }}>
          {/* Chapter Heading */}
          <div
            className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 lg:mb-28 w-full"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', width: '100%', marginBottom: 'clamp(4rem, 10vh, 8rem)' }}
          >

            <h2
              className="font-playfair text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-wide leading-tight text-white text-center w-full"
              style={{ textAlign: 'center', width: '100%' }}
            >
              The <span className="text-[#EF9E00]">Website</span> Committee
            </h2>
          </div>

          {/* Asymmetrical Editorial Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8 md:gap-x-6 md:gap-y-10 lg:gap-x-8">
            {WEB_MEMBERS.map((member, index) => {
              // Create staggered offsets on desktop
              const offsets = [
                "lg:mt-0",     // Frontend Lead
                "lg:mt-8",     // Backend Lead
                "lg:mt-2",     // UI/UX Designer
                "lg:mt-12"     // DevOps
              ];
              const offsetClass = offsets[index % offsets.length];

              return (
                <div
                  key={member.name}
                  className={`${offsetClass} transform transition-all duration-700`}
                >
                  <MemberCard member={member} />
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ── CHAPTER 03: THE CORE FORCE (LOOKBOOK) ──────────────────────────── */}
      <section className="relative w-full px-6 md:px-12 lg:px-8" style={{ paddingTop: 'clamp(10rem, 18vh, 16rem)', paddingBottom: 'clamp(6rem, 10vh, 9rem)' }}>
        <div className="w-full max-w-[1240px] mx-auto" style={{ width: '100%', maxWidth: '1240px', marginLeft: 'auto', marginRight: 'auto' }}>
          {/* Chapter Heading */}
          <div
            className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 lg:mb-28 w-full"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', width: '100%', marginBottom: 'clamp(4rem, 10vh, 8rem)' }}
          >

            <h2
              className="font-playfair text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-wide leading-tight text-white text-center w-full"
              style={{ textAlign: 'center', width: '100%' }}
            >
              The <span className="text-[#EF9E00]">Core</span> Committee
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">

            {/* LEFT SIDEBAR: Sticky Department Menu (Desktop only) */}
            <div className="hidden lg:block lg:col-span-4 sticky top-36 self-start pr-8">
              <div className="relative">

                <div className="flex flex-col gap-1 relative">
                  {DEPARTMENTS.map((dept, index) => {
                    const isActive = activeDept === dept.id;
                    const indexStr = String(index + 1).padStart(2, "0");
                    const count = deptCounts[dept.id] || 0;

                    return (
                      <button
                        key={dept.id}
                        onClick={() => setActiveDept(dept.id)}
                        className={`text-left pl-0 py-2 transition-all duration-300 relative group flex justify-between items-center outline-none ${isActive
                          ? "text-[#EF9E00]"
                          : "text-neutral-500 hover:text-neutral-300"
                          }`}
                      >

                        <div className="flex items-center gap-3">
                          <span className={`text-[9px] font-mono tracking-widest ${isActive ? "text-[#EF9E00]" : "text-neutral-600 group-hover:text-neutral-400"}`}>
                            {indexStr}
                          </span>
                          <span className="font-sans text-[11px] uppercase tracking-[0.14em] transition-transform group-hover:translate-x-1 duration-300">
                            {dept.name}
                          </span>
                        </div>

                        <span className={`text-[10px] font-mono ${isActive ? "text-[#EF9E00]/80" : "text-neutral-600 group-hover:text-neutral-400"}`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* MOBILE SELECTOR: Horizontal scroll tab bar (Mobile only) */}
            <div className="block lg:hidden w-full overflow-x-auto pb-3 mb-8 -mx-6 px-6 scrollbar-none snap-x snap-mandatory">
              <div className="flex gap-6 w-max border-b border-white/5 pb-2 relative">
                {DEPARTMENTS.map((dept) => {
                  const isActive = activeDept === dept.id;
                  const count = deptCounts[dept.id] || 0;

                  return (
                    <button
                      key={dept.id}
                      onClick={() => setActiveDept(dept.id)}
                      className={`snap-center flex items-center gap-1.5 py-1 text-[11px] uppercase tracking-[0.12em] font-sans transition-all duration-300 relative outline-none ${isActive
                        ? "text-[#EF9E00]"
                        : "text-neutral-500 hover:text-neutral-300"
                        }`}
                    >
                      <span>{dept.name}</span>
                      <span className={`text-[9px] font-mono ${isActive ? "text-[#EF9E00]/70" : "text-neutral-600"}`}>
                        {count}
                      </span>

                      {/* Smooth Bottom Line Indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeMobileDeptIndicator"
                          className="absolute bottom-[-9px] left-0 right-0 h-[1.5px] bg-[#EF9E00]"
                          transition={{ type: "spring", stiffness: 350, damping: 35 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* RIGHT SIDE: Interactive Dynamic Cascading Grid of Core Members */}
            <div className="lg:col-span-8">

              {/* Department Info Header */}
              <div className="mb-10 pb-6 border-b border-white/5">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#EF9E00] font-mono block mb-1.5">
                  Active Department
                </span>
                <h3 className="font-playfair text-xl md:text-2xl font-bold text-white mb-2">
                  {activeDeptInfo.name}
                </h3>
                <p className="text-sm font-light text-neutral-400 max-w-xl leading-relaxed">
                  {activeDeptInfo.desc}
                </p>
              </div>

              {/* Cards Grid with Framer Motion Entrance Cascading */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDept}
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-10"
                >
                  {activeMembers.map((member, index) => {
                    // Stagger offsets on both mobile/desktop for asymmetric design
                    const isOdd = index % 2 !== 0;
                    const offsetClass = isOdd ? "mt-4 md:mt-6" : "mt-0";

                    return (
                      <motion.div
                        key={member.name}
                        variants={itemVariants}
                        className={`${offsetClass}`}
                      >
                        <MemberCard member={member} />
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>

              {/* Dynamic Empty State if no members inside department */}
              {activeMembers.length === 0 && (
                <div className="py-20 text-center border border-dashed border-neutral-900 rounded-2xl">
                  <p className="text-neutral-500 font-geist-mono text-sm tracking-wider">
                    NO CO-ORDINATORS RECORDED IN THIS DEPT YET
                  </p>
                </div>
              )}

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
