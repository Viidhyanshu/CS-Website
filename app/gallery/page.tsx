'use client';

import dynamic from 'next/dynamic';
import LineBackground from '@/components/LineBackground';
import ScrollGrid from '@/src/components/common/ScrollGrid';
import HorizontalGallery from '@/src/app/gallery/HorizontalGallery';
import SmoothScrollProvider from '@/src/app/team/SmoothScrollProvider';
import ZoomGallery from '@/src/app/gallery/ZoomGallery';
const Gallery3D = dynamic(() => import('@/src/components/common/Gallery3D'), { ssr: false });

export default function Gallery() {
  return (<>

    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-black w-full">

        <div className="fixed inset-0 z-0 pointer-events-none">
          <LineBackground />
        </div>

        <div className="relative z-10 w-full">
          <ScrollGrid />

          <HorizontalGallery />

          <div className="hidden md:block">
            <ZoomGallery />
          </div>
        </div>
      </div>
    </SmoothScrollProvider>
    <section className="relative z-50 block md:hidden overflow-hidden bg-transparent" style={{ width: '100%', height: '100vh', minHeight: '600px' }}>
      <Gallery3D title="IEEE CS" />
    </section>
  </>
  );
}
