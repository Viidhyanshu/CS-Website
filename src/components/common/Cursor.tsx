"use client";

import { useEffect, useState } from "react";

export default function TargetCursor(props:any) {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const hasTouchScreen =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    const isSmallScreen = window.innerWidth <= 768;

    const mobileRegex =
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;

    const userAgent = navigator.userAgent;

    setIsMobile(
      hasTouchScreen || isSmallScreen || mobileRegex.test(userAgent)
    );
  }, []);

  if (isMobile) return null; 

  return (
    <div>
    <div>
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
  hoverDuration={0.2}
/>
      
      <h1>Hover over the elements below</h1>
      <button className="cursor-target">Click me!</button>
      <div className="cursor-target">Hover target</div>
    </div>
    </div>
  );
}

