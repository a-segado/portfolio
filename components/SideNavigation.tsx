"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export function SideNavigation() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/about", label: "angeline segado" },
    { href: "/education", label: "education" },
    { href: "/experience", label: "experience" },
    { href: "/projects", label: "projects" },
  ];

  return (
    <div className="flex-shrink-0 pt-12">
      <nav className="flex flex-col gap-5 sticky top-24">
        {navLinks.map(({ href, label }) => {
          const active = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={`relative text-left py-2 text-[1.05rem] md:text-[1.1rem] transition-colors ${
                active
                  ? "text-[#2a0a4b] font-medium"
                  : "text-[#4a1a6b] hover:text-[#7b2cbf]"
              }`}
            >
              {label}
              <span
                className="absolute bottom-0 left-0 h-[2px] bg-[#7b2cbf] rounded-full transition-all duration-300"
                style={{ width: active ? "100%" : "0%" }}
              />
            </Link>
          );
        })}

        <a
          href="/resume.pdf"
          download="AngelineSegado_Resume.pdf"
          className="text-left py-2 text-[1.05rem] md:text-[1.1rem] transition-colors text-[#4a1a6b] hover:text-[#7b2cbf]"
        >
          resume
        </a>

        <div className="mt-6 flex gap-5">
          <a
            href="https://www.linkedin.com/in/angelinesegado"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4a1a6b] hover:text-[#7b2cbf] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="https://github.com/a-segado"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#4a1a6b] hover:text-[#7b2cbf] transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="mailto:ak.segado@gmail.com"
            className="text-[#4a1a6b] hover:text-[#7b2cbf] transition-colors"
            aria-label="Email"
          >
            <FaEnvelope size={22} />
          </a>
        </div>
      </nav>
    </div>
  );
}