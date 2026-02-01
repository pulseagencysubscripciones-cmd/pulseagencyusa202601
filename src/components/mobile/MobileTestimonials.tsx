"use client";

import Card from "@/components/ui/Card";
import { Star } from "lucide-react";
import { TESTIMONIALS, t } from "@/lib/content";

export default function MobileTestimonials() {
    return (
        <section id="casos" className="py-10 bg-white/[0.02]">
            <div className="px-5 mb-8 flex flex-col items-center text-center">
                <h2 className="text-3xl font-black tracking-tighter text-white">
                    {t.testimonials.titleA} <br /><span className="text-violet-500">{t.testimonials.titleB}</span>
                </h2>
            </div>

            <div className="flex overflow-x-auto gap-4 px-5 pb-8 snap-x snap-mandatory no-scrollbar">
                {TESTIMONIALS.map((testimonial, i) => (
                    <div key={i} className="snap-center shrink-0 w-[85vw]">
                        <Card className="h-full p-6 border-white/10 bg-gradient-to-br from-[#0D111C] to-violet-900/20 flex flex-col justify-between">
                            <div>
                                <div className="flex gap-1 text-yellow-400 mb-4">
                                    {[...Array(testimonial.stars || 5)].map((_, j) => (
                                        <Star key={j} size={14} fill="currentColor" strokeWidth={0} />
                                    ))}
                                </div>
                                <p className="text-base text-white/90 leading-relaxed font-bold tracking-tight">
                                    "{testimonial.text}"
                                </p>
                            </div>

                            <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-4">
                                <div className="h-10 w-10 rounded-full bg-white/5 overflow-hidden">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-black text-white text-xs tracking-tight">{testimonial.name}</span>
                                    <span className="text-[9px] text-white/40 uppercase tracking-widest font-black">{testimonial.brand}</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>

            <div className="mt-8 flex justify-center gap-6 px-5">
                <a href="https://www.trustpilot.com/review/pulseagencyusa.com" target="_blank" rel="noreferrer" className="flex-1 max-w-[140px]">
                    <div className="h-10 bg-white/5 backdrop-blur-sm flex items-center justify-center rounded-lg border border-white/10 p-2">
                        <img src="/trustpilot_new.webp" alt="Trustpilot" className="h-full w-full object-contain brightness-110" />
                    </div>
                </a>
                <a href="https://maps.app.goo.gl/gVP1961gKKxTojw2A" target="_blank" rel="noreferrer" className="flex-1 max-w-[140px]">
                    <div className="h-10 bg-white/5 backdrop-blur-sm flex items-center justify-center rounded-lg border border-white/10 p-2">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 mr-1.5"><path fill="#4285F4" d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z" /><path fill="#34A853" d="M12.255 24c3.24 0 5.95-1.08 7.96-2.91l-3.86-3c-1.08.72-2.43 1.16-4.1 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.565 24 12.255 24z" /><path fill="#FBBC05" d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 0 0 0 10.76l3.98-3.09z" /><path fill="#EA4335" d="M12.255 4.75c1.77 0 3.35.61 4.59 1.81l3.35-3.36C18.205 1.33 15.495 0 12.255 0 7.565 0 3.515 2.7 1.545 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z" /></svg>
                        <span className="text-[10px] font-black text-white">Google</span>
                    </div>
                </a>
            </div>
        </section>
    );
}
