"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [heartFilled, setHeartFilled] = useState(true);

  return (
    <header className="fixed top-0 w-full z-50 glass-nav shadow-[0_8px_32px_rgba(144,20,72,0.08)]">
      <div className="flex justify-between items-center w-full px-5 md:px-12 py-4 max-w-screen-xl mx-auto">
        {/* Sol Nav — masaüstünde görünür */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link
            href="#playlist"
            className="text-[#901448] border-b-2 border-[#901448] pb-1 font-semibold hover:scale-105 transition-all duration-300 text-sm"
          >
            Çalma Listemiz
          </Link>
          <Link
            href="#hakkinda"
            className="text-[#805062] font-medium hover:scale-105 hover:text-[#901448] transition-all duration-300 text-sm"
          >
            Hakkımızda
          </Link>
        </nav>

        {/* Logo */}
        <div className="font-[var(--font-noto-serif)] text-base md:text-xl font-bold italic text-[#901448] flex items-center gap-1.5">
          Zeynep&apos;i Çoook Seviyorum
          <span className="heartbeat text-[#c3004e]">♡</span>
        </div>

        {/* Sağ butonlar */}
        <div className="flex items-center gap-3">
          <button
            aria-label="Kalp"
            onClick={() => setHeartFilled((v) => !v)}
            className="material-symbols-outlined text-[#901448] hover:scale-125 transition-all duration-300 select-none text-2xl"
            style={{
              fontVariationSettings: heartFilled
                ? "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24"
                : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
            }}
          >
            favorite
          </button>
          <button
            id="menu-btn"
            aria-label="Menü"
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden material-symbols-outlined text-[#901448] text-2xl"
          >
            {mobileOpen ? "close" : "menu"}
          </button>
        </div>
      </div>

      {/* Mobil menü */}
      {mobileOpen && (
        <div className="md:hidden px-5 pb-5 flex flex-col gap-4 border-t border-[#ddbfc5]/20 pt-3">
          <Link
            href="#playlist"
            onClick={() => setMobileOpen(false)}
            className="text-[#901448] font-semibold text-base"
          >
            Çalma Listemiz
          </Link>
          <Link
            href="#hakkinda"
            onClick={() => setMobileOpen(false)}
            className="text-[#805062] font-medium text-base"
          >
            Hakkımızda
          </Link>
        </div>
      )}
    </header>
  );
}
