import Link from "next/link"
import { Wine } from "lucide-react"

export default function SubPageFooter() {
    return (
        <footer className="border-t border-white/[0.06] bg-black">
            <div className="max-w-[1200px] mx-auto px-8 md:px-12 lg:px-12 pt-20 pb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 mb-20">
                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6 group">
                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                                <Wine className="w-4 h-4 text-black" />
                            </div>
                            <span className="text-white text-lg font-bold tracking-[0.15em] uppercase font-serif italic">
                                One Glass
                            </span>
                        </Link>
                        <p className="text-white/40 text-sm leading-[1.8] max-w-xs font-sans">
                            Premium spirits curated for the discerning palate. Every bottle tells a story worth savoring.
                        </p>
                    </div>

                    {/* Explore */}
                    <div>
                        <h6 className="text-white font-sans font-semibold text-xs tracking-[0.25em] uppercase mb-7">
                            Explore
                        </h6>
                        <ul className="space-y-3 text-white/40 text-sm">
                            <li><Link className="hover:text-amber-400 transition-colors" href="/collection">Collections</Link></li>
                            <li><Link className="hover:text-amber-400 transition-colors" href="/collection">Rare Finds</Link></li>
                            <li><Link className="hover:text-amber-400 transition-colors" href="/#about">Our Story</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h6 className="text-white font-sans font-semibold text-xs tracking-[0.25em] uppercase mb-7">
                            Support
                        </h6>
                        <ul className="space-y-3 text-white/40 text-sm">
                            <li><Link className="hover:text-amber-400 transition-colors" href="/collection">Shipping Info</Link></li>
                            <li><Link className="hover:text-amber-400 transition-colors" href="/collection">Returns</Link></li>
                            <li><Link className="hover:text-amber-400 transition-colors" href="/collection">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h6 className="text-white font-sans font-semibold text-xs tracking-[0.25em] uppercase mb-7">
                            Legal
                        </h6>
                        <ul className="space-y-3 text-white/40 text-sm">
                            <li><Link className="hover:text-amber-400 transition-colors" href="/collection">Privacy Policy</Link></li>
                            <li><Link className="hover:text-amber-400 transition-colors" href="/collection">Terms of Use</Link></li>
                            <li><Link className="hover:text-amber-400 transition-colors" href="/collection">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/[0.06] pt-8 text-center">
                    <p className="text-white/25 text-[10px] font-medium tracking-widest uppercase">
                        © 2025 One Glass. All Rights Reserved. Please drink responsibly.
                    </p>
                </div>
            </div>
        </footer>
    )
}
