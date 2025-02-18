import AboutSection from "@/components/home/AboutSection";
import HeroSection from "@/components/home/HeroSection";
import PerformanceTickets from "@/components/home/PerformanceTickets";

export default function Home() {
  return (
    <div className="max-w-screen overflow-hidden w-full mb-20">
      <HeroSection />
      <AboutSection />
      <PerformanceTickets />
    </div>
  );
}
