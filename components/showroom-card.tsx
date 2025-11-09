"use client"

import { Button } from "@/components/ui/button"
import { MapPin, Clock, Calendar } from "lucide-react"
import { motion } from "framer-motion"
const M: any = motion

export default function ShowroomCard() {
  return (
    <aside className="bg-white rounded-xl p-6 shadow-md">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <MapPin className="h-8 w-8 text-[#C46B43]" />
        </div>
        <div>
          <h4 className="font-semibold">Visit our Showroom</h4>
          <p className="text-sm text-[#2E2B28]/80">1234 Design Street, Your City</p>
        </div>
      </div>

      <div className="mt-4 rounded overflow-hidden border">
        <iframe
          title="SMHD Interiors Showroom"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0199999999995!2d144.963058!3d-37.813628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43c7f2d6d7%3A0xbf0f0f0f0f0f0f0f!2sSample%20Location!5e0!3m2!1sen!2sin!4v1610000000000"
          className="w-full h-44"
          loading="lazy"
        />
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
        <div>
          <div className="flex items-center gap-2 text-sm"><Clock className="w-4 h-4"/> Opening Hours</div>
          <div className="text-xs text-muted-foreground">Mon - Sat: 10:00 - 18:00</div>
        </div>

        <div className="text-right">
          <Button className="bg-[#C46B43] hover:bg-[#B25B33] text-white">Book a Visit</Button>
        </div>
      </div>

      <M.div className="mt-3 overflow-hidden rounded-lg bg-gradient-to-r from-[#fff7f2] via-[#fff2ec] to-[#fff7f2] p-2 text-sm text-[#2E2B28]">
        <div className="whitespace-nowrap animate-marquee">Free consultation available • 20% off first booking</div>
      </M.div>

      <style jsx>{`
        .animate-marquee{
          display:inline-block;
          animation: marquee 10s linear infinite;
        }
        @keyframes marquee{ 0%{ transform: translateX(0) } 100%{ transform: translateX(-50%) } }
      `}</style>
    </aside>
  )
}
