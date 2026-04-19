"use client";

import { useRef } from "react";

export default function FAB() {
  const burstRef = useRef<HTMLDivElement>(null);

  const spawnBurst = () => {
    const emojiler = ["💕", "🌹", "✨", "💫", "🌸"];
    for (let i = 0; i < 6; i++) {
      const el = document.createElement("div");
      el.textContent = emojiler[Math.floor(Math.random() * emojiler.length)];
      el.style.cssText = `
        position: fixed;
        bottom: 80px;
        right: 32px;
        font-size: ${16 + Math.random() * 14}px;
        pointer-events: none;
        z-index: 9999;
        animation: fadeInUp 1.2s ease-out forwards;
        animation-delay: ${i * 0.08}s;
        opacity: 0;
        transform: translateX(${(Math.random() - 0.5) * 60}px);
      `;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 1500);
    }
  };

  return (
    <>
      <div ref={burstRef} aria-hidden="true" />
      <button
        aria-label="Sürpriz"
        onClick={spawnBurst}
        className="fixed bottom-6 right-5 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#901448] to-[#b03060] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 z-50 group"
      >
        <span
          className="material-symbols-outlined text-2xl md:text-3xl"
          style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
        >
          favorite
        </span>
        {/* Tooltip — sadece md+ */}
        <span className="hidden md:block absolute right-20 bg-white text-[#901448] px-4 py-2 rounded-lg text-xs font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Zeynep&apos;i seviyorum! 🌹
        </span>
      </button>
    </>
  );
}
