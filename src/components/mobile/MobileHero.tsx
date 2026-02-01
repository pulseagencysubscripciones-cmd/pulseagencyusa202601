"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";
import { LINKS, t } from "@/lib/content";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

export default function MobileHero() {
    const [isPlaying, setIsPlaying] = useState(false);
    const vimeoEmbed = `https://player.vimeo.com/video/${LINKS.vimeoId}?title=0&byline=0&portrait=0&autoplay=${isPlaying ? 1 : 0}&muted=0`;

    return (
        <section id="home" className="relative flex flex-col justify-center min-h-[100dvh] w-full overflow-hidden">
            <div className="w-full max-w-md mx-auto px-5 flex flex-col gap-6">
            {/* 0. TRUST BADGES ROW */}

            {/* 1. TEXTO */}
            <div className="space-y-4 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-black leading-[1.1] tracking-tighter"
                >
                    {t.hero.titleA}{" "}
                    <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">{t.hero.titleB}</span><br />
                    {t.hero.titleC}{" "}
                    <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent italic">
                        {t.hero.titleD}
                    </span><br />
                    {t.hero.titleE}
                </motion.h1>

                <p className="text-white/60 text-base leading-relaxed font-medium">
                    {t.hero.subtitle}
                </p>
            </div>

            {/* 2. VIDEO */}
            <div className="relative aspect-video w-full rounded-lg overflow-hidden ring-1 ring-white/10 shadow-2xl bg-black">
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
                        <div className="relative z-10 h-16 w-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                            <Play className="text-white fill-white ml-1" size={28} />
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
            </div>

            {/* 3. BOTÓN CTA */}
            <div className="w-full">
                <Button
                    href={LINKS.stripeCheckout}
                    className="w-full text-xs font-black uppercase tracking-[0.2em] py-4 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 shadow-[0_0_30px_rgba(184,76,255,0.4)] rounded-xl"
                >
                    {t.nav.cta}
                </Button>
            </div>
            </div>
        </section>
    );
}
