# Sistem Desenleri

## Sayfa Mimarisi
Tek sayfalık uygulama (SPA benzeri) — tüm içerik `index.html` içinde.
Hash linkleriyle (#playlist, #hakkinda) bölümler arası geçiş.

## Bölüm Sırası
1. `<header>` — Sabit glass nav
2. `<main>`
   a. Hero bölümü (gün sayacı dahil)
   b. Spotify Çalma Listesi (`#playlist`)
   c. 10 Şey Tablosu (`#hakkinda`)
3. `<footer>`
4. FAB butonu (sağ alt)

## Gün Sayacı Mantığı
```javascript
const baslamaTarihi = new Date('2026-03-26T00:00:00');
const bugun = new Date();
const fark = Math.floor((bugun - baslamaTarihi) / (1000 * 60 * 60 * 24));
document.getElementById('gun-sayaci').textContent = fark;
```

## Placeholder Konvansiyonu
Murat'ın sonradan değiştireceği içerikler için HTML yorumu:
`<!-- PLACEHOLDER: [açıklama] -->`

## Kart Deseni (Şarkı Kartları)
- `bg-surface-container-lowest` arka plan
- `rounded-xl` köşeler
- `hover:scale-[1.02]` hover efekti
- `group` sınıfı ile child hover triggering
- Görüntü üzerinde `backdrop-blur` overlay (hover'da görünür)

## İnteraktif Tablo Deseni
- `grid grid-cols-2` ile iki sütun
- Sol: Murat'ın gerçekleri (statik metin)
- Sağ: Zeynep'in dolduracağı `<input>` alanları
- `border-b border-outline` altı çizgili input stili
