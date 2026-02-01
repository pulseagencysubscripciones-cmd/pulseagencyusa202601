"use client";

import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import ScrollReveal from "@/components/ScrollReveal";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FAQS, t } from "@/lib/content";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <Section id="faq" className="py-24 relative overflow-hidden">
            <div className="max-w-3xl mx-auto px-6 relative z-10">
                <ScrollReveal>
                    <h2 className="text-4xl md:text-5xl font-black mb-12 text-center tracking-tighter text-white">
                        {t.faq.title}
                    </h2>
                </ScrollReveal>
                
                <div className="space-y-4">
                    {FAQS.map((faq, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <Card className={`overflow-hidden border transition-all duration-300 ${openIndex === i ? 'bg-white/[0.03] border-cyan-400/30 shadow-[0_0_30px_rgba(34,211,238,0.05)]' : 'bg-transparent border-white/5 hover:border-white/10'}`}>
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-6"
                                >
                                    <span className={`text-lg md:text-xl font-bold transition-colors ${openIndex === i ? 'text-white' : 'text-white/70'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`mt-1 h-6 w-6 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-all duration-300 ${openIndex === i ? 'bg-cyan-400 border-cyan-400 rotate-180' : 'bg-white/5'}`}>
                                        {openIndex === i ? (
                                            <Minus size={14} className="text-black" />
                                        ) : (
                                            <Plus size={14} className="text-white" />
                                        )}
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-6 md:px-8 md:pb-8 text-white/50 leading-relaxed border-t border-white/5 pt-6">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </Section>
    );
}
