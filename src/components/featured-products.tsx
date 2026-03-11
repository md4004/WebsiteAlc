'use client'

import { motion, type Variants } from "framer-motion"
import { ShoppingCart, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useToast } from "@/components/ui/toast"

const products = [
    {
        id: 1,
        name: "Macallan 18",
        category: "Single Malt Scotch",
        price: "$349.00",
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=400&h=600&fit=crop&q=80",
        badge: "Best Seller",
    },
    {
        id: 2,
        name: "Dom Pérignon",
        category: "Vintage Champagne",
        price: "$289.00",
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1594372365401-3b5ff14eaaed?w=400&h=600&fit=crop&q=80",
        badge: "Exclusive",
    },
    {
        id: 3,
        name: "Hennessy X.O",
        category: "Cognac",
        price: "$219.00",
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&h=600&fit=crop&q=80",
        badge: "Limited",
    },
]

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    },
}

export function FeaturedProducts() {
    const { showToast } = useToast()

    return (
        <section id="products" className="relative py-28 md:py-36 px-8 sm:px-12 bg-black overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,168,83,0.04)_0%,transparent_60%)]" />

            <div className="max-w-[1200px] mx-auto relative z-10">
                {/* Section header */}
                <motion.div
                    className="text-center mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-amber-400/60 text-xs font-sans font-medium tracking-[0.3em] uppercase">Handpicked Selection</span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-5 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 font-serif italic">
                        Featured Spirits
                    </h2>
                    <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-8" />
                </motion.div>

                {/* Products grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {products.map((product) => (
                        <motion.div
                            key={product.name}
                            variants={itemVariants}
                            className="group relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] backdrop-blur-sm transition-all duration-500 hover:border-amber-500/20 hover:shadow-[0_0_40px_rgba(212,168,83,0.08)]">
                                {/* Badge */}
                                <div className="absolute top-5 left-5 z-10">
                                    <span className="px-4 py-1.5 text-[10px] font-semibold tracking-[0.15em] uppercase bg-amber-500/90 text-black rounded-full font-sans">
                                        {product.badge}
                                    </span>
                                </div>

                                {/* Image container */}
                                <Link href={`/product/${product.id}`} className="relative block h-80 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-[1]" />
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </Link>

                                {/* Content */}
                                <div className="p-7">
                                    <div className="flex items-center gap-1 mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={12}
                                                className={i < Math.floor(product.rating) ? "text-amber-400 fill-amber-400" : "text-neutral-700"}
                                            />
                                        ))}
                                        <span className="text-xs text-neutral-500 ml-2 font-sans">{product.rating}</span>
                                    </div>

                                    <Link href={`/product/${product.id}`}>
                                        <h3 className="text-xl font-semibold text-white group-hover:text-amber-400 transition-colors duration-300 font-serif">{product.name}</h3>
                                    </Link>
                                    <p className="text-sm text-neutral-500 mt-1.5 font-sans tracking-wide">{product.category}</p>

                                    <div className="flex items-center justify-between mt-7 pt-5 border-t border-white/5">
                                        <span className="text-2xl font-bold text-white font-serif">{product.price}</span>
                                        <motion.button
                                            className="flex items-center gap-2.5 px-6 py-3 bg-white/5 border border-white/10 text-white/80 rounded-full text-sm font-medium transition-all duration-300 hover:bg-amber-500 hover:border-amber-500 hover:text-black cursor-pointer tracking-wide font-sans"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => showToast(`${product.name} added to cart`)}
                                        >
                                            <ShoppingCart size={14} />
                                            <span>Add</span>
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View all button */}
                <motion.div
                    className="text-center mt-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <Link href="/collection" className="inline-flex items-center gap-3 text-amber-400/70 hover:text-amber-400 text-sm font-medium tracking-[0.2em] uppercase transition-colors duration-300 group font-sans">
                        View Full Collection
                        <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}
