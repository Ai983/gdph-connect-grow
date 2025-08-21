import { Calendar, Users, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const Journey = () => {
  const steps = [
    {
      icon: Calendar,
      step: "01",
      title: "Arrive Uncertain",
      description: "Many join us feeling isolated, overwhelmed by challenges, or unsure of their next steps in business.",
      action: "Your Starting Point"
    },
    {
      icon: Users,
      step: "02", 
      title: "Find Your Tribe",
      description: "Through authentic connections and shared experiences, you discover you're not alone in this journey.",
      action: "Connect Deeply"
    },
    {
      icon: Trophy,
      step: "03",
      title: "Transform Everything",
      description: "With new perspectives, partnerships, and confidence, your business and life take on new meaning.",
      action: "Experience Growth"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">The Emotional Journey</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Every entrepreneur's path to success follows a similar emotional arc. Here's how our community guides that transformation.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={step.step}
                className="relative group"
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 right-0 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary transform translate-x-full"></div>
                )}
                
                {/* Step Card */}
                <div className="bg-white border border-gray-100 rounded-2xl p-8 hover-lift group-hover:shadow-medium transition-all duration-300">
                  {/* Step Number */}
                  <div className="bg-hero-gradient text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-accent p-4 rounded-full group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                      <step.icon className="h-8 w-8 text-primary group-hover:text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Action Button */}
                    <Button 
                      variant="outline" 
                      className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      {step.action}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-section p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Where Are You on This Journey?
              </h3>
              <p className="text-muted-foreground mb-6">
                Whether you're just starting or ready to scale, our community meets you where you are.
              </p>
              <Button 
                size="lg"
                className="bg-orange-gradient hover:opacity-90 text-white px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Discover Your Path
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;