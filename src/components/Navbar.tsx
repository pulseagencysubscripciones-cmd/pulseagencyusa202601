"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { LINKS, t } from "@/lib/content";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.header
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="sticky top-0 z-50 backdrop-blur-xl bg-[#070A14]/70 border-b border-white/5"
        >
            <div className="mx-auto max-w-7xl px-6 md:px-12">
                <div className="flex h-20 md:h-24 items-center justify-between">
                    <div className="flex items-center gap-5 group cursor-pointer">
                        <div className="relative h-12 w-12 md:h-14 md:w-14 overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 p-0.5 transition-all group-hover:ring-cyan-400/50">
                            <Image src="/logo.webp" alt="Pulse Agency" width={64} height={64} className="h-full w-full object-cover rounded-xl opacity-90 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-base md:text-lg font-black tracking-[0.3em] leading-none text-white whitespace-nowrap">PULSE</span>
                            <span className="text-[9px] md:text-[10px] text-white/40 tracking-[0.15em] font-bold uppercase mt-1">Agency</span>
                        </div>
                    </div>
                    <div className="hidden lg:flex items-center gap-10">
                        <Link href="#home" className="text-[10px] font-black tracking-[0.2em] text-white/40 hover:text-white transition-colors uppercase">{t.nav.home}</Link>
                        <a href="#metodologia" className="text-[10px] font-black tracking-[0.2em] text-white/40 hover:text-white transition-colors uppercase">{t.nav.method}</a>
                        <a href="#casos" className="text-[10px] font-black tracking-[0.2em] text-white/40 hover:text-white transition-colors uppercase">{t.nav.cases}</a>
                        <a href="#faq" className="text-[10px] font-black tracking-[0.2em] text-white/40 hover:text-white transition-colors uppercase">{t.nav.faq}</a>
                    </div>
                    <div className="flex items-center gap-8">
                        <Button
                            href={LINKS.stripeCheckout}
                            className="text-[10px] md:text-xs font-black tracking-[0.2em] px-6 py-3 md:px-8 md:py-3.5 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(184,76,255,0.3)]"
                        >
                            QUIERO MI SPRINT - $27
                        </Button>
                    </div>
                </div>
            </div>
        </motion.header>
    );
}
