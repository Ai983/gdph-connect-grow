import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Journey from "@/components/Journey";
import Pillars from "@/components/Pillars";
import MemberStories from "@/components/MemberStories";
import Pathways from "@/components/Pathways";
import JoinUs from "@/components/JoinUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <Journey />
      <Pillars />
      <MemberStories />
      <Pathways />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default Index;
