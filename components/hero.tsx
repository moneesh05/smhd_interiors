"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"

// Use a loosely-typed alias to avoid strict type mismatches in some TS configs
const M: any = motion

export function Hero() {
  const ref = useRef<HTMLElement | null>(null)

  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 800], [0, -120])

  const heading = "Transforming Your Space into a Style Statement"

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
  }

  const word = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
  }

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center pt-16 md:pt-20">
        <M.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y,
          }}
          aria-hidden
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        </M.div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-24">
          <M.div
            className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.2] sm:leading-tight">
              {heading.split(" ").map((w, i) => (
                <M.span key={i} variants={word} className="inline-block mr-1.5 sm:mr-2">
                  {w}
                </M.span>
              ))}
            </h1>

            <M.p 
              className="text-lg sm:text-xl md:text-2xl text-white/90 font-sans max-w-2xl mx-auto px-4" 
              variants={word}
            >
              Elegant, functional, and timeless designs crafted for every home.
            </M.p>

            <M.div className="mt-8 sm:mt-10" variants={word}>
              <Button
                size="lg"
                className="bg-[#C46B43] hover:bg-[#B25B33] text-white px-6 sm:px-8 py-4 sm:py-5 
                           text-base sm:text-lg rounded-lg shadow-lg hover:shadow-xl 
                           transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Book a Free Consultation
              </Button>
            </M.div>
          </M.div>
        </div>
      </div>
    </section>
  )
}
