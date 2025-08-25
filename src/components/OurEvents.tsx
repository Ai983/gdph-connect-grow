import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Mock event data - will be replaced with actual photos via GitHub
const events = [
  {
    id: 1,
    title: "Morning Session – Jaipur",
    image: "/placeholder.svg",
    description: "Weekly power-packed morning sessions"
  },
  {
    id: 2,
    title: "Diwali Celebration",
    image: "/placeholder.svg", 
    description: "Festival of lights with our powermates"
  },
  {
    id: 3,
    title: "Growth Summit 2023",
    image: "/placeholder.svg",
    description: "Annual gathering of entrepreneurs"
  },
  {
    id: 4,
    title: "Holi Festival",
    image: "/placeholder.svg",
    description: "Colors of joy and celebration"
  },
  {
    id: 5,
    title: "Business Retreat",
    image: "/placeholder.svg",
    description: "Strategic planning and bonding"
  }
];

const OurEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 4000); // Slow timing for easy reading

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-hero text-primary mb-6">
            Our Events
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Three years of connection, growth, and unforgettable moments
          </p>
        </div>

        {/* Event Carousel */}
        <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Background Image */}
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent"></div>
              
              {/* Event Content */}
              <div className="absolute bottom-0 left-0 right-0 p-12">
                <div 
                  className={`transform transition-all duration-1000 ease-in-out ${
                    index === currentIndex 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`}
                >
                  <h3 className="text-4xl md:text-5xl font-heading text-white mb-4">
                    {event.title}
                  </h3>
                  <p className="text-xl text-white/90 mb-8 max-w-2xl">
                    {event.description}
                  </p>
                  <Button 
                    size="lg"
                    className="bg-secondary hover:bg-secondary/90 text-white"
                  >
                    Explore Events
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}

          {/* Progress Indicators */}
          <div className="absolute bottom-6 right-6 flex space-x-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-secondary w-8' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Event Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">150+</div>
            <div className="text-muted-foreground">Events Hosted</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">3</div>
            <div className="text-muted-foreground">Years of Growth</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">₹800Cr+</div>
            <div className="text-muted-foreground">Combined Turnover</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurEvents;