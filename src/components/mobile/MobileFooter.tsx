"use client";

import { LINKS, t } from "@/lib/content";
import { Facebook, Instagram, Linkedin, MapPin, Phone } from "lucide-react";

export default function MobileFooter() {
    const currentYear = 2025;

    return (
        <footer className="px-5 py-16 border-t border-white/5 bg-[#070A14]">
            <div className="flex flex-col items-center text-center space-y-12">
                {/* Brand & Description */}
                <div className="space-y-6">
                    <div className="flex flex-col items-center">
                        <span className="text-xl font-black tracking-[0.3em] text-white uppercase">PULSE</span>
                        <span className="text-[10px] text-white/40 tracking-[0.2em] font-bold uppercase mt-1">Agency</span>
                    </div>
                    <p className="text-white/40 text-[10px] leading-relaxed font-bold tracking-tight px-4 italic">
                        {t.footer.description}
                    </p>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4">
                    <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
                        <Linkedin size={18} />
                    </a>
                    <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
                        <Instagram size={18} />
                    </a>
                    <a href={LINKS.facebook} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
                        <Facebook size={18} />
                    </a>
                </div>

                {/* Contact Info */}
                <div className="space-y-6 w-full max-w-xs mx-auto">
                    <div className="flex flex-col items-center gap-2">
                        <MapPin size={16} className="text-violet-500" />
                        <span className="text-white/60 text-[10px] font-bold uppercase tracking-wider">{t.footer.address}</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Phone size={16} className="text-violet-500" />
                        <span className="text-white/60 text-[10px] font-bold uppercase tracking-wider">{t.footer.phone}</span>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 pt-4 border-t border-white/5 w-full">
                    <a href="#home" className="text-white/60 text-[10px] font-black uppercase tracking-widest">{t.nav.home}</a>
                    <a href="#metodologia" className="text-white/60 text-[10px] font-black uppercase tracking-widest">{t.nav.method}</a>
                    <a href="#faq" className="text-white/60 text-[10px] font-black uppercase tracking-widest">{t.nav.faq}</a>
                </div>

                {/* Compliance & Copyright */}
                <div className="space-y-6 w-full">
                    <div className="flex flex-col items-center gap-4">
                        <p className="text-white/30 text-[8px] font-black uppercase tracking-widest leading-relaxed">
                            {t.footer.disclaimer}
                        </p>
                    </div>
                    
                    <p className="text-white/20 text-[8px] font-black uppercase tracking-[0.2em]">
                        © {currentYear} PULSE AGENCY LLC. {t.footer.rights}
                    </p>
                </div>
            </div>
        </footer>
    );
}
