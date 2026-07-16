"use client";
import { motion } from "motion/react";

export function Education() {
  return (
    <div className="min-h-screen pt-12">
      <div className="max-w-3xl">
        <motion.h2
          className="text-4xl font-medium mb-8 text-[#4a1a6b]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          education
        </motion.h2>
        
        <motion.div
          className="text-[#4a1a6b] leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
        >
          {/* Degree Info */}
          <div className="space-y-1 text-[0.9rem] md:text-[0.975rem]">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 font-semibold text-[#4a1a6b]">
              <span>McMaster University</span>
              <span className="text-sm sm:text-[0.95rem] font-normal text-[#6a3a8b]/80">Sept 2021 - Apr 2026</span>
            </div>
            <p className="text-[#5e2f83] text-[0.95rem] md:text-[1.025rem] font-medium">
              Bachelor of Engineering, Computer Engineering (Co-op)
            </p>
          </div>

          {/* Awards */}
          <ul className="mt-4 space-y-1.5 text-[0.88rem] md:text-[0.95rem] text-[#6a3a8b]">
            <li className="flex gap-2">
              <span className="text-[#5e2f83]/60">—</span>
              <span>Engineering Award of Excellence</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#5e2f83]/60">—</span>
              <span>Engineering Dean's Excellence</span>
            </li>
          </ul>

          {/* Categorized Relevant Coursework */}
          <div className="mt-8">
            <h3 className="text-sm md:text-[0.95rem] font-semibold text-[#5e2f83] mb-4 tracking-wide uppercase">
              Relevant Coursework
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-[0.88rem] md:text-[0.95rem] text-[#6a3a8b]">
              {/* Category 1 */}
              <div>
                <h4 className="font-semibold text-[#5e2f83] mb-2 text-[0.9rem]">Hardware & Systems</h4>
                <ul className="space-y-1.5">
                  <li className="flex gap-2">
                    <span className="text-[#5e2f83]/60">—</span>
                    <span>Digital & Logic Systems</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#5e2f83]/60">—</span>
                    <span>Microprocessors & Embedded Systems</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#5e2f83]/60">—</span>
                    <span>Computer Architecture</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#5e2f83]/60">—</span>
                    <span>Operating Systems</span>
                  </li>
                </ul>
              </div>

              {/* Category 2 */}
              <div>
                <h4 className="font-semibold text-[#5e2f83] mb-2 text-[0.9rem]">Software & Computing</h4>
                <ul className="space-y-1.5">
                  <li className="flex gap-2">
                    <span className="text-[#5e2f83]/60">—</span>
                    <span>Data Structures & Algorithms</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#5e2f83]/60">—</span>
                    <span>Software Development</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#5e2f83]/60">—</span>
                    <span>Machine Learning</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#5e2f83]/60">—</span>
                    <span>Numerical Methods</span>
                  </li>
                </ul>
              </div>

              {/* Category 3 */}
              <div>
                <h4 className="font-semibold text-[#5e2f83] mb-2 text-[0.9rem]">Circuits, Signals & Networks</h4>
                <ul className="space-y-1.5">
                  <li className="flex gap-2">
                    <span className="text-[#5e2f83]/60">—</span>
                    <span>Circuits & Electronic Devices</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#5e2f83]/60">—</span>
                    <span>Signals, Systems & Controls</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#5e2f83]/60">—</span>
                    <span>Computer Networks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}