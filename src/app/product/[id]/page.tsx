'use client'

import SubPageHeader from "@/components/sub-page-header"
import SubPageFooter from "@/components/sub-page-footer"
import Image from "next/image"
import Link from "next/link"
import { use } from "react"
import { useToast } from "@/components/ui/toast"
import { motion } from "framer-motion"

const productsData = [
    {
        id: "1",
        name: "Macallan 25 Year Old",
        series: "Sherry Oak Series",
        age: "25 Year",
        subtitle: "Highland Single Malt Scotch Whisky",
        abv: "43%",
        region: "Speyside",
        cask: "Oloroso",
        price: 2500,
        description: "Matured for twenty-five years in hand-picked sherry seasoned oak casks from Jerez, Spain. This distinguished single malt delivers an intensely rich and full flavor profile.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCqYlLiiLE-qXZC9cWMKEi9h0rw_7FP3EDtHNxBX7SncCHt_8Xhp-QMDTiZKxIWxRYqW-COrjLKnTgP1MhdXilN3Esirwy8Ez5Zigz2aPhZ5dtY67aOAwgYb2irUWbeJKJXEMRVvJx656eUUieqc5QBfV9dE4xTm3-FghHvJnetJNY6PrgIRNEs-6n2sUIG8HnQmPW89E8Meun0bcBlouPW24Imvp8mDzrHvgZWGG9hFeSphOUnhrj-FIvgB3tXbudUeV0rhNWk9Gt",
        distilleryImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuClLVZnpgt53pf3RT9AjRVojwBdBkMRVbr7ZYIU04_3kvCpxTmyK7Wk_6gu6QCIV6RBnznCw04SmcsGIB_IreiSclx8RLjUmHALha_szO3FcttV1490Eg_DYdKQVV4iNKMHDEU0iDMR24vncSNYqS3dV3sv3Q5fDpQ1bCSfNNyn0IIP8r8V5OVo_KOPmnO4B_zOA7d9T0I5LfMQYq3a8-bP78pEjOl4S-ZXEu_L9yvYUpJtHInFfpcX2ZOul8ZlXTkuXLNfYLsY49DD",
        nose: "Dried fruits and ginger with a hint of citrus, cinnamon and sherry oak smoke.",
        palate: "Rich and full, with flavors of dried fruits, wood smoke and spice-laden orange.",
        finish: "Lingering and intense, with a smooth dried fruit, wood smoke and spice finish.",
        origin: "Craigellachie, Moray, Scotland",
        founded: "1824",
        distillery: "Easter Elchies House",
    },
    {
        id: "2",
        name: "Louis XIII Cognac",
        series: "Grande Champagne",
        age: "100 Year",
        subtitle: "Grande Champagne Cognac",
        abv: "40%",
        region: "Cognac",
        cask: "Limousin Oak",
        price: 4200,
        description: "A blend of up to 1,200 eaux-de-vie aged for up to 100 years in tierçon barrels. Each decanter is a masterpiece of time, passed from generation to generation.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgNYNsN-5LLzwWM3F8Ibfjym7-dmg6lPsqmJrehe1hav-8HrrCvuUDpdKXWtucjRgVx8mDY_WHf4g9BheIE8M2cHfxqpM-9TfjyVzP3HL8v8QuN5-kkQ7Iqk5ds7GchzVv-qCmxtzKSQZwTvGiGEetVtS5jRE8kh7uC5JxgwArw_FgnqAUqXqAloQ-NZEfHEQNixAPAEBOapM0D0GvwLgi0h7jNEo7e0KwX7S-IrrYJPIBltU9UP_Hv-WYfVoHXxbjCUuhOprB6J6N",
        distilleryImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuClLVZnpgt53pf3RT9AjRVojwBdBkMRVbr7ZYIU04_3kvCpxTmyK7Wk_6gu6QCIV6RBnznCw04SmcsGIB_IreiSclx8RLjUmHALha_szO3FcttV1490Eg_DYdKQVV4iNKMHDEU0iDMR24vncSNYqS3dV3sv3Q5fDpQ1bCSfNNyn0IIP8r8V5OVo_KOPmnO4B_zOA7d9T0I5LfMQYq3a8-bP78pEjOl4S-ZXEu_L9yvYUpJtHInFfpcX2ZOul8ZlXTkuXLNfYLsY49DD",
        nose: "Myrrh, honey, and dried roses with whispers of sandalwood and plum.",
        palate: "Rich honeyed florals with hints of fig, cinnamon, and leather.",
        finish: "Exceptionally long, with waves of dried fruit, spices, and earth.",
        origin: "Cognac, France",
        founded: "1874",
        distillery: "Maison Rémy Martin",
    },
    {
        id: "3",
        name: "Clase Azul Ultra",
        series: "Ultra Reserve",
        age: "Extra Añejo",
        subtitle: "Extra Añejo Tequila",
        abv: "40%",
        region: "Jalisco",
        cask: "Sherry",
        price: 1800,
        description: "Aged in sherry wood casks for five years, this ultra-premium tequila is presented in a handcrafted platinum and 24-karat gold decanter.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCb8jgh_nsG4jQSxkesqU7j4J8T1CklNoHu_xSTnEXaAT2usbzvVE_ua3GMRubH7L4JPpg8UVQEe6GrI50M28vw9x1kEy5kg_YxQ8phOMunViwXUudw4Sy5xxxpoU1lSUHehjbutRBC8gM9Xy-lbkGbiQYeMVSnzT-2034d3pvlDFfjuM-YfsL0vswHba19QnkBbOm6juBu5Z5x18gtxRXRLruSKUVNi-daz8pIqIHKJm_AtrVN7flOEmhuq7AePixAlMw4pCmM3LvU",
        distilleryImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuClLVZnpgt53pf3RT9AjRVojwBdBkMRVbr7ZYIU04_3kvCpxTmyK7Wk_6gu6QCIV6RBnznCw04SmcsGIB_IreiSclx8RLjUmHALha_szO3FcttV1490Eg_DYdKQVV4iNKMHDEU0iDMR24vncSNYqS3dV3sv3Q5fDpQ1bCSfNNyn0IIP8r8V5OVo_KOPmnO4B_zOA7d9T0I5LfMQYq3a8-bP78pEjOl4S-ZXEu_L9yvYUpJtHInFfpcX2ZOul8ZlXTkuXLNfYLsY49DD",
        nose: "Sweet cooked agave with notes of vanilla, caramel, and toasted oak.",
        palate: "Silky with dark chocolate, dried fruits, and warm baking spices.",
        finish: "Long and luxurious with layers of spice, toffee, and charred oak.",
        origin: "Jalisco, Mexico",
        founded: "1997",
        distillery: "Clase Azul Distillery",
    },
    {
        id: "4",
        name: "Hibiki 21 Year",
        series: "Harmony Series",
        age: "21 Year",
        subtitle: "Japanese Blended Whisky",
        abv: "43%",
        region: "Japan",
        cask: "Mizunara Oak",
        price: 1250,
        description: "A harmonious blend of malt and grain whiskies aged for a minimum of 21 years. Matured in five types of casks including rare Japanese Mizunara oak.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAG_t73IihQuzuw_MAGhJe-IzuaMT37uz-cKmDwC_H6Jixi-KvkbgJ1IAU5iVP8SMVjqCXYG0dIJaM7Kx55VN97Ni3YsgPFRphB651HE-ry_JSPdVHjfiqihPwRCQLpdaLMqQ2fbzpG_SJvT8MF2D0O_OBn9_ae6D_4H1Sb7EUkvUAtP9O0_nmlGhXlafdyP1zEKqyUgUf4HaCbGI0wOSXn57LCULV2ShfPSEwW25JUSdZU_ZxTlZh0IxMUL-bEt4rrps6OiIgmLoxw",
        distilleryImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuClLVZnpgt53pf3RT9AjRVojwBdBkMRVbr7ZYIU04_3kvCpxTmyK7Wk_6gu6QCIV6RBnznCw04SmcsGIB_IreiSclx8RLjUmHALha_szO3FcttV1490Eg_DYdKQVV4iNKMHDEU0iDMR24vncSNYqS3dV3sv3Q5fDpQ1bCSfNNyn0IIP8r8V5OVo_KOPmnO4B_zOA7d9T0I5LfMQYq3a8-bP78pEjOl4S-ZXEu_L9yvYUpJtHInFfpcX2ZOul8ZlXTkuXLNfYLsY49DD",
        nose: "Rose, lychee, and a hint of ume plum with delicate sandalwood.",
        palate: "Layered with dried fruits, Mizunara oak, and dark chocolate.",
        finish: "Exceptionally long with a subtle smokiness and incense-like quality.",
        origin: "Osaka, Japan",
        founded: "1899",
        distillery: "Suntory Yamazaki",
    },
]

const pairings = [
    {
        name: "Dark Chocolate & Sea Salt",
        description: "High-cocoa intensity balances the richness of the spirit's oak-aged character.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBc7x53RweGLgaFLlmOX2Xzyky4DpTsVGrCr2trb5Vf9RgEpiCOpr_4RrnoGo4ghnzko06XmiANg8usJJNt-CA6n9yX-yNZjHZUokMQQfedm3NhGHOiS9Ra8Qi4l40WjwZjwaAw-SkJg9TMaIJN1CVA8_arico3HO4k_NYGxQmJ3Mi4r_rbV3UcYc-OFPF0JhY-cbQPxqHehClFDIohhTTp8H5xLBdugmzvqoQTDleh6a93p3Xmrhbyhy0asW_IkKvSpwT_nUdO54-G",
    },
    {
        name: "Roquefort Blue",
        description: "Creamy, salty profiles provide a sharp contrast to the spicy finish.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCI0JbSkhxRzk-Bzwq1KRhGlIBmbqyunekQ-IP5F7mFS_iCFDWQ77RjQKhEW0MRikZaUlfoMnXDA5fGigmP-rSwFAxgn8XsDV-MbObLTORkW7y-NUK4DwWkBJf90HgJ450JAUI0wwN0k9TXV-0_5tNzjJHIQb8_-0ylT4DOEJpMovg5PLIwJOQM-LLC7-G3HOl_uTrsWWzvPvh8DcEVpf1Y7VlDuQr0mEm8siwwBwHSajzJUgqfLmj3YlC60rlza8OLyD1maxNrv-vy",
    },
    {
        name: "Havana Selection",
        description: "A medium-bodied smoke enhances the natural wood smoke of the spirit.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLkcl1MeQDQCV8cneHsa5gs_icZMDdSEUTytz_nMVLfvQHKDmH_QTvu550qcUdur64M26TZ3Hfs58I_lZPewSM5dhxYqVcZVhA3fmADK2SFaeKWnL_a16wCYcVIoo0ZntydwDK7BrDcuLJBeqQyWKPNjnyxIvEtrDKOBDKZe3ngbwxB7SfM5aidYMldHUrhuNEROrunFSBCpl3mXL9vIEYE4fozPwVfYHrbTf4l1YZ6TCRDjpdCLvh-yUA3UZudo910zf8rX83E-H4",
    },
]

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params)
    const { showToast } = useToast()
    const product = productsData.find((p) => p.id === id) || productsData[0]

    return (
        <div className="bg-black text-white overflow-x-hidden min-h-screen">
            <SubPageHeader />

            <main>
                {/* Hero Section */}
                <section className="max-w-[1200px] mx-auto px-8 lg:px-12 grid lg:grid-cols-2 gap-16 xl:gap-24 items-center min-h-[80vh] py-24">
                    <motion.div
                        className="relative group order-2 lg:order-1"
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="absolute inset-0 bg-amber-500/5 blur-[120px] rounded-full" />
                        <div className="relative flex justify-center items-center aspect-square">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain transition-transform duration-700 hover:scale-105"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 items-center bg-black/60 backdrop-blur px-6 py-2.5 rounded-full border border-amber-500/30">
                                <span className="material-symbols-outlined text-amber-400 animate-pulse">360</span>
                                <span className="text-[10px] uppercase tracking-[0.25em] text-white/50 font-sans">Drag to Rotate</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex flex-col gap-8 order-1 lg:order-2"
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="space-y-3">
                            <span className="text-amber-400 font-sans font-semibold tracking-[0.3em] uppercase text-xs">
                                {product.series}
                            </span>
                            <h2 className="text-5xl lg:text-7xl font-bold leading-[0.95] font-serif italic">
                                {product.age} <br />
                                <span className="text-amber-400/90">Old</span>
                            </h2>
                            <p className="text-xl text-white/40 font-sans font-light pt-2">{product.subtitle}</p>
                        </div>

                        <div className="grid grid-cols-3 gap-6 pt-4">
                            {[
                                { label: "ABV", value: product.abv },
                                { label: "Region", value: product.region },
                                { label: "Cask", value: product.cask },
                            ].map((stat) => (
                                <div key={stat.label} className="border-l-2 border-amber-400/40 pl-5 py-2">
                                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-sans">{stat.label}</p>
                                    <p className="text-xl font-bold font-serif mt-1">{stat.value}</p>
                                </div>
                            ))}
                        </div>

                        <p className="text-white/50 leading-[1.8] max-w-md font-sans">{product.description}</p>

                        <div className="text-3xl font-bold text-amber-400 font-serif">${product.price.toLocaleString()}.00</div>

                        {/* Uniform buttons — same height, generous padding */}
                        <div className="flex flex-col sm:flex-row gap-5 pt-2">
                            <motion.button
                                onClick={() => showToast(`${product.name} reserved — added to cart`)}
                                className="bg-amber-500 text-black font-semibold font-sans px-10 py-[18px] rounded-xl flex items-center justify-center gap-3 hover:bg-amber-400 transition-all duration-300 group cursor-pointer active:scale-[0.98] tracking-[0.15em] uppercase text-sm min-w-[220px]"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                Reserve Bottle
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform duration-300 text-lg">arrow_right_alt</span>
                            </motion.button>
                            <Link
                                href="/collection"
                                className="border border-white/10 text-white font-semibold font-sans px-10 py-[18px] rounded-xl hover:bg-white/5 hover:border-amber-500/30 transition-all duration-300 text-center tracking-[0.15em] uppercase text-sm min-w-[220px] flex items-center justify-center"
                            >
                                View Collection
                            </Link>
                        </div>
                    </motion.div>
                </section>

                {/* Tasting Notes Section — "The Sensory Experience" */}
                <section className="bg-white/[0.02] py-28 md:py-36">
                    <div className="max-w-[1200px] mx-auto px-8 lg:px-12">
                        <div className="text-center mb-20">
                            <span className="text-amber-400/60 text-xs font-sans font-medium tracking-[0.3em] uppercase">Tasting Notes</span>
                            <h3 className="text-3xl sm:text-4xl font-bold font-serif italic mt-5 tracking-wide">The Sensory Experience</h3>
                            <div className="h-[1px] w-20 bg-amber-400 mx-auto mt-8" />
                        </div>

                        {/* Wider gutter between columns */}
                        <div className="grid md:grid-cols-3 gap-16 lg:gap-20 max-w-4xl mx-auto">
                            {[
                                { icon: "air", title: "The Nose", text: product.nose },
                                { icon: "liquor", title: "The Palate", text: product.palate },
                                { icon: "flare", title: "The Finish", text: product.finish },
                            ].map((note, index) => (
                                <motion.div
                                    key={note.title}
                                    className="text-center group"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15, duration: 0.5 }}
                                >
                                    {/* Perfectly circular, centered icons */}
                                    <div className="w-24 h-24 bg-black border border-white/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:border-amber-400 transition-colors duration-300">
                                        <span className="material-symbols-outlined text-amber-400 text-[32px]">{note.icon}</span>
                                    </div>
                                    <h4 className="text-lg font-semibold mb-4 tracking-[0.2em] uppercase font-sans">{note.title}</h4>
                                    <p className="text-white/40 leading-[1.8] font-sans text-sm">{note.text}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Distillery History */}
                <section className="max-w-[1200px] mx-auto px-8 lg:px-12 py-28 md:py-36 grid lg:grid-cols-2 gap-20 xl:gap-28 items-center">
                    <motion.div
                        className="space-y-10"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-4xl font-bold font-serif italic leading-tight">
                            Crafted at <br />
                            <span className="text-amber-400">{product.distillery}</span>
                        </h3>
                        <p className="text-white/40 leading-[1.8] font-sans">{product.description}</p>

                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-lg bg-white/5 flex items-center justify-center">
                                <span className="material-symbols-outlined text-amber-400 text-3xl">history_edu</span>
                            </div>
                            <div>
                                <p className="font-semibold font-sans">Founded {product.founded}</p>
                                <p className="text-sm text-white/40 font-sans mt-1">{product.origin}</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="relative h-[500px] rounded-2xl overflow-hidden"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Image
                            alt="Distillery"
                            className="object-cover"
                            src={product.distilleryImage}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                    </motion.div>
                </section>

                {/* Pairings Section */}
                <section className="max-w-[1200px] mx-auto px-8 lg:px-12 py-28 md:py-36 border-t border-white/[0.06]">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <span className="text-amber-400 font-sans font-semibold uppercase tracking-[0.25em] text-xs">Curation</span>
                            <h3 className="text-4xl font-bold font-serif italic mt-3">Recommended Pairings</h3>
                        </div>
                        <p className="text-white/40 max-w-sm font-sans leading-[1.8]">
                            Elevate the complex profile with these artisanal selections.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {pairings.map((pairing, index) => (
                            <motion.div
                                key={pairing.name}
                                className="group bg-white/[0.02] rounded-xl overflow-hidden hover:bg-white/[0.04] transition-all duration-300 border border-white/[0.06] hover:border-amber-500/20"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <div className="h-52 overflow-hidden relative">
                                    <Image
                                        alt={pairing.name}
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        src={pairing.image}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>
                                <div className="p-7">
                                    <h5 className="font-semibold font-serif text-lg mb-3">{pairing.name}</h5>
                                    <p className="text-sm text-white/40 font-sans leading-[1.8]">{pairing.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </main>

            <SubPageFooter />
        </div>
    )
}
