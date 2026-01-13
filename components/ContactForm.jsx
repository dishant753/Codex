"use client";

import { useState } from "react";
import PrimaryButton from "./PrimaryButton";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="card-base space-y-4 p-6"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <input
          required
          placeholder="Name"
          className="rounded-xl border border-ui-border bg-ui-s2 px-4 py-3 text-sm text-ui-text outline-none focus:border-brand-navy2"
        />
        <input
          required
          placeholder="Company"
          className="rounded-xl border border-ui-border bg-ui-s2 px-4 py-3 text-sm text-ui-text outline-none focus:border-brand-navy2"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <input
          required
          type="email"
          placeholder="Email"
          className="rounded-xl border border-ui-border bg-ui-s2 px-4 py-3 text-sm text-ui-text outline-none focus:border-brand-navy2"
        />
        <input
          required
          placeholder="Phone"
          className="rounded-xl border border-ui-border bg-ui-s2 px-4 py-3 text-sm text-ui-text outline-none focus:border-brand-navy2"
        />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <select className="rounded-xl border border-ui-border bg-ui-s2 px-4 py-3 text-sm text-ui-text outline-none focus:border-brand-navy2">
          <option>Industry</option>
          <option>Automotive</option>
          <option>Medical</option>
          <option>Electronics</option>
          <option>Packaging</option>
          <option>Consumer</option>
          <option>Industrial</option>
        </select>
        <select className="rounded-xl border border-ui-border bg-ui-s2 px-4 py-3 text-sm text-ui-text outline-none focus:border-brand-navy2">
          <option>Quantity Range</option>
          <option>10k - 50k</option>
          <option>50k - 250k</option>
          <option>250k - 1M</option>
          <option>1M+</option>
        </select>
      </div>
      <textarea
        rows={4}
        placeholder="Message"
        className="w-full rounded-xl border border-ui-border bg-ui-s2 px-4 py-3 text-sm text-ui-text outline-none focus:border-brand-navy2"
      />
      <PrimaryButton type="submit" className="w-full justify-center">
        Submit Request
      </PrimaryButton>
      {submitted ? (
        <p className="text-sm text-brand-red">Thank you! Our team will respond within 24–48 hours.</p>
      ) : null}
    </form>
  );
}
