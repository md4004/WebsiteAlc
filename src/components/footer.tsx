'use client'

import { Wine, Instagram, Facebook, Twitter } from "lucide-react"
import { motion } from "framer-motion"

const footerLinks = {
    shop: [
        { name: "All Spirits", href: "#" },
        { name: "Whisky", href: "#" },
        { name: "Wine", href: "#" },
        { name: "Champagne", href: "#" },
        { name: "Cognac", href: "#" },
    ],
    company: [
        { name: "About Us", href: "#about" },
        { name: "Our Story", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
    ],
    support: [
        { name: "Contact", href: "#" },
        { name: "Shipping", href: "#" },
        { name: "Returns", href: "#" },
        { name: "FAQ", href: "#" },
    ],
}

export function Footer() {
    return (
        <footer className="relative bg-black border-t border-white/5 overflow-hidden">
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
                    {/* Brand column */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                                <Wine className="w-5 h-5 text-black" />
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight">One Glass</span>
                        </div>
                        <p className="text-neutral-500 text-sm leading-relaxed max-w-sm mb-8">
                            Your destination for the world&apos;s finest spirits. Every bottle curated, every sip extraordinary.
                        </p>

                        {/* Newsletter */}
                        <div className="max-w-sm">
                            <p className="text-xs text-neutral-400 uppercase tracking-widest mb-3">Join our mailing list</p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-amber-500/40 transition-colors duration-300"
                                />
                                <motion.button
                                    className="px-6 py-2.5 bg-amber-500 text-black font-semibold text-sm rounded-full hover:bg-amber-400 transition-colors duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Subscribe
                                </motion.button>
                            </div>
                        </div>
                    </div>

                    {/* Link columns */}
                    <div>
                        <h4 className="text-xs text-amber-400/60 font-semibold uppercase tracking-[0.2em] mb-6">Shop</h4>
                        <ul className="space-y-3">
                            {footerLinks.shop.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-sm text-neutral-500 hover:text-amber-400 transition-colors duration-300">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs text-amber-400/60 font-semibold uppercase tracking-[0.2em] mb-6">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-sm text-neutral-500 hover:text-amber-400 transition-colors duration-300">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs text-amber-400/60 font-semibold uppercase tracking-[0.2em] mb-6">Support</h4>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-sm text-neutral-500 hover:text-amber-400 transition-colors duration-300">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-neutral-600">
                        © 2026 One Glass. All rights reserved. Drink responsibly.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-500 hover:text-amber-400 hover:border-amber-500/30 transition-all duration-300">
                            <Instagram size={16} />
                        </a>
                        <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-500 hover:text-amber-400 hover:border-amber-500/30 transition-all duration-300">
                            <Facebook size={16} />
                        </a>
                        <a href="#" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-500 hover:text-amber-400 hover:border-amber-500/30 transition-all duration-300">
                            <Twitter size={16} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom ambient glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-amber-500/5 rounded-full blur-[120px]" />
        </footer>
    )
}
