'use client'

import Link from "next/link"
import { Wine, Search, ShoppingBag, Menu, X } from "lucide-react"
import { useState } from "react"

export default function SubPageHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0a0a0a]/80 backdrop-blur-md">
            <div className="flex items-center justify-between px-8 md:px-12 lg:px-20 py-5 max-w-[1360px] mx-auto w-full">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                        <Wine className="w-4 h-4 text-black" />
                    </div>
                    <h2 className="text-white text-lg font-bold tracking-[0.15em] uppercase font-serif italic">
                        One Glass
                    </h2>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-12">
                    <Link
                        className="text-white/60 hover:text-amber-400 text-xs font-sans font-semibold tracking-[0.2em] uppercase transition-colors duration-300"
                        href="/collection"
                    >
                        Collections
                    </Link>
                    <Link
                        className="text-white/60 hover:text-amber-400 text-xs font-bold tracking-widest uppercase transition-colors duration-300"
                        href="/collection"
                    >
                        Rare Finds
                    </Link>
                    <Link
                        className="text-white/60 hover:text-amber-400 text-xs font-bold tracking-widest uppercase transition-colors duration-300"
                        href="/collection"
                    >
                        Curated Gifts
                    </Link>
                </nav>

                {/* Right actions */}
                <div className="flex items-center gap-3">
                    {/* Search (desktop) */}
                    <label className="hidden md:flex items-center h-10 min-w-[200px] max-w-[280px] rounded-full bg-white/5 border border-white/10 focus-within:border-amber-500/50 transition-all px-4 gap-2">
                        <Search className="w-4 h-4 text-white/40" />
                        <input
                            className="bg-transparent border-none outline-none text-sm text-white placeholder:text-white/30 w-full"
                            placeholder="Search spirits..."
                        />
                    </label>

                    {/* Cart */}
                    <Link
                        href="/cart"
                        className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-amber-400 hover:border-amber-500/40 transition-all duration-300"
                    >
                        <ShoppingBag className="w-[18px] h-[18px]" />
                        <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-amber-500 rounded-full text-[10px] font-bold text-black flex items-center justify-center">
                            3
                        </span>
                    </Link>

                    {/* Mobile menu toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-amber-400 transition-colors"
                    >
                        {mobileMenuOpen ? <X className="w-[18px] h-[18px]" /> : <Menu className="w-[18px] h-[18px]" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <nav className="lg:hidden border-t border-white/[0.06] px-6 py-4 flex flex-col gap-3 bg-[#0a0a0a]/95 backdrop-blur-md">
                    <Link
                        className="text-white/60 hover:text-amber-400 text-sm font-bold tracking-widest uppercase transition-colors py-2"
                        href="/collection"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Collections
                    </Link>
                    <Link
                        className="text-white/60 hover:text-amber-400 text-sm font-bold tracking-widest uppercase transition-colors py-2"
                        href="/collection"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Rare Finds
                    </Link>
                    <Link
                        className="text-white/60 hover:text-amber-400 text-sm font-bold tracking-widest uppercase transition-colors py-2"
                        href="/collection"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Curated Gifts
                    </Link>
                    {/* Mobile Search */}
                    <label className="flex items-center h-10 rounded-full bg-white/5 border border-white/10 focus-within:border-amber-500/50 transition-all px-4 gap-2 mt-2">
                        <Search className="w-4 h-4 text-white/40" />
                        <input
                            className="bg-transparent border-none outline-none text-sm text-white placeholder:text-white/30 w-full"
                            placeholder="Search spirits..."
                        />
                    </label>
                </nav>
            )}
        </header>
    )
}
