import Reveal from "./Reveal";

const creds = [["ISO/IEC 27001:2022 Lead Implementer", "BSI"], ["ISO/IEC 27001:2022 Lead Auditor", "BSI"], ["Certified Ethical Hacker", "CEH"], ["EC-Council Instructor", ""], ["CCNA Routing and Switching", ""], ["Red Hat Certified System Administrator", "RHCSA"]];

export default function Background() {
  return (
    <section id="background" className="bg-[#111511] px-5 py-32 md:px-[55px]">
      <Reveal className="grid items-end gap-10 md:grid-cols-2">
        <div><p className="eyebrow">03 / Background</p><h2 className="h2 mt-12">Yes, there is<br />some history.</h2></div>
        <p className="max-w-[360px] text-[14px] leading-[1.7] text-ink/45 md:ml-[196px]">Workshops, seminars, practical sessions, and a lot of questions that started with ‘this might be a stupid question’. It usually wasn’t.</p>
      </Reveal>
      <div className="mt-20 grid border-t border-white/10 md:grid-cols-2">
        {[["10", "Years of cybersecurity\nmentoring and training"], ["5,000", "Students trained"]].map(([n, l], i) => (
          <div key={n} className={`pb-10 pt-8 ${i ? "md:border-l md:border-white/10 md:pl-[48px]" : ""}`}>
            <p className="font-display text-[clamp(110px,14vw,200px)] font-light leading-[0.9] tracking-[-0.06em]">{n}<span className="text-[#A3FF12]">+</span></p>
            <p className="mt-16 whitespace-pre-line font-mono text-[10px] uppercase leading-[1.6] tracking-[0.1em] text-mute">{l}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 border-y border-white/10 py-[26px]">
        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.08em] text-[#A3FF12]">Workshop and teaching background</span>
        <span className="flex items-center gap-4 text-[13px] text-ink/60">JAIN University, Bengaluru <i className="h-[4px] w-[4px] bg-[#A3FF12]" /> Manipal University Jaipur</span>
      </div>
      <div className="mt-28 grid gap-12 md:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <p className="font-mono text-[9px] font-bold uppercase tracking-[0.08em] text-[#A3FF12]">Credentials / Selected qualifications</p>
          <h3 className="mt-8 font-display text-[clamp(36px,3.8vw,52px)] font-medium tracking-[-0.04em]">The formal stuff.</h3>
          <p className="mt-9 max-w-[250px] text-[12px] leading-[1.7] text-ink/50">Compact on purpose. The work should still do most of the talking.</p>
        </Reveal>
        <ul className="border-t border-white/10">
          {creds.map(([c, t], i) => (
            <li key={c} className="flex items-center justify-between border-b border-white/10 py-[19px] text-[13px]">
              <span className="flex items-center gap-8"><span className="font-mono text-[8px] text-mute">0{i + 1}</span>{c}</span>
              <span className="font-mono text-[9px] font-bold text-[#A3FF12]">{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
