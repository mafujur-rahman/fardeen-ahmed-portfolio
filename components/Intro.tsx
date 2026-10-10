"use client";
import { useBooking } from "./Booking";
import Reveal from "./Reveal";
import { FiArrowRight } from "react-icons/fi";

export default function Intro() {
  const { open } = useBooking();
  return (
    <section className="bg-[#090b09] grid min-h-screen items-center px-5 pb-20 pt-[160px] md:grid-cols-[1fr_400px] md:px-[47px] lg:grid-cols-[1fr_420px]">
      <Reveal>
        <p className="eyebrow">Cybersecurity practitioner / Founder</p>
        <h2 className="mt-8 font-display text-[clamp(48px,5.6vw,80px)] font-medium leading-[0.95] tracking-[-0.045em]">
          I break things.<br />
          <span className="text-[#A3FF12]">With permission.</span>
        </h2>
        <p className="mt-9 max-w-[670px] text-[18px] leading-[1.6] text-ink/70">
          I work in cybersecurity, teach people how it actually works, and build businesses. Here for your security questions, your next learning step, or that ISO 27001 conversation you have been putting off.
        </p>
        <p className="mt-9 flex items-center gap-3 font-mono text-[11px] font-medium uppercase tracking-[0.1em]">
          Cybersecurity <i className="h-[3px] w-[3px] bg-[#A3FF12]" /> ISO 27001 <i className="h-[3px] w-[3px] bg-[#A3FF12]" /> Mentorship
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-8">
          <button
            onClick={open}
            className="group flex items-center gap-16 border-2 border-transparent bg-[#A3FF12] px-6 py-[18px] font-mono text-[12px] text-bg transition hover:border-lime hover:bg-transparent hover:text-[#A3FF12]"
          >
            Book a consultation
            <FiArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <a
            href="#expertise"
            className="group flex items-center gap-3 border-b border-white/20 pb-2 font-mono text-[11px] font-medium transition hover:border-lime"
          >
            See what I work on
            <FiArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
        <p className="mt-5 text-[11px] text-mute">Free introductory calls and focused paid consultations.</p>
      </Reveal>

      <Reveal className="mt-14 border-l border-white/10 md:mt-0">
        <div className="relative h-[340px]">
          {/* Vertical crosshair — spans full container plus a bit more */}
          <div className="pointer-events-none absolute left-1/2 top-[-20px] bottom-[-20px] w-px -translate-x-1/2 bg-white/[0.14]" />

          <svg
            viewBox="0 0 400 340"
            preserveAspectRatio="xMidYMax meet"
            className="relative h-full w-full"
            fill="none"
            stroke="rgba(255,255,255,.14)"
          >
            {/* Rotating circles via native SVG SMIL animation */}
            <g>
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                values="0 200 200; 15 200 200; 0 200 200"
                keyTimes="0; 0.5; 1"
                dur="6s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
              />
              <circle cx="200" cy="200" r="140" />
              <circle cx="200" cy="200" r="95" />
              <circle cx="200" cy="200" r="32" stroke="#A3FF12" />
            </g>

            {/* Static horizontal crosshair */}
            <line x1="0" y1="200" x2="400" y2="200" />

            {/* Static center label */}
            <text
              x="200"
              y="203"
              fill="#A3FF12"
              stroke="none"
              fontSize="9"
              textAnchor="middle"
              fontFamily="monospace"
            >
              FA
            </text>
          </svg>
        </div>

        <div className="border-t border-white/10 px-7 py-5">
          <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#A3FF12]">Operating principle / 01</p>
          <p className="mt-5 text-[22px] leading-[1.35] text-ink/60">
            Explicit scope.<br />
            Verified permission.<br />
            Useful findings.
          </p>
        </div>
      </Reveal>
    </section>
  );
}