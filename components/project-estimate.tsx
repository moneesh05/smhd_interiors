"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
const M: any = motion

export default function ProjectEstimate() {
  const [area, setArea] = useState<number>(500)
  const [rooms, setRooms] = useState<number>(3)
  const [budget, setBudget] = useState<number>(200000)
  const [estimate, setEstimate] = useState<number | null>(null)

  const compute = () => {
    // Simple formula: cost = area * 1500 + rooms * 20000
    const cost = Math.round(area * 1500 + rooms * 20000)
    setEstimate(cost)
  }

  return (
    <section id="estimate" className="bg-[#FAF5EF] text-[#2E2B28] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-md">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-2xl font-serif font-bold">Project Estimate</h2>
              <p className="mt-2 text-sm text-[#2E2B28]/80">Get a quick estimate for your renovation project.</p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <label className="flex flex-col">
                  <span className="text-xs text-muted-foreground">Area (sq ft)</span>
                  <input
                    type="number"
                    min={50}
                    value={area}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="mt-1 rounded-md border px-3 py-2"
                    aria-label="Area in square feet"
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-xs text-muted-foreground">Rooms</span>
                  <input
                    type="number"
                    min={1}
                    value={rooms}
                    onChange={(e) => setRooms(Number(e.target.value))}
                    className="mt-1 rounded-md border px-3 py-2"
                    aria-label="Number of rooms"
                  />
                </label>

                <label className="flex flex-col">
                  <span className="text-xs text-muted-foreground">Budget</span>
                  <input
                    type="range"
                    min={50000}
                    max={1000000}
                    step={5000}
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="mt-3 w-full"
                    aria-label="Budget slider"
                  />
                  <div className="text-sm mt-1">₹{budget.toLocaleString()}</div>
                </label>
              </div>
            </div>

            <div className="w-full md:w-72 flex-shrink-0">
                <M.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-xl border p-4 text-center"
                >
                <div className="text-sm text-muted-foreground">Estimated Cost</div>
                <div className="mt-3 text-2xl font-bold text-[#C46B43]" aria-live="polite">
                  {estimate != null ? `₹${estimate.toLocaleString()}` : "—"}
                </div>

                <Button className="mt-6 bg-[#C46B43] hover:bg-[#B25B33] text-white w-full" onClick={compute}>
                  Estimate Now
                </Button>
              </M.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
