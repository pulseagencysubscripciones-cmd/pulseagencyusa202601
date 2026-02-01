"use client";

import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import ScrollReveal from "@/components/ScrollReveal";
import { CheckCircle2, Zap, Target, BarChart3, Clock, Rocket } from "lucide-react";
import { VALUE_CARDS, t } from "@/lib/content";

const iconMap = {
    Target: Target,
    Zap: Zap,
    BarChart3: BarChart3,
    Clock: Clock,
    Rocket: Rocket,
    CheckCircle2: CheckCircle2,
};

export default function ValueGrid() {
    return (
        <Section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto mb-12 text-center space-y-6">
                <ScrollReveal>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-black uppercase tracking-[0.25em]">
                        <Zap size={14} className="fill-cyan-400" />
                        {t.value.kicker}
                    </div>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-white leading-tight">
                        {t.value.titleA} <span className="text-violet-500">{t.value.titleB}</span>
                    </h2>
                </ScrollReveal>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {VALUE_CARDS.map((card, i) => {
                    const Icon = iconMap[card.icon as keyof typeof iconMap] || CheckCircle2;
                    return (
                        <ScrollReveal key={card.title} delay={i * 0.1}>
                            <Card className="group p-6 h-full border-white/5 bg-gradient-to-br from-[#0D111C] via-[#0D111C] to-violet-900/10 hover:to-violet-800/20 transition-all duration-500">
                                <div className="mb-4 text-cyan-400 h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-cyan-400/30 transition-colors">
                                    <Icon size={24} strokeWidth={2.5} />
                                </div>
                                <h3 className="text-xl font-black mb-3 text-white group-hover:text-cyan-400 transition-colors tracking-tight">
                                    {card.title}
                                </h3>
                                <p className="text-sm text-white/50 leading-relaxed font-bold group-hover:text-white/70 transition-colors">
                                    {card.description}
                                </p>
                            </Card>
                        </ScrollReveal>
                    );
                })}
            </div>
        </Section>
    );
}
