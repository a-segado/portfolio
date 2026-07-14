"use client";

import ScrapbookName from "../ScrapbookName";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ImageWithFallback } from '../ImageWithFallback';

const STICKERS = [
  { src: "/stickers/camera.png", alt: "camera", style: { top: "-5.0%", left: "0.1%", width: 460, rotate: "-12deg" } },
  { src: "/stickers/flowers.png", alt: "flowers", style: { top: "6.0%", left: "28%", width: 350, rotate: "-8deg" } },
  { src: "/stickers/headphones.png", alt: "headphones", style: { top: "2.5%", left: "60%", width: 340, rotate: "7deg" } },
  { src: "/stickers/switch.png", alt: "switch", style: { top: "4%", right: "0.5%", width: 395, rotate: "10deg" } },
  { src: "/stickers/cupcake.png", alt: "cupcake", style: { top: "37%", left: "4.5%", width: 340, rotate: "-6deg" } },
  { src: "/stickers/mymelody.png", alt: "my melody", style: { top: "31%", right: "4%", width: 460, rotate: "-8deg" } },
  { src: "/stickers/lego.png", alt: "lego", style: { bottom: "7%", left: "0.5%", width: 360, rotate: "14deg" } },
  { src: "/stickers/smiski.png", alt: "smiski", style: { bottom: "9%", left: "18%", width: 410, rotate: "-9deg" } },
  { src: "/stickers/fidget.png", alt: "fidget", style: { bottom: "7%", left: "43%", width: 340, rotate: "-5deg" } },
  { src: "/stickers/matcha.png", alt: "matcha", style: { bottom: "9%", right: "20%", width: 345, rotate: "7deg" } },
  { src: "/stickers/golf.png", alt: "golf", style: { bottom: "6%", right: "4.5%", width: 360, rotate: "-10deg" } },
];

export function Home() {
  return (
    <div className="min-h-screen relative pt-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        {STICKERS.map((sticker) => (
          <div
            key={sticker.alt}
            className="absolute drop-shadow-md"
            style={{
              top: sticker.style.top,
              left: sticker.style.left,
              right: sticker.style.right,
              bottom: sticker.style.bottom,
              width: sticker.style.width,
              transform: `rotate(${sticker.style.rotate})`,
            }}
          >
            <ImageWithFallback
              src={sticker.src}
              alt={sticker.alt}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>

        <div className="relative z-10 min-h-screen flex items-center justify-center -translate-y-10 sm:-translate-y-14 md:-translate-y-20 scale-110 sm:scale-115 md:scale-125">
        <ScrapbookName />
      </div>

        <div className="fixed bottom-8 left-0 right-0 flex justify-center gap-9 z-20">
        <a
          href="https://www.linkedin.com/in/angelinesegado"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-[3.125rem] w-[3.125rem] items-center justify-center rounded-full border border-[#e8dff3] bg-white/90 text-[#4a1a6b] shadow-[0_6px_18px_rgba(74,26,107,0.16)] transition-all hover:scale-110 hover:text-[#7b2cbf]"
          aria-label="LinkedIn"
        >
            <FaLinkedin size={27} />
        </a>
        <a
          href="https://github.com/a-segado"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-[3.125rem] w-[3.125rem] items-center justify-center rounded-full border border-[#e8dff3] bg-white/90 text-[#4a1a6b] shadow-[0_6px_18px_rgba(74,26,107,0.16)] transition-all hover:scale-110 hover:text-[#7b2cbf]"
          aria-label="GitHub"
        >
            <FaGithub size={27} />
        </a>
        <a
          href="mailto:ak.segado@gmail.com"
          className="flex h-[3.125rem] w-[3.125rem] items-center justify-center rounded-full border border-[#e8dff3] bg-white/90 text-[#4a1a6b] shadow-[0_6px_18px_rgba(74,26,107,0.16)] transition-all hover:scale-110 hover:text-[#7b2cbf]"
          aria-label="Email"
        >
            <FaEnvelope size={27} />
        </a>
      </div>
    </div>
  );
}
