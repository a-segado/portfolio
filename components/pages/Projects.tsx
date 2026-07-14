"use client";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
const PROJECTS = [
  {
    title: "Project Name",
    description: "Brief description of what the project does and your role in it.",
    tech: ["React", "TypeScript", "Tailwind"],
    github: "",
    live: "",
  },
];

export function Projects() {
  return (
    <div className="min-h-screen pt-12">
      <div className="max-w-3xl">
        <motion.h2
          className="text-4xl font-medium mb-8 text-[#4a1a6b]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          projects
        </motion.h2>
        <div className="space-y-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              className="border border-[#c77dff]/30 rounded-lg p-5 bg-white/40 hover:-translate-y-0.5 transition-transform"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 + i * 0.08 }}
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-[#4a1a6b]">{project.title}</h3>
                <div className="flex gap-3 ml-4 flex-shrink-0">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#9b7bb8] hover:text-[#4a1a6b] transition-colors"
                      aria-label="GitHub"
                    >
                      <FaGithub size={16} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#9b7bb8] hover:text-[#4a1a6b] transition-colors"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-[0.9rem] md:text-[0.975rem] text-[#6a3a8b] mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full text-[0.9rem] font-mono text-[#4a1a6b] border border-[#c77dff]/50 bg-[#c77dff]/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
