'use client'

import { motion } from "framer-motion"
import Image from "next/image"

const categories = [
    {
        name: "Whisky",
        description: "Single malts & blends",
        count: "120+ Labels",
        image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=600&h=400&fit=crop&q=80",
    },
    {
        name: "Wine",
        description: "Red, white & rosé",
        count: "200+ Labels",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&h=400&fit=crop&q=80",
    },
    {
        name: "Champagne",
        description: "Vintage & prestige cuvées",
        count: "80+ Labels",
        image: "https://images.unsplash.com/photo-1549918864-48ac978761a4?w=600&h=400&fit=crop&q=80",
    },
    {
        name: "Cognac",
        description: "V.S.O.P & X.O",
        count: "60+ Labels",
        image: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=600&h=400&fit=crop&q=80",
    },
]

export function CategoriesSection() {
    return (
        <section id="categories" className="relative py-32 px-6 sm:px-8 bg-black overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-amber-400/60 text-xs font-medium tracking-[0.3em] uppercase">Browse by Category</span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        Collections
                    </h2>
                    <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-6" />
                </motion.div>

                {/* Categories grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <motion.a
                            key={category.name}
                            href="#"
                            className="group relative block rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            {/* Background image */}
                            <Image
                                src={category.image}
                                alt={category.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            />

                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />

                            {/* Golden border glow on hover */}
                            <div className="absolute inset-0 rounded-2xl border border-white/5 group-hover:border-amber-500/30 transition-all duration-500" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <span className="text-amber-400/70 text-xs font-medium tracking-widest uppercase">{category.count}</span>
                                <h3 className="text-2xl font-bold text-white mt-2 group-hover:text-amber-400 transition-colors duration-300">{category.name}</h3>
                                <p className="text-sm text-neutral-400 mt-1">{category.description}</p>

                                <div className="flex items-center gap-2 mt-4 text-white/50 group-hover:text-amber-400/80 transition-colors duration-300">
                                    <span className="text-xs font-medium tracking-wider uppercase">Explore</span>
                                    <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}
