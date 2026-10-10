"use client";

import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#090b09] border-t border-white/10 px-5 py-32 md:px-[47px]"
    >
      <p className="eyebrow">02 / The person behind this</p>

      <div className="mt-14 grid gap-14 md:grid-cols-[minmax(0,1fr)_491px] md:gap-20">
        {/* Left content */}
        <div>
          <Reveal>
            <h2 className="h2">
              A little context.
              <br />
              <span className="text-sage">
                Very little oversharing.
              </span>
            </h2>
          </Reveal>

          <Reveal className="mt-20 max-w-[640px] space-y-8 text-[16px] leading-[1.75] text-ink/65 md:ml-[87px]">
            <p>
              Cybersecurity is where most of my work starts. I have spent
              years teaching, testing, and helping people understand systems
              beyond the tool they just installed.
            </p>

            <p>
              I also founded Ethical Den and Hivyr Technologies. Building
              businesses has taken me into AI, branding, and the practical
              decisions that sit between an idea and something people
              actually use.
            </p>

            <p>
              That is why the conversation might start with a security
              question and end with a better way to run something.
            </p>
          </Reveal>
        </div>

        {/* Privacy card */}
        <Reveal className="self-start">
          <div className="privacy-card group relative w-full border border-[#343a30]/90 bg-[#10130f]/90 p-[18px] pb-[62px] shadow-[0_0_50px_rgba(0,0,0,0.12)] transition-colors duration-500 hover:border-[#454e3d]">
            {/* Subtle background vignette */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(111,131,93,0.07),transparent_72%)]" />

            {/* Top metadata */}
            <div className="relative z-10 mb-[2px] flex h-[11px] items-center justify-between font-mono text-[8px] leading-none tracking-[0.07em]">
              <span className="text-[#858b7e]">
                photo_access: restricted
              </span>

              <span className="font-bold text-[#a7ff45]">
                NO FACE DATA
              </span>
            </div>

            {/* Scanning image area */}
            <div
              className="relative isolate aspect-[1.25] overflow-hidden bg-[#141812]"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(
                    to bottom,
                    transparent 0px,
                    transparent 23px,
                    rgba(210,220,198,0.045) 24px,
                    transparent 25px
                  ),
                  linear-gradient(
                    135deg,
                    rgba(255,255,255,0.018),
                    transparent 48%,
                    rgba(0,0,0,0.12)
                  )
                `,
              }}
            >
              {/* Circle: fixed size and position */}
              <div className="absolute left-1/2 top-[55%] aspect-square w-[59%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#65715e]/50" />

              {/* FA monogram: fixed size and position */}
              <span className="absolute left-1/2 top-[54%] -translate-x-1/2 -translate-y-1/2 font-mono text-[108px] font-medium leading-none tracking-[-0.13em] text-white/[0.045]">
                FA
              </span>

              {/* Lime tracking dot: moves smoothly */}
              <span className="absolute left-[21.5%] top-[34%] h-[6px] w-[6px] bg-[#a7ff45] transition-[left,top] duration-700 ease-in-out group-hover:left-[28%] group-hover:top-[24%]" />

              {/* First black bar: grows wider, stays at same height */}
              <div className="absolute left-[14%] top-[39%] h-[22px] w-[72%] bg-[#050605] transition-[left,width] duration-700 ease-in-out group-hover:left-[8%] group-hover:w-[84%]" />

              {/* Second black bar: becomes narrower, stays at same height */}
              <div className="absolute left-[5%] top-[51.5%] h-[22px] w-[90%] bg-[#050605] transition-[left,width] duration-700 ease-in-out group-hover:left-[16%] group-hover:w-[68%]" />

              {/* Third black bar: unchanged */}
              <div className="absolute left-[23%] top-[63.5%] h-[22px] w-[54%] bg-[#050605]" />

              {/* Subtle bottom fade */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t from-[#10130f]/30 to-transparent" />
            </div>

            {/* Privacy message */}
            <p className="relative z-10 mt-[25px] max-w-[390px] font-display text-[19px] font-medium leading-[1.42] tracking-[-0.035em] text-[#e3e5df]">
              Looking for a photo? I work in cybersecurity. The privacy thing
              comes with the job.
            </p>

            {/* Revealed on hover */}
            <p className="absolute bottom-[24px] left-[24px] translate-y-2 font-mono text-[9px] text-[#a7ff45] opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              Still private.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}