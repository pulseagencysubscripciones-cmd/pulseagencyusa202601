"use client";

import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import ScrollReveal from "@/components/ScrollReveal";
import { Rocket } from "lucide-react";
import { t } from "@/lib/content";

export default function PriceWhy() {
    return (
        <Section className="py-16 md:py-20">
            <ScrollReveal>
                <Card className="relative p-10 md:p-20 border-white/10 bg-gradient-to-br from-[#101423] via-[#070A14] to-violet-900/20 overflow-hidden shadow-xl">
                    {/* Decorative Glow */}
                    <div className="absolute -top-32 -right-32 h-64 w-64 bg-violet-600/10 blur-[120px] rounded-full" />

                    <div className="relative text-center max-w-3xl mx-auto space-y-8">
                        <ScrollReveal delay={0.1}>
                            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                                <Rocket size={32} className="fill-cyan-400" />
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tighter text-violet-500">
                                {t.priceWhy.title}<br />
                                <span className="text-white text-xl md:text-2xl italic block mt-3">{t.priceWhy.subtitle}</span>
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <p className="text-white/60 text-base md:text-xl leading-relaxed font-bold tracking-tight">
                                {t.priceWhy.description}
                            </p>
                        </ScrollReveal>
                    </div>
                </Card>
            </ScrollReveal>
        </Section>
    );
}
