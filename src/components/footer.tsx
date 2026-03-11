import Link from "next/link"

export default function Footer() {
    return (
        <footer className="mt-auto py-14 px-8 md:px-12 lg:px-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-white/25 text-[10px] font-sans font-medium tracking-[0.25em] uppercase">
                © 2025 One Glass. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                <Link
                    className="text-white/30 hover:text-amber-400 text-[10px] font-medium tracking-widest uppercase transition-colors duration-300"
                    href="/collection"
                >
                    Privacy
                </Link>
                <Link
                    className="text-white/30 hover:text-amber-400 text-[10px] font-medium tracking-widest uppercase transition-colors duration-300"
                    href="/collection"
                >
                    Terms
                </Link>
                <Link
                    className="text-white/30 hover:text-amber-400 text-[10px] font-medium tracking-widest uppercase transition-colors duration-300"
                    href="/collection"
                >
                    Shipping
                </Link>
            </div>
            <div className="flex gap-4">
                <span className="material-symbols-outlined text-white/30 text-xl cursor-pointer hover:text-amber-400 transition-colors duration-300">
                    public
                </span>
                <span className="material-symbols-outlined text-white/30 text-xl cursor-pointer hover:text-amber-400 transition-colors duration-300">
                    qr_code_2
                </span>
            </div>
        </footer>
    );
}
