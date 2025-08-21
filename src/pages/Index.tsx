import Hero from "@/components/Hero";
import FeaturedStories from "@/components/FeaturedStories";
import Stats from "@/components/Stats";
import Journey from "@/components/Journey";
import Pillars from "@/components/Pillars";
import MemberStories from "@/components/MemberStories";
import StoriesByCategory from "@/components/StoriesByCategory";
import JoinUs from "@/components/JoinUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedStories />
      <Stats />
      <Journey />
      <Pillars />
      <MemberStories />
      <StoriesByCategory />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default Index;
