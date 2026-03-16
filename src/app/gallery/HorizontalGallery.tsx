'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalGallery() {
  const scroller = useRef<HTMLDivElement | null>(null);
  const wrapper = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scroller.current || !wrapper.current) return;

    const wrapperEl = wrapper.current;
    const isMobile = window.innerWidth < 768;

    ScrollTrigger.normalizeScroll(true);

    const ctx = gsap.context(() => {

      const sections = gsap.utils.toArray<HTMLElement>('.skill-set');

      const st = ScrollTrigger.create({
        trigger: scroller.current,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,

        end: () =>
          '+=' +
          (sections.length - 1) *
          (isMobile ? window.innerHeight : window.innerWidth),

        animation: gsap.to(sections, {
          ...(isMobile
            ? { yPercent: -100 * (sections.length - 1) }
            : { xPercent: -100 * (sections.length - 1) }),
          ease: 'none',
        }),
      });

      const tickerFn = () => {
        const progress = st.progress ?? 0;
        const alpha = Math.min(0.8, progress);
        wrapperEl.style.backgroundColor = `rgba(255,255,255,${alpha})`;
      };

      gsap.ticker.add(tickerFn);

      const section1Items = gsap.utils.toArray<HTMLElement>(
        '.skill-set:nth-child(1) > div'
      );

      gsap.set(section1Items, { y: 120, x: 60, opacity: 0 });

      ScrollTrigger.create({
        trigger: scroller.current,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(section1Items, {
            y: 0,
            x: 0,
            opacity: 1,
            ease: 'power2.out',
            stagger: 0.12,
            duration: 0.9,
          });
        },
      });

      const section2Items = gsap.utils.toArray<HTMLElement>(
        '.skill-set:nth-child(2) > div'
      );

      gsap.set(section2Items, { y: 120, x: 60, opacity: 0 });

      ScrollTrigger.create({
        trigger: scroller.current,
        scrub: 0.8,
        start: 'top top',
        end: () =>
          '+=' +
          (isMobile
            ? scroller.current!.offsetHeight
            : scroller.current!.offsetWidth),
        animation: gsap.to(section2Items, {
          y: 0,
          x: 0,
          opacity: 1,
          ease: 'power2.out',
          stagger: 0.05,
        }),
      });

      return () => {
        gsap.ticker.remove(tickerFn);
      };

    }, scroller);

    return () => ctx.revert();

  }, []);

  return (
    <div
      ref={wrapper}
      className="overflow-hidden"
      style={{ backgroundColor: 'rgba(255,255,255,0)' }}
    >
      <div
        ref={scroller}
        className="flex flex-col md:flex-row w-full md:w-[200vw] h-[200vh] md:h-auto min-h-screen text-white relative bg-transparent"
      >

        {/* SECTION 1 */}
        <section className="skill-set relative w-screen h-full px-12">

          <div className="absolute right-[600px] top-[150px] w-[25vw] h-[35vh]">
            <p className="text-[#f9ba1f] text-[7px] translate-y-[-25px]">
              QATAR_2024
            </p>
            <Image
              src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa04b14a1ca33c0b25_ln-home-horiz-1.webp"
              alt="Image 1"
              fill
              className="object-contain object-left"
              sizes="70vw"
              priority
            />
          </div>

          <div className="absolute right-[600px] bottom-[120px] w-[15vw] h-[20vh]">
            <p className="text-[#f9ba1f] text-[7px] translate-y-[-25px]">
              QATAR_2024
            </p>
            <Image
              src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baab12220595c8223b3_ln-home-horiz-2.webp"
              alt="Image 2"
              fill
              className="object-contain object-left"
              sizes="70vw"
              priority
            />
          </div>

          <div className="absolute right-[0px] bottom-[120px] w-[28vw] h-[45vh]">
            <p className="text-[#f9ba1f] text-[7px] translate-y-[-25px]">
              QATAR_2024
            </p>
            <Image
              src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302babcf12f0111d96322e_ln-home-horiz-3-p-500.webp"
              alt="Image 3"
              fill
              className="object-contain object-left"
              sizes="50vw"
              priority
            />
          </div>

          <div className="absolute right-[0px] top-[120px] w-[28vw] h-[45vh]">
            <p className="text-[#f9ba1f] text-[12px]">
              It doesn’t matter where
            </p>
            <p className="text-[#f9ba1f] text-[12px]">
              you start, it’s how you
            </p>
            <p className="text-[#f9ba1f] text-[12px]">
              progress from there.
            </p>
          </div>

        </section>

        {/* SECTION 2 */}
        <section className="skill-set relative w-screen h-full flex items-center justify-center px-12">

          <div className="absolute left-[100px] top-[150px] w-[18vw] h-[18vh]">
            <p className="text-[#f9ba1f] text-[7px] translate-y-[-25px]">
              MONACO, 2023
            </p>
            <Image
              src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa798e2cc6e02ac38a_ln-home-horiz-4-p-500.webp"
              alt="Image 4"
              fill
              className="object-contain object-left"
              sizes="70vw"
              priority
            />
          </div>

          <div className="absolute left-[180px] bottom-[180px] w-[27vw] h-[27vh]">
            <p className="text-[#f9ba1f] text-[7px] translate-y-[-25px]">
              BRITAIN, 2025
            </p>
            <Image
              src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68da85d632bfefc552a0faac_Britain-25%20(1).webp"
              alt="Image 5"
              fill
              className="object-contain object-left"
              sizes="70vw"
              priority
            />
          </div>

          <div className="absolute left-[570px] bottom-[80px] w-[25vw] h-[25vh]">
            <p className="text-[#f9ba1f] text-[7px] translate-y-[-25px]">
              BATTERSEA, 2024
            </p>
            <Image
              src="https://cdn.prod.website-files.com/67b5a02dc5d338960b17a7e9/68302baa14a96f3cdd2f9a95_ln-home-horiz-6-p-500.webp"
              alt="Image 6"
              fill
              className="object-contain object-left"
              sizes="70vw"
              priority
            />
          </div>

        </section>

      </div>
    </div>
  );
}