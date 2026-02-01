"use client";

import Image from "next/image";
import { LINKS, t } from "@/lib/content";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: t.nav.home, href: "#home" },
        { name: t.nav.method, href: "#metodologia" },
        { name: t.nav.cases, href: "#casos" },
        { name: t.nav.faq, href: "#faq" },
    ];

    return (
        <>
            <header className="lg:hidden sticky top-0 z-50 backdrop-blur-xl bg-[#070A14]/90 border-b border-white/5">
                <div className="flex items-center justify-between px-5 py-4">
                    <div className="flex items-center gap-3">
                        <div className="relative h-8 w-8 overflow-hidden rounded-lg bg-white/5 ring-1 ring-white/10 p-0.5">
                            <Image src="/logo.webp" alt="Pulse Agency" width={32} height={32} className="h-full w-full object-cover rounded-md opacity-90" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-black tracking-[0.2em] leading-none text-white whitespace-nowrap uppercase">PULSE</span>
                            <span className="text-[7px] text-white/30 tracking-[0.1em] font-bold uppercase mt-0.5">Agency</span>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white p-2"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden fixed top-[65px] left-0 right-0 z-40 bg-[#070A14] border-b border-white/5"
                    >
                        <nav className="px-5 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-white/60 hover:text-white transition-colors text-sm font-black uppercase tracking-widest"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4 space-y-3">
                                <a
                                    href={LINKS.stripeCheckout}
                                    className="block w-full text-center py-3 px-6 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 text-white text-xs font-black uppercase tracking-widest rounded-xl"
                                >
                                    {t.nav.cta}
                                </a>
                                <a
                                    href={LINKS.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-3 px-6 border border-white/10 text-white text-xs font-black uppercase tracking-widest rounded-xl"
                                >
                                    <Phone size={16} />
                                    {t.nav.contact}
                                </a>
                                <a
                                    href={LINKS.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-center text-white/40 text-xs font-bold uppercase tracking-widest"
                                >
                                    {t.nav.whatsapp}
                                </a>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
