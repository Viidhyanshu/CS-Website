"use client";

import dynamic from 'next/dynamic';
import { Skiper19 } from "@/src/components/ui/stroke";
import TargetCursor from "@/src/components/common/TargetCursor";
const ScrollGrid = dynamic(() => import('@/src/components/common/ScrollGrid'), { ssr: false });
const TeamCard = dynamic(() => import('@/src/components/common/TeamCard'), { ssr: false });
const HorizontalGallery = dynamic(() => import('@/src/app/gallery/HorizontalGallery'), { ssr: false });
const CardStack = dynamic(() => import('@/src/components/common/CardStack'), { ssr: false });
const Gallery3D = dynamic(() => import('@/src/components/common/Gallery3D'), { ssr: false });

import LandoBackground from "@/components/LineBackground";

export default function Home() {
  return (
    <>
    <div className="fixed inset-0 -z-10">
              <LandoBackground
                lineColor="rgba(180, 140, 60, 0.75)"
                backgroundColor="#0d0d0d"
                lineCount={14}
                animated={true}
              />
            </div>
    
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />
      <div>
        <Skiper19 />        
      </div>
    </>
  );
}