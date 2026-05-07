import { useState } from "react";

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScplrArMzbYBJSmEkSEJ3ooQAcoRRljzhV0BlaRYZJxWTs5vA/formResponse";

export function SeatForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [data, setData] = useState({ name: "", email: "" });

  if (submitted) {
    return (
      <div className="rounded-md border border-electric/40 bg-electric/10 p-4 text-sm text-cream">
        <p className="font-medium">Success! Check your email soon.</p>
        <p className="mt-1 text-cream/70">
          We'll reach out to {data.email} when registration opens.
        </p>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const body = new URLSearchParams({
        "entry.2048231935": data.name,
        "entry.1738250640": data.email,
      }).toString();

      await fetch(FORM_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        required
        placeholder="Your name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        className="w-full rounded-md border border-cream/20 bg-navy-deep/60 px-3 py-2.5 text-sm text-cream placeholder:text-cream/40 focus:border-electric focus:outline-none"
      />
      <input
        required
        type="email"
        placeholder="Email address"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
        className="w-full rounded-md border border-cream/20 bg-navy-deep/60 px-3 py-2.5 text-sm text-cream placeholder:text-cream/40 focus:border-electric focus:outline-none"
      />
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-md bg-electric px-4 py-2.5 text-sm font-medium tracking-wide text-cream uppercase transition hover:bg-electric-bright disabled:opacity-60"
      >
        {submitting ? "Saving…" : "Save Me a Seat"}
      </button>
    </form>
  );
}
