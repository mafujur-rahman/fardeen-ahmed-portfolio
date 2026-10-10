"use client";
import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { useBooking } from "./Booking";
import Reveal from "./Reveal";

const items = [
  { tab: "Cybersecurity", title: "'Probably secure' is doing a lot of work.", body: "I help teams find weaknesses, understand the risk, and decide what needs fixing. Web applications, mobile apps, networks, and cloud environments. Findings should lead to useful decisions.", pts: ["Vulnerability assessment and penetration testing.", "Network and cloud security.", "Web and mobile application security.", "Security reviews and remediation guidance."], cta: "Discuss a security question", note: "Clear scope. Explicit permission. Useful findings." },
  { tab: "ISO 27001", title: "Your policies deserve a life outside that folder.", body: "I help organisations work through ISO/IEC 27001, from understanding the gaps to building an information security management system (ISMS) people can actually follow.", pts: ["Gap assessment and readiness.", "Policies, processes, and evidence.", "ISMS implementation support.", "Internal audit preparation and audit readiness.", "Risk assessment and treatment planning."], cta: "Talk through ISO 27001", note: "Structure that works beyond the audit week." },
  { tab: "Mentorship", title: "The tutorial ended. Now what?", body: "Ethical hacking, Linux, networking, pentesting, and the thinking behind the tools. Bring your questions, your lab, or the thing you have been stuck on for three evenings.", pts: ["Practical cybersecurity foundations.", "Career direction and learning plans.", "Hands-on ethical hacking and pentesting.", "Training for individuals and teams.", "Lab-based learning and troubleshooting."], cta: "Talk about learning", note: "Your questions are welcome. Your 47 open tutorials can come too." },
];


function Sys({ n }: { n: number }) {
  const configs = [
    { rotation: 0, label: "SURFACE / MAPPING", status: "CONTROLLED" },
    { rotation: 18, label: "ISMS / MONITORING", status: "ANALYSING" },
    { rotation: -24, label: "LAB / EXPLORATION", status: "ACTIVE" },
  ];

  const config = configs[n] ?? configs[0];

  return (
    <svg
      viewBox="0 0 395 330"
      className="sys-visual h-full w-full"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      role="img"
      aria-label={`${config.label} animated technical visualization`}
    >
      <defs>
        <linearGradient id="sys-scan" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A3FF12" stopOpacity="0" />
          <stop offset="50%" stopColor="#A3FF12" stopOpacity=".2" />
          <stop offset="100%" stopColor="#A3FF12" stopOpacity="0" />
        </linearGradient>

        <radialGradient id="sys-glow">
          <stop offset="0%" stopColor="#A3FF12" stopOpacity=".2" />
          <stop offset="100%" stopColor="#A3FF12" stopOpacity="0" />
        </radialGradient>

        <clipPath id="sys-clip">
          <rect width="395" height="330" />
        </clipPath>
      </defs>

      <g clipPath="url(#sys-clip)">
        {/* Background and technical grid */}
        <rect width="395" height="330" fill="#0f130e" />
        <rect width="395" height="330" fill="url(#sys-glow)" />

        <g stroke="#A3FF12" strokeOpacity=".055" strokeWidth=".7">
          {Array.from({ length: 10 }, (_, i) => (
            <line key={`v${i}`} x1={i * 44} y1="0" x2={i * 44} y2="330" />
          ))}
          {Array.from({ length: 8 }, (_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 44} x2="395" y2={i * 44} />
          ))}
        </g>

        {/* Slow diagonal scanning light */}
        <g className="sys-scan">
          <path d="M-90 270 L145 -30 L225 -30 L-10 270 Z" fill="url(#sys-scan)" />
        </g>

        {/* Main rotating wireframe */}
        <g
          style={{
            transform: `rotate(${config.rotation}deg)`,
            transformOrigin: "160px 180px",
            transition: "transform 1.2s cubic-bezier(.2,.7,.2,1)",
          }}
        >
          <g className="sys-orbit">
            <rect
              x="90"
              y="110"
              width="140"
              height="140"
              transform="rotate(45 160 180)"
              stroke="#A3FF12"
              strokeOpacity=".8"
              strokeWidth="1"
            />
            <rect
              x="113"
              y="133"
              width="94"
              height="94"
              transform="rotate(45 160 180)"
              fill="#A3FF12"
              fillOpacity=".035"
              stroke="#A3FF12"
              strokeOpacity=".5"
            />
            <rect
              x="133"
              y="153"
              width="54"
              height="54"
              transform="rotate(45 160 180)"
              stroke="#A3FF12"
              strokeOpacity=".22"
              strokeDasharray="3 4"
            />
          </g>

          {/* Perspective network */}
          <g stroke="#A3FF12" strokeOpacity=".4" strokeWidth=".8">
            <path d="M160 60 L255 180 L160 300 L60 180 Z" strokeDasharray="3 5" />
            <path d="M60 180 L160 180 L255 180" />
            <path d="M160 60 L160 180 L160 300" />
            <path d="M94 112 L224 246" strokeOpacity=".2" />
            <path d="M224 112 L94 246" strokeOpacity=".2" />
          </g>

          {/* Animated connection nodes */}
          {[
            [160, 60],
            [255, 180],
            [160, 300],
            [60, 180],
            [94, 112],
            [224, 246],
          ].map(([x, y], i) => (
            <g key={i}>
              <circle
                cx={x}
                cy={y}
                r="8"
                fill="#A3FF12"
                fillOpacity=".06"
                className={`sys-pulse sys-delay-${i % 3}`}
              />
              <rect
                x={x - 2.5}
                y={y - 2.5}
                width="5"
                height="5"
                fill="#A3FF12"
                transform={`rotate(45 ${x} ${y})`}
              />
            </g>
          ))}
        </g>

        {/* Radar display */}
        <g>
          <circle cx="290" cy="120" r="53" stroke="#A3FF12" strokeOpacity=".3" strokeDasharray="2 5" />
          <circle cx="290" cy="120" r="39" stroke="#A3FF12" strokeOpacity=".14" />
          <circle cx="290" cy="120" r="24" stroke="#A3FF12" strokeOpacity=".24" />
          <path d="M237 120 H343 M290 67 V173" stroke="#A3FF12" strokeOpacity=".12" />

          <g className="sys-radar">
            <path d="M290 120 L290 67 A53 53 0 0 1 337 91 Z" fill="#A3FF12" fillOpacity=".18" />
            <path d="M290 120 L290 67" stroke="#A3FF12" strokeOpacity=".8" />
          </g>

          <circle cx="290" cy="120" r="3" fill="#A3FF12" />
          <circle cx="312" cy="99" r="2" fill="#A3FF12" className="sys-blink" />
          <circle cx="270" cy="137" r="2" fill="#A3FF12" className="sys-blink" />
        </g>

        {/* Center system identifier */}
        <rect x="178" y="152" width="58" height="58" fill="#0f130e" stroke="#A3FF12" strokeOpacity=".8" />
        <path d="M178 164 H236 M190 152 V210" stroke="#A3FF12" strokeOpacity=".2" />
        <text x="197" y="163" fill="#A3FF12" fontSize="6" fontFamily="monospace">SYS / 0{n + 1}</text>
        <text x="187" y="196" fill="#A3FF12" fontSize="19" fontFamily="monospace">
          {`0${n + 1}`}
        </text>

        {/* Interface corners */}
        <path d="M11 30 V11 H30 M365 11 H384 V30 M11 300 V319 H30 M365 319 H384 V300" stroke="#A3FF12" strokeOpacity=".8" />

        {/* Coordinates and telemetry */}
        <text x="42" y="26" fill="#9aa097" fontSize="7" fontFamily="monospace">
          43.7112 / -79.4186
        </text>
        <text x="34" y="240" fill="#A3FF12" fontSize="6.5" fontFamily="monospace" fontWeight="700">
          $ inspect --scope authorized
        </text>
        <text x="34" y="254" fill="#9aa097" fontSize="6.5" fontFamily="monospace">
          › mapping attack surface...
        </text>
        <text x="34" y="268" fill="#9aa097" fontSize="6.5" fontFamily="monospace">
          › status: <tspan fill="#A3FF12">{config.status.toLowerCase()}</tspan>
        </text>

        <text x="290" y="282" fill="#A3FF12" fontSize="6.5" fontFamily="monospace" fontWeight="700">
          {n === 0 ? "PORT_SCAN / ACTIVE" : n === 1 ? "POLICY_CHECK / ACTIVE" : "LAB_TRACE / ACTIVE"}
        </text>
        <text x="235" y="306" fill="#9aa097" fontSize="7" fontFamily="monospace">
          {config.label}
        </text>

        {/* Small activity indicator */}
        <circle cx="365" cy="26" r="3" fill="#A3FF12" className="sys-blink" />
        <text x="350" y="40" fill="#9aa097" fontSize="5.5" fontFamily="monospace" textAnchor="end">
          LIVE
        </text>
      </g>
    </svg>
  );
}


export default function Services() {
  const { open } = useBooking();
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(Number((e.target as HTMLElement).dataset.i))), { rootMargin: "-40% 0px -50% 0px" });
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="expertise" className="bg-[#090b09] px-5 pb-24 pt-32 md:px-[47px]">
      <div className="mx-auto w-full 2xl:max-w-[1440px]">
        <Reveal>
          <p className="eyebrow">01 / What I work on</p>
          <h2 className="h2 mt-8 max-w-[900px]">Depends what brought you <span className="text-sage">here.</span></h2>
          <p className="mt-16 max-w-[520px] pl-0 text-[17px] leading-[1.6] text-ink/60 md:ml-[510px]">A business to secure. An audit to prepare for. A terminal you would like to stop arguing with.</p>
        </Reveal>
        <div className="mt-24 grid gap-12 md:grid-cols-[395px_1fr] md:gap-[115px]">
          
  <aside className="hidden md:block">
    <div className="sticky top-[100px]">
      <ul className="border-t border-white/10">
        {items.map((it, i) => (
          <li key={it.tab}>
            <button
              type="button"
              onClick={() => {
                document
                  .querySelector(`[data-i="${i}"]`)
                  ?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
              }}
              aria-current={active === i ? "step" : undefined}
              className="group flex w-full items-center gap-5 border-b border-white/10 py-[14px] text-left font-mono text-[11px] uppercase tracking-[0.12em] transition-colors duration-300"
              style={{
                color: active === i ? "#f1f4ed" : "#5c615a",
              }}
            >
              <span
                className="text-[10px] transition-colors duration-300"
                style={{
                  color: active === i ? "#A3FF12" : "#5c615a",
                }}
              >
                0{i + 1}
              </span>

              <span className="flex-1">
                {it.tab}
              </span>

              <span
                className="h-px transition-all duration-500"
                style={{
                  width: active === i ? "28px" : "0px",
                  backgroundColor: "#A3FF12",
                }}
              />
            </button>
          </li>
        ))}
      </ul>

      <div className="relative mt-[30px] aspect-[395/330] overflow-hidden border border-white/10">
        <Sys n={active} />

        <div className="pointer-events-none absolute inset-0 border border-white/[0.025]" />
      </div>

      <div className="mt-3 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.12em] text-ink/40">
        <span>System visualization</span>

        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse bg-[#A3FF12]" />
          {`0${active + 1} / 03`}
        </span>
      </div>
    </div>
  </aside>

          <div className="border-t border-white/10">
            {items.map((it, i) => (
              <article key={it.tab} data-i={i} ref={(el) => { refs.current[i] = el; }} className="flex min-h-[100vh] flex-col justify-center border-t border-white/10 py-16 first:border-t-0">
                <p className="mb-14 flex gap-6 font-mono text-[10px] uppercase tracking-[0.1em]"><span className="text-[#A3FF12]">0{i + 1}</span><span className="font-bold">{it.tab}</span></p>
                <Reveal>
                  <h3 className="max-w-[640px] font-display text-[clamp(38px,4.6vw,66px)] font-medium leading-[1] tracking-[-0.04em]">{it.title}</h3>
                  <p className="mt-12 max-w-[680px] text-[17px] leading-[1.7] text-ink/60">{it.body}</p>
                  <ul className="mt-12 grid gap-x-[16px] md:grid-cols-2">
                    {it.pts.map((p) => (
                      <li key={p} className="flex items-center gap-4 border-t border-white/10 py-[14px] text-[15px] text-ink/85"><i className="h-[5px] w-[5px] shrink-0 bg-[#A3FF12]" />{p}</li>
                    ))}
                  </ul>
                  <div className="mt-12 flex flex-wrap items-end justify-between gap-6">
                    <button onClick={open} className="group flex items-center gap-4 border-b border-lime pb-3 font-mono text-[10px] font-bold uppercase tracking-[0.08em]">
                      {it.cta}
                      <span className="relative inline-flex h-[18px] w-[18px] items-center justify-center overflow-hidden">
                        <FiArrowUpRight className="h-[18px] w-[18px] transition-all duration-500 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:translate-x-[140%] group-hover:-translate-y-[140%]" />
                        <FiArrowUpRight className="absolute h-[18px] w-[18px] -translate-x-[140%] translate-y-[140%] transition-all duration-500 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:translate-x-0 group-hover:translate-y-0" />
                      </span>
                    </button>
                    <p className="max-w-[260px] text-right text-[11px] text-ink/50">{it.note}</p>
                  </div>
                </Reveal>
                {i === 2 && (
                  <div className="mt-24 border-t border-b border-white/10 py-8">
                    <div className="grid items-start gap-6 md:grid-cols-[1fr_1fr_auto]">
                      <div><p className="mb-4 font-mono text-[9px] uppercase tracking-[0.1em] text-[#A3FF12]">Group sessions / Workshops</p><p className="font-display text-[24px] font-medium leading-[1.2] tracking-[-0.02em]">Need this for a room full of people?</p></div>
                      <p className="max-w-[260px] pt-7 text-[12px] leading-relaxed text-ink/55">Workshops, college sessions, and team training can be discussed too.</p>
                      <button onClick={open} className="group mt-7 flex items-center gap-4 border-b border-lime pb-3 font-mono text-[10px] font-bold uppercase tracking-[0.08em]">
                        Discuss a workshop
                        <span className="relative inline-flex h-[18px] w-[18px] items-center justify-center overflow-hidden">
                          <FiArrowUpRight className="h-[18px] w-[18px] transition-all duration-500 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:translate-x-[140%] group-hover:-translate-y-[140%]" />
                          <FiArrowUpRight className="absolute h-[18px] w-[18px] -translate-x-[140%] translate-y-[140%] transition-all duration-500 ease-[cubic-bezier(.2,.7,.2,1)] group-hover:translate-x-0 group-hover:translate-y-0" />
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}