'use client'

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
    {
        name: "Alexander M.",
        role: "Wine Collector",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
        text: "One Glass has transformed the way I discover rare vintages. Their curation is impeccable — every bottle tells a story worth savoring.",
        rating: 5,
    },
    {
        name: "Isabelle R.",
        role: "Sommelier",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
        text: "As a sommelier, I'm incredibly selective. One Glass consistently exceeds my expectations with their range of premium spirits and impeccable delivery.",
        rating: 5,
    },
    {
        name: "Michael T.",
        role: "Spirits Enthusiast",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80",
        text: "The Macallan 18 I ordered arrived in pristine condition with gorgeous packaging. This is luxury done right — from selection to doorstep.",
        rating: 5,
    },
]

export function TestimonialsSection() {
    return (
        <section className="relative py-32 px-6 sm:px-8 bg-black overflow-hidden">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-500/[0.03] rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-amber-400/60 text-xs font-medium tracking-[0.3em] uppercase">Testimonials</span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        What Connoisseurs Say
                    </h2>
                    <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-6" />
                </motion.div>

                {/* Testimonials grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            className="group relative"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                        >
                            <div className="relative rounded-2xl p-8 bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] backdrop-blur-sm transition-all duration-500 hover:border-amber-500/20 h-full flex flex-col">
                                {/* Quote icon */}
                                <Quote className="w-8 h-8 text-amber-500/20 mb-6" />

                                {/* Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                                    ))}
                                </div>

                                {/* Text */}
                                <p className="text-neutral-300 leading-relaxed flex-1 text-sm">
                                    &ldquo;{testimonial.text}&rdquo;
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/5">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-amber-500/20">
                                        <Image
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                            sizes="48px"
                                        />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                                        <div className="text-xs text-amber-400/60">{testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
