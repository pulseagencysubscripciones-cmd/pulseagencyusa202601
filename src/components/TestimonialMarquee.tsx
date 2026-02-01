"use client";

import { t, LINKS } from "@/lib/content";

export default function TestimonialMarquee() {
    return (
        <div className="relative w-full overflow-hidden py-4 md:py-6 bg-white/[0.02] border-y border-white/5">
            <div className="flex animate-marquee whitespace-nowrap group hover:pause">
                {/* First Set */}
                <div className="flex items-center gap-16 md:gap-24 px-6 opacity-60 hover:opacity-100 transition-opacity duration-300">
                    <a href={LINKS.reviews.trustpilot} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group/item">
                        <img src="/trustpilot_new.webp" alt="Trustpilot" className="h-[18px] md:h-[22px] w-auto object-contain grayscale group-hover/item:grayscale-0 transition-all duration-300" />
                        <span className="text-[18px] md:text-[22px] font-black tracking-tighter uppercase text-white/50 group-hover/item:text-white transition-colors duration-300 leading-none">{t.marquee.ua}</span>
                    </a>
                    
                    <a href={LINKS.reviews.google} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group/item">
                        <img src="/google-logo-custom.webp" alt="Google" className="h-[18px] md:h-[22px] w-auto object-contain grayscale brightness-200 contrast-0 group-hover/item:grayscale-0 group-hover/item:brightness-100 group-hover/item:contrast-100 transition-all duration-300" />
                        <span className="text-[18px] md:text-[22px] font-black tracking-tighter uppercase text-white/50 group-hover/item:text-white transition-colors duration-300 leading-none">{t.marquee.clients}</span>
                    </a>
                    
                    <a href={LINKS.reviews.trustpilot} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group/item">
                        <img src="/trustpilot_new.webp" alt="Trustpilot" className="h-[18px] md:h-[22px] w-auto object-contain grayscale group-hover/item:grayscale-0 transition-all duration-300" />
                        <span className="text-[18px] md:text-[22px] font-black tracking-tighter uppercase text-white/50 group-hover/item:text-white transition-colors duration-300 leading-none">{t.marquee.ua}</span>
                    </a>
                    
                    <a href={LINKS.reviews.google} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group/item">
                        <img src="/google-logo-custom.webp" alt="Google" className="h-[18px] md:h-[22px] w-auto object-contain grayscale brightness-200 contrast-0 group-hover/item:grayscale-0 group-hover/item:brightness-100 group-hover/item:contrast-100 transition-all duration-300" />
                        <span className="text-[18px] md:text-[22px] font-black tracking-tighter uppercase text-white/50 group-hover/item:text-white transition-colors duration-300 leading-none">{t.marquee.clients}</span>
                    </a>
                </div>

                {/* Second Set (Duplicate for Seamless Loop) */}
                <div className="flex items-center gap-16 md:gap-24 px-6 opacity-60 hover:opacity-100 transition-opacity duration-300">
                    <a href={LINKS.reviews.trustpilot} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group/item">
                        <img src="/trustpilot_new.webp" alt="Trustpilot" className="h-[18px] md:h-[22px] w-auto object-contain grayscale group-hover/item:grayscale-0 transition-all duration-300" />
                        <span className="text-[18px] md:text-[22px] font-black tracking-tighter uppercase text-white/50 group-hover/item:text-white transition-colors duration-300 leading-none">{t.marquee.ua}</span>
                    </a>
                    
                    <a href={LINKS.reviews.google} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group/item">
                        <img src="/google-logo-custom.webp" alt="Google" className="h-[18px] md:h-[22px] w-auto object-contain grayscale brightness-200 contrast-0 group-hover/item:grayscale-0 group-hover/item:brightness-100 group-hover/item:contrast-100 transition-all duration-300" />
                        <span className="text-[18px] md:text-[22px] font-black tracking-tighter uppercase text-white/50 group-hover/item:text-white transition-colors duration-300 leading-none">{t.marquee.clients}</span>
                    </a>
                    
                    <a href={LINKS.reviews.trustpilot} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group/item">
                        <img src="/trustpilot_new.webp" alt="Trustpilot" className="h-[18px] md:h-[22px] w-auto object-contain grayscale group-hover/item:grayscale-0 transition-all duration-300" />
                        <span className="text-[18px] md:text-[22px] font-black tracking-tighter uppercase text-white/50 group-hover/item:text-white transition-colors duration-300 leading-none">{t.marquee.ua}</span>
                    </a>
                    
                    <a href={LINKS.reviews.google} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group/item">
                        <img src="/google-logo-custom.webp" alt="Google" className="h-[18px] md:h-[22px] w-auto object-contain grayscale brightness-200 contrast-0 group-hover/item:grayscale-0 group-hover/item:brightness-100 group-hover/item:contrast-100 transition-all duration-300" />
                        <span className="text-[18px] md:text-[22px] font-black tracking-tighter uppercase text-white/50 group-hover/item:text-white transition-colors duration-300 leading-none">{t.marquee.clients}</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
