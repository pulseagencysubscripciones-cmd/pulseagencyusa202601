"use client";

import Image from "next/image";
import Link from "next/link";
import { LINKS, t } from "@/lib/content";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    const currentYear = 2025; // Matching reference site

    return (
        <footer className="bg-[#070A14] py-16 md:py-20 border-t border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10 p-0.5 transition-all group-hover:ring-cyan-400/50">
                                <Image src="/logo.webp" alt="Pulse Agency" width={40} height={40} className="h-full w-full object-cover rounded-lg opacity-90 group-hover:opacity-100 transition-opacity" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-base font-black tracking-[0.2em] leading-none text-white whitespace-nowrap uppercase">PULSE</span>
                                <span className="text-[8px] text-white/30 tracking-[0.1em] font-bold uppercase mt-1">Agency</span>
                            </div>
                        </div>
                        <p className="text-white text-sm leading-relaxed font-medium max-w-xs italic">
                            {t.footer.description}
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-4">
                            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all">
                                <Linkedin size={18} />
                            </a>
                            <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href={LINKS.facebook} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all">
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">{t.footer.contactTitle}</h4>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <MapPin size={18} className="text-violet-500 shrink-0" />
                                <span className="text-white/60 text-sm font-bold leading-relaxed">{t.footer.address}</span>
                            </div>
                            <div className="flex gap-4">
                                <Phone size={18} className="text-violet-500 shrink-0" />
                                <span className="text-white/60 text-sm font-bold">{t.footer.phone}</span>
                            </div>
                            <div className="flex gap-4">
                                <Mail size={18} className="text-violet-500 shrink-0" />
                                <a href={`mailto:${t.footer.email}`} className="text-white/60 hover:text-white transition-colors text-sm font-bold">{t.footer.email}</a>
                            </div>
                        </div>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">{t.footer.legalTitle}</h4>
                        <div className="flex flex-col gap-4">
                            <Link href="/privacy" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm font-bold group">
                                <div className="h-1 w-1 rounded-full bg-violet-500/50 group-hover:bg-violet-500 transition-colors" />
                                {t.footer.privacy}
                            </Link>
                            <Link href="/terms" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors text-sm font-bold group">
                                <div className="h-1 w-1 rounded-full bg-violet-500/50 group-hover:bg-violet-500 transition-colors" />
                                {t.footer.terms}
                            </Link>
                        </div>
                    </div>

                    {/* Compliance Column */}
                    <div>
                        <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">{t.footer.complianceTitle}</h4>
                        <p className="text-white/30 text-[10px] font-bold leading-relaxed mb-6 uppercase tracking-wider">
                            {t.footer.disclaimer}
                        </p>
                        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center">
                            <span className="text-[10px] text-white/20 font-black uppercase tracking-[0.2em]">SECURE_SOCKET_LAYER_ENCRYPTED</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col items-center text-center gap-6">
                    <p className="text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] opacity-40">
                        © {currentYear} PULSE AGENCY LLC. {t.footer.rights}
                    </p>
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-white/30 text-[9px] font-bold uppercase tracking-[0.2em]">
                            Cumplimiento Federal e Internacional de Datos
                        </p>
                        <p className="text-white/20 text-[8px] font-medium max-w-2xl leading-relaxed uppercase tracking-wider">
                            Garantizamos el cumplimiento estricto de las normativas de protección de datos: CCPA (California), TDPSA (Texas), FIPA (Florida) en EE.UU., y el RGPD (Reglamento General de Protección de Datos) de la Unión Europea. Tu privacidad es nuestra prioridad estratégica.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
