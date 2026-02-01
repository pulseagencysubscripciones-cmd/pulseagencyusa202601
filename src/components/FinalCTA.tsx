"use client";

import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { LINKS, t } from "@/lib/content";
import ScrollReveal from "@/components/ScrollReveal";
import { TrendingUp } from "lucide-react";

export default function FinalCTA() {
    return (
        <Section className="py-24 md:py-32 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <ScrollReveal>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
                        {t.sections.final.titleA} <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">{t.sections.final.titleB}</span>
                    </h2>
                </ScrollReveal>
                
                <ScrollReveal delay={0.1}>
                    <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto font-medium">
                       {t.sections.final.subtitle}
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <div className="flex flex-col items-center gap-6">
                        <Button
                            href={LINKS.stripeCheckout}
                            className="bg-white text-black hover:bg-gray-100 text-lg py-6 px-12 flex items-center gap-2"
                        >
                            Quiero ordenar mi marca por $27
                            <TrendingUp size={24} />
                        </Button>
                        <p className="text-sm text-white/30 font-bold uppercase tracking-widest">
                            {t.sections.final.disclaimer}
                        </p>
                    </div>
                </ScrollReveal>
            </div>

            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-violet-900/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
        </Section>
    );
}
