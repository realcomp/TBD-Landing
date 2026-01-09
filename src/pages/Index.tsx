import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import PainPoints from "@/components/sections/PainPoints";
import Timeline from "@/components/sections/Timeline";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Method from "@/components/sections/Method";
import Features from "@/components/sections/Features";
import UseCases from "@/components/sections/UseCases";
import TargetAudience from "@/components/sections/TargetAudience";
import Pricing from "@/components/sections/Pricing";
import WaitlistForm from "@/components/sections/WaitlistForm";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <PainPoints />
        <Timeline />
        <BeforeAfter />
        <Method />
        <Features />
        <UseCases />
        <TargetAudience />
        <Pricing />
        <div id="waitlist">
          <WaitlistForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
