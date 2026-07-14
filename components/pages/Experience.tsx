"use client";
import { motion } from "motion/react";

export function Experience() {
  return (
    <div className="min-h-screen pt-12">
      <div className="max-w-3xl">
        <motion.h2
          className="text-4xl font-medium mb-8 text-[#4a1a6b]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          experience
        </motion.h2>
        <div className="space-y-8">
          <motion.div
            className="border border-[#c77dff]/30 rounded-lg p-5 bg-white/40 hover:-translate-y-0.5 transition-transform"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.08 }}
          >
            <div className="flex items-baseline justify-between mb-1">
              <h3 className="text-lg font-semibold text-[#4a1a6b]">Processing Support Specialist</h3>
              <span className="text-sm font-mono text-[#9b7bb8]">Sept 2022 — Mar 2026</span>
            </div>
            <p className="text-[0.9rem] md:text-[0.975rem] text-[#7b2cbf] mb-3">Flipp</p>
            <ul className="space-y-1 text-[0.9rem] md:text-[0.975rem] text-[#6a3a8b] list-none">
              <li>Key responsibility or achievement</li>
              <li>Another accomplishment</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
