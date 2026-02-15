import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { NeuralNetwork } from "@/components/visuals/NeuralNetwork";
import { HeroHeadline } from "@/components/hero/HeroHeadline";
import { CommandLine } from "@/components/hero/CommandLine";
import { AboutSection } from "@/components/about/AboutSection";
import { ServicesSection } from "@/components/services/ServicesSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { TestimonialsSection } from "@/components/testimonials/TestimonialsSection";
import { BentoGrid } from "@/components/projects/BentoGrid";
import { TechPipeline } from "@/components/tech/TechPipeline";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <div className="relative min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/20">
            <ScrollProgress />

            {/* Background */}
            <NeuralNetwork />

            {/* Grid Overlay */}
            <div className="fixed inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-[0.05] pointer-events-none z-0" />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 md:px-6 pt-32 pb-20 flex flex-col justify-center min-h-[90vh]">
                <div className="max-w-4xl">
                    {/* Terminal Header */}

                    <CommandLine />
                    <HeroHeadline />

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-6 mt-12">
                        <MagneticButton asChild size="lg" className="h-14 px-8 text-base bg-primary text-black hover:bg-primary/90 rounded-none border-l-4 border-white font-bold tracking-wide">
                            <Link href="#contact">
                                Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </MagneticButton>
                        <MagneticButton
                            asChild
                            variant="cyber"
                            size="lg"
                            className="h-14 px-8 text-base rounded-none text-primary border-primary/50 hover:bg-primary/10"
                        >
                            <Link href="#projects">Explore Systems</Link>
                        </MagneticButton>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <AboutSection />

            {/* Services Section */}
            <ServicesSection />

            {/* Projects Section */}
            <BentoGrid />

            {/* Tech Pipeline */}
            <TechPipeline />

            {/* Contact Section */}
            <ContactSection />

            {/* Testimonials Section */}
            {/* <TestimonialsSection /> */}

            <div className="h-20" /> {/* Spacer */}
        </div>
    );
}
