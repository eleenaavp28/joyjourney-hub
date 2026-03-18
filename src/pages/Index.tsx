import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import InsightSection from "@/components/InsightSection";
import StrategySection from "@/components/StrategySection";
import TacticsSection from "@/components/TacticsSection";
import WeBuiltThisSection from "@/components/WeBuiltThisSection";
import TimelineSection from "@/components/TimelineSection";
import KPIsSection from "@/components/KPIsSection";
import SignupSection from "@/components/SignupSection";
import FooterSection from "@/components/FooterSection";

const XDivider = () => (
  <div className="x-divider">
    <span className="x-mark">✕</span>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="grain-overlay" />
      <Navbar />
      <HeroSection />
      <XDivider />
      <InsightSection />
      <XDivider />
      <StrategySection />
      <XDivider />
      <TacticsSection />
      <XDivider />
      <WeBuiltThisSection />
      <XDivider />
      <TimelineSection />
      <XDivider />
      <KPIsSection />
      <XDivider />
      <SignupSection />
      <FooterSection />
    </div>
  );
};

export default Index;
