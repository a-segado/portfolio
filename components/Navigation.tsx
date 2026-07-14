"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "home", active: pathname === "/" },
    { href: "/about", label: "about me", active: pathname !== "/" },
  ];

  return (
    <nav className="fixed top-0 right-0 bg-[#e1d8ed] z-50">
      <div className="px-6 py-4">
        <ul className="flex gap-8">
          {links.map(({ href, label, active }) => (
            <li key={href}>
              <Link
                href={href}
                className={`relative pb-1 transition-colors ${
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
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}