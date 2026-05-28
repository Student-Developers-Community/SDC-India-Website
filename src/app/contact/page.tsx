const SOCIALS = [
  { icon: "📧", label: "EMAIL",     value: "hello@sdcindia.tech",  href: "mailto:hello@sdcindia.tech",      bg: "rgba(232,67,147,.12)" },
  { icon: "🌐", label: "WEBSITE",   value: "sdcindia.tech",        href: "https://sdcindia.tech",            bg: "rgba(88,101,242,.12)" },
  { icon: "⚡", label: "GITHUB",    value: "github.com/SDC",       href: "https://github.com/SDC",           bg: "rgba(240,246,252,.05)" },
  { icon: "🔗", label: "LINKEDIN",  value: "SDC SNIST",            href: "https://linkedin.com/company/sdc-snist", bg: "rgba(10,102,194,.12)" },
  { icon: "📸", label: "INSTAGRAM", value: "@sdc.snist",           href: "https://instagram.com/sdc.snist",  bg: "rgba(249,115,22,.12)" },
];

export default function ContactPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="sec-label mb-2">// CONTACT US</div>
        <h1 className="sec-title">Let&apos;s connect</h1>
        <p className="sec-sub mb-12">Have questions, collaboration ideas, or speaker proposals? Reach out and we&apos;ll connect quickly.</p>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-3 mt-1">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener" : undefined}
                className="flex items-center gap-3 px-4 py-3.5 rounded-[11px] transition-all hover:translate-x-1"
                style={{ background: "var(--card)", border: "1px solid var(--border)", color: "var(--text)", textDecoration: "none" }}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm flex-shrink-0" style={{ background: s.bg }}>
                  {s.icon}
                </div>
                <div>
                  <div className="text-[.66rem]" style={{ color: "var(--muted)", fontFamily: "Space Mono, monospace" }}>{s.label}</div>
                  <div className="text-[.85rem] font-medium">{s.value}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="rounded-[18px] p-7" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
            <h3 className="font-extrabold text-base mb-5" style={{ fontFamily: "Syne, sans-serif" }}>Send us a message</h3>
            <form className="space-y-3.5">
              <Field label="NAME" placeholder="Your name" />
              <Field label="EMAIL" type="email" placeholder="you@email.com" />
              <Field label="SUBJECT" placeholder="I want to join SDC!" />
              <label className="block">
                <span className="block text-[.68rem] mb-1.5" style={{ color: "var(--sub)", fontFamily: "Space Mono, monospace", letterSpacing: ".06em" }}>MESSAGE</span>
                <textarea
                  rows={5}
                  placeholder="What's on your mind?"
                  className="w-full px-3.5 py-2.5 rounded-lg text-[.86rem] outline-none resize-y"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text)" }}
                />
              </label>
              <button type="button" className="btn-grad w-full" style={{ padding: ".85rem" }}>Send Message →</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

function Field({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label className="block">
      <span className="block text-[.68rem] mb-1.5" style={{ color: "var(--sub)", fontFamily: "Space Mono, monospace", letterSpacing: ".06em" }}>{label}</span>
      <input
        {...props}
        className="w-full px-3.5 py-2.5 rounded-lg text-[.86rem] outline-none transition-colors"
        style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text)" }}
      />
    </label>
  );
}
