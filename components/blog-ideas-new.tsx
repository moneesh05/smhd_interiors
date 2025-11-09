"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const M: any = motion

const categories = [
  {
    id: "Living",
    title: "Living Room",
    img: "/images_in/IMG-20251030-WA0003.jpg"
  },
  {
    id: "Bedroom",
    title: "Bedroom",
    img: "/images_in/IMG-20251030-WA0004.jpg"
  },
  {
    id: "Kitchen",
    title: "Kitchen",
    img: "/images_in/IMG-20251030-WA0005.jpg"
  }
]

const posts = [
  { 
    id: 1, 
    title: "Contemporary Living Space", 
    category: "Living", 
    img: "/images_in/IMG-20251030-WA0003.jpg",
    description: "Modern living room with clean lines and natural light"
  },
  { 
    id: 2, 
    title: "Luxurious Master Bedroom", 
    category: "Bedroom", 
    img: "/images_in/IMG-20251030-WA0004.jpg",
    description: "Elegant bedroom design with premium finishes"
  },
  { 
    id: 3, 
    title: "Gourmet Kitchen Design", 
    category: "Kitchen", 
    img: "/images_in/IMG-20251030-WA0005.jpg",
    description: "Professional-grade kitchen with modern appliances"
  },
  { 
    id: 4, 
    title: "Open Concept Living", 
    category: "Living", 
    img: "/images_in/IMG-20251030-WA0015.jpg",
    description: "Seamless flow between living and dining spaces"
  },
  { 
    id: 5, 
    title: "Minimalist Bedroom", 
    category: "Bedroom", 
    img: "/images_in/IMG-20251030-WA0020.jpg",
    description: "Clean and serene bedroom with essential elements"
  },
  { 
    id: 6, 
    title: "Modern Kitchen Solutions", 
    category: "Kitchen", 
    img: "/images_in/IMG-20251030-WA0025.jpg",
    description: "Smart storage and efficient workspace design"
  },
  { 
    id: 7, 
    title: "Cozy Living Nook", 
    category: "Living", 
    img: "/images_in/IMG-20251030-WA0030.jpg",
    description: "Intimate reading corner with comfortable seating"
  },
  { 
    id: 8, 
    title: "Kids Bedroom Paradise", 
    category: "Bedroom", 
    img: "/images_in/IMG-20251030-WA0035.jpg",
    description: "Playful and functional children's bedroom design"
  },
  { 
    id: 9, 
    title: "Kitchen Dining Fusion", 
    category: "Kitchen", 
    img: "/images_in/IMG-20251030-WA0040.jpg",
    description: "Integrated kitchen and dining area for family meals"
  },
  { 
    id: 10, 
    title: "Luxury Living Room", 
    category: "Living", 
    img: "/images_in/IMG-20251030-WA0045.jpg",
    description: "High-end living space with custom furnishings"
  },
  { 
    id: 11, 
    title: "Serene Master Suite", 
    category: "Bedroom", 
    img: "/images_in/IMG-20251030-WA0050.jpg",
    description: "Tranquil master bedroom with ensuite bathroom"
  },
  { 
    id: 12, 
    title: "Chef's Dream Kitchen", 
    category: "Kitchen", 
    img: "/images_in/IMG-20251030-WA0055.jpg",
    description: "Fully equipped kitchen with premium appliances"
  }
]

export default function BlogIdeas() {
  const [active, setActive] = useState<string>("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filtered = posts.filter((p) => p.category === selectedCategory)

  const handleCategoryClick = (categoryId: string) => {
    if (selectedCategory === categoryId) {
      setSelectedCategory(null)
    } else {
      setSelectedCategory(categoryId)
    }
    setActive(categoryId)
  }

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-semibold mb-4 text-[#2E2B28]">
          Design Ideas & Inspiration
        </h2>
        <p className="text-[#2E2B28]/70 max-w-2xl mx-auto">
          Explore our curated collection of interior design ideas and get inspired for your next home transformation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className="group relative flex flex-col rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Image container with hover zoom effect */}
            <div className="relative h-64 w-full overflow-hidden">
              <img
                src={category.img}
                alt={category.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-opacity duration-300" />
            </div>
            
            {/* Content area */}
            <div className="p-6 flex flex-col">
              <h3 className="font-serif text-2xl font-semibold text-[#2E2B28] mb-2">{category.title}</h3>
              <p className="text-[#2E2B28]/70 text-sm font-normal leading-relaxed">
                {category.id === "Living" && "Transform your living space into an elegant sanctuary"}
                {category.id === "Bedroom" && "Create a peaceful retreat for rest and relaxation"}
                {category.id === "Kitchen" && "Design a functional and stylish culinary space"}
              </p>
              
              {/* Focus/active state ring (preserved from original) */}
              {active === category.id && (
                <div className="absolute inset-0 ring-2 ring-[#C46B43] rounded-2xl pointer-events-none" />
              )}
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selectedCategory && (
          <M.div
            key={selectedCategory}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((post, i) => (
            <M.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer h-[400px] hover:-translate-y-1 transition-transform duration-300"
            >
              <div 
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full"
              >
                <div
                  className="h-[240px] w-full overflow-hidden"
                >
                  <div className="w-full h-full relative overflow-hidden">
                    <img 
                      src={post.img}
                      alt={post.title}
                      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                </div>
                <div className="p-6 flex flex-col h-[160px]">
                  <div className="text-sm font-medium text-[#C46B43] mb-2">{post.category}</div>
                  <h3 className="font-semibold text-lg mb-3 text-[#2E2B28] group-hover:text-[#C46B43] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#2E2B28]/70 leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                </div>
              </div>
            </M.article>
          ))}
          </M.div>
        )}
      </AnimatePresence>
    </div>
  )
}