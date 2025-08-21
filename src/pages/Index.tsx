import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import MemberStoriesSnapshot from "@/components/MemberStoriesSnapshot";
import Journey from "@/components/Journey";
import SocialGlimpse from "@/components/SocialGlimpse";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <MemberStoriesSnapshot />
      <Journey />
      <SocialGlimpse />
      <Footer />
    </div>
  );
};

export default Index;
