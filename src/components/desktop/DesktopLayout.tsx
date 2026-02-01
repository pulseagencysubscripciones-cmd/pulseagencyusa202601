import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import ValueGrid from "@/components/ValueGrid";
import PriceWhy from "@/components/PriceWhy";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import TestimonialMarquee from "@/components/TestimonialMarquee";
import ScrollReveal from "@/components/ScrollReveal";

function PulseBadge() {
    return (
        <div className="flex justify-center py-10">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/5 border border-white/10 px-6 py-2 backdrop-blur-md">
                <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[10px] font-black tracking-[0.3em] text-white/60 uppercase">
                    Proceso Optimizado — Enfoque en Conversión
                </span>
            </div>
        </div>
    );
}

export default function DesktopLayout() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#070A14]">
            <Background />
            <Navbar />
            <TestimonialMarquee />
            <div className="mx-auto max-w-7xl px-6 md:px-12">
                <Hero />

                <ScrollReveal>
                    <PainPoints />
                </ScrollReveal>

                <ScrollReveal>
                    <PulseBadge />
                </ScrollReveal>

                <ScrollReveal>
                    <ValueGrid />
                </ScrollReveal>

                <ScrollReveal>
                    <PriceWhy />
                </ScrollReveal>

                <Testimonials />

                <ScrollReveal>
                    <FAQ />
                </ScrollReveal>

                <ScrollReveal>
                    <FinalCTA />
                </ScrollReveal>

                <ScrollReveal>
                    <Footer />
                </ScrollReveal>
            </div>
            <WhatsAppFloat />
        </main>
    );
}
