"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/highlights", label: "Highlights" },
  { href: "/team", label: "Team" },
  { href: "/blog", label: "Blog" },
  { href: "/host", label: "Host With Us" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[300] flex items-center justify-between px-4 md:px-12 py-3.5 backdrop-blur-xl"
      style={{
        background: "rgba(8,8,8,.92)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <Link href="/" className="flex items-center gap-2.5 no-underline">
        <div
          className="w-[34px] h-[34px] rounded-lg flex items-center justify-center font-bold text-[.65rem] text-white"
          style={{ background: "var(--grad)", fontFamily: "Space Mono, monospace" }}
        >
          SDC
        </div>
        <span className="hidden md:inline font-syne font-extrabold text-[.9rem]" style={{ color: "var(--text)" }}>
          SDC INDIA · Student Developers Community
        </span>
        <span className="md:hidden font-syne font-extrabold text-sm" style={{ color: "var(--text)" }}>
          SDC INDIA
        </span>
      </Link>

      <ul className="hidden lg:flex gap-1 list-none m-0 p-0">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block text-[.8rem] font-medium px-3.5 py-1.5 rounded-md transition-all"
              style={{
                color: isActive(item.href) ? "var(--text)" : "var(--sub)",
                background: isActive(item.href) ? "rgba(232,67,147,.1)" : "transparent",
                border: isActive(item.href) ? "1px solid rgba(232,67,147,.2)" : "1px solid transparent",
              }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2">
        <Link
          href="/host"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-md text-[.8rem] font-bold text-white"
          style={{ background: "var(--grad)", fontFamily: "Syne, sans-serif" }}
        >
          Host an Event →
        </Link>
        <button
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden w-10 h-10 rounded-md flex items-center justify-center"
          style={{ border: "1px solid var(--border2)", background: "var(--card)" }}
        >
          <span className="text-white text-lg">{mobileOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {mobileOpen && (
        <ul
          className="lg:hidden absolute top-full left-0 right-0 flex flex-col gap-1 list-none m-0 p-3 backdrop-blur-xl"
          style={{ background: "rgba(8,8,8,.97)", borderBottom: "1px solid var(--border)" }}
        >
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block text-sm font-medium px-3 py-2.5 rounded-md"
                style={{
                  color: isActive(item.href) ? "var(--text)" : "var(--sub)",
                  background: isActive(item.href) ? "rgba(232,67,147,.1)" : "transparent",
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="/host"
              className="block text-center px-4 py-2.5 rounded-md text-sm font-bold text-white"
              style={{ background: "var(--grad)", fontFamily: "Syne, sans-serif" }}
            >
              Host an Event →
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
