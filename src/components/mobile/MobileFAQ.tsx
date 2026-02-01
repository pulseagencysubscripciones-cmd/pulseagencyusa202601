"use client";

import Card from "@/components/ui/Card";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FAQS, t } from "@/lib/content";

export default function MobileFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-10">
            <div className="px-5 mb-4 flex flex-col items-center text-center">
                <h2 className="text-2xl font-black tracking-tighter text-white">
                    {t.faq.title} <span className="text-cyan-400">?</span>
                </h2>
            </div>

            <div className="px-5 space-y-4">
                {FAQS.map((faq, i) => (
                    <Card key={i} className={`overflow-hidden border transition-all duration-300 ${openIndex === i ? 'bg-white/[0.03] border-cyan-400/30' : 'bg-transparent border-white/5'}`}>
                        <button
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            className="w-full text-left p-5 flex items-start justify-between gap-4"
                        >
                            <span className={`text-base font-bold transition-colors ${openIndex === i ? 'text-white' : 'text-white/70'}`}>
                                {faq.question}
                            </span>
                            <div className={`mt-1 h-5 w-5 rounded-full border border-white/10 flex items-center justify-center shrink-0 transition-all ${openIndex === i ? 'bg-cyan-400 border-cyan-400 rotate-180' : 'bg-white/5'}`}>
                                {openIndex === i ? (
                                    <Minus size={12} className="text-black" />
                                ) : (
                                    <Plus size={12} className="text-white" />
                                )}
                            </div>
                        </button>
                        <AnimatePresence>
                            {openIndex === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                >
                                    <div className="px-5 pb-5 text-xs text-white/50 leading-relaxed border-t border-white/5 pt-4">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Card>
                ))}
            </div>
        </section>
    );
}
