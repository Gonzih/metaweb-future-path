import { useState } from "react";

export function SeatForm() {
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({ name: "", email: "" });

  if (submitted) {
    return (
      <div className="rounded-md border border-electric/40 bg-electric/10 p-4 text-sm text-cream">
        <p className="font-medium">Seat reserved.</p>
        <p className="mt-1 text-cream/70">We'll email {data.email} when registration opens.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
      className="space-y-3"
    >
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
        className="w-full rounded-md bg-electric px-4 py-2.5 text-sm font-medium tracking-wide text-cream uppercase transition hover:bg-electric-bright"
      >
        Save Me a Seat
      </button>
    </form>
  );
}
