# Teknoloji Bağlamı

## Kullanılan Teknolojiler
- **HTML5** — Yapı
- **Tailwind CSS CDN** (`cdn.tailwindcss.com?plugins=forms,container-queries`) — Tasarım
- **Vanilla JavaScript** — Gün sayacı, interaktif elementler
- **Google Fonts** — Noto Serif, Plus Jakarta Sans
- **Google Material Symbols** — İkonlar

## Renk Paleti (Tailwind Config)
Tüm renkler `tailwind.config` üzerinden genişletiliyor:
- `primary`: #901448
- `primary-container`: #b03060
- `secondary`: #805062
- `surface`: #fff9f0
- `background`: #fff9f0
- `outline-variant`: #ddbfc5

## Önemli CSS Sınıfları
- `.glass-nav` — `backdrop-filter: blur(12px)` ile cam efekti nav
- `.material-symbols-outlined` — İkon font varyasyon ayarları

## Dosya Yapısı
```
zeynepwebsite/
├── index.html         # Ana sayfa (tek dosya site)
├── AGENTS.md
└── memory-bank/
    ├── projectbrief.md
    ├── productContext.md
    ├── techContext.md
    ├── systemPatterns.md
    ├── activeContext.md
    └── progress.md
```

## Geliştirme Kurulumu
- Tarayıcıda direkt `index.html` açılarak çalışır (sunucu gerekmez)
- CDN bağlantıları gerektirir (internet bağlantısı)
