"use client";
import { useEffect, useState } from "react";
import { useBooking } from "./Booking";
import { FiArrowUpRight } from "react-icons/fi";

export default function Header() {
  const { open } = useBooking();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  const link = "font-mono text-[11px] font-medium uppercase tracking-[0.12em] transition hover:text-[#A3FF12]";
  return (
    <header className={`fixed inset-x-0 top-0 z-50 flex h-[60px] items-center justify-between px-5 transition md:px-[55px] ${scrolled ? "border-b border-white/10 bg-bg/80 backdrop-blur-md" : ""}`}>
      <a href="#top" className="font-display text-[19px] font-bold tracking-[-0.04em]">Fardeen<span className="text-[#A3FF12]">.</span></a>
      <nav className="absolute left-1/2 hidden -translate-x-1/2 gap-8 md:flex">
        <a href="#expertise" className={link}>Expertise</a>
        <a href="#about" className={link}>About</a>
        <a href="#background" className={link}>Background</a>
      </nav>
      <button onClick={open} className={`${link} flex items-center gap-3`}>
        Book a consultation <FiArrowUpRight className="text-[14px]" />
      </button>
    </header>
  );
}