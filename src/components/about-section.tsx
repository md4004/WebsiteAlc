'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Leaf, Gem } from "lucide-react"

const values = [
    {
        icon: Award,
        title: "Curated Excellence",
        description: "Every bottle is hand-selected by our team of expert sommeliers and spirit connoisseurs.",
    },
    {
        icon: Leaf,
        title: "Sustainably Sourced",
        description: "We partner with distilleries committed to sustainable and ethical production practices.",
    },
    {
        icon: Gem,
        title: "Rare Finds",
        description: "Access limited-edition releases and vintage bottles unavailable anywhere else.",
    },
]

export function AboutSection() {
    return (
        <section id="about" className="relative py-28 md:py-36 px-8 sm:px-12 bg-black overflow-hidden">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

            {/* Ambient glow */}
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px] -translate-y-1/2" />

            <div className="max-w-[1200px] mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 xl:gap-28 items-center">
                    {/* Left - Image */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1574015974293-817f0ebf638d?w=800&h=1000&fit=crop&q=80"
                                alt="Premium spirits collection"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </div>

                        {/* Floating badge */}
                        <motion.div
                            className="absolute -bottom-6 -right-6 sm:bottom-8 sm:right-8 bg-black/80 backdrop-blur-lg border border-amber-500/20 rounded-2xl p-7 max-w-[200px]"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <div className="text-3xl font-bold text-amber-400 font-serif">15+</div>
                            <div className="text-sm text-neutral-400 mt-1.5 font-sans leading-relaxed">Years of Excellence</div>
                        </motion.div>

                        {/* Decorative border */}
                        <div className="absolute -inset-4 border border-amber-500/10 rounded-3xl -z-10" />
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-amber-400/60 text-xs font-sans font-medium tracking-[0.3em] uppercase">Our Story</span>
                        <h2 className="text-4xl sm:text-5xl font-bold mt-5 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 leading-tight font-serif italic">
                            Crafted with Passion, Served with Pride
                        </h2>

                        <div className="w-20 h-[1px] bg-gradient-to-r from-amber-500 to-transparent mt-8 mb-10" />

                        <p className="text-neutral-400 text-lg leading-[1.8] mb-7 font-sans font-light">
                            At One Glass, we believe every bottle tells a story. Since our founding, we&apos;ve traveled the world to
                            discover extraordinary spirits from the most renowned distilleries and hidden gems alike.
                        </p>
                        <p className="text-neutral-500 leading-[1.8] mb-14 font-sans">
                            Our passion lies in connecting discerning collectors and enthusiasts with bottles that elevate every
                            occasion — from rare single malts aged for decades to limited-edition champagnes that mark life&apos;s
                            most memorable moments.
                        </p>

                        {/* Values */}
                        <div className="space-y-8">
                            {values.map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    className="flex gap-5 items-start group"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15, duration: 0.5 }}
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                                        <value.icon className="w-5 h-5 text-amber-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold font-sans tracking-wide">{value.title}</h4>
                                        <p className="text-neutral-500 text-sm mt-1.5 leading-[1.8] font-sans">{value.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
