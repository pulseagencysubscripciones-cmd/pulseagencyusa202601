"use client";

import Button from "@/components/ui/Button";
import { LINKS, t } from "@/lib/content";
import { TrendingUp } from "lucide-react";

export default function MobileFinalCTA() {
    return (
        <section className="py-16 px-5 text-center relative overflow-hidden">
            <h2 className="text-4xl font-black tracking-tighter text-white mb-6 leading-none">
                {t.sections.final.titleA} <span className="text-violet-500">{t.sections.final.titleB}</span>
            </h2>
            
            <p className="text-base text-white/60 mb-10 font-medium">
                {t.sections.final.subtitle}
            </p>

            <div className="flex flex-col items-center gap-4">
                <Button
                    href={LINKS.stripeCheckout}
                    className="w-full bg-white text-black text-sm py-5 px-8 flex items-center justify-center gap-2 rounded-xl"
                >
                    {t.sections.final.button}
                    <TrendingUp size={20} />
                </Button>
                <p className="text-[10px] text-white/30 font-black uppercase tracking-widest mt-2 text-center leading-relaxed">
                    {t.sections.final.disclaimer}
                </p>
            </div>

            {/* Background Decor */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-violet-600/10 to-transparent -z-10" />
        </section>
    );
}
