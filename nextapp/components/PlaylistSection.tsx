import Link from "next/link";
import { SPOTIFY_LINK } from "@/data/songs";

export default function PlaylistSection() {
  return (
    <section id="playlist" className="py-16 md:py-24 bg-[#f9f3ea] px-5">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center text-center">
        {/* Başlık alanı */}
        <div className="flex flex-col items-center gap-5">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#805062] mb-2 block">
              ♪
            </span>
            <h2 className="font-[var(--font-noto-serif)] text-3xl md:text-5xl text-[#901448] font-bold tracking-tight mb-3">
              Çalma Listemiz
            </h2>
            <p className="text-[#574146] text-sm md:text-base leading-relaxed max-w-md mx-auto">
              Bu şarkılar seni aklıma getiriyor
            </p>
          </div>
          {/* Spotify butonu */}
          <Link
            href={SPOTIFY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-[#901448] to-[#b03060] text-white px-8 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-transform flex items-center gap-2 shadow-lg"
          >
            <span
              className="material-symbols-outlined text-xl"
              style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
            >
              play_circle
            </span>
            Spotify&apos;da Dinle
          </Link>
        </div>
      </div>
    </section>
  );
}
