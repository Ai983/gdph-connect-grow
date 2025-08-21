import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-entrepreneurs.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Entrepreneurs networking and collaborating"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-5xl mx-auto animate-fade-in-up">
          {/* Main Headline */}
          <h1 className="hero-headline mb-6">
            Connect.
            <br />
            <span className="text-secondary">Learn.</span>
            <br />
            Grow.
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-medium opacity-95">
            Join GD Power House, where ambitious entrepreneurs build lasting connections, 
            learn from industry experts, and accelerate their business growth.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary-light text-white px-8 py-4 text-lg font-semibold rounded-xl hover-lift"
            >
              Join Our Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-xl"
            >
              Learn More
            </Button>
          </div>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center animate-slide-in">
              <div className="bg-white/20 p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Connect</h3>
              <p className="text-white/90">Build meaningful relationships with like-minded entrepreneurs</p>
            </div>
            
            <div className="flex flex-col items-center text-center animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white/20 p-4 rounded-full mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Learn</h3>
              <p className="text-white/90">Access exclusive workshops and mentorship opportunities</p>
            </div>
            
            <div className="flex flex-col items-center text-center animate-slide-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white/20 p-4 rounded-full mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Grow</h3>
              <p className="text-white/90">Scale your business with proven strategies and support</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;