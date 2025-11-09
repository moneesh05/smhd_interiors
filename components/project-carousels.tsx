"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { motion } from "framer-motion"

const M: any = motion

// Categories with images from your project
const categories = {
  kitchen: {
    title: "Kitchen Interiors",
    items: [
      {
        title: "Modern Modular Kitchen",
        description: "Elegant design with premium finishes",
        image: "/images_in/IMG-20251030-WA0005.jpg"
      },
      {
        title: "Contemporary Kitchen",
        description: "Smart storage solutions and modern appliances",
        image: "/images_in/IMG-20251030-WA0025.jpg"
      },
      {
        title: "Luxury Kitchen Design",
        description: "High-end materials and custom cabinetry",
        image: "/images_in/IMG-20251030-WA0040.jpg"
      },
      {
        title: "Minimalist Kitchen",
        description: "Clean lines with efficient workspace",
        image: "/images_in/IMG-20251030-WA0030.jpg"
      }
    ]
  },
  bedroom: {
    title: "Bedroom Interiors",
    items: [
      {
        title: "Master Bedroom Suite",
        description: "Luxurious comfort with ambient lighting",
        image: "/images_in/IMG-20251030-WA0004.jpg"
      },
      {
        title: "Modern Bedroom",
        description: "Contemporary design with storage solutions",
        image: "/images_in/IMG-20251030-WA0020.jpg"
      },
      {
        title: "Elegant Bedroom",
        description: "Serene atmosphere with premium furnishings",
        image: "/images_in/IMG-20251030-WA0035.jpg"
      },
      {
        title: "Contemporary Bedroom",
        description: "Stylish decor with natural elements",
        image: "/images_in/IMG-20251030-WA0045.jpg"
      }
    ]
  },
  living: {
    title: "Living Room Interiors",
    items: [
      {
        title: "Modern Living Space",
        description: "Open concept with natural lighting",
        image: "/images_in/IMG-20251030-WA0003.jpg"
      },
      {
        title: "Luxury Living Room",
        description: "Premium furnishings and custom details",
        image: "/images_in/IMG-20251030-WA0015.jpg"
      },
      {
        title: "Contemporary Living",
        description: "Balanced design with comfortable seating",
        image: "/images_in/IMG-20251030-WA0030.jpg"
      },
      {
        title: "Family Living Room",
        description: "Versatile space for modern lifestyle",
        image: "/images_in/IMG-20251030-WA0050.jpg"
      }
    ]
  },
  /* Uncomment for Office section
  office: {
    title: "Office Interiors",
    items: [
      {
        title: "Modern Home Office",
        description: "Productive workspace with style",
        image: "/images_in/IMG-20251030-WA0055.jpg"
      },
      {
        title: "Executive Office",
        description: "Professional environment with elegance",
        image: "/images_in/IMG-20251030-WA0060.jpg"
      },
      {
        title: "Creative Workspace",
        description: "Inspiring design for productivity",
        image: "/images_in/IMG-20251030-WA0065.jpg"
      }
    ]
  }
  */
}

type CategoryCarouselProps = {
  category: keyof typeof categories
}

function CategoryCarousel({ category }: CategoryCarouselProps) {
  const data = categories[category]
  
  return (
    <div className="mb-16 last:mb-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#2E2B28] mb-6 sm:mb-8">
          {data.title}
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: `.swiper-button-prev-${category}`,
              nextEl: `.swiper-button-next-${category}`,
            }}
            loop={true}
            speed={600}
            spaceBetween={24}
            slidesPerView={3}
            grabCursor={true}
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
            {data.items.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="group cursor-pointer">
                  <div className="relative h-[280px] sm:h-[320px] overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-[#2E2B28]/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <button className={`swiper-button-prev-${category} !hidden md:!flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white/90 hover:bg-white shadow-md hover:shadow-lg rounded-full transition-all duration-200 flex items-center justify-center`}>
              <ChevronLeft className="w-6 h-6 text-[#2E2B28]" />
            </button>
            <button className={`swiper-button-next-${category} !hidden md:!flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white/90 hover:bg-white shadow-md hover:shadow-lg rounded-full transition-all duration-200 flex items-center justify-center`}>
              <ChevronRight className="w-6 h-6 text-[#2E2B28]" />
            </button>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export function ProjectCarousels() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-10 sm:py-14 lg:py-16">
      <div 
        className={`transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <CategoryCarousel category="kitchen" />
        <CategoryCarousel category="bedroom" />
        <CategoryCarousel category="living" />
        {/* Uncomment for Office section */}
        {/* <CategoryCarousel category="office" /> */}
      </div>
    </section>
  )
}