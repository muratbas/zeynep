export default function Footer() {
  return (
    <footer className="w-full py-14 bg-[#f3ede4] flex flex-col items-center justify-center gap-5 border-t border-[#ddbfc5]/20">
      <div className="font-[var(--font-noto-serif)] text-lg text-[#901448] font-bold italic flex items-center gap-2">
        Zeynep&apos;i Çoook Seviyorum
        <span className="heartbeat text-[#c3004e]">♡</span>
      </div>


      <p className="font-[var(--font-jakarta)] text-xs text-[#8a7176] opacity-50">
        Murat tarafından, sadece Zeynep için. 🌹
      </p>
    </footer>
  );
}
