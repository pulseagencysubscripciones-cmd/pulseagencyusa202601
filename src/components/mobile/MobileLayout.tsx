"use client";

import MobileNavbar from "./MobileNavbar";
import MobileHero from "./MobileHero";
import MobilePainPoints from "./MobilePainPoints";
import MobileValueGrid from "./MobileValueGrid";
import MobileTestimonials from "./MobileTestimonials";
import MobileFAQ from "./MobileFAQ";
import MobileFinalCTA from "./MobileFinalCTA";
import MobileFooter from "./MobileFooter";
import Background from "@/components/Background";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import TestimonialMarquee from "@/components/TestimonialMarquee";

export default function MobileLayout() {
    return (
        <main className="relative min-h-screen bg-[#070A14] pb-24">
            <Background />
            <MobileNavbar />
            <TestimonialMarquee />
            <MobileHero />
            <MobilePainPoints />
            <MobileValueGrid />
            <MobileTestimonials />
            <MobileFAQ />
            <MobileFinalCTA />
            <MobileFooter />
            <WhatsAppFloat />
        </main>
    );
}
