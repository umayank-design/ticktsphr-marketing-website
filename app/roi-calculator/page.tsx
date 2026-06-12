"use client";

import Link from "next/link";
import { useState } from "react";

export default function ROICalculatorPage() {
  const [tickets, setTickets] = useState("");
  const [triageTime, setTriageTime] = useState("");
  const [hourlyCost, setHourlyCost] = useState("");
  const [result, setResult] = useState<null | {
    monthlyHours: number;
    annualHours: number;
    annualCost: number;
    possibleSavings: number;
  }>(null);

  function calculateROI() {
    const ticketCount = Number(tickets);
    const minutes = Number(triageTime);
    const cost = Number(hourlyCost);

    if (!ticketCount || !minutes || !cost) {
      alert("Please enter tickets per month, triage time and hourly cost.");
      return;
    }

    const monthlyHours = (ticketCount * minutes) / 60;
    const annualHours = monthlyHours * 12;
    const annualCost = annualHours * cost;
    const possibleSavings = annualCost * 0.7;

    setResult({
      monthlyHours,
      annualHours,
      annualCost,
      possibleSavings,
    });
  }

  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <section className="relative border-b border-white/10 px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(124,58,237,.38),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(34,211,238,.20),transparent_30%)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="font-black uppercase tracking-[0.35em] text-cyan-300">
            ROI Calculator
          </p>

          <h1 className="mt-6 text-5xl font-black tracking-[-0.05em] sm:text-7xl">
            How much time is manual triage costing your team?
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Estimate the hours and cost your team spends classifying, routing
            and chasing tickets before they reach the right owner.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8">
          <h2 className="text-3xl font-black">
            Enter your current support load
          </h2>

          <div className="mt-8 grid gap-5">
            <label className="block">
              <span className="text-sm font-bold text-slate-300">
                Tickets per Month
              </span>
              <input
                value={tickets}
                onChange={(e) => setTickets(e.target.value)}
                type="number"
                placeholder="Example: 5000"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none focus:border-cyan-300"
              />
            </label>

            <label className="block">
              <span className="text-sm font-bold text-slate-300">
                Average Triage Time per Ticket (minutes)
              </span>
              <input
                value={triageTime}
                onChange={(e) => setTriageTime(e.target.value)}
                type="number"
                placeholder="Example: 6"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none focus:border-cyan-300"
              />
            </label>

            <label className="block">
              <span className="text-sm font-bold text-slate-300">
                Average Cost per Agent Hour
              </span>
              <input
                value={hourlyCost}
                onChange={(e) => setHourlyCost(e.target.value)}
                type="number"
                placeholder="Example: 800"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-white outline-none focus:border-cyan-300"
              />
            </label>
          </div>

          <button
            type="button"
            onClick={calculateROI}
            className="mt-8 w-full rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 px-8 py-4 font-black text-white shadow-[0_0_40px_rgba(124,58,237,0.35)]"
          >
            Estimate ROI
          </button>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
          <p className="font-black uppercase tracking-[0.35em] text-cyan-300">
            Estimated Impact
          </p>

          {!result ? (
            <>
              <h2 className="mt-5 text-4xl font-black">
                Your result will appear here.
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                Enter your ticket volume, triage time and hourly cost to see
                how much manual triage may be costing your organization.
              </p>
            </>
          ) : (
            <div className="mt-8 space-y-5">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-slate-400">Monthly Hours Lost</p>
                <p className="mt-2 text-4xl font-black text-cyan-300">
                  {result.monthlyHours.toFixed(0)}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-slate-400">Annual Hours Lost</p>
                <p className="mt-2 text-4xl font-black text-cyan-300">
                  {result.annualHours.toFixed(0)}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm text-slate-400">Estimated Annual Cost</p>
                <p className="mt-2 text-4xl font-black text-cyan-300">
                  ₹{result.annualCost.toLocaleString("en-IN", {
                    maximumFractionDigits: 0,
                  })}
                </p>
              </div>

              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5">
                <p className="text-sm text-slate-400">
                  Potential Savings at 70% Triage Reduction
                </p>
                <p className="mt-2 text-4xl font-black text-emerald-300">
                  ₹{result.possibleSavings.toLocaleString("en-IN", {
                    maximumFractionDigits: 0,
                  })}
                </p>
              </div>
            </div>
          )}

          <Link
            href="/free-consultation"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-4 font-black text-slate-950 hover:bg-violet-100"
          >
            Request Personalized ROI Review
          </Link>
        </div>
      </section>
    </main>
  );
}