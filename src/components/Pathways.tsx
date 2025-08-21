import { Rocket, Target, Crown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pathways = () => {
  const pathways = [
    {
      icon: Rocket,
      title: "Startup Pathway",
      level: "For New Entrepreneurs",
      description: "Perfect for those just starting their entrepreneurial journey. Get foundational knowledge, basic networking, and essential startup resources.",
      features: [
        "Startup fundamentals workshops",
        "Peer mentorship circles",
        "Basic business plan guidance",
        "Local networking events",
        "Resource library access"
      ],
      price: "Free",
      cta: "Start Free",
      popular: false,
      gradient: "from-primary/10 to-primary/5"
    },
    {
      icon: Target,
      title: "Growth Pathway",
      level: "For Scaling Businesses",
      description: "Designed for entrepreneurs ready to scale. Advanced strategies, expert mentorship, and exclusive opportunities to accelerate growth.",
      features: [
        "Advanced growth strategies",
        "Expert mentor matching",
        "Investor connection events",
        "Industry-specific workshops",
        "Priority event access",
        "Partnership opportunities"
      ],
      price: "$99/month",
      cta: "Join Growth",
      popular: true,
      gradient: "from-secondary/10 to-secondary/5"
    },
    {
      icon: Crown,
      title: "Elite Pathway",
      level: "For Established Leaders",
      description: "Exclusive tier for successful entrepreneurs. Private masterminds, C-level networking, and strategic advisory services.",
      features: [
        "Private mastermind groups",
        "C-level exclusive events",
        "Strategic advisory board",
        "Investment opportunities",
        "Global networking access",
        "Personal brand development",
        "Exit strategy consulting"
      ],
      price: "$299/month",
      cta: "Apply for Elite",
      popular: false,
      gradient: "from-primary/10 to-primary/5"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">Choose Your Pathway</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Tailored experiences for every stage of your entrepreneurial journey. 
            Find the perfect fit for your current needs and future goals.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pathways.map((pathway, index) => (
              <div 
                key={pathway.title}
                className={`relative group bg-gradient-to-br ${pathway.gradient} border rounded-3xl p-8 hover-lift transition-all duration-300 ${
                  pathway.popular 
                    ? 'border-secondary shadow-orange scale-105' 
                    : 'border-gray-200 shadow-soft hover:shadow-medium'
                }`}
              >
                {/* Popular Badge */}
                {pathway.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-orange-gradient text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl mb-6 ${
                  pathway.popular
                    ? 'bg-secondary/20 text-secondary'
                    : 'bg-primary/20 text-primary'
                }`}>
                  <pathway.icon className="h-8 w-8" />
                </div>
                
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {pathway.title}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground mb-4">
                    {pathway.level}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {pathway.description}
                  </p>
                </div>
                
                {/* Price */}
                <div className="mb-6">
                  <div className={`text-4xl font-bold ${
                    pathway.popular ? 'text-secondary' : 'text-primary'
                  }`}>
                    {pathway.price}
                  </div>
                  {pathway.price !== "Free" && (
                    <div className="text-sm text-muted-foreground">
                      Billed monthly, cancel anytime
                    </div>
                  )}
                </div>
                
                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pathway.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-foreground">
                      <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                        pathway.popular ? 'bg-secondary' : 'bg-primary'
                      }`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <Button 
                  className={`w-full py-3 text-lg font-semibold rounded-xl ${
                    pathway.popular
                      ? 'bg-orange-gradient hover:opacity-90 text-white'
                      : 'bg-hero-gradient hover:opacity-90 text-white'
                  }`}
                >
                  {pathway.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                {/* Bottom Note */}
                <div className="text-center mt-4">
                  <p className="text-xs text-muted-foreground">
                    {pathway.price === "Free" 
                      ? "No credit card required" 
                      : "30-day money-back guarantee"
                    }
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-section p-8 rounded-2xl max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Not Sure Which Pathway is Right for You?
              </h3>
              <p className="text-muted-foreground mb-6">
                Schedule a free consultation with our team to discuss your goals and find the perfect pathway for your entrepreneurial journey.
              </p>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3"
              >
                Schedule Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pathways;