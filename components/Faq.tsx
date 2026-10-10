"use client";
import { useState } from "react";

const faqs = [
  ["Do I need to know exactly what I need?", "No. Give me the context and we can work out what kind of conversation would be useful."],
  ["Is this only for businesses?", "No. I also work with students, career-switchers, and working professionals learning cybersecurity."],
  ["Can I book a workshop or team session?", "Yes. Share the audience, topic, and what you would like people to leave understanding."],
  ["Is every consultation paid?", "There will be a free introductory option and paid sessions for focused work. The scope and fee are agreed before a paid booking."],
];

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="bg-[#090b09] px-5 py-28 md:px-[47px]">
      <div className="mx-auto grid w-full gap-12 2xl:max-w-[1440px] md:grid-cols-[1fr_818px]">
        <div><p className="eyebrow">Quick answers</p><h2 className="mt-14 font-display text-[clamp(40px,4.2vw,58px)] font-medium tracking-[-0.04em]">Before you ask.</h2></div>
        <ul className="border-t border-white/10">
          {faqs.map(([q, a], i) => (
            <li key={q} className="border-b border-white/10">
              <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} className="flex w-full items-center gap-8 py-8 text-left">
                <span className="font-mono text-[9px] text-[#A3FF12]">0{i + 1}</span>
                <span className="flex-1 font-display text-[19px] font-medium">{q}</span>
                <span className="text-[22px] font-light text-[#A3FF12]">{open === i ? "—" : "+"}</span>
              </button>
              <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr] pb-8" : "grid-rows-[0fr]"}`}>
                <p className="overflow-hidden pl-[54px] text-[14px] leading-[1.7] text-ink/55 md:max-w-[560px]">{a}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}