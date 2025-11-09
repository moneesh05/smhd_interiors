"use client"

import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
import "swiper/css"
import "swiper/css/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"

const categories = [
  {
    id: "kitchen",
    title: "Kitchen Interiors",
    items: [
      {
        title: "Modern Modular Kitchen",
        description: "Contemporary design with premium finishes",
        image: "/images_in/IMG-20251030-WA0005.jpg",
        price: "Starting at 3.57L*"
      },
      {
        title: "Marble Finish Kitchen",
        description: "Elegant and durable surfaces",
        image: "/images_in/IMG-20251030-WA0025.jpg",
        price: "Starting at 4.25L*"
      },
      {
        title: "Smart Pantry Unit",
        description: "Optimized storage solutions",
        image: "/images_in/IMG-20251030-WA0040.jpg",
        price: "Starting at 2.85L*"
      },
      {
        title: "Elegant Wooden Layout",
        description: "Warm and inviting design",
        image: "/images_in/IMG-20251030-WA0030.jpg",
        price: "Starting at 3.95L*"
      }
    ]
  },
  {
    id: "bedroom",
    title: "Bedroom Interiors",
    items: [
      {
        title: "Cozy Master Bedroom",
        description: "Luxurious comfort and style",
        image: "/images_in/IMG-20251030-WA0004.jpg",
        price: "Starting at 4.75L*"
      },
      {
        title: "Sliding Wardrobe Design",
        description: "Space-saving storage solutions",
        image: "/images_in/IMG-20251030-WA0020.jpg",
        price: "Starting at 3.95L*"
      },
      {
        title: "Luxury Lighting Bedroom",
        description: "Ambient lighting design",
        image: "/images_in/IMG-20251030-WA0035.jpg",
        price: "Starting at 4.25L*"
      },
      {
        title: "Modern Theme Bedroom",
        description: "Contemporary aesthetics",
        image: "/images_in/IMG-20251030-WA0045.jpg",
        price: "Starting at 3.85L*"
      }
    ]
  },
  {
    id: "living",
    title: "Living Room Interiors",
    items: [
      {
        title: "Contemporary Living Room",
        description: "Modern and elegant spaces",
        image: "/images_in/IMG-20251030-WA0003.jpg",
        price: "Starting at 5.25L*"
      },
      {
        title: "Minimalist Decor Room",
        description: "Clean and sophisticated design",
        image: "/images_in/IMG-20251030-WA0015.jpg",
        price: "Starting at 4.75L*"
      },
      {
        title: "Spacious Family Lounge",
        description: "Comfortable gathering spaces",
        image: "/images_in/IMG-20251030-WA0030.jpg",
        price: "Starting at 5.95L*"
      },
      {
        title: "Urban Chic Living Space",
        description: "Trendy and functional design",
        image: "/images_in/IMG-20251030-WA0050.jpg",
        price: "Starting at 5.45L*"
      }
    ]
  }
]

function InteriorsCarousel({ category }: { category: typeof categories[0] }) {
  return (
    <div className="mb-24 last:mb-0">
      <h2 className="text-center text-3xl sm:text-4xl font-serif font-bold text-[#2E2B28] mb-12 tracking-wide">
        {category.title}
      </h2>

      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: `.swiper-button-prev-${category.id}`,
            nextEl: `.swiper-button-next-${category.id}`,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={600}
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="!px-2"
        >
          {category.items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="group cursor-pointer transition-all duration-300">
                <div className="relative h-[240px] rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <div className="absolute top-3 left-3 z-10">
                    <div className="text-[11px] sm:text-xs font-semibold bg-[#6b3f2a] text-white px-2 sm:px-3 py-1 rounded-full shadow-md">
                      {item.price}
                    </div>
                  </div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-serif font-medium text-[#2E2B28] group-hover:text-[#C46B43] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#2E2B28]/70">
                    {item.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <button 
            className={`swiper-button-prev-${category.id} !hidden md:!flex absolute left-0 top-[120px] z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 items-center justify-center`}
          >
            <ChevronLeft className="w-6 h-6 text-[#2E2B28]" />
          </button>
          <button 
            className={`swiper-button-next-${category.id} !hidden md:!flex absolute right-0 top-[120px] z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-200 items-center justify-center`}
          >
            <ChevronRight className="w-6 h-6 text-[#2E2B28]" />
          </button>
        </Swiper>
      </div>
    </div>
  )
}

export function InteriorsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {categories.map((category) => (
        <div id={category.id} key={category.id}>
          <InteriorsCarousel category={category} />
        </div>
      ))}
    </div>
  )
}