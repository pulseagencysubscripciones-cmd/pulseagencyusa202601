"use client";

import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import ScrollReveal from "@/components/ScrollReveal";
import { PAIN_POINTS, t } from "@/lib/content";

export default function PainPoints() {
    return (
        <Section id="metodologia" className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto mb-12 text-center flex flex-col items-center">
                <ScrollReveal>
                    <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight tracking-tight text-white">
                        {t.pain.title} <span className="text-violet-500">{t.pain.titleHighlight}</span>
                    </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                    <p className="text-white text-base md:text-lg font-medium">
                        {t.pain.subtitle}
                    </p>
                </ScrollReveal>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                {PAIN_POINTS.map((point, i) => (
                    <ScrollReveal key={point.title} delay={0.1 * i} direction={i % 2 === 0 ? "left" : "right"}>
                        <Card className="group p-8 h-full border-white/5 bg-gradient-to-br from-[#0D111C] via-[#0D111C] to-violet-900/10 hover:to-violet-800/20 transition-all duration-500">
                            <div className="flex gap-5">
                                <div className={`mt-1 h-3 w-3 shrink-0 rounded-full bg-gradient-to-br ${point.dotColor} shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform`} />
                                <div>
                                    <h3 className="text-xl font-black mb-3 text-white group-hover:text-cyan-400 transition-colors duration-400 tracking-tight">
                                        {point.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-white/50 leading-relaxed font-bold group-hover:text-white/70 transition-colors">
                                        {point.description}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </ScrollReveal>
                ))}
            </div>
        </Section>
    );
}
