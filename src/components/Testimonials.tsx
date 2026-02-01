"use client";

import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import ScrollReveal from "@/components/ScrollReveal";
import { Star } from "lucide-react";
import Image from "next/image";
import { TESTIMONIALS, t } from "@/lib/content";

export default function Testimonials() {
    return (
        <Section id="casos" className="py-24 relative overflow-hidden">
             {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <ScrollReveal text-center>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter text-white">
                            {t.testimonials.titleA} <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">{t.testimonials.titleB}</span>
                        </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={0.1}>
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <div className="px-6 py-2 rounded-full bg-white/5 border border-white/10 flex items-center gap-3 group hover:border-violet-500/50 transition-colors">
                                <div className="h-6 w-6 relative grayscale group-hover:grayscale-0 transition-all">
                                    <Image src="https://www.google.com/favicon.ico" alt="Google" width={24} height={24} className="object-contain" />
                                </div>
                                <span className="text-xs font-black tracking-widest uppercase text-white/40 group-hover:text-white transition-colors">GOOGLE REVIEWS</span>
                            </div>
                            <div className="px-6 py-2 rounded-full bg-white/5 border border-white/10 flex items-center gap-3 group hover:border-green-500/50 transition-colors">
                                <div className="h-6 w-6 relative grayscale group-hover:grayscale-0 transition-all">
                                    <Star size={24} className="text-green-500 fill-green-500" />
                                </div>
                                <span className="text-xs font-black tracking-widest uppercase text-white/40 group-hover:text-white transition-colors">TRUSTPILOT</span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                <div className="relative w-full overflow-hidden mask-linear-fade">
                    <div className="flex animate-marquee gap-8 w-max hover:pause">
                        {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, i) => (
                            <div key={i} className="w-[350px] md:w-[400px] shrink-0">
                                <Card className="h-full p-8 bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all group relative">
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(testimonial.stars)].map((_, i) => (
                                            <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-white/80 leading-relaxed mb-8 font-medium italic">
                                        &quot;{testimonial.text}&quot;
                                    </p>
                                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                                        <div className="flex items-center gap-4">
                                            <div className="relative h-12 w-12 rounded-full overflow-hidden border border-white/10">
                                                <Image
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <div className="font-bold text-white text-sm">{testimonial.name}</div>
                                                <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{testimonial.brand}</div>
                                            </div>
                                        </div>
                                        <div className="h-6 w-6 relative grayscale group-hover:grayscale-0 transition-all opacity-40 group-hover:opacity-100">
                                            {testimonial.sourceIcon === 'google' ? (
                                                <Image src="https://www.google.com/favicon.ico" alt="Google" width={24} height={24} className="object-contain" />
                                            ) : (
                                                <Star size={20} className="text-green-500 fill-green-500" />
                                            )}
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
