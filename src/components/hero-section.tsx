'use client'

import { SplineScene } from "@/components/ui/splite"
import { Spotlight } from "@/components/ui/spotlight"
import { motion } from "framer-motion"
import { Wine } from "lucide-react"

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

            <div className="flex flex-col lg:flex-row h-full w-full max-w-7xl mx-auto px-6 sm:px-8 pt-24 pb-12 relative z-10">
                {/* Left content */}
                <motion.div
                    className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left py-12"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Badge */}
                    <motion.div
                        className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <Wine className="w-4 h-4 text-amber-400" />
                        <span className="text-amber-400/80 text-xs font-medium tracking-widest uppercase">Premium Spirits</span>
                    </motion.div>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40">
                            One Glass
                        </span>
                    </h1>

                    <motion.div
                        className="w-20 h-[2px] bg-gradient-to-r from-amber-500 to-amber-300 mt-6 mb-6"
                        initial={{ width: 0 }}
                        animate={{ width: 80 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    />

                    <p className="text-lg sm:text-xl text-neutral-400 max-w-lg leading-relaxed font-light">
                        Discover the world&apos;s finest spirits. Curated, rare, and delivered to your doorstep with unmatched elegance.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-10">
                        <motion.a
                            href="#products"
                            className="group relative inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,168,83,0.3)]"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="relative z-10">Explore Collection</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.a>
                        <motion.a
                            href="#about"
                            className="inline-flex items-center justify-center px-8 py-3.5 border border-white/15 text-white/80 font-medium rounded-full transition-all duration-300 hover:border-amber-500/40 hover:text-amber-400 hover:bg-amber-500/5"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Our Story
                        </motion.a>
                    </div>

                    {/* Stats */}
                    <motion.div
                        className="flex gap-12 mt-16 pt-8 border-t border-white/5"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                    >
                        <div>
                            <div className="text-2xl font-bold text-amber-400">500+</div>
                            <div className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">Premium Labels</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-amber-400">50+</div>
                            <div className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">Countries</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-amber-400">24h</div>
                            <div className="text-xs text-neutral-500 mt-1 uppercase tracking-wider">Delivery</div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right content - 3D Bottle */}
                <motion.div
                    className="flex-1 relative min-h-[400px] lg:min-h-[600px]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    {/* Glow behind the bottle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px]" />

                    <SplineScene
                        scene="https://prod.spline.design/N6Uu09J7y4uUerlT/scene.splinecode"
                        className="w-full h-full"
                    />
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
                <span className="text-xs text-neutral-600 uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-8 bg-gradient-to-b from-amber-500/50 to-transparent" />
            </motion.div>
        </section>
    )
}
