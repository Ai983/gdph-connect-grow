import { Users, BookOpen, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pillars = () => {
  const pillars = [
    {
      icon: Users,
      title: "Connect",
      subtitle: "Build Your Network",
      description: "Join a vibrant community of ambitious entrepreneurs. Attend local meetups, participate in online forums, and build meaningful relationships that last a lifetime.",
      features: [
        "Monthly networking events",
        "Industry-specific meetups", 
        "Online community platform",
        "Mentorship matching"
      ],
      color: "primary"
    },
    {
      icon: BookOpen,
      title: "Learn",
      subtitle: "Expand Your Knowledge",
      description: "Access exclusive workshops, masterclasses, and resources designed by successful entrepreneurs. Stay ahead of trends and develop the skills you need to succeed.",
      features: [
        "Expert-led workshops",
        "Digital resource library",
        "Guest speaker sessions",
        "Skill development programs"
      ],
      color: "secondary"
    },
    {
      icon: TrendingUp,
      title: "Grow",
      subtitle: "Scale Your Business",
      description: "Leverage your network and knowledge to accelerate your business growth. Access funding opportunities, partnerships, and strategic guidance from industry leaders.",
      features: [
        "Business acceleration program",
        "Investor connections",
        "Partnership opportunities",
        "Growth strategy consultations"
      ],
      color: "primary"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">Our Core Pillars</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Everything we do is built around three fundamental pillars that drive entrepreneurial success.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div 
                key={pillar.title}
                className="group relative overflow-hidden bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 hover-lift border border-gray-100"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <pillar.icon className="w-full h-full" />
                </div>
                
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl mb-6 ${
                  pillar.color === 'primary' 
                    ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white' 
                    : 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white'
                } transition-all duration-300`}>
                  <pillar.icon className="h-8 w-8" />
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-lg text-secondary font-semibold mb-4">
                    {pillar.subtitle}
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {pillar.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {pillar.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA */}
                  <Button 
                    variant="ghost" 
                    className={`group/btn p-0 h-auto font-semibold ${
                      pillar.color === 'primary' ? 'text-primary hover:text-primary-deep' : 'text-secondary hover:text-secondary'
                    }`}
                  >
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Button>
                </div>
                
                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-3xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  pillar.color === 'primary' ? 'border-primary/20' : 'border-secondary/20'
                }`}></div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-hero-gradient text-white rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Experience All Three Pillars
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Join our comprehensive program and unlock your full entrepreneurial potential.
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pillars;