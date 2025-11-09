"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import '@/styles/portfolio.css'

const projects = [
  {
    title: "Contemporary Living Room",
    type: "2BHK",
    price: "3.5",
    image: "/images_in/IMG-20251030-WA0003.jpg"
  },
  {
    title: "Modern Master Bedroom",
    type: "3BHK",
    price: "4.2",
    image: "/images_in/IMG-20251030-WA0004.jpg"
  },
  {
    title: "Designer Kitchen",
    type: "Kitchen",
    price: "2.8",
    image: "/images_in/IMG-20251030-WA0005.jpg"
  },
  {
    title: "Open Concept Living",
    type: "2BHK",
    price: "5.5",
    image: "/images_in/IMG-20251030-WA0015.jpg"
  },
  {
    title: "Minimalist Bedroom",
    type: "3BHK",
    price: "3.8",
    image: "/images_in/IMG-20251030-WA0020.jpg"
  },
  {
    title: "Modern Kitchen",
    type: "Kitchen",
    price: "3.2",
    image: "/images_in/IMG-20251030-WA0025.jpg"
  },
  {
    title: "Cozy Living Space",
    type: "2BHK",
    price: "4.5",
    image: "/images_in/IMG-20251030-WA0030.jpg"
  },
  {
    title: "Luxurious Bedroom",
    type: "3BHK",
    price: "6.2",
    image: "/images_in/IMG-20251030-WA0035.jpg"
  },
  {
    title: "Gourmet Kitchen",
    type: "Kitchen",
    price: "4.8",
    image: "/images_in/IMG-20251030-WA0040.jpg"
  }
]

export function Portfolio() {
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
    <section id="portfolio" ref={sectionRef} className="py-6 sm:py-10 bg-[#FAF5EF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-[#2E2B28] text-balance transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Our Recent Projects
          </h2>
        </div>

        <div className="portfolio-swiper">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            loop={true}
            speed={800}
            spaceBetween={24}
            slidesPerView={3}
            grabCursor={true}
            loopAdditionalSlides={3}
            centeredSlides={false}
            slideToClickedSlide={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="!overflow-visible"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="portfolio-slide">
                  <div className="group cursor-pointer">
                    <div className="relative h-[280px] sm:h-[320px] overflow-hidden rounded-2xl shadow-lg md:hover:shadow-xl transition-all duration-300">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 md:group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 px-2 sm:px-3 py-1 sm:py-1.5 bg-white/90 backdrop-blur-sm rounded-lg text-xs sm:text-sm font-medium text-[#2E2B28]">
                        Starting at {project.price}L*
                      </div>
                      <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-black/60 to-transparent">
                        <p className="text-white text-lg sm:text-xl font-medium">{project.type}</p>
                        <h3 className="text-white/80 text-xs sm:text-sm mt-0.5 sm:mt-1">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <div className="swiper-button-prev !hidden md:!flex">
              <ChevronLeft className="w-6 h-6 text-[#2E2B28]" />
            </div>
            <div className="swiper-button-next !hidden md:!flex">
              <ChevronRight className="w-6 h-6 text-[#2E2B28]" />
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  )
}