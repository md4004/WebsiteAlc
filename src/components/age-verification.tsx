'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Wine } from "lucide-react"

export function AgeVerification() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const verified = sessionStorage.getItem('age-verified')
        if (!verified) {
            setIsVisible(true)
        }
    }, [])

    const handleVerify = () => {
        sessionStorage.setItem('age-verified', 'true')
        setIsVisible(false)
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <motion.div
                        className="text-center max-w-md mx-auto px-8"
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        {/* Logo */}
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-[0_0_40px_rgba(212,168,83,0.3)]">
                                <Wine className="w-7 h-7 text-black" />
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-white">One Glass</h2>

                        <div className="w-12 h-[1px] bg-amber-500/50 mx-auto my-6" />

                        <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                            You must be of legal drinking age in your country of residence to enter this website.
                        </p>

                        <h3 className="text-xl font-semibold text-white mb-6">
                            Are you of legal drinking age?
                        </h3>

                        <div className="flex gap-4 justify-center">
                            <motion.button
                                onClick={handleVerify}
                                className="px-10 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,168,83,0.3)]"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Yes, I Am
                            </motion.button>
                            <motion.button
                                onClick={() => window.location.href = 'https://www.google.com'}
                                className="px-10 py-3 border border-white/15 text-white/60 font-medium rounded-full transition-all duration-300 hover:border-white/30 hover:text-white/80"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                No
                            </motion.button>
                        </div>

                        <p className="text-neutral-600 text-xs mt-8">
                            By entering this site, you agree to our Terms of Service and Privacy Policy.
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
