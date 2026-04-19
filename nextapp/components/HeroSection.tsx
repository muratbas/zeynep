"use client";

import { useEffect, useRef, useState } from "react";

// Başlangıç tarihi: 26 Mart 2026
const START_DATE = new Date("2026-03-26T00:00:00");

function useDayCounter() {
  const [days, setDays] = useState(0);

  useEffect(() => {
    const today = new Date();
    const diff = Math.floor((today.getTime() - START_DATE.getTime()) / (1000 * 60 * 60 * 24));
    const target = diff >= 0 ? diff : 0;

    // Animasyonlu sayım
    let current = 0;
    const step = Math.max(1, Math.floor(target / 40));
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      setDays(current);
      if (current >= target) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return days;
}

export default function HeroSection() {
  const days = useDayCounter();
  const petalsRef = useRef<HTMLDivElement>(null);

  // Düşen emoji petalları
  useEffect(() => {
    const container = petalsRef.current;
    if (!container) return;
    const emojiler = ["🌸", "🌹", "💕", "🌷", "✨", "💫"];

    const spawnPetal = () => {
      const el = document.createElement("div");
      el.className = "petal";
      el.textContent = emojiler[Math.floor(Math.random() * emojiler.length)];
      el.style.left = Math.random() * 100 + "vw";
      el.style.fontSize = 12 + Math.random() * 14 + "px";
      el.style.opacity = (0.25 + Math.random() * 0.5).toString();
      el.style.animationDuration = 9 + Math.random() * 8 + "s";
      el.style.animationDelay = Math.random() * 3 + "s";
      container.appendChild(el);
      setTimeout(() => el.remove(), 20000);
    };

    // İlk yükleme için birkaç tane
    for (let i = 0; i < 6; i++) setTimeout(spawnPetal, i * 500);
    const interval = setInterval(spawnPetal, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-5 overflow-hidden">
      {/* Petaller konteyneri */}
      <div ref={petalsRef} aria-hidden="true" className="pointer-events-none" />

      {/* Arka plan */}
      <div className="absolute inset-0 -z-10">
        {/* PLACEHOLDER: Aşağıdaki gradient'i kendi fotoğrafınızla değiştirebilirsiniz */}
        <div className="w-full h-full bg-gradient-to-br from-[#ffd9e1] via-[#fff9f0] to-[#fec1d6]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fff9f0]/10 to-[#fff9f0]" />
        {/* Dekoratif daireler */}
        <div className="absolute top-[-10%] right-[-5%] w-72 h-72 md:w-96 md:h-96 rounded-full bg-[#ffb1c5]/30 blur-3xl" />
        <div className="absolute bottom-[10%] left-[-8%] w-56 h-56 md:w-80 md:h-80 rounded-full bg-[#ffd9e1]/40 blur-3xl" />
      </div>

      {/* İçerik */}
      <div className="relative z-10 text-center max-w-2xl mx-auto w-full">
        {/* Alt başlık */}
        <span className="fade-in-up delay-100 font-[var(--font-noto-serif)] italic text-[#901448] text-base md:text-lg mb-3 block tracking-wide">
          
        </span>

        {/* Ana başlık */}
        <h1 className="fade-in-up delay-250 font-[var(--font-noto-serif)] text-5xl md:text-7xl lg:text-8xl text-[#901448] font-bold tracking-tighter leading-[1.05] drop-shadow-sm">
          Her An<br />
          <span className="italic font-normal">Değer</span>
        </h1>

        {/* Açıklama */}
        <p className="fade-in-up delay-400 mt-5 text-[#574146] text-base md:text-lg max-w-md mx-auto leading-relaxed">
          26 Mart&apos;tan bu yana yaşadığımız her anı, melodiyi{" "}
          ve gülüşü sakladığım yer.
        </p>

        {/* Gün sayacı */}
        <div className="fade-in-up delay-550 mt-10 flex flex-col items-center gap-2">
          <div className="counter-box rounded-2xl px-8 py-5 md:px-12 md:py-7 flex flex-col items-center shadow-xl">
            <div className="flex items-end gap-2">
              <span
                id="gun-sayaci"
                className="glow-text font-[var(--font-noto-serif)] text-7xl md:text-9xl font-bold text-[#901448] leading-none"
              >
                {days}
              </span>
              <span className="font-[var(--font-noto-serif)] text-xl md:text-3xl text-[#805062] italic mb-2">
                gün
              </span>
            </div>
            <p className="text-[#574146] text-xs font-medium tracking-[0.18em] uppercase mt-1">
              Seninle Birlikte ♡
            </p>
          </div>
          <p className="text-[#8a7176] text-xs">26 Mart 2026&apos;dan beri</p>
        </div>
      </div>


    </section>
  );
}
