'use client'

import SubPageHeader from "@/components/sub-page-header"
import SubPageFooter from "@/components/sub-page-footer"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Minus, Plus, X, ShoppingBag, ArrowLeft } from "lucide-react"

interface CartItem {
    id: number
    name: string
    subtitle: string
    price: number
    image: string
    quantity: number
}

const initialItems: CartItem[] = [
    {
        id: 1,
        name: "Hibiki 21 Year Old",
        subtitle: "Suntory Whisky | 700ml",
        price: 1250,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHjdLbhsrMORsB9rJ18xO_sfT8aGLozx7_ibUaYCBKRNWra9nAsBrkRNPltiJCkdFclQdXcvIfkg7Xjo6XOHD2Jn2uigPfXxtADGfAclgpR9eHK9-a-NvSWsVIjm733b0eEZA1qs2eWzwWDd7WFT8LEziHe_5vjMMCfqkAVJ6-VyQM5B3gNVhzpTmFan4l39OoGOSJei50iC559h2JJ9w68mWw9DJVf5VGlISIy8PCgBn45CY08bZ1j3Z-9sYuV5zaVrRIgvw2AiYQ",
        quantity: 1,
    },
    {
        id: 2,
        name: "Macallan Rare Cask",
        subtitle: "Speyside Single Malt | 700ml",
        price: 350,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwzKfFVsxVsFntbZsIrSJxaKaVzFuHAgvEgXtiADCvqAcR75jLt-9_EnW_XsDCAvqacO5m0_wdyUDJ_rXFgD_CqprGSDi6eoMowPAtY_ycs-Cc3JKOeqsr5P5C8mAsUs0z03Tcjll-QbjpEk3hzPDebyYmXSJKSF28fs1U9WO8NNypD6XXqlLtPd2TWqkZSxuDa4WGIJRfDB86ejvODNDbyzwWLp6E0bMcYq6oTgWX1Rfc_xKv4mu5Izcw2HzWmldd59BduUgjRpUK",
        quantity: 1,
    },
    {
        id: 3,
        name: "Kavalan Solist",
        subtitle: "Taiwanese Single Malt | 700ml",
        price: 210,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_Zz0i9qVGYIPEvUsF_d4qnbY9acPwhPMFLod_6p8uM1xnjPwD-2vKKA13mk5ACpTQJeN-dTjpCMgO4Rqfs_7Pm6SFFksT09v3Q3IpWZDUWR-KlxPUGq-j2m1SuEezWEE2fqf2ZYuTO39JDCOatAqLrFLUNXl7SvHOv21bOshYzLD-Diy1cS3_IZBNaXNyKIG-V845P2RmEVCN5_JrciWIIUzB1pr4DuSWu2qC4ZL-Fn06cMZiy_7O9ChOG2KHO1Eqlx83V4s55ijo",
        quantity: 1,
    },
]

export default function CartPage() {
    const [items, setItems] = useState(initialItems)

    const updateQuantity = (id: number, delta: number) => {
        setItems((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        )
    }

    const removeItem = (id: number) => {
        setItems((prev) => prev.filter((item) => item.id !== id))
    }

    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

    return (
        <div className="relative flex min-h-screen w-full flex-col bg-black overflow-x-hidden text-white font-display antialiased">
            <SubPageHeader />

            <main className="flex-1 flex justify-center py-8 px-6">
                <div className="flex flex-col max-w-[520px] w-full bg-white/[0.02] rounded-2xl border border-white/[0.06] overflow-hidden">
                    {/* Header Title */}
                    <div className="p-6 border-b border-white/[0.06]">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <ShoppingBag className="w-5 h-5 text-amber-400" />
                                <h3 className="text-white text-2xl font-bold">Your Collection</h3>
                            </div>
                            <span className="text-amber-400/70 text-sm font-medium">
                                {itemCount} {itemCount === 1 ? "Item" : "Items"}
                            </span>
                        </div>
                    </div>

                    {/* Scrollable List */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        <AnimatePresence>
                            {items.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20, height: 0, marginBottom: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex gap-4 bg-white/[0.03] p-4 rounded-xl border border-transparent hover:border-amber-500/20 transition-all"
                                >
                                    <div className="shrink-0 w-20 h-20 rounded-lg overflow-hidden border border-white/10 relative">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                            sizes="80px"
                                        />
                                    </div>
                                    <div className="flex flex-1 flex-col justify-between min-w-0">
                                        <div>
                                            <p className="text-white text-base font-semibold truncate">{item.name}</p>
                                            <p className="text-amber-400/60 text-xs">{item.subtitle}</p>
                                        </div>
                                        <p className="text-amber-400 text-base font-bold">
                                            ${(item.price * item.quantity).toLocaleString()}.00
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-end justify-between">
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="text-white/30 hover:text-red-400 transition-colors cursor-pointer"
                                        >
                                            <X size={14} />
                                        </button>
                                        <div className="flex items-center gap-2 bg-white/5 rounded-full px-2 py-1 border border-white/10">
                                            <button
                                                onClick={() => updateQuantity(item.id, -1)}
                                                className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-amber-500/20 text-amber-400 transition-colors cursor-pointer"
                                            >
                                                <Minus size={12} />
                                            </button>
                                            <span className="text-sm font-bold text-white w-4 text-center">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => updateQuantity(item.id, 1)}
                                                className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-amber-500/20 text-amber-400 transition-colors cursor-pointer"
                                            >
                                                <Plus size={12} />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        {items.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-12"
                            >
                                <ShoppingBag className="w-12 h-12 text-white/10 mx-auto mb-4" />
                                <p className="text-white/30 text-sm">Your collection is empty</p>
                                <Link
                                    href="/collection"
                                    className="inline-flex items-center gap-2 text-amber-400 text-sm font-medium mt-4 hover:underline"
                                >
                                    <ArrowLeft size={14} />
                                    Browse Collection
                                </Link>
                            </motion.div>
                        )}
                    </div>

                    {/* Summary & Checkout */}
                    {items.length > 0 && (
                        <div className="p-6 bg-white/[0.02] border-t border-white/[0.06]">
                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-white/40 text-sm font-medium">Subtotal</span>
                                    <span className="text-white text-sm font-bold">${subtotal.toLocaleString()}.00</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-white/40 text-sm font-medium">Shipping</span>
                                    <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                                        {subtotal >= 1000 ? "Free" : "Calculated at Checkout"}
                                    </span>
                                </div>
                                <div className="pt-3 border-t border-white/[0.06] flex justify-between items-center">
                                    <span className="text-white text-lg font-bold">Total</span>
                                    <span className="text-amber-400 text-xl font-bold">${subtotal.toLocaleString()}.00</span>
                                </div>
                            </div>
                            <Link
                                href="/checkout"
                                className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 active:scale-[0.98]"
                            >
                                <span className="material-symbols-outlined text-lg">lock</span>
                                SECURE CHECKOUT
                            </Link>
                            <div className="flex items-center justify-center gap-4 mt-4">
                                <Link
                                    href="/collection"
                                    className="inline-flex items-center gap-1 text-white/30 hover:text-amber-400 text-xs uppercase tracking-widest transition-colors"
                                >
                                    <ArrowLeft size={12} />
                                    Continue Shopping
                                </Link>
                            </div>
                            {subtotal >= 1000 && (
                                <p className="text-center text-amber-400/40 text-[10px] uppercase tracking-widest mt-4">
                                    ✓ Complimentary global shipping applied
                                </p>
                            )}
                        </div>
                    )}
                </div>
            </main>

            <SubPageFooter />
        </div>
    )
}
