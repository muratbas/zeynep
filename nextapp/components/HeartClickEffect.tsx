"use client";

import { useEffect } from "react";

const HEARTS = ["♡", "♥", "💕", "💗", "💓", "🌹", "✨"];

export default function HeartClickEffect() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Kaç tane kalp çıkacak (1-2 arası)
      const count = Math.random() < 0.4 ? 2 : 1;

      for (let i = 0; i < count; i++) {
        const heart = document.createElement("div");

        heart.textContent = HEARTS[Math.floor(Math.random() * HEARTS.length)];

        const size = 16 + Math.random() * 18; // 16–34px
        const offsetX = (Math.random() - 0.5) * 30; // hafif yatay sapma
        const duration = 700 + Math.random() * 400; // 700–1100ms
        const delay = i * 60; // çift çıkınca hafif gecikme

        heart.style.cssText = `
          position: fixed;
          left: ${e.clientX + offsetX}px;
          top: ${e.clientY}px;
          font-size: ${size}px;
          pointer-events: none;
          user-select: none;
          z-index: 99999;
          transform: translate(-50%, -50%);
          animation: heartFloatUp ${duration}ms ease-out ${delay}ms forwards;
          will-change: transform, opacity;
        `;

        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), duration + delay + 50);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
