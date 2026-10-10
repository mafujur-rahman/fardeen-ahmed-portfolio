"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { FiArrowRight, FiArrowLeft, FiX } from "react-icons/fi";

const Ctx = createContext<{ open: () => void }>({ open: () => {} });
export const useBooking = () => useContext(Ctx);

const topics = ["Cybersecurity", "ISO 27001", "Mentorship", "Workshops and training", "AI, technology, or branding", "Not sure yet"];

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(1);
  const [type, setType] = useState("free");
  const [topic, setTopic] = useState("Not sure yet");
  const [formData, setFormData] = useState({ name: "", email: "", org: "", message: "" });

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setShow(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [show]);

  const close = () => { setShow(false); setTimeout(() => setStep(1), 300); };
  const line = "w-full border-b border-white/15 bg-transparent py-3 text-[15px] text-ink outline-none transition-colors focus:border-lime";
  const lab = "font-mono text-[10px] uppercase tracking-[0.1em] text-ink";

  return (
    <Ctx.Provider value={{ open: () => setShow(true) }}>
      {children}
      <div className={`fixed inset-0 z-[90] transition-opacity duration-300 ${show ? "opacity-100" : "pointer-events-none opacity-0"}`} role="dialog" aria-modal="true" aria-label="Book a consultation">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={close} />
        <div className="pointer-events-none absolute inset-0 flex items-center overflow-hidden pl-[6vw] font-mono text-[28vw] font-bold leading-none text-white/10 blur-md">FA</div>
        
        {/* Main Panel Drawer */}
        <div className={`absolute inset-y-0 right-0 flex w-full bg-panel transition-transform duration-500 md:w-[68%] ${show ? "translate-x-0" : "translate-x-full"}`}>
          
          {/* Left Sidebar matching right panel background */}
          <div className="relative hidden w-16 shrink-0 border-r border-white/10 bg-panel md:flex flex-col justify-between items-center py-8">
            {/* Vertical line connecting top text and bottom step counter */}
            <div className="absolute top-28 bottom-16 w-[1px] bg-white/10" />

            {/* Top Rotated Label */}
            <div className="z-10 font-mono text-[9px] uppercase tracking-[0.2em] text-white/40 [writing-mode:vertical-rl] rotate-180">
              BOOKING / PREVIEW
            </div>

            {/* Bottom Step Indicator */}
            <div className="z-10 font-mono text-[10px] tracking-widest text-white/50">
              0{step} / 02
            </div>
          </div>

          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto px-6 py-10 md:px-12 md:py-14">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.1em]">
                {step === 1 ? "Consultation request" : ""}
              </span>
              <button onClick={close} aria-label="Close" className="grid h-10 w-10 place-items-center border border-white/20 transition hover:border-lime hover:text-[#A3FF12]">
                <FiX size={14} />
              </button>
            </div>

            {step === 1 ? (
              <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="mt-12">
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#A3FF12]">Preview interface</p>
                <h2 className="mt-4 font-display text-[clamp(40px,5.4vw,68px)] font-medium leading-none tracking-[-0.04em]">Book a consultation</h2>
                <p className="mt-4 text-[14px] text-mute">Choose the kind of conversation, then add enough context to make the first reply useful.</p>
                
                <p className={`${lab} mt-10`}>Session type</p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  {[["free", "Free introductory call", "A first conversation about what you need and whether I am the right person to help."], ["paid", "Paid consultation", "A focused session for a specific problem, decision, or learning goal. Scope and fee agreed before booking."]].map(([id, t, d]) => (
                    <button type="button" key={id} onClick={() => setType(id)} className={`border p-5 text-left transition ${type === id ? "border-lime bg-[#A3FF12]/10" : "border-white/15 hover:border-white/40"}`}>
                      <span className={`mb-5 block h-2.5 w-2.5 rounded-full border ${type === id ? "border-lime bg-[#A3FF12]" : "border-white/40"}`} />
                      <span className="block font-display text-[19px] font-medium">{t}</span>
                      <span className="mt-3 block text-[11.5px] leading-relaxed text-mute">{d}</span>
                    </button>
                  ))}
                </div>

                <p className={`${lab} mt-8`}>What would you like to discuss?</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {topics.map((t) => (
                    <button type="button" key={t} onClick={() => setTopic(t)} className={`border px-4 py-2.5 font-mono text-[11px] transition ${topic === t ? "border-lime bg-[#A3FF12] text-bg" : "border-white/15 text-mute hover:border-white/40"}`}>{t}</button>
                  ))}
                </div>

                <div className="mt-8 grid gap-x-8 md:grid-cols-2">
                  <label className={lab}>Name<input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className={line} /></label>
                  <label className={lab}>Email<input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className={line} /></label>
                </div>
                
                <label className={`${lab} mt-6 block`}>Organisation <span className="text-mute">Optional</span><input value={formData.org} onChange={e => setFormData({...formData, org: e.target.value})} className={line} /></label>
                <label className={`${lab} mt-6 block`}>What would you like to discuss?<textarea rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className={`${line} resize-y`} /></label>
                
                <p className="mt-3 text-[11px] text-mute">Please leave out passwords, credentials, and confidential client information.</p>
                
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-[11px] text-mute">No data is transmitted or saved in this prototype.</p>
                  <button type="submit" className="group flex items-center gap-10 border border-lime bg-[#A3FF12] px-7 py-4 font-mono text-[12px] text-bg transition hover:bg-transparent hover:text-[#A3FF12]">
                    Preview request <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="mt-12">
                <button onClick={() => setStep(1)} className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-mute transition hover:text-[#A3FF12] mb-4">
                  <FiArrowLeft /> Back
                </button>
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#A3FF12]">Request summary</p>
                <h2 className="mt-4 font-display text-[clamp(40px,5.4vw,68px)] font-medium leading-none tracking-[-0.04em]">Looks clear.</h2>
                
                <div className="mt-8 border border-lime/60 p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#A3FF12]">Preview only</p>
                  <p className="mt-2 text-[13px] text-mute">No request has been sent and no appointment has been booked.</p>
                </div>

                <div className="mt-8 divide-y divide-white/10 border-t border-b border-white/10 font-mono text-[12px]">
                  <div className="py-4 grid grid-cols-3"><span className="text-mute text-[10px] uppercase tracking-wider">Session</span><span className="col-span-2 text-ink">{type === "free" ? "Free introductory call" : "Paid consultation"}</span></div>
                  <div className="py-4 grid grid-cols-3"><span className="text-mute text-[10px] uppercase tracking-wider">Topic</span><span className="col-span-2 text-ink">{topic}</span></div>
                  <div className="py-4 grid grid-cols-3"><span className="text-mute text-[10px] uppercase tracking-wider">Name</span><span className="col-span-2 text-ink">{formData.name || "—"}</span></div>
                  <div className="py-4 grid grid-cols-3"><span className="text-mute text-[10px] uppercase tracking-wider">Email</span><span className="col-span-2 text-ink">{formData.email || "—"}</span></div>
                  <div className="py-4 grid grid-cols-3"><span className="text-mute text-[10px] uppercase tracking-wider">Organisation</span><span className="col-span-2 text-ink">{formData.org || "—"}</span></div>
                  {formData.message && <div className="py-4 grid grid-cols-3"><span className="text-mute text-[10px] uppercase tracking-wider">Context</span><span className="col-span-2 text-ink">{formData.message}</span></div>}
                </div>

                <div className="mt-8 border border-dashed border-white/20 p-6">
                  <p className="font-mono text-[11px] text-[#A3FF12]">Future scheduler handoff</p>
                  <p className="mt-2 text-[12px] text-mute">A verified scheduling provider will replace this preview action before launch.</p>
                </div>

                <div className="mt-10 flex items-center justify-between gap-4 pb-6">
                  <button onClick={() => setStep(1)} className="border border-white/20 px-6 py-4 font-mono text-[12px] text-ink transition hover:border-white">Edit details</button>
                  <button onClick={close} className="group border border-lime bg-[#A3FF12] px-7 py-4 font-mono text-[12px] text-bg transition hover:bg-transparent hover:text-[#A3FF12]">Close preview</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Ctx.Provider>
  );
}