"use client";
import { useBooking } from "./Booking";
import Reveal from "./Reveal";
import { FiArrowUpRight } from "react-icons/fi";

export default function Cta() {
  const { open } = useBooking();
  return (
    <section className="bg-[#A3FF12] px-5 pb-28 pt-32 text-bg md:px-[47px] md:pb-36 md:pt-40">
      <div className="mx-auto w-full 2xl:max-w-[1440px]">
        <p className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.12em] before:h-px before:w-9 before:bg-bg">
          05 / Let's talk
        </p>
        <div className="mt-16 grid items-end gap-16 md:mt-20 md:grid-cols-[1fr_440px] md:gap-20">
          <Reveal
            as="h2"
            className="font-display text-[clamp(72px,11vw,180px)] font-medium leading-[0.92] tracking-[-0.05em]"
          >
            Bring the
            <br />
            <span className="text-bg/40">question.</span>
          </Reveal>
          <div>
            <p className="text-[17px] leading-[1.65] md:text-[18px]">
              A security concern, an ISO 27001 plan, a learning roadblock, or a
              technical decision that needs another pair of eyes.
            </p>
            <button
              onClick={open}
              className="mt-12 flex w-full items-center justify-between border border-transparent bg-bg px-6 py-[22px] font-mono text-[12px] text-[#A3FF12] transition hover:border-black hover:bg-transparent hover:text-black"
            >
              Book a consultation
              <FiArrowUpRight className="text-[16px]" />
            </button>
            <p className="mt-4 text-[12px] text-bg/70 md:text-[13px]">
              Start with an introduction, or make time for a focused working
              session.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}