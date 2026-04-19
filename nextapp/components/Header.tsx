"use client";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 glass-nav shadow-[0_8px_32px_rgba(144,20,72,0.08)]">
      <div className="flex items-center justify-center w-full px-5 py-4">
        {/* Logo — sadece bu kalacak */}
        <div className="font-[var(--font-noto-serif)] text-base md:text-xl font-bold italic text-[#901448] flex items-center gap-1.5 select-none">
          Zeynep&apos;i Çoook Seviyorum
          <span className="heartbeat text-[#c3004e]">♡</span>
        </div>
      </div>
    </header>
  );
}
