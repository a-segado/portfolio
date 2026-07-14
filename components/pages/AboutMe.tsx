"use client";
import { useState } from "react";
import { motion } from "motion/react";

const PHOTOS = [
  { id: 1, src: "/photos/ironringange.jpg", alt: "ironringange" },
  { id: 2, src: "/photos/alberta ange.jpg", alt: "alberta ange" },
  { id: 3, src: "/photos/italy ange.jpg", alt: "italy ange" },
];

const INTERESTS = [
  { emoji: "🎮", label: "gaming" },
  { emoji: "📸", label: "photography" },
  { emoji: "🌿", label: "matcha" },
  { emoji: "🎵", label: "music" },
  { emoji: "🧩", label: "puzzles" },
];

function PhotoStack() {
  const [stack, setStack] = useState(PHOTOS);
  const [animating, setAnimating] = useState(false);

  function cyclePhoto() {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setStack((prev) => {
        const [top, ...rest] = prev;
        return [...rest, top];
      });
      setAnimating(false);
    }, 350);
  }

  const rotations = [-2, 3, -5];

  return (
    <div
      className="relative cursor-pointer select-none"
      style={{ width: 250, height: 270 }}
      onClick={cyclePhoto}
      title="click to cycle photos"
    >
      {[...stack].reverse().map((photo, reverseIdx) => {
        const idx = stack.length - 1 - reverseIdx;
        const isTop = idx === 0;
        const rotation = rotations[idx % rotations.length];
        const offset = idx * 5;

        return (
          <div
            key={photo.id}
            className="absolute inset-0 overflow-hidden"
            style={{
              transform: `rotate(${rotation}deg) translate(${offset}px, ${offset * 0.5}px)`,
              transition: isTop && animating
                ? "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s"
                : "transform 0.2s ease",
              opacity: isTop && animating ? 0.6 : 1,
              zIndex: idx === 0 ? 10 : idx,
              padding: "8px 8px 28px 8px",
              background: "#fff",
              boxShadow: isTop
                ? "0 10px 30px rgba(74,26,107,0.20), 0 2px 8px rgba(74,26,107,0.10)"
                : "0 3px 10px rgba(74,26,107,0.12)",
              borderRadius: "2px",
            }}
          >
            <div
              className="w-full h-full overflow-hidden"
              style={{ background: "#e8d5f2", borderRadius: "1px" }}
            >
              {photo.src ? (
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-[#9b7bb8] text-xs font-mono text-center px-3 leading-relaxed">
                    {photo.alt}
                    <br />
                    <span className="opacity-50">add your photo</span>
                  </span>
                </div>
              )}
            </div>
          </div>
        );
      })}

      <div
        className="absolute -bottom-7 left-0 right-0 text-center text-[#9b7bb8] text-xs font-mono opacity-60"
        style={{ pointerEvents: "none" }}
      >
        click to flip
      </div>
    </div>
  );
}

export function AboutMe() {
  return (
    <div className="min-h-screen pt-12">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-medium mb-8 text-[#4a1a6b]">about me</h2>

        <div className="flex gap-10 items-start mb-12">
          <div className="flex-1 max-w-none flex flex-col space-y-4 text-[#4a1a6b] text-[0.9rem] md:text-[0.975rem] leading-relaxed">
  <p>
    hi there! i'm Angeline Segado, a recent graduate in computer engineering from McMaster University.
  </p>
  <p>
    i love bridging the gap between hardware, software, and data. i thrive on solving complex puzzles and turning abstract ideas into functional, real-world tech—whether that means optimizing data workflows, building hands-on projects, or modernizing web applications.
  </p>
  <p>
    i’ve previously worked at Flipp and Vale Base Metals, where i had the chance to dive into everything from data analytics to operational support. Right now, my main focus is on technical growth and taking on new challenges in software and logic design. Above all, i love staying curious and keeping an open mind, always ready to pick up a new tool or framework to solve the problem at hand.
  </p>
  <p>
    outside of work and school, you can usually find me reading, playing pickleball, or trying to pick up a new art project. my current favorite is working on my junk journal!
  </p>
</div>

          <div className="flex-shrink-0 mt-1" style={{ paddingBottom: 32 }}>
            <PhotoStack />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-mono font-medium text-[#9b7bb8] uppercase tracking-widest mb-4">
            interests
          </h3>
          <div className="flex flex-wrap gap-2">
            {INTERESTS.map(({ emoji, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[0.9rem] font-mono font-medium text-[#4a1a6b] border border-[#c77dff]/50 bg-white/60 hover:bg-[#c77dff]/20 transition-colors"
              >
                {emoji} {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
