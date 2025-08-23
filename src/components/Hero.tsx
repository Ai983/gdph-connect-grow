import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Users, Rocket } from "lucide-react";
import heroImage from "@/assets/hero-background.jpeg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="High-energy entrepreneurs collaborating and networking" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/75"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-6xl mx-auto animate-fade-in-up">
          {/* Main Headline - Bold & Concise */}
          <h1 className="md:text-8xl font-hero leading-tight mb-6 text-white my-0 mx-0 px-0 text-5xl">
            Empowering Businesses
            <br />
            <span className="text-secondary font-hero">10× Over.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-2xl md:text-3xl mb-8 max-w-4xl mx-auto font-subheading text-white/95">
            Peer‑dreamers. Mentor‑builders. Growth‑catalysts.
          </p>
          
          {/* Primary CTA - Bright Orange */}
          <div className="mb-16 rounded-sm">
            <Button size="lg" className="bg-orange-gradient hover:bg-secondary-light text-white text-xl font-bold rounded-2xl hover-lift shadow-orange border-0 px-0 py-[10px]">
              Start Your Growth Journey
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </div>
          
          {/* Value Proposition - Three Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center animate-slide-in bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover-lift">
              <div className="bg-secondary/20 p-6 rounded-full mb-6">
                <Rocket className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-heading mb-4 text-white">10× Growth Mindset</h3>
              <p className="text-white/90 text-lg">Transform your approach with exponential thinking</p>
            </div>
            
            <div className="flex flex-col items-center text-center animate-slide-in bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover-lift" style={{
            animationDelay: '0.2s'
          }}>
              <div className="bg-secondary/20 p-6 rounded-full mb-6">
                <Users className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-heading mb-4 text-white">Peer Accountability</h3>
              <p className="text-white/90 text-lg">Connect with driven entrepreneurs who push you forward</p>
            </div>
            
            <div className="flex flex-col items-center text-center animate-slide-in bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover-lift" style={{
            animationDelay: '0.4s'
          }}>
              <div className="bg-secondary/20 p-6 rounded-full mb-6">
                <Zap className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-2xl font-heading mb-4 text-white">Structured Learning</h3>
              <p className="text-white/90 text-lg">Proven frameworks that accelerate business growth</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-secondary/60 rounded-full flex justify-center cursor-pointer hover:border-secondary transition-colors">
          <div className="w-2 h-4 bg-secondary/80 rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default Hero;