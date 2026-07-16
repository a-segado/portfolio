"use client";

import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const PROJECTS = [
  {
    title: "ASL Two-Way Communication Glove",
    subtitle: "Capstone accessibility system",
    description:
      "A capstone project that translates hand gestures into accessible communication using embedded sensors, gesture recognition, and a companion mobile app.",
    bullets: [
      "Built a gesture recognition system using an Arduino Nano 33 BLE Rev2 and custom KiCad PCB.",
      "Implemented a 10-dimensional weighted error-comparison algorithm to classify multi-modal sensor data with under two seconds of latency.",
      "Created a Flutter mobile app connected through Bluetooth Low Energy for real-time bilingual text-to-speech translation and safety-alert notifications.",
    ],
    tech: ["Flutter", "Dart", "Figma", "Arduino", "KiCad", "BLE"],
    github: "",
    live: "",
  },
  {
    title: "RolePrep AI Interview Simulator",
    subtitle: "AI interview practice platform",
    description:
      "An AI-powered interview practice platform that simulates bilingual technical and behavioral interviews with adaptive scoring and analytics.",
    bullets: [
      "Designed and deployed a bilingual Streamlit frontend with around 3,200 lines of code.",
      "Built adaptive 10-question interview simulations that adjust difficulty across technical and behavioral prompts.",
      "Created a Plotly analytics dashboard to track candidate performance across confidence, communication, technical accuracy, and algorithm choice.",
    ],
    tech: ["Python", "React", "Streamlit", "Plotly", "Figma"],
    github: "",
    live: "",
  },
  {
    title: "Embedded Real-Time Control System",
    subtitle: "Autonomous vehicle control system",
    description:
      "A real-time embedded system for autonomous vehicle control, sensor processing, speed compensation, and obstacle avoidance.",
    bullets: [
      "Developed a FreeRTOS firmware architecture managing 8 concurrent tasks with queues and semaphores.",
      "Built an adaptive speed compensation system using accelerometer data to adjust motor PWM duty cycles.",
      "Created a communication bridge between the FMU and Raspberry Pi using MAVLink and uORB messaging.",
      "Implemented obstacle avoidance with deceleration at 50 cm and emergency stop behavior at 15 cm.",
    ],
    tech: ["FMUK66", "Raspberry Pi", "FreeRTOS", "C", "C++", "MAVLink"],
    github: "",
    live: "",
  },
  {
    title: "Ange-bot",
    subtitle: "Azure OpenAI chat proxy",
    description:
      "A lightweight AI chat proxy with attachment handling, backend request routing, and guardrails for oversized input.",
    bullets: [
      "Built a React chat interface with an attachment picker, 2 MB payload guard, 4k-character truncation, and attachment chips.",
      "Implemented an Express proxy to Azure OpenAI with system prompts, knowledge-base-aware attachment notes, and 413 error handling.",
      "Used Fetch API, FileReader, and CORS handling to support frontend-backend communication.",
    ],
    tech: [
      "React",
      "Express",
      "Azure OpenAI SDK",
      "Fetch API",
      "FileReader",
      "CORS",
    ],
    github: "",
    live: "",
  },
  {
    title: "Demand Paging & Virtual Memory Simulator",
    subtitle: "Operating systems memory simulator",
    description:
      "A systems project that simulates virtual memory translation, TLB behavior, page faults, and backing-store access.",
    bullets: [
      "Built a virtual memory simulator with a 16-entry Translation Lookaside Buffer using FIFO page replacement.",
      "Handled simulated page faults by mapping a 65 KB backing store binary into physical memory with mmap().",
      "Tracked and reported system statistics for TLB hits and page fault rates.",
    ],
    tech: ["C", "POSIX", "Memory Mapping", "mmap", "TLB", "FIFO"],
    github: "",
    live: "",
  },
  {
    title: "Fashion MNIST Neural Network",
    subtitle: "Machine learning classifier",
    description:
      "A machine learning project that implements a neural network from scratch to classify grayscale fashion images.",
    bullets: [
      "Built a multi-layer neural network using NumPy, backpropagation, and mini-batch gradient descent.",
      "Trained the model on 70,000 Fashion MNIST images across 10 garment classes.",
      "Achieved a test misclassification rate below 14% using L2 regularization and Softmax activation.",
    ],
    tech: ["Python", "NumPy", "scikit-learn", "Backpropagation", "Softmax"],
    github: "",
    live: "",
  },
];

export function Projects() {
  return (
    <div className="min-h-screen pt-12 pb-20">
      <div className="max-w-3xl">
        <motion.h2
          className="mb-10 text-4xl font-medium text-[#4a1a6b]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          projects
        </motion.h2>

        <div className="space-y-7">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.title}
              className="rounded-2xl border border-[#c77dff]/25 bg-white/35 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/45 hover:shadow-md"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 + i * 0.06 }}
            >
              <div className="mb-4 flex flex-col gap-3 border-b border-[#c77dff]/20 pb-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold leading-snug text-[#4a1a6b]">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-[0.9rem] text-[#7b2cbf]">
                    {project.subtitle}
                  </p>
                </div>

                {(project.github || project.live) && (
                  <div className="flex gap-3 md:ml-4 md:flex-shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-[#c77dff]/35 bg-[#f5ebfa]/70 p-2 text-[#7b2cbf] transition-colors hover:text-[#4a1a6b]"
                        aria-label={`${project.title} GitHub`}
                      >
                        <FaGithub size={15} />
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-[#c77dff]/35 bg-[#f5ebfa]/70 p-2 text-[#7b2cbf] transition-colors hover:text-[#4a1a6b]"
                        aria-label={`${project.title} live demo`}
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                )}
              </div>

              <p className="mb-4 text-[0.93rem] leading-7 text-[#6a3a8b]">
                {project.description}
              </p>

              <ul className="mb-5 space-y-3 text-[0.9rem] leading-7 text-[#6a3a8b]">
                {project.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-[0.35rem] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#9d4edd]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 border-t border-[#c77dff]/20 pt-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[#c77dff]/35 bg-[#f5ebfa]/70 px-3 py-1 text-xs text-[#6a3a8b]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}