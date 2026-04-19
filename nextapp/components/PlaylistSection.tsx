import Link from "next/link";
import { songs, SPOTIFY_LINK } from "@/data/songs";

function SongCard({
  song,
}: {
  song: (typeof songs)[0];
}) {
  return (
    <div className="card-shine bg-white rounded-xl shadow-[0_16px_40px_rgba(144,20,72,0.08)] hover:scale-[1.02] hover:shadow-[0_24px_48px_rgba(144,20,72,0.14)] transition-all duration-300 group overflow-hidden">
      {/* Görsel */}
      <div className="relative aspect-square overflow-hidden rounded-t-xl">
        <div
          className={`w-full h-full bg-gradient-to-br ${song.gradient} flex items-center justify-center`}
        >
          <span
            className="note-dance text-5xl md:text-6xl"
            style={{ animationDelay: `${song.id * 0.35}s` }}
          >
            {song.emoji}
          </span>
        </div>
        {/* Hover overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-[#fff9f0]/80 backdrop-blur-md translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#901448]">
            {song.tag}
          </p>
        </div>
      </div>

      {/* Bilgi */}
      <div className="p-4">
        <h3 className="font-[var(--font-noto-serif)] text-lg font-bold text-[#901448] leading-snug">
          {song.name}
        </h3>
        <p className="text-[#805062] text-sm mt-0.5">
          {song.artist} — {song.note}
        </p>
      </div>
    </div>
  );
}

export default function PlaylistSection() {
  return (
    <section id="playlist" className="py-16 md:py-24 bg-[#f9f3ea] px-5">
      <div className="max-w-screen-lg mx-auto">
        {/* Başlık alanı */}
        <div className="flex flex-col gap-5 mb-10 md:mb-14">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#805062] mb-2 block">
              ♪ Bizi Anlatan Melodiler
            </span>
            <h2 className="font-[var(--font-noto-serif)] text-3xl md:text-5xl text-[#901448] font-bold tracking-tight mb-3">
              Çalma Listemiz
            </h2>
            <p className="text-[#574146] text-sm md:text-base leading-relaxed max-w-md">
              Bu şarkılar sadece müzik değil — birlikte yaşadığımız anların sesi.
            </p>
          </div>
          {/* Spotify butonu */}
          <Link
            href={SPOTIFY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start bg-gradient-to-br from-[#901448] to-[#b03060] text-white px-6 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-transform flex items-center gap-2 shadow-lg"
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

        {/* Şarkı kartları grid — mobilde 1 sütun, md'de 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {songs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      </div>
    </section>
  );
}
