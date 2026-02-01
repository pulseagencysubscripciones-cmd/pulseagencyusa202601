"use client";

import Card from "@/components/ui/Card";
import { PAIN_POINTS, t } from "@/lib/content";

export default function MobilePainPoints() {
    return (
        <section id="metodologia" className="py-10">
            <div className="px-5 mb-8 flex flex-col items-center text-center">
                <h2 className="text-3xl font-black leading-tight tracking-tight text-white">
                    {t.pain.title} <span className="text-violet-500">{t.pain.titleHighlight}</span>
                </h2>
            </div>

            {/* Horizontal Swipe Container */}
            <div className="flex overflow-x-auto gap-4 px-5 pb-8 snap-x snap-mandatory no-scrollbar">
                {PAIN_POINTS.map((point, i) => (
                    <div key={i} className="snap-center shrink-0 w-[85vw]">
                        <Card className="h-full p-6 border-white/5 bg-gradient-to-br from-[#0D111C] via-[#0D111C] to-violet-900/10 active:border-cyan-400/30 transition-colors">
                            <div className="flex gap-4">
                                <div className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br ${point.dotColor}`} />
                                <div>
                                    <h3 className="text-lg font-black mb-2 text-white">{point.title}</h3>
                                    <p className="text-sm text-white/50 leading-relaxed font-bold">{point.description}</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    );
}
