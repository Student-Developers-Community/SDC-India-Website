import Link from "next/link";

const SOCIAL = [
  { href: "mailto:hello@sdcindia.tech", label: "EMAIL", value: "hello@sdcindia.tech" },
  { href: "https://sdcindia.tech", label: "WEBSITE", value: "sdcindia.tech" },
  { href: "https://github.com/SDC", label: "GITHUB", value: "github.com/SDC" },
  { href: "https://linkedin.com/company/sdc-snist", label: "LINKEDIN", value: "SDC SNIST" },
  { href: "https://instagram.com/sdc.snist", label: "INSTAGRAM", value: "@sdc.snist" },
];

export default function Footer() {
  return (
    <footer
      className="mt-24 w-full pt-16 pb-8"
      style={{ borderTop: "1px solid var(--border)", background: "var(--surface)" }}
    >
      <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-[.65rem] font-bold"
              style={{ background: "var(--grad)", fontFamily: "Space Mono, monospace" }}
            >
              SDC
            </div>
            <span className="font-syne font-extrabold text-sm" style={{ color: "var(--text)" }}>SDC INDIA</span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--sub)" }}>
            Student-led developer community founded in 2022 at SNIST. Bridging the gap between academic learning and industry.
          </p>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-bold uppercase tracking-widest" style={{ color: "var(--text)", fontFamily: "Space Mono, monospace" }}>
            Navigation
          </h4>
          <ul className="space-y-3 list-none p-0">
            {[
              ["About", "/about"],
              ["Events", "/events"],
              ["Highlights", "/highlights"],
              ["Team", "/team"],
              ["Blog", "/blog"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-sm transition-colors hover:text-white" style={{ color: "var(--sub)" }}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-bold uppercase tracking-widest" style={{ color: "var(--text)", fontFamily: "Space Mono, monospace" }}>
            Get Involved
          </h4>
          <ul className="space-y-3 list-none p-0">
            <li><Link href="/host" className="text-sm transition-colors hover:text-white" style={{ color: "var(--sub)" }}>Host an Event</Link></li>
            <li><Link href="/contact" className="text-sm transition-colors hover:text-white" style={{ color: "var(--sub)" }}>Contact Us</Link></li>
            <li><a href="https://github.com/SDC" target="_blank" rel="noopener" className="text-sm transition-colors hover:text-white" style={{ color: "var(--sub)" }}>Open Source</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-bold uppercase tracking-widest" style={{ color: "var(--text)", fontFamily: "Space Mono, monospace" }}>
            Connect
          </h4>
          <ul className="space-y-3 list-none p-0">
            {SOCIAL.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener" : undefined}
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "var(--sub)" }}
                >
                  {s.value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="mx-auto max-w-7xl mt-12 pt-6 px-6 flex flex-col md:flex-row items-center justify-between gap-3"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <span className="text-xs" style={{ color: "var(--muted)" }}>
          © 2026 SDC INDIA. Built by students, for students.
        </span>
        <span className="text-xs font-mono" style={{ color: "var(--muted)" }}>
          Since 2022 · Hyderabad · India
        </span>
      </div>
    </footer>
  );
}
