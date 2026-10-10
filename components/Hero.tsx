export default function Hero() {
  return (
    <section id="top" className="bg-[#090b09] relative h-screen min-h-[640px] px-5 pb-10 pt-[93px] md:px-[55px]">
      <div className="relative h-full overflow-hidden border border-white/10 bg-[radial-gradient(circle_at_50%_45%,rgba(173,255,71,.06),transparent_55%)]">
        <div className="flex items-center justify-between border-b border-white/10 px-3 py-2 font-dm-mono text-[9px] uppercase tracking-[0.1em] text-mute">
          <span>FA / Personal system</span>
          <span className="hidden text-[#A3FF12] md:block">Security status: Operational</span>
          <span>fardeenahmed.info</span>
        </div>

        <span className="absolute left-10 top-[68px] font-dm-mono text-[9px] tracking-[0.1em] text-white/25 md:left-[38px] md:top-[90px]">
          AUTH / 01
        </span>

        <div className="absolute left-0 right-0 top-1/2 h-px bg-[#A3FF12]/5" />
        <div className="absolute bottom-[150px] left-1/2 top-[190px] w-px bg-[#A3FF12]/5" />
        <div className="absolute left-[57%] top-[230px] h-[250px] w-[22%] border-l border-b border-white/10" />

        <i className="absolute left-[78%] top-[180px] h-[5px] w-[5px] bg-[#A3FF12]" />
        <i className="absolute left-[16%] top-[420px] h-[5px] w-[5px] bg-[#A3FF12]" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <p className="mb-[22px] font-dm-mono text-[10px] uppercase tracking-[0.12em] text-mute">
            Cybersecurity practitioner / Founder
          </p>

          <h1 className="whitespace-nowrap pl-[0.25em] font-space-grotesk text-[clamp(44px,14.8vw,214px)] font-bold leading-[0.9] tracking-[0.25em] text-ink">
            FARDEEN
          </h1>

          <p className="mt-[34px] font-dm-mono text-[10px] uppercase tracking-[0.12em] text-white/30">
            Security / Standards / Mentorship
          </p>
        </div>

        <span className="absolute bottom-10 right-8 font-dm-mono text-[9px] uppercase tracking-[0.1em] text-[#A3FF12] md:right-[38px]">
          Scope verified
        </span>
      </div>

      <div className="absolute bottom-[14px] right-12 flex items-center gap-3 font-dm-mono text-[10px] uppercase tracking-[0.1em] text-mute md:right-[75px]">
        Scroll to continue
        <div className="relative h-8 w-px bg-white/20 overflow-hidden">
          <div className="absolute top-0 h-3 w-full bg-[#A3FF12] animate-scroll-line" />
        </div>
      </div>
    </section>
  );
}