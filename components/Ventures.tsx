"use client";

import Reveal from "./Reveal";

type CardProps = {
  n: string;
  name: string;
  text: string;
  direction: "left" | "right";
  children: React.ReactNode;
};

function Card({
  n,
  name,
  text,
  direction,
  children,
}: CardProps) {
  return (
    <Reveal
      className={`venture-card group min-w-0 border border-white/10 bg-white/[0.025] p-[22px] ${
        direction === "left"
          ? "venture-card-left"
          : "venture-card-right"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[9px] font-bold text-[#A3FF12]">
          {n} / Venture
        </span>

        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.05em] text-white/85">
          Founder
        </span>
      </div>

      <div className="venture-art mt-[34px] aspect-[1.4] overflow-hidden">
        {children}
      </div>

      <h3 className="mt-9 font-display text-[clamp(38px,4.2vw,60px)] font-medium leading-none tracking-[-0.04em] text-[#f0f1eb]">
        {name}
      </h3>

      <p className="mt-5 max-w-[520px] text-[14px] leading-[1.65] text-ink/55">
        {text}
      </p>
    </Reveal>
  );
}

export default function Ventures() {
  return (
    <section
      id="ventures"
      className="bg-[#090b09] overflow-hidden px-5 pb-32 pt-32 md:px-[47px]"
    >
      <Reveal>
        <p className="eyebrow">04 / Things I am building</p>

        <h2 className="h2 mt-8 max-w-[1100px]">
          Apparently, one set of problems{" "}
          <span className="text-sage">wasn’t enough.</span>
        </h2>
      </Reveal>

      <div className="mx-auto mt-24 grid max-w-[1379px] grid-cols-1 gap-[22px] md:grid-cols-2">
        {/* CARD 01 — ETHICAL DEN */}
        <Card
          n="01"
          name="Ethical Den"
          direction="left"
          text="My work across cybersecurity, technology, and branding comes together here. Security remains central, alongside the practical work of building and running a business."
        >
          <svg
            viewBox="0 0 634 430"
            className="h-full w-full bg-[#090b09]"
            fill="none"
            preserveAspectRatio="none"
            role="img"
            aria-label="Rotating geometric Ethical Den artwork"
          >
            <defs>
              <pattern
                id="ventureGrid"
                width="32"
                height="32"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="1"
                  cy="1"
                  r=".6"
                  fill="#ffffff"
                  fillOpacity=".12"
                />
              </pattern>
            </defs>

            <rect width="634" height="430" fill="url(#ventureGrid)" />

            {/* Main diamond rotates around its own center */}
            <g className="venture-diamond">
              <path
                d="M242 47 L390 195 L221 322 L73 174 Z"
                stroke="#ADFF47"
                strokeWidth="1"
              />
            </g>

            {/* Secondary outlined shape rotates independently */}
            <g className="venture-outline">
              <path
                d="M541 229 L624 420 L423 480 L340 289 Z"
                stroke="#687064"
                strokeOpacity=".48"
                strokeWidth="1"
              />
            </g>

            <text
              x="614"
              y="411"
              textAnchor="end"
              fill="#ADFF47"
              fontSize="8"
              fontFamily="monospace"
              fontWeight="700"
            >
              ED / SYSTEMS
            </text>
          </svg>
        </Card>

        {/* CARD 02 — HIVYR TECHNOLOGIES */}
        <Card
          n="02"
          name="Hivyr Technologies"
          direction="right"
          text="Voice AI and conversational systems for business. A place to work on useful automation and the details that make a conversation feel less like a phone menu."
        >
          <svg
            viewBox="0 0 634 430"
            className="h-full w-full"
            fill="none"
            preserveAspectRatio="none"
            role="img"
            aria-label="Animated Hivyr sound wave"
          >
            <rect width="634" height="430" fill="#A6FF3F" />

            <ellipse
              cx="317"
              cy="215"
              rx="240"
              ry="164"
              stroke="#26331C"
              strokeOpacity=".42"
              strokeWidth="1"
            />

            {[
              56, 88, 120, 154, 190, 226, 266,
              300, 266, 226, 190, 154, 120, 88, 56,
            ].map((h, i) => (
              <line
                key={i}
                className="venture-wave-bar"
                style={{
                  "--bar-dist": Math.abs(i - 7),
                } as React.CSSProperties}
                x1={237 + i * 11.5}
                y1={215 - h / 2}
                x2={237 + i * 11.5}
                y2={215 + h / 2}
                stroke="#10130D"
                strokeWidth="3"
                strokeLinecap="butt"
              />
            ))}
          </svg>
        </Card>
      </div>

      <style jsx global>{`
        .venture-card {
          position: relative;
          min-width: 0;
          border-color: rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.025);
        }

        /* Directional entrance animation */
        @media (min-width: 768px) {
          .venture-card-left {
            animation: ventureRevealLeft 1s
              cubic-bezier(0.22, 1, 0.36, 1) both;
          }

          .venture-card-right {
            animation: ventureRevealRight 1s
              cubic-bezier(0.22, 1, 0.36, 1) 0.12s both;
          }
        }

        @keyframes ventureRevealLeft {
          from {
            opacity: 0;
            transform: translate3d(-75px, 0, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes ventureRevealRight {
          from {
            opacity: 0;
            transform: translate3d(75px, 0, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        /* LEFT CARD: rotate the artwork only, never the card */
        .venture-diamond {
          transform-box: view-box;
          transform-origin: 231.5px 184.5px;
          transition: transform 900ms
            cubic-bezier(0.22, 1, 0.36, 1);
        }

        .venture-outline {
          transform-box: view-box;
          transform-origin: 482px 354px;
          transition: transform 1100ms
            cubic-bezier(0.22, 1, 0.36, 1);
        }

        .venture-card-left:hover .venture-diamond {
          transform: rotate(12deg);
        }

        .venture-card-left:hover .venture-outline {
          transform: rotate(-9deg);
        }

        /* RIGHT CARD: bars grow/shrink smoothly, rippling from the center */
        .venture-wave-bar {
          transform-box: fill-box; /* scale each bar around ITS OWN center */
          transform-origin: center;
          animation: ventureWavePulse 900ms ease-in-out infinite alternate;
          animation-delay: calc(var(--bar-dist) * 70ms);
          animation-play-state: paused; /* idle = exact static design */
        }

        .venture-card-right:hover .venture-wave-bar {
          animation-play-state: running;
        }

        @keyframes ventureWavePulse {
          0% {
            transform: scaleY(1);
          }

          100% {
            transform: scaleY(0.3);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .venture-card-left,
          .venture-card-right {
            animation: none !important;
          }

          .venture-diamond,
          .venture-outline {
            transition: none;
          }

          .venture-wave-bar {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}