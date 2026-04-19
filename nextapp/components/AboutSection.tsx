"use client";

import { useState } from "react";
import { facts } from "@/data/facts";

export default function AboutSection() {
  const [zeynepAnswers, setZeynepAnswers] = useState<Record<number, string>>({});

  const handleChange = (id: number, value: string) => {
    setZeynepAnswers((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <section id="hakkinda" className="py-16 md:py-24 bg-[#f3ede4] px-5">
      <div className="max-w-4xl mx-auto">
        {/* Başlık */}
        <div className="mb-10 md:mb-14">
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#805062] mb-2 block">
            Seni Keşfetmek İstiyorum
          </span>
          <h2 className="font-[var(--font-noto-serif)] text-3xl md:text-5xl text-[#901448] font-bold tracking-tight leading-tight mb-2">
            Murat Hakkında<br />
            <span className="italic font-normal">Bilmen Gereken 10 Şey</span>
          </h2>
          <p className="text-[#574146] text-sm mt-2">
            Sağ taraftaki boşlukları sen doldur — seni tanımak istiyorum. 🤍
          </p>
        </div>

        {/* Tablo */}
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#ddbfc5]/15 bg-white">
          {/* Kolon başlıkları */}
          <div className="grid grid-cols-2">
            <div className="bg-[#f9f3ea] p-4 md:p-6 text-center border-b border-r border-[#ddbfc5]/20">
              <h4 className="font-[var(--font-noto-serif)] italic text-lg md:text-xl text-[#901448] flex items-center justify-center gap-1.5">
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
                >
                  person
                </span>
                Murat
              </h4>
            </div>
            <div className="bg-[#f9f3ea] p-4 md:p-6 text-center border-b border-[#ddbfc5]/20">
              <h4 className="font-[var(--font-noto-serif)] italic text-lg md:text-xl text-[#805062] flex items-center justify-center gap-1.5">
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
                >
                  favorite
                </span>
                Zeynep
              </h4>
            </div>
          </div>

          {/* Satırlar */}
          {facts.map((row, idx) => (
            <div
              key={row.id}
              className={`grid grid-cols-2 ${idx < facts.length - 1 ? "border-b border-[#ddbfc5]/10" : ""}`}
            >
              {/* Murat tarafı */}
              <div className="p-5 md:p-8 border-r border-[#ddbfc5]/10 bg-white">
                <p className="text-[#901448] font-medium text-sm md:text-base leading-relaxed">
                  {row.muratFact}
                </p>
              </div>
              {/* Zeynep tarafı */}
              <div className="p-5 md:p-8 bg-white">
                <input
                  type="text"
                  value={zeynepAnswers[row.id] ?? ""}
                  onChange={(e) => handleChange(row.id, e.target.value)}
                  placeholder={row.zeynepPlaceholder}
                  className="w-full bg-transparent border-b border-[#8a7176] focus:border-[#901448] text-[#805062] placeholder:text-[#ddbfc5] transition-colors py-1 text-sm md:text-base caret-[#901448]"
                />
              </div>
            </div>
          ))}

          {/* Son satır — özel */}
          <div className="grid grid-cols-2">
            <div className="p-5 md:p-8 border-r border-[#ddbfc5]/10 bg-white">
              <p className="text-[#901448] font-bold text-base md:text-lg leading-relaxed font-[var(--font-noto-serif)] italic">
                Seni her geçen gün daha çok seviyorum. 🌹
              </p>
            </div>
            <div className="p-5 md:p-8 bg-white flex items-center">
              <div className="flex items-center gap-2 text-[#805062] italic font-[var(--font-noto-serif)]">
                <span
                  className="material-symbols-outlined text-sm text-[#c3004e] heartbeat"
                  style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
                >
                  favorite
                </span>
                <span className="text-sm md:text-base">Cevabını bekliyorum...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
