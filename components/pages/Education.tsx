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
          <div className="space-y-2 text-[0.9rem] md:text-[0.975rem]">
            <p className="font-semibold text-[#4a1a6b]">
              McMaster University <span className="ml-40">Sept 2021 - Apr 2026</span>
            </p>
            <p className="text-[#5e2f83] text-[0.95rem] md:text-[1.025rem] font-medium">
              Bachelor of Engineering, Computer Engineering (Co-op)
            </p>
          </div>
          <ul className="mt-3 space-y-2 text-[0.88rem] md:text-[0.95rem] text-[#6a3a8b]">
            <li className="flex items-start gap-2.5">
              {/* Custom accent square */}
              <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-sm bg-[#5e2f83]" />
              <span>Engineering Award of Excellence</span>
            </li>
            
            <li className="flex items-start gap-2.5">
              {/* Custom accent square */}
              <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-sm bg-[#5e2f83]" />
              <span>Engineering Dean's Excellence</span>
            </li>
          </ul>
          <div className="mt-5">
            <h3 className="text-sm md:text-[0.95rem] font-medium text-[#5e2f83] mb-2">
              Relevant Courses
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-[0.88rem] md:text-[0.95rem] text-[#6a3a8b]">
              <li>Logic Design</li>
              <li>Microprocessor Systems</li>
              <li>Data Structures & Algorithms</li>
              <li>Circuits & Waves </li>
              <li>Circuit Analysis</li>
              <li>Electronic Devices and Circuits</li>
              <li>Digital Systems Design</li>
              <li>Algorithm Design & Analysis</li>
              <li>Control Systems</li>
              <li>Signal & Systems</li>
              <li>Communication Systems</li>
              <li>Software Development</li>
              <li>Computer Communication Networks</li>
              <li>Embedded Systems</li>
              <li>Computer Architecture</li>
              <li>Machine Learning</li>
              <li>Numerical Methods</li>
              <li>Operating Systems</li>
              
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
