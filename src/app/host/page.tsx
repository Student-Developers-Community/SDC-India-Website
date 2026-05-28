const PERKS = [
  { icon: "🎯", text: "Tailored workshops & events for your student community" },
  { icon: "👨‍💻", text: "Expert speakers and facilitators from SDC's network (Microsoft, GDSC, PyCon partners)" },
  { icon: "📦", text: "Full event kit — slides, logistics, and promotion support" },
  { icon: "🏆", text: "Prizes, certifications, and recognition for participants" },
  { icon: "🤝", text: "Long-term collaboration and inter-college community access" },
  { icon: "📊", text: "Post-event report and feedback for your institution" },
];

export default function HostPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="sec-label mb-2">// PARTNER WITH SDC</div>
        <h1 className="sec-title">Host an SDC event at your college</h1>
        <p className="sec-sub mb-12">We bring the experience, content, and energy — your college provides the venue.</p>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16">
          <div>
            <ul className="space-y-3.5 list-none p-0">
              {PERKS.map((p) => (
                <li key={p.text} className="flex gap-3 text-[.87rem] leading-[1.65]" style={{ color: "var(--sub)" }}>
                  <span className="shrink-0 text-base mt-0.5">{p.icon}</span>
                  {p.text}
                </li>
              ))}
            </ul>
            <div className="rounded-[11px] p-5 mt-8" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
              <div className="text-[.66rem] mb-1.5" style={{ color: "var(--muted)", fontFamily: "Space Mono, monospace" }}>OR REACH US DIRECTLY</div>
              <a href="mailto:hello@sdcindia.tech" className="text-sm font-semibold" style={{ color: "var(--a1)" }}>hello@sdcindia.tech →</a>
            </div>
          </div>

          <div className="rounded-[18px] p-7" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
            <h3 className="font-extrabold text-base mb-5" style={{ fontFamily: "Syne, sans-serif" }}>📋 Submit a Hosting Request</h3>
            <form className="space-y-3.5">
              <div className="grid grid-cols-2 gap-3">
                <Field label="YOUR NAME *" placeholder="e.g. Ravi Shankar" />
                <Field label="DESIGNATION *" placeholder="e.g. Student Coordinator" />
              </div>
              <Field label="COLLEGE / INSTITUTION *" placeholder="e.g. MGIT, Hyderabad" />
              <div className="grid grid-cols-2 gap-3">
                <Field label="OFFICIAL EMAIL *" type="email" placeholder="you@college.edu.in" />
                <Field label="PHONE *" type="tel" placeholder="+91 XXXXX XXXXX" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Select label="EVENT TYPE *" options={["Hackathon", "Workshop", "Dev Talk / Panel", "Bootcamp", "UI/UX Sprint", "AI / ML Workshop"]} />
                <Field label="PREFERRED DATE *" type="date" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Select label="EXPECTED PARTICIPANTS" options={["50–100", "100–200", "200–500", "500+"]} />
                <Field label="CITY *" placeholder="e.g. Hyderabad" />
              </div>
              <TextArea label="DETAILS" placeholder="Describe the event, facilities available, requirements..." />
              <p className="text-[.7rem]" style={{ color: "var(--muted)" }}>📧 We&apos;ll reach out within 48 hours.</p>
              <button type="button" className="btn-grad w-full" style={{ padding: ".85rem" }}>Submit Hosting Request →</button>
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

function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <label className="block">
      <span className="block text-[.68rem] mb-1.5" style={{ color: "var(--sub)", fontFamily: "Space Mono, monospace", letterSpacing: ".06em" }}>{label}</span>
      <select
        className="w-full px-3.5 py-2.5 rounded-lg text-[.86rem] outline-none"
        style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text)" }}
      >
        <option value="">Select…</option>
        {options.map((o) => <option key={o} value={o} style={{ background: "#1a1a1a" }}>{o}</option>)}
      </select>
    </label>
  );
}

function TextArea({ label, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
  return (
    <label className="block">
      <span className="block text-[.68rem] mb-1.5" style={{ color: "var(--sub)", fontFamily: "Space Mono, monospace", letterSpacing: ".06em" }}>{label}</span>
      <textarea
        {...props}
        rows={4}
        className="w-full px-3.5 py-2.5 rounded-lg text-[.86rem] outline-none resize-y"
        style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text)", minHeight: "82px" }}
      />
    </label>
  );
}
