'use client'

import { motion } from "framer-motion"
import { Clock, Shield, Truck, Gift } from "lucide-react"

const features = [
    {
        icon: Truck,
        title: "Free Express Shipping",
        description: "Complimentary delivery on orders over $150",
    },
    {
        icon: Shield,
        title: "Authenticity Guaranteed",
        description: "Every bottle verified & certified genuine",
    },
    {
        icon: Clock,
        title: "Same-Day Dispatch",
        description: "Order before 2PM for next-day delivery",
    },
    {
        icon: Gift,
        title: "Premium Gift Wrapping",
        description: "Luxury packaging for special occasions",
    },
]

export function PromoBanner() {
    return (
        <section className="relative py-20 px-8 sm:px-12 bg-black overflow-hidden">
            {/* Top and bottom lines */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

            {/* Subtle background */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/[0.02] via-amber-500/[0.05] to-amber-500/[0.02]" />

            <div className="max-w-[1200px] mx-auto relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            className="flex items-start gap-5 group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/15 transition-colors duration-300">
                                <feature.icon className="w-5 h-5 text-amber-400" />
                            </div>
                            <div>
                                <h4 className="text-white font-semibold text-sm tracking-wide font-sans">{feature.title}</h4>
                                <p className="text-neutral-500 text-xs mt-1.5 leading-[1.8] font-sans">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
