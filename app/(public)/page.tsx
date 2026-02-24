import HeroSection from "./_components/HeroSection";
import FeaturesSection from "./_components/FeaturesSection";
import PainSection from "./_components/PainSection";
import TransformationSection from "./_components/TransformationSection";
import ModulesSection from "./_components/ModulesSection";
import SocialProofSection from "./_components/SocialProofSection";
import AboutSection from "./_components/AboutSection";
import FinalCTASection from "./_components/FinalCTASection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <PainSection />
      <TransformationSection />
      <div id="modules">
        <ModulesSection />
      </div>
      <SocialProofSection />
      <AboutSection />
      <FinalCTASection />
    </main>
  );
}
