'use client'

import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { PromoBanner } from "@/components/promo-banner"
import { CategoriesSection } from "@/components/categories-section"
import { SpecialOffer } from "@/components/special-offer"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AboutSection } from "@/components/about-section"
import Footer from "@/components/footer"
import { NavBar } from "@/components/ui/tubelight-navbar"
import { AgeVerification } from "@/components/age-verification"
import { Home, Wine, Grid3X3, BookOpen, ShoppingBag } from "lucide-react"

const navItems = [
  { name: "Home", url: "#home", icon: Home },
  { name: "Products", url: "#products", icon: Wine },
  { name: "Collections", url: "#categories", icon: Grid3X3 },
  { name: "About", url: "#about", icon: BookOpen },
  { name: "Shop", url: "#products", icon: ShoppingBag },
]

export default function HomePage() {
  return (
    <main className="bg-black min-h-screen">
      <AgeVerification />
      <NavBar items={navItems} />
      <HeroSection />
      <PromoBanner />
      <FeaturedProducts />
      <SpecialOffer />
      <CategoriesSection />
      <TestimonialsSection />
      <AboutSection />
      <Footer />
    </main>
  )
}
