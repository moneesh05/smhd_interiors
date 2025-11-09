"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useEffect, useRef, useState } from "react"

export function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-6 sm:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-center mb-4 sm:mb-6 text-[#2E2B28] transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          <form
            className={`space-y-3 sm:space-y-4 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Input
              placeholder="Name"
              className="w-full p-2 sm:p-3 rounded-lg border-[#2E2B28]/20 focus:border-[#C46B43] focus:ring-[#C46B43]/20"
            />
            <Input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg border-[#2E2B28]/20 focus:border-[#C46B43] focus:ring-[#C46B43]/20"
            />
            <Textarea
              placeholder="Message"
              rows={4}
              className="w-full p-3 rounded-lg border-[#2E2B28]/20 focus:border-[#C46B43] focus:ring-[#C46B43]/20 resize-none"
            />
            <Button 
              size="lg" 
              className="w-full md:w-auto bg-[#C46B43] hover:bg-[#B25B33] text-white transition-colors duration-300"
            >
              Send Message
            </Button>
          </form>

          <div 
            className={`space-y-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="rounded-lg overflow-hidden h-full min-h-[280px] bg-gray-100">
              {/* Replace this with your actual map implementation */}
              <div className="w-full h-full bg-[#F3EDE5] p-6">
                <h3 className="text-xl font-serif text-[#2E2B28] mb-4">Visit Us</h3>
                <p className="text-[#2E2B28]/80 font-sans">
                  SMHD Interiors<br />
                  123 Design Street<br />
                  Avadi, Chennai<br />
                  Tamil Nadu, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}