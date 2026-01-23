import { useState, useEffect } from "react";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { PainSection } from "@/components/sections/PainSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Results } from "@/components/sections/Results";
import { Methodology } from "@/components/sections/Methodology";
import { Features } from "@/components/sections/Features";
import { Access } from "@/components/sections/Access";
import { Footer } from "@/components/sections/Footer";

export default function Index() {
  const [activeSection, setActiveSection] = useState<string>("");

  // Track active section for header highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "pain", "how", "methodology", "results", "features", "access"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header scrollToSection={scrollToSection} activeSection={activeSection} />
      <main>
        <Hero scrollToSection={scrollToSection} />
        <PainSection />
        <HowItWorks />
        <Methodology />
        <Results />
        <Features />
        <Access />
      </main>
      <Footer />
    </div>
  );
}
