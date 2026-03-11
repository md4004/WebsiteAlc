'use client'

import SubPageHeader from "@/components/sub-page-header"
import SubPageFooter from "@/components/sub-page-footer"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useToast } from "@/components/ui/toast"
import { motion } from "framer-motion"

const allProducts = [
    {
        id: 1,
        name: "Macallan 25 Year Old",
        category: "Speyside Single Malt",
        price: 2500,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjG5hFNMv-cdQ1AY2lEOPRxKOMckW8yEladtL3HHTWxoZbvA6SkjcWF3-w5WCJQtPRsFiJD-QIr4j9q-ha1UdXTtBWMEbZvpVvKyzSj8YqHTR3XGhe2-fUVBoa28_V-SD249LWBg7BetGxPP0a3nJQgJtW1VzAqTXT-gwdu9YEDeDlqdrOEyW7Nk1Brg-EDmjYX_nUmaVUOmbndeau-Au_OLWnL5HGsnij7K1oBbXyTJWgO8c7jg3VngMFEQ7A0XEvq1YHBNyHzOm0",
        tag: "single-malt",
    },
    {
        id: 2,
        name: "Louis XIII Cognac",
        category: "Grande Champagne Cru",
        price: 4200,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgNYNsN-5LLzwWM3F8Ibfjym7-dmg6lPsqmJrehe1hav-8HrrCvuUDpdKXWtucjRgVx8mDY_WHf4g9BheIE8M2cHfxqpM-9TfjyVzP3HL8v8QuN5-kkQ7Iqk5ds7GchzVv-qCmxtzKSQZwTvGiGEetVtS5jRE8kh7uC5JxgwArw_FgnqAUqXqAloQ-NZEfHEQNixAPAEBOapM0D0GvwLgi0h7jNEo7e0KwX7S-IrrYJPIBltU9UP_Hv-WYfVoHXxbjCUuhOprB6J6N",
        tag: "cognac",
    },
    {
        id: 3,
        name: "Clase Azul Ultra",
        category: "Extra Añejo Reserve",
        price: 1800,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCb8jgh_nsG4jQSxkesqU7j4J8T1CklNoHu_xSTnEXaAT2usbzvVE_ua3GMRubH7L4JPpg8UVQEe6GrI50M28vw9x1kEy5kg_YxQ8phOMunViwXUudw4Sy5xxxpoU1lSUHehjbutRBC8gM9Xy-lbkGbiQYeMVSnzT-2034d3pvlDFfjuM-YfsL0vswHba19QnkBbOm6juBu5Z5x18gtxRXRLruSKUVNi-daz8pIqIHKJm_AtrVN7flOEmhuq7AePixAlMw4pCmM3LvU",
        tag: "tequila",
    },
    {
        id: 4,
        name: "Hibiki 21 Year",
        category: "Japanese Blended Art",
        price: 1250,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAG_t73IihQuzuw_MAGhJe-IzuaMT37uz-cKmDwC_H6Jixi-KvkbgJ1IAU5iVP8SMVjqCXYG0dIJaM7Kx55VN97Ni3YsgPFRphB651HE-ry_JSPdVHjfiqihPwRCQLpdaLMqQ2fbzpG_SJvT8MF2D0O_OBn9_ae6D_4H1Sb7EUkvUAtP9O0_nmlGhXlafdyP1zEKqyUgUf4HaCbGI0wOSXn57LCULV2ShfPSEwW25JUSdZU_ZxTlZh0IxMUL-bEt4rrps6OiIgmLoxw",
        tag: "single-malt",
    },
]

const filters = [
    { label: "All Spirits", tag: "all" },
    { label: "Single Malt", tag: "single-malt" },
    { label: "Vintage Cognac", tag: "cognac" },
    { label: "Artisan Tequila", tag: "tequila" },
]

export default function CollectionPage() {
    const [activeFilter, setActiveFilter] = useState("all")
    const { showToast } = useToast()

    const filteredProducts = activeFilter === "all"
        ? allProducts
        : allProducts.filter((p) => p.tag === activeFilter)

    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-black text-white">
            <SubPageHeader />

            <main className="max-w-[1400px] mx-auto w-full px-6 md:px-10 py-12">
                {/* Hero Content */}
                <motion.div
                    className="flex flex-col gap-6 mb-16 text-center lg:text-left"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 self-center lg:self-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-amber-400">
                            Exclusive Access
                        </span>
                    </div>
                    <h1 className="text-white text-5xl md:text-7xl font-light leading-tight tracking-tight max-w-3xl">
                        The <span className="text-amber-400 font-bold">Prestige</span>{" "}
                        Collection
                    </h1>
                    <p className="text-white/40 text-lg font-light leading-relaxed max-w-2xl">
                        An ultra-rare assembly of world-class spirits, meticulously
                        curated for the most discerning connoisseurs of liquid gold.
                    </p>
                </motion.div>

                {/* Filter Controls */}
                <div className="flex flex-wrap items-center gap-3 mb-12 pb-8 border-b border-white/5">
                    {filters.map((filter) => (
                        <button
                            key={filter.tag}
                            onClick={() => setActiveFilter(filter.tag)}
                            className={`flex h-10 items-center justify-center px-6 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer ${activeFilter === filter.tag
                                    ? "bg-amber-500 text-black"
                                    : "border border-white/10 bg-transparent text-white/60 hover:border-amber-500/50 hover:text-amber-400"
                                }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                    layout
                >
                    {filteredProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            className="group flex flex-col gap-6 p-4 rounded-xl border border-white/5 bg-white/[0.02] transition-all duration-500 hover:border-amber-500/30 hover:shadow-[0_0_20px_rgba(212,168,83,0.1)]"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            layout
                        >
                            <Link href={`/product/${product.id}`} className="relative overflow-hidden rounded-lg aspect-[3/4] bg-[#1a1a1a] flex items-center justify-center">
                                <Image
                                    className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                    alt={product.name}
                                    src={product.image}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />
                                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button
                                        className="w-10 h-10 rounded-full bg-black/60 backdrop-blur border border-amber-500/30 text-amber-400 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            showToast(`${product.name} added to wishlist`)
                                        }}
                                    >
                                        <span className="material-symbols-outlined text-xl">favorite</span>
                                    </button>
                                </div>
                            </Link>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-start">
                                    <Link href={`/product/${product.id}`} className="text-white text-lg font-bold tracking-tight hover:text-amber-400 transition-colors">
                                        {product.name}
                                    </Link>
                                    <p className="text-amber-400 text-lg font-black leading-normal">
                                        ${product.price.toLocaleString()}.00
                                    </p>
                                </div>
                                <p className="text-white/40 text-xs font-bold tracking-[0.1em] uppercase italic">
                                    {product.category}
                                </p>
                                <button
                                    onClick={() => showToast(`${product.name} reserved successfully`)}
                                    className="mt-4 w-full py-3 rounded-lg bg-white/5 border border-white/10 text-white text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300 hover:bg-amber-500 hover:text-black hover:border-amber-500 cursor-pointer active:scale-[0.98]"
                                >
                                    Reserve Bottle
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Section Footer */}
                <div className="mt-24 border-t border-white/5 pt-12 text-center">
                    <h3 className="text-amber-400/70 text-[10px] font-black tracking-[0.4em] uppercase mb-4">
                        Limited Availability
                    </h3>
                    <p className="text-white/40 text-sm font-light italic">
                        Quantities are restricted to one bottle per collector for items
                        valued above $2,000.
                    </p>
                </div>
            </main>

            <SubPageFooter />
        </div>
    )
}
