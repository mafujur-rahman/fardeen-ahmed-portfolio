import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const m = "font-mono text-[8px] uppercase tracking-[0.1em] text-mute";
  return (
    <footer className="bg-[#090b09] border-t border-white/10 px-5 pb-6 pt-[70px] md:px-[47px]">
      <div className="grid items-start gap-8 md:grid-cols-[1fr_1.4fr_auto]">
        <p className="font-display text-[40px] font-bold tracking-[-0.05em]">Fardeen<span className="text-[#A3FF12]">.</span></p>
        <p className="max-w-[370px] text-[13px] leading-[1.6] text-ink/60 md:mt-1">Cybersecurity practitioner, mentor, trainer, and founder.</p>
        <a
          href="#top"
          className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.1em] transition hover:text-[#A3FF12]"
        >
          Back to top <FiArrowUp className="text-[12px]" />
        </a>
      </div>
      <div className="mt-20 flex flex-wrap justify-between gap-3 border-t border-white/10 pt-5">
        <span className={m}>© 2026 Fardeen Ahmed</span>
        <span className={m}>Minimal oversharing, occupational habit.</span>
        <span className={m}>fardeenahmed.info</span>
      </div>
    </footer>
  );
}