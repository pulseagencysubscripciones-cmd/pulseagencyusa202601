"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { LINKS, t } from "@/lib/content";
import { useState } from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    const [isPlaying, setIsPlaying] = useState(false);
    const vimeoEmbed = `https://player.vimeo.com/video/${LINKS.vimeoId}?autoplay=${isPlaying ? 1 : 0}&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`;

    return (
        <section id="home" className="relative px-6 md:px-12 py-20 md:py-28 overflow-hidden">
            {/* Background Gradient Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent" />
            <div className="absolute -top-32 -right-32 h-96 w-96 bg-cyan-400/5 rounded-full blur-[120px] pointer-events-none" />
            
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-start relative z-10">
                    {/* LEFT COLUMN - TEXT */}
                    <motion.div 
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-4 md:space-y-5"
                    >
                        <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-violet-600/10 to-fuchsia-600/10 border border-violet-500/20 mb-2">
                            <span className="text-violet-400 text-xs font-black tracking-[0.25em] uppercase">
                                PULSE VISIBILITY SPRINT
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tighter">
                            {t.hero.titleA}{" "}
                            <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                                {t.hero.titleB}
                            </span><br />
                            {t.hero.titleC}<br />
                            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent italic">
                                {t.hero.titleD}
                            </span><br />
                            <span className="bg-gradient-to-r from-violet-500 via-violet-200 to-white bg-clip-text text-transparent">
                                {t.hero.titleE}
                            </span>
                        </h1>

                    <p className="text-white/60 text-base md:text-xl leading-relaxed max-w-xl font-medium">
                        {t.hero.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                            href={LINKS.stripeCheckout}
                            className="text-xs font-black uppercase tracking-[0.25em] py-4 px-8 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 shadow-[0_0_30px_rgba(184,76,255,0.4)] hover:shadow-[0_0_40px_rgba(184,76,255,0.6)] transition-all rounded-xl"
                        >
                            Quiero ordenar mi marca por $27
                        </Button>

                        <a
                            href={LINKS.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-xs font-black uppercase tracking-[0.25em] text-white border border-white/10 hover:border-white/20 transition-all backdrop-blur-sm bg-white/[0.02]"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            <span>{t.nav.whatsapp}</span>
                        </a>
                    </div>

                    <p className="text-white/30 text-xs font-bold uppercase tracking-widest">
                        {t.hero.disclaimer}
                    </p>
                </motion.div>

                {/* RIGHT COLUMN - VIDEO */}
                <motion.div 
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="relative aspect-[9/16] md:aspect-[9/14] w-full max-w-none mx-auto rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-black"
                >
                    {!isPlaying ? (
                        <div
                            className="absolute inset-0 z-10 flex flex-col items-center justify-center cursor-pointer bg-[#0D111C]"
                            onClick={() => setIsPlaying(true)}
                        >
                            <Image
                                src="/thumbnail.webp"
                                alt="Pulse Video Preview"
                                fill
                                priority
                                className="object-cover opacity-60"
                            />
                            <div className="relative z-10 h-20 w-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-110 transition-transform">
                                <Play className="text-white fill-white ml-1" size={32} />
                            </div>
                            <p className="relative z-10 mt-4 text-xs font-black tracking-[0.2em] text-white uppercase animate-pulse">Ver Video</p>
                        </div>
                    ) : null}

                    {isPlaying && (
                        <iframe
                            src={vimeoEmbed}
                            className="absolute inset-0 w-full h-full"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            title="Pulse Video"
                        />
                    )}
                </motion.div>
            </div>
        </section>
    );
}
