"use client";
import { useInView, useMotionValue, useSpring } from "motion/react";
import { useCallback, useEffect, useRef } from "react";
import LineBackground from "@/components/LineBackground";

// ─── CountUp (inlined) ───────────────────────────────────────────────────────

interface CountUpProps {
  to: number;
  from?: number;
  direction?: "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
  className = "",
  startWhen = true,
  separator = "",
  onStart,
  onEnd,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? to : from);

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);

  const springValue = useSpring(motionValue, { damping, stiffness });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const getDecimalPlaces = (num: number): number => {
    const str = num.toString();
    if (str.includes(".")) {
      const decimals = str.split(".")[1];
      if (parseInt(decimals) !== 0) return decimals.length;
    }
    return 0;
  };

  const maxDecimals = Math.max(getDecimalPlaces(from), getDecimalPlaces(to));

  const formatValue = useCallback(
    (latest: number) => {
      const hasDecimals = maxDecimals > 0;
      const options: Intl.NumberFormatOptions = {
        useGrouping: !!separator,
        minimumFractionDigits: hasDecimals ? maxDecimals : 0,
        maximumFractionDigits: hasDecimals ? maxDecimals : 0,
      };
      const formattedNumber = Intl.NumberFormat("en-US", options).format(latest);
      return separator ? formattedNumber.replace(/,/g, separator) : formattedNumber;
    },
    [maxDecimals, separator]
  );

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = formatValue(direction === "down" ? to : from);
    }
  }, [from, to, direction, formatValue]);

  useEffect(() => {
    if (isInView && startWhen) {
      if (typeof onStart === "function") onStart();

      const timeoutId = setTimeout(() => {
        motionValue.set(direction === "down" ? from : to);
      }, delay * 1000);

      const durationTimeoutId = setTimeout(() => {
        if (typeof onEnd === "function") onEnd();
      }, delay * 1000 + duration * 1000);

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(durationTimeoutId);
      };
    }
  }, [isInView, startWhen, motionValue, direction, from, to, delay, onStart, onEnd, duration]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest: number) => {
      if (ref.current) {
        ref.current.textContent = formatValue(latest);
      }
    });
    return () => unsubscribe();
  }, [springValue, formatValue]);

  return <span className={className} ref={ref} />;
}

// ─── Stats data ──────────────────────────────────────────────────────────────

const STATS = [
  { label: "Members", value: 1500 },
  { label: "Events",  value: 20   },
  { label: "Societies", value: 3  },
  { label: "Mentors", value: 10   },
] as const;

// ─── TeamsInfoComponent (merged) ─────────────────────────────────────────────

export default function TeamsInfoComponent() {
  return (
    <div className="relative h-screen flex items-center justify-center gap-[0vh] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <LineBackground
          lineColor="rgba(180, 140, 60, 0.4)"
          backgroundColor="#0d0d0d"
          lineCount={12}
          animated={true}
        />
      </div>
      {/* Left column */}
      <div className="flex flex-col items-start gap-10 w-[40vw] h-[80vh]">
        <h1 className="font-bold text-[#f9a71f] text-6xl">IEEE CS MUJ</h1>
        <h1 className="text-[#f9a71f] text-6xl -translate-y-10">Since 2019</h1>
        <img
          className="h-[50vh] object-contain"
          src="/images/events/2.png"
          alt="img"
        />
      </div>

      {/* Right column – stats grid */}
      <div className="relative w-[50vw] h-[80vh]">
        <div className="w-full h-full grid grid-cols-2 grid-rows-2">
          {STATS.map(({ label, value }) => (
            <div key={label}>
              <p className="uppercase text-[10px] font-bold translate-y-[15px]">
                {label}
              </p>
              <CountUp
                from={0}
                to={value}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-[90px] font-bold inline-block scale-y-120"
                startWhen={true}
              />
              <span className="inline-block text-[90px]">+</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
