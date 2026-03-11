'use client'

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function SpecialOffer() {
    return (
        <section className="relative py-28 md:py-36 px-8 sm:px-12 bg-black overflow-hidden">
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

            <div className="max-w-[1200px] mx-auto relative z-10">
                <motion.div
                    className="relative rounded-3xl overflow-hidden"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Background image */}
                    <div className="absolute inset-0">
                        <Image
                            src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1400&h=600&fit=crop&q=80"
                            alt="Premium spirits collection"
                            fill
                            className="object-cover"
                            sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
                    </div>

                    {/* Border */}
                    <div className="absolute inset-0 rounded-3xl border border-amber-500/10" />

                    {/* Content */}
                    <div className="relative z-10 px-10 sm:px-20 py-20 sm:py-28 max-w-2xl">
                        <motion.div
                            className="px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 inline-block mb-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <span className="text-amber-400 text-[10px] font-sans font-semibold tracking-[0.25em] uppercase">Limited Time</span>
                        </motion.div>

                        <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight font-serif">
                            The Spring Collection
                            <span className="block text-amber-400 mt-3 italic">Is Here</span>
                        </h2>

                        <p className="text-neutral-300 mt-8 text-lg leading-[1.8] max-w-md font-sans font-light">
                            Exclusive seasonal releases from the finest distilleries. Save up to 20% on select premium spirits this month.
                        </p>

                        <motion.a
                            href="#products"
                            className="group inline-flex items-center gap-3 mt-12 px-10 py-4.5 bg-amber-500 text-black font-semibold rounded-full transition-all duration-300 hover:bg-amber-400 hover:shadow-[0_0_40px_rgba(212,168,83,0.3)] tracking-[0.15em] uppercase text-sm font-sans"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Shop the Collection
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
