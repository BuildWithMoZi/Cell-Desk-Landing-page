"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
  useVelocity,
  type MotionValue,
} from "motion/react";
import { asset } from "@/lib/basePath";

const PRODUCTS = [
  { src: "/hero-imges/2.png", alt: "Wireless headphones" },
  { src: "/hero-imges/1.png", alt: "Wireless earbuds" },
  { src: "/hero-imges/5.png", alt: "Smartphone with clear case" },
  { src: "/hero-imges/3.png", alt: "Smartwatch" },
  { src: "/hero-imges/4.png", alt: "Power bank" },
];

// Duplicated so the curved conveyor always stays populated as items loop.
const LOOP = [...PRODUCTS, ...PRODUCTS].map((p, i, arr) => ({
  ...p,
  offset: i / arr.length,
  key: `${p.src}-${i}`,
}));

// --- Curve tuning (tweak these to change the arc) ---
const ARC_START = -60; // entry angle (deg); item enters from the top
const ARC_SPAN = 300; // total sweep; bigger = more gap between images
const RADIUS_X = 0.45; // leftward bulge, * container width
const RADIUS_Y = 0.76; // vertical travel (top → bottom), * container height
const SHIFT_X = 0.34; // push the whole arc toward the right, * container width
const SCALE_MIN = 0.12; // size of items entering/leaving
const SCALE_MAX = 1.15; // size of the front (most-bulged) item
const BASE_SPEED = 0.024; // loops per second when idle (lower = slower)
const SCROLL_BOOST = 0.00005; // extra loops/sec per px/sec of scroll velocity
const BOOST_CAP = 0.55; // max extra speed from scrolling

const frac = (p: number) => ((p % 1) + 1) % 1;
const degOf = (p: number) => ARC_START + frac(p) * ARC_SPAN;
const radOf = (p: number) => (degOf(p) * Math.PI) / 180;
const clamp01 = (n: number) => Math.max(0, Math.min(1, n));

function CurveItem({
  progress,
  width,
  height,
  offset,
  src,
  alt,
}: {
  progress: MotionValue<number>;
  width: MotionValue<number>;
  height: MotionValue<number>;
  offset: number;
  src: string;
  alt: string;
}) {
  const x = useTransform([progress, width], (latest) => {
    const [p, w] = latest as number[];
    return (SHIFT_X - Math.sin(radOf(p + offset)) * RADIUS_X) * w;
  });
  const y = useTransform([progress, height], (latest) => {
    const [p, h] = latest as number[];
    return -Math.cos(radOf(p + offset)) * h * RADIUS_Y;
  });
  const scale = useTransform(progress, (p) => {
    const lift = clamp01(Math.sin(radOf(p + offset)));
    return SCALE_MIN + lift * (SCALE_MAX - SCALE_MIN);
  });
  const rotate = useTransform(progress, (p) => (90 - degOf(p + offset)) * 0.06);
  const opacity = useTransform(progress, (p) =>
    clamp01((Math.sin(radOf(p + offset)) + 0.1) / 0.32),
  );
  const zIndex = useTransform(progress, (p) =>
    Math.round((Math.sin(radOf(p + offset)) + 1) * 100),
  );

  return (
    <motion.div
      className='hero-curve-item'
      style={{ x, y, rotate, scale, opacity, zIndex }}>
      <img src={asset(src)} alt={alt} draggable={false} />
    </motion.div>
  );
}

export default function Hero() {
  const reduced = useReducedMotion();
  const curveRef = useRef<HTMLDivElement>(null);
  const progress = useMotionValue(0);
  const width = useMotionValue(1000);
  const height = useMotionValue(400);
  // Render the motion-driven curve only on the client to avoid SSR/client
  // hydration mismatches from Framer Motion's computed transform/opacity values.
  const [mounted, setMounted] = useState(false);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const el = curveRef.current;
    if (!el) return;
    const sync = () => {
      width.set(el.clientWidth);
      height.set(el.clientHeight);
    };
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    return () => ro.disconnect();
  }, [width, height]);

  useAnimationFrame((_, delta) => {
    if (reduced) return;
    const boost = Math.min(
      Math.abs(scrollVelocity.get()) * SCROLL_BOOST,
      BOOST_CAP,
    );
    const speed = BASE_SPEED + boost;
    progress.set(progress.get() + speed * (delta / 1000));
  });

  return (
    <section id='hero'>
      <div className='hero-panel'>
        <div className='hero-panel-grid' />
        <div className='hero-panel-glow' />
        <div className='hero-orb' aria-hidden='true' />
        <div className='hero-orb hero-orb-left' aria-hidden='true' />
        <div className='hero-panel-inner'>
          <span className='hero-eyebrow'>
            <span className='hero-eyebrow-dot' aria-hidden='true' />
            Smart billing &amp; inventory for mobile shops
          </span>
          <h1 className='hero-title'>
            <span className='hero-line'>
              <span style={{ animationDelay: ".15s" }}>Run Your Mobile Store.</span>
            </span>
            <span className='hero-line'>
              <span style={{ animationDelay: ".3s" }}>
                Not Your <span className='hero-hl'>Spreadsheet</span>.
              </span>
            </span>
          </h1>
          <p className='hero-sub'>
            Manage inventory, billing, IMEI numbers, sales, customers and
            repairs from one simple dashboard. Stop guessing stock levels and
            focus on growing your business.
          </p>
          <ul className='hero-points'>
            <li>Live stock tracking with low-stock alerts</li>
            <li>Instant GST-ready invoices</li>
            <li>IMEI &amp; serial number management</li>
            <li>Sales, profit &amp; customer reports</li>
          </ul>

          {/* Desktop / tablet: auto-looping curved conveyor */}
          <div className='hero-curve' ref={curveRef} aria-hidden='true'>
            {mounted &&
              LOOP.map((p) => (
                <CurveItem
                  key={p.key}
                  progress={progress}
                  width={width}
                  height={height}
                  offset={p.offset}
                  src={p.src}
                  alt={p.alt}
                />
              ))}
          </div>

          {/* Phones: simple straight marquee slider */}
          <div className='hero-strip' aria-hidden='true'>
            <div className='hero-strip-track'>
              {[...PRODUCTS, ...PRODUCTS].map((p, i) => (
                <div className='hero-strip-item' key={`${p.src}-${i}`}>
                  <img src={asset(p.src)} alt={p.alt} draggable={false} />
                </div>
              ))}
            </div>
          </div>

          <div className='hero-cta'>
            <a href='#pricing' className='btn btn-ink'>
              Start Free Trial
            </a>
            <a href='#showcase' className='btn btn-ghost'>
              <svg
                viewBox='0 0 24 24'
                fill='currentColor'
                width='16'
                height='16'
                aria-hidden='true'>
                <path d='M8 5v14l11-7z' />
              </svg>
              Watch Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
