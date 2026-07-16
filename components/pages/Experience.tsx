"use client";

import { motion } from "motion/react";

const experiences = [
  {
    role: "DevOps Engineer",
    company: "Defend · Remote",
    date: "Jan 2026 — Present",
    description:
      "Working on deployment infrastructure and backend automation for the 65square platform, with a focus on reliable delivery, production stability, and cloud security.",
    bullets: [
      "Architect and maintain CI/CD pipelines using Docker and Kubernetes to automate deployment workflows.",
      "Support cloud infrastructure security through compliance protocols and vulnerability scanning.",
      "Build Python and Ruby automation tools to streamline root cause analysis and backend integration.",
    ],
    skills: [
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Python",
      "Ruby",
      "Cloud Infrastructure",
      "Security Compliance",
      "Vulnerability Scanning",
    ],
  },
  {
    role: "AI Automation Developer",
    company: "The Forge · Hamilton, ON",
    date: "Jan 2026 — Apr 2026",
    description:
      "Developed AI-powered automation workflows to centralize startup metrics and reduce manual project tracking work.",
    bullets: [
      "Prototype an AI-driven data pipeline to extract and summarize startup metrics into a centralized repository.",
      "Engineer Monday.com API integrations to sync processed data with project management dashboards.",
      "Develop, document, and test scalable extraction workflows to improve maintainability and data accuracy.",
    ],
    skills: [
      "Python",
      "AI Automation",
      "API Integration",
      "Monday.com API",
      "Data Pipelines",
      "Workflow Automation",
      "Documentation",
      "Testing",
    ],
  },
  {
    role: "Business Systems Analyst",
    company: "Vale Base Metals · Toronto, ON",
    date: "May 2024 — Jan 2026",
    description:
      "Supported digital transformation work across document management, analytics, process mapping, and internal tooling.",
    bullets: [
      "Reduced an active document repository from 500 to 222 documents during a corporate spin-off while preserving data integrity.",
      "Built a PowerApps request portal and Power BI dashboard to track resolution times and closure rates for 100+ monthly requests.",
      "Created Excel/VBA models with pivot tables and slicers to synthesize feedback from 15+ C-level executives.",
      "Supported a SISPAV upgrade by mapping current-to-future state processes and creating training materials for 10,000+ employees.",
    ],
    skills: [
      "PowerApps",
      "Power BI",
      "Excel",
      "VBA",
      "Pivot Tables",
      "Slicers",
      "Data Analysis",
      "Process Mapping",
      "Documentation",
      "Stakeholder Communication",
    ],
  },
  {
    role: "Processing Support Specialist",
    company: "Flipp · Toronto, ON",
    date: "Sept 2022 — Mar 2026",
    description:
      "Supported promotional flyer processing, retailer communications, internal systems, and quality-control workflows.",
    bullets: [
      "Helped migrate 100+ retailers to a centralized processing support inbox using ClickUp and Jira.",
      "Managed promotional flyer assets from upload to final quality checks to ensure accuracy and presentation quality.",
      "Troubleshot ambiguous processing and technical errors in Flipp’s internal systems.",
    ],
    skills: [
      "ClickUp",
      "Jira",
      "Quality Assurance",
      "Technical Troubleshooting",
      "Internal Systems",
      "Operations Support",
      "Asset Management",
      "Process Improvement",
    ],
  },
];

export function Experience() {
  return (
    <div className="min-h-screen pt-12 pb-20">
      <div className="max-w-3xl">
        <motion.h2
          className="text-4xl font-medium mb-10 text-[#4a1a6b]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          experience
        </motion.h2>

        <div className="space-y-7">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.role}-${experience.company}`}
              className="rounded-2xl border border-[#c77dff]/25 bg-white/35 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/45 hover:shadow-md"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 + index * 0.06 }}
            >
              <div className="mb-4 flex flex-col gap-2 border-b border-[#c77dff]/20 pb-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold leading-snug text-[#4a1a6b]">
                    {experience.role}
                  </h3>

                  <p className="mt-1 text-[0.9rem] text-[#7b2cbf]">
                    {experience.company}
                  </p>
                </div>

                <span className="w-fit rounded-full bg-[#e8d5f2]/80 px-3 py-1 text-xs font-mono text-[#7b2cbf]">
                  {experience.date}
                </span>
              </div>

              <p className="mb-4 text-[0.93rem] leading-7 text-[#6a3a8b]">
                {experience.description}
              </p>

              <ul className="mb-5 space-y-3 text-[0.9rem] leading-7 text-[#6a3a8b]">
                {experience.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-[0.35rem] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#9d4edd]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#c77dff]/20">
                {experience.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#c77dff]/35 bg-[#f5ebfa]/70 px-3 py-1 text-xs text-[#6a3a8b]"
                  >
                    {skill}
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