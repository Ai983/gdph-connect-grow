import { Button } from "@/components/ui/button";
import { Search, Users, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: 1,
    title: "Discover",
    description: "Join a meetup or explore stories from entrepreneurs who've transformed their businesses.",
    action: "Explore Stories",
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    icon: Users,
    step: 2,
    title: "Engage",
    description: "Hear, share & learn from real experiences. Connect with peers who push you forward.",
    action: "Join Conversations", 
    color: "bg-secondary/10 text-secondary"
  },
  {
    icon: Rocket,
    step: 3,
    title: "Apply",
    description: "Submit your interest and start your journey toward exponential business growth.",
    action: "Start Journey",
    color: "bg-green-500/10 text-green-600"
  }
];

const Journey = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-hero text-foreground mb-6">How to Join</h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto font-subheading">
            Your simplified 3-step journey to joining the next wave of entrepreneurs
          </p>
        </div>

        {/* Horizontal Journey Steps */}
        <div className="relative max-w-6xl mx-auto mb-20">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="flex justify-between items-center relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-4 border-dashed border-primary/30"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative bg-card p-8 rounded-3xl shadow-medium text-center hover-lift animate-slide-in border border-border"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Number Circle */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold shadow-medium">
                    {step.step}
                  </div>
                </div>
                
                {/* Icon */}
                <div className={`${step.color} p-6 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 mt-8`}>
                  <step.icon className="h-10 w-10" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-heading text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">{step.description}</p>
                
                {/* Action Button */}
                <Button 
                  variant="outline" 
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-3 rounded-xl"
                >
                  {step.action}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="bg-primary-deep p-16 rounded-3xl text-center">
          <h3 className="text-4xl md:text-5xl font-hero text-white mb-6">
            Ready to Join the Next Wave of Entrepreneurs?
          </h3>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto font-subheading">
            Transform your business trajectory with peer accountability, structured learning, and exponential growth mindset.
          </p>
          <Button 
            size="lg" 
            className="bg-orange-gradient hover:bg-secondary-light text-white px-12 py-6 text-xl font-bold rounded-2xl hover-lift shadow-orange"
          >
            Apply Now
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Journey;