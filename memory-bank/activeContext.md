# Aktif Bağlam

## Şu Anki Odak
Site Vercel'de yayında (github.com/muratbas/zeynep). Aktif geliştirme devam ediyor.

## Son Yapılanlar
- Next.js 16 + TypeScript + Tailwind CSS v4 ile proje kuruldu
- Tüm sayfalar component mimarisine bölündü:
  - `Header.tsx` — glass nav (şimdi sadece logo)
  - `HeroSection.tsx` — gün sayacı, düşen petallar, gradient bg
  - `PlaylistSection.tsx` — şarkı kartları, Spotify linki
  - `AboutSection.tsx` — Murat vs Zeynep interaktif tablo
  - `Footer.tsx` — romantik footer
  - `FAB.tsx` — sağ alt kalp butonu
  - `HeartClickEffect.tsx` — her tıklamada kalp efekti (YENİ)
- Veri dosyaları: `data/songs.ts`, `data/facts.ts` (placeholder içerikle)
- Vercel deploy sorunu çözüldü: Root Directory → `nextapp`
- CSS parsing hatası çözüldü: font @import'ları CSS'den kaldırıldı, next/font kullanıldı
- Site başarıyla Vercel'de yayında

## Kullanıcının Kendi Yaptığı Değişiklikler
- HeroSection: "Piksellerle yazılmış bir aşk mektubu" alt başlığı silindi
- HeroSection: Scroll ok ("keşfet" + arrow) kaldırıldı
- PlaylistSection: "♪ Bizi Anlatan Melodiler" → sadece "♪" bırakıldı
- PlaylistSection: Alt yazı "Bu şarkılar seni aklıma getiriyor" yapıldı

## Aktif Kararlar
- Navbar: Sadece logo kalacak (nav linkleri + hamburger + kalp butonu kaldırıldı)
- Global tıklama efekti: Her tıklamada cursor'da kalp emoji fadeaway olacak
- Tüm içerik Türkçe
- Placeholder içerikler: Murat kendisi güncelleyecek (songs.ts, facts.ts)

## Sonraki Adımlar
- Murat'ın kendi fotoğrafını hero bölümüne eklemesi
- Spotify playlist linkini güncellemesi (`data/songs.ts`)
- 10 şey tablosundaki kendi gerçeklerini yazması (`data/facts.ts`)
- Şarkı adı/sanatçı bilgilerini güncellemesi
