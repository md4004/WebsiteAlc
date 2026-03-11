'use client'

import React from "react"
import SubPageHeader from "@/components/sub-page-header"
import SubPageFooter from "@/components/sub-page-footer"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Loader2 } from "lucide-react"

type CheckoutState = "idle" | "processing" | "success"

export default function CheckoutPage() {
    const [deliveryMethod, setDeliveryMethod] = useState<"premium" | "standard">("premium")
    const [giftWrap, setGiftWrap] = useState(false)
    const [checkoutState, setCheckoutState] = useState<CheckoutState>("idle")
    const [step, setStep] = useState(1)

    const subtotal = 1810
    const shipping = deliveryMethod === "premium" ? 25 : 10
    const gift = giftWrap ? 15 : 0
    const tax = Math.round((subtotal + shipping + gift) * 0.08)
    const total = subtotal + shipping + gift + tax

    const handleCheckout = () => {
        setCheckoutState("processing")
        setTimeout(() => {
            setCheckoutState("success")
            setStep(3)
        }, 2500)
    }

    const goToStep = (newStep: number) => {
        if (newStep < step || newStep === step + 1) {
            setStep(newStep)
        }
    }

    return (
        <div className="bg-black text-white min-h-screen">
            <SubPageHeader />

            <main className="mx-auto max-w-7xl w-full px-6 lg:px-20 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Checkout Form */}
                    <div className="lg:col-span-8 flex flex-col gap-10">
                        {/* Progress Bar */}
                        <div className="flex items-center gap-4 mb-2">
                            {[
                                { num: 1, label: "Shipping" },
                                { num: 2, label: "Payment" },
                                { num: 3, label: "Confirmation" },
                            ].map((s, i) => (
                                <React.Fragment key={s.num}>
                                    <button
                                        onClick={() => goToStep(s.num)}
                                        className={`flex items-center gap-2 cursor-pointer transition-colors ${step >= s.num ? "text-amber-400" : "text-white/30"
                                            }`}
                                    >
                                        <span className={`flex items-center justify-center w-8 h-8 rounded-full border-2 font-bold text-sm transition-all ${step > s.num
                                            ? "border-amber-400 bg-amber-400 text-black"
                                            : step === s.num
                                                ? "border-amber-400"
                                                : "border-white/10"
                                            }`}>
                                            {step > s.num ? <Check size={14} /> : s.num}
                                        </span>
                                        <span className="font-bold hidden sm:inline">{s.label}</span>
                                    </button>
                                    {i < 2 && <div className={`h-px grow transition-colors ${step > s.num ? "bg-amber-400" : "bg-white/10"}`} />}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* Step 1: Shipping */}
                        {step === 1 && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col gap-8"
                            >
                                <header>
                                    <h1 className="text-4xl font-black tracking-tight mb-2">Shipping Details</h1>
                                    <p className="text-white/40">Where should we deliver your collection?</p>
                                </header>

                                <section className="flex flex-col gap-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-medium text-white/70">First Name</label>
                                            <input className="rounded-xl bg-white/5 border border-white/10 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 p-3 text-white outline-none transition-all" placeholder="John" type="text" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-medium text-white/70">Last Name</label>
                                            <input className="rounded-xl bg-white/5 border border-white/10 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 p-3 text-white outline-none transition-all" placeholder="Doe" type="text" />
                                        </div>
                                        <div className="flex flex-col gap-2 md:col-span-2">
                                            <label className="text-sm font-medium text-white/70">Street Address</label>
                                            <input className="rounded-xl bg-white/5 border border-white/10 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 p-3 text-white outline-none transition-all" placeholder="123 Luxury Lane" type="text" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-medium text-white/70">City</label>
                                            <input className="rounded-xl bg-white/5 border border-white/10 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 p-3 text-white outline-none transition-all" placeholder="Beverly Hills" type="text" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-medium text-white/70">Zip Code</label>
                                            <input className="rounded-xl bg-white/5 border border-white/10 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 p-3 text-white outline-none transition-all" placeholder="90210" type="text" />
                                        </div>
                                    </div>
                                </section>

                                {/* Delivery Method */}
                                <section className="flex flex-col gap-6">
                                    <h2 className="text-2xl font-bold tracking-tight flex items-center gap-3">
                                        <span className="material-symbols-outlined text-amber-400">local_shipping</span>
                                        Delivery Method
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <label
                                            className={`relative flex cursor-pointer rounded-xl border-2 p-4 transition-all ${deliveryMethod === "premium"
                                                ? "border-amber-400 bg-amber-400/5"
                                                : "border-white/10 hover:border-amber-400/30"
                                                }`}
                                            onClick={() => setDeliveryMethod("premium")}
                                        >
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center gap-2">
                                                    <span className="font-bold">Premium Courier</span>
                                                    <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-full font-bold uppercase">Fastest</span>
                                                </div>
                                                <p className="text-sm text-white/40">Next-day delivery with live tracking</p>
                                                <p className="mt-2 font-bold text-amber-400">$25.00</p>
                                            </div>
                                            {deliveryMethod === "premium" && (
                                                <span className="material-symbols-outlined absolute right-4 top-4 text-amber-400">check_circle</span>
                                            )}
                                        </label>

                                        <label
                                            className={`relative flex cursor-pointer rounded-xl border-2 p-4 transition-all ${deliveryMethod === "standard"
                                                ? "border-amber-400 bg-amber-400/5"
                                                : "border-white/10 hover:border-amber-400/30"
                                                }`}
                                            onClick={() => setDeliveryMethod("standard")}
                                        >
                                            <div className="flex flex-col gap-1">
                                                <span className="font-bold">Standard Boutique</span>
                                                <p className="text-sm text-white/40">3-5 business days delivery</p>
                                                <p className="mt-2 font-bold text-white">$10.00</p>
                                            </div>
                                            {deliveryMethod === "standard" && (
                                                <span className="material-symbols-outlined absolute right-4 top-4 text-amber-400">check_circle</span>
                                            )}
                                        </label>
                                    </div>

                                    {/* Gift Wrapping */}
                                    <div className="bg-amber-400/5 rounded-xl p-6 border border-amber-400/10">
                                        <h3 className="font-bold mb-4 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-amber-400">featured_seasonal_and_gifts</span>
                                            Packaging Options
                                        </h3>
                                        <div className="flex items-center justify-between">
                                            <label className="flex items-center gap-3 cursor-pointer" htmlFor="gift">
                                                <input
                                                    className="w-4 h-4 rounded accent-amber-400 cursor-pointer"
                                                    id="gift"
                                                    type="checkbox"
                                                    checked={giftWrap}
                                                    onChange={(e) => setGiftWrap(e.target.checked)}
                                                />
                                                <div className="text-sm">
                                                    <span className="font-medium block">Luxe Gift Packaging</span>
                                                    <span className="text-white/40 text-xs">Signature gold-foil box with hand-written card</span>
                                                </div>
                                            </label>
                                            <span className="font-bold text-sm">+$15.00</span>
                                        </div>
                                    </div>
                                </section>

                                <button
                                    onClick={() => setStep(2)}
                                    className="w-full py-4 bg-amber-500 text-black font-black rounded-xl text-lg hover:bg-amber-400 transition-all cursor-pointer active:scale-[0.98]"
                                >
                                    CONTINUE TO PAYMENT
                                </button>
                            </motion.div>
                        )}

                        {/* Step 2: Payment */}
                        {step === 2 && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col gap-8"
                            >
                                <header>
                                    <h1 className="text-4xl font-black tracking-tight mb-2">Secure Payment</h1>
                                    <p className="text-white/40">Your payment information is encrypted and secure.</p>
                                </header>

                                <div className="flex gap-2 mb-2">
                                    {["VISA", "AMEX", "MASTER"].map((card) => (
                                        <div key={card} className="h-7 w-11 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold text-white/60">
                                            {card}
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-white/[0.03] rounded-xl p-6 border border-white/10 flex flex-col gap-4">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-medium text-white/70">Card Number</label>
                                        <div className="relative">
                                            <input className="w-full rounded-xl bg-white/5 border border-white/10 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 p-3 text-white outline-none transition-all pr-12" placeholder="0000 0000 0000 0000" type="text" />
                                            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-white/30">credit_card</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-medium text-white/70">Expiry Date</label>
                                            <input className="rounded-xl bg-white/5 border border-white/10 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 p-3 text-white outline-none transition-all" placeholder="MM / YY" type="text" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm font-medium text-white/70">CVV</label>
                                            <input className="rounded-xl bg-white/5 border border-white/10 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 p-3 text-white outline-none transition-all" placeholder="***" type="password" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setStep(1)}
                                        className="px-8 py-4 border border-white/10 text-white/60 font-bold rounded-xl hover:border-amber-400/40 hover:text-amber-400 transition-all cursor-pointer"
                                    >
                                        BACK
                                    </button>
                                    <button
                                        onClick={handleCheckout}
                                        disabled={checkoutState !== "idle"}
                                        className="flex-1 py-4 bg-amber-500 text-black font-black rounded-xl text-lg hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98]"
                                    >
                                        {checkoutState === "processing" ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                PROCESSING...
                                            </>
                                        ) : (
                                            <>
                                                <span className="material-symbols-outlined font-bold">lock</span>
                                                COMPLETE PURCHASE
                                            </>
                                        )}
                                    </button>
                                </div>

                                <p className="text-center text-xs text-white/30">
                                    By clicking complete purchase, you agree to our Terms of Service and Privacy Policy.
                                </p>
                            </motion.div>
                        )}

                        {/* Step 3: Success */}
                        {step === 3 && checkoutState === "success" && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col items-center justify-center text-center py-16 gap-6"
                            >
                                <div className="w-20 h-20 rounded-full bg-amber-500/10 border-2 border-amber-400 flex items-center justify-center">
                                    <Check className="w-10 h-10 text-amber-400" />
                                </div>
                                <h1 className="text-4xl font-black">Order Confirmed!</h1>
                                <p className="text-white/40 max-w-md">
                                    Thank you for your purchase. Your premium spirits will be carefully packaged and shipped within 24 hours.
                                </p>
                                <p className="text-amber-400 font-bold text-sm tracking-widest uppercase">
                                    Order #OG-{Math.floor(Math.random() * 90000 + 10000)}
                                </p>
                                <Link
                                    href="/"
                                    className="mt-4 px-8 py-3.5 bg-amber-500 text-black font-bold rounded-full hover:bg-amber-400 transition-all"
                                >
                                    Return Home
                                </Link>
                            </motion.div>
                        )}
                    </div>

                    {/* Order Summary Sidebar */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-28 bg-white/[0.03] rounded-2xl border border-white/[0.06] overflow-hidden">
                            <div className="p-6 border-b border-white/[0.06]">
                                <h3 className="text-xl font-bold tracking-tight">Order Summary</h3>
                            </div>

                            <div className="p-6 flex flex-col gap-4">
                                {/* Items */}
                                {[
                                    { name: "Hibiki 21 Year Old", subtitle: "Suntory Whisky | 700ml", price: 1250, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHjdLbhsrMORsB9rJ18xO_sfT8aGLozx7_ibUaYCBKRNWra9nAsBrkRNPltiJCkdFclQdXcvIfkg7Xjo6XOHD2Jn2uigPfXxtADGfAclgpR9eHK9-a-NvSWsVIjm733b0eEZA1qs2eWzwWDd7WFT8LEziHe_5vjMMCfqkAVJ6-VyQM5B3gNVhzpTmFan4l39OoGOSJei50iC559h2JJ9w68mWw9DJVf5VGlISIy8PCgBn45CY08bZ1j3Z-9sYuV5zaVrRIgvw2AiYQ" },
                                    { name: "Macallan Rare Cask", subtitle: "Speyside Single Malt", price: 350, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwzKfFVsxVsFntbZsIrSJxaKaVzFuHAgvEgXtiADCvqAcR75jLt-9_EnW_XsDCAvqacO5m0_wdyUDJ_rXFgD_CqprGSDi6eoMowPAtY_ycs-Cc3JKOeqsr5P5C8mAsUs0z03Tcjll-QbjpEk3hzPDebyYmXSJKSF28fs1U9WO8NNypD6XXqlLtPd2TWqkZSxuDa4WGIJRfDB86ejvODNDbyzwWLp6E0bMcYq6oTgWX1Rfc_xKv4mu5Izcw2HzWmldd59BduUgjRpUK" },
                                    { name: "Kavalan Solist", subtitle: "Taiwanese Single Malt", price: 210, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_Zz0i9qVGYIPEvUsF_d4qnbY9acPwhPMFLod_6p8uM1xnjPwD-2vKKA13mk5ACpTQJeN-dTjpCMgO4Rqfs_7Pm6SFFksT09v3Q3IpWZDUWR-KlxPUGq-j2m1SuEezWEE2fqf2ZYuTO39JDCOatAqLrFLUNXl7SvHOv21bOshYzLD-Diy1cS3_IZBNaXNyKIG-V845P2RmEVCN5_JrciWIIUzB1pr4DuSWu2qC4ZL-Fn06cMZiy_7O9ChOG2KHO1Eqlx83V4s55ijo" },
                                ].map((item) => (
                                    <div key={item.name} className="flex gap-4">
                                        <div className="h-16 w-16 bg-white/5 rounded-lg overflow-hidden flex-shrink-0 relative">
                                            <Image src={item.image} alt={item.name} fill className="object-cover" sizes="64px" />
                                        </div>
                                        <div className="flex flex-col justify-center min-w-0">
                                            <h4 className="font-bold text-sm truncate">{item.name}</h4>
                                            <p className="text-xs text-white/30">{item.subtitle}</p>
                                            <p className="text-sm font-bold mt-1 text-amber-400">${item.price.toLocaleString()}.00</p>
                                        </div>
                                    </div>
                                ))}

                                <div className="h-px bg-white/[0.06] my-2" />

                                <div className="flex flex-col gap-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-white/40">Subtotal</span>
                                        <span className="font-medium">${subtotal.toLocaleString()}.00</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-white/40">Shipping</span>
                                        <span className="font-medium">${shipping}.00</span>
                                    </div>
                                    {giftWrap && (
                                        <div className="flex justify-between text-sm">
                                            <span className="text-white/40">Gift Packaging</span>
                                            <span className="font-medium">$15.00</span>
                                        </div>
                                    )}
                                    <div className="flex justify-between text-sm">
                                        <span className="text-white/40">Estimated Tax</span>
                                        <span className="font-medium">${tax}.00</span>
                                    </div>
                                </div>

                                <div className="h-px bg-white/[0.06] my-2" />

                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-bold">Total</span>
                                    <span className="text-2xl font-black text-amber-400">${total.toLocaleString()}.00</span>
                                </div>

                                <div className="mt-4 p-4 bg-white/[0.02] rounded-xl border border-white/[0.06]">
                                    <div className="flex items-center gap-3 text-xs">
                                        <span className="material-symbols-outlined text-amber-400 text-sm">shield</span>
                                        <p className="text-white/40">Your information is protected by 256-bit AES encryption.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Trust Badges */}
            <footer className="px-6 lg:px-20 py-10 border-t border-white/[0.06] mt-10">
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-white/30 hover:text-white/50 transition-all duration-500">
                    {[
                        { icon: "verified", label: "Trusted Merchant" },
                        { icon: "lock_reset", label: "Safe Checkout" },
                        { icon: "published_with_changes", label: "Free Returns" },
                        { icon: "support_agent", label: "24/7 Concierge" },
                    ].map((badge) => (
                        <div key={badge.label} className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-2xl">{badge.icon}</span>
                            <span className="font-bold tracking-widest text-xs uppercase">{badge.label}</span>
                        </div>
                    ))}
                </div>
            </footer>
        </div>
    )
}

