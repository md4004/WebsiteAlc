'use client'

import { Spotlight } from "@/components/ui/spotlight"
import { motion } from "framer-motion"
import { Wine } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
    return (
        <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Spotlight effects */}
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="#d4a853"
            />
            <Spotlight
                className="-top-40 right-0 md:right-60 md:-top-20"
                fill="#b8860b"
            />

            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,83,0.08)_0%,transparent_70%)]" />

            {/* Subtle grain texture */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />

            <div className="flex flex-col lg:flex-row h-full w-full max-w-[1200px] mx-auto px-8 sm:px-12 pt-28 pb-16 relative z-10 gap-8">
                {/* Left content */}
                <motion.div
                    className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left py-16"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Badge */}
                    <motion.div
                        className="flex items-center gap-3 px-5 py-2 rounded-full border border-amber-500/20 bg-amber-500/5 mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <Wine className="w-4 h-4 text-amber-400" />
                        <span className="text-amber-400/80 text-xs font-medium tracking-[0.25em] uppercase font-sans">Premium Spirits</span>
                    </motion.div>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight font-serif italic">
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
                            One Glass
                        </span>
                    </h1>

                    <motion.div
                        className="w-24 h-[1px] bg-gradient-to-r from-amber-500 to-amber-300 mt-8 mb-8"
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    />

                    <p className="text-lg sm:text-xl text-neutral-400 max-w-lg leading-[1.8] font-sans font-light">
                        Discover the world&apos;s finest spirits. Curated, rare, and delivered to your doorstep with unmatched elegance.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 mt-12">
                        <motion.a
                            href="#products"
                            className="group relative inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,168,83,0.3)] tracking-[0.15em] uppercase text-sm font-sans"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="relative z-10">Explore Collection</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.a>
                        <motion.a
                            href="#about"
                            className="inline-flex items-center justify-center px-10 py-4 border border-white/15 text-white/80 font-medium rounded-full transition-all duration-300 hover:border-amber-500/40 hover:text-amber-400 hover:bg-amber-500/5 tracking-[0.15em] uppercase text-sm font-sans"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Our Story
                        </motion.a>
                    </div>

                    {/* Stats */}
                    <motion.div
                        className="flex gap-16 mt-20 pt-10 border-t border-white/5"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <div>
                            <div className="text-3xl font-bold text-amber-400 font-serif">500+</div>
                            <div className="text-xs text-neutral-500 mt-2 uppercase tracking-[0.2em] font-sans">Premium Labels</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-amber-400 font-serif">50+</div>
                            <div className="text-xs text-neutral-500 mt-2 uppercase tracking-[0.2em] font-sans">Countries</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-amber-400 font-serif">24h</div>
                            <div className="text-xs text-neutral-500 mt-2 uppercase tracking-[0.2em] font-sans">Delivery</div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right content - Bottle image with animations */}
                <motion.div
                    className="flex-1 relative min-h-[400px] lg:min-h-[600px] flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    {/* Glow behind the bottle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-amber-300/8 rounded-full blur-[60px]" />

                    {/* Floating bottle visual */}
                    <motion.div
                        className="relative w-full h-full"
                        animate={{ y: [0, -15, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=600&h=800&fit=crop&q=80"
                            alt="Premium One Glass Whisky Bottle"
                            fill
                            className="object-contain drop-shadow-[0_0_60px_rgba(212,168,83,0.15)]"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority
                        />
                    </motion.div>

                    {/* Floating badge */}
                    <motion.div
                        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 items-center bg-black/60 backdrop-blur px-6 py-2.5 rounded-full border border-amber-500/20"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
                    >
                        <span className="material-symbols-outlined text-amber-400 text-sm">verified</span>
                        <span className="text-xs uppercase tracking-[0.25em] text-white/50 font-sans">Premium Quality</span>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
                <span className="text-[10px] text-neutral-600 uppercase tracking-[0.3em] font-sans">Scroll</span>
                <div className="w-[1px] h-10 bg-gradient-to-b from-amber-500/50 to-transparent" />
            </motion.div>
        </section>
    )
}
