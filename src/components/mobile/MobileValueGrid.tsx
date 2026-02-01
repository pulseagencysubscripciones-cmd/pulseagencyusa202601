"use client";

import Card from "@/components/ui/Card";
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

export default function MobileValueGrid() {
    return (
        <section className="py-10">
            <div className="px-5 mb-8 flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-[9px] font-black uppercase tracking-[0.25em] mb-4">
                    <Zap size={10} className="fill-cyan-400" />
                    {t.value.kicker}
                </div>
                <h2 className="text-3xl font-black leading-none tracking-tighter text-white">
                    {t.value.titleA} <span className="text-violet-500">{t.value.titleB}</span>
                </h2>
            </div>

            <div className="grid gap-4 px-5">
                {VALUE_CARDS.map((card) => {
                    const Icon = iconMap[card.icon as keyof typeof iconMap] || CheckCircle2;
                    return (
                        <Card key={card.title} className="p-5 border-white/5 bg-gradient-to-br from-[#0D111C] via-[#0D111C] to-violet-900/10">
                            <div className="flex gap-4">
                                <div className="shrink-0 mb-4 text-cyan-400 h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                                    <Icon size={20} strokeWidth={2.5} />
                                </div>
                                <div>
                                    <h3 className="text-base font-black mb-2 text-white tracking-tight">
                                        {card.title}
                                    </h3>
                                    <p className="text-xs text-white/50 leading-relaxed font-bold">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    );
                })}
            </div>
        </section>
    );
}
