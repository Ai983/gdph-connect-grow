import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { useState } from "react";
import memberAlex from "@/assets/member-alex.jpg";
import memberSarah from "@/assets/member-sarah.jpg";
import memberDavid from "@/assets/member-david.jpg";

const memberStories = [
  {
    id: 1,
    name: "Alex Sharma",
    industry: "Tech Startup",
    image: memberAlex,
    quote: "The peer accountability here pushed me to scale from 5 to 50 employees in just 8 months.",
    category: "Scale-up",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Chen",
    industry: "E-commerce",
    image: memberSarah,
    quote: "From struggling solopreneur to leading a team of 25. The community changed everything.",
    category: "Growth",
    rating: 5
  },
  {
    id: 3,
    name: "David Patel",
    industry: "SaaS",
    image: memberDavid,
    quote: "Found my co-founder here. We're now building the next unicorn together.",
    category: "Partnership",
    rating: 5
  },
  {
    id: 4,
    name: "Priya Gupta",
    industry: "Fintech",
    image: memberSarah, // Reusing for demo
    quote: "The structured learning approach helped me raise ₹50 Cr in Series A funding.",
    category: "Funding",
    rating: 5
  }
];

const MemberStoriesSnapshot = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % memberStories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + memberStories.length) % memberStories.length);
  };

  const visibleStories = [
    memberStories[currentIndex],
    memberStories[(currentIndex + 1) % memberStories.length],
    memberStories[(currentIndex + 2) % memberStories.length]
  ];

  return (
    <section className="py-24 bg-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-hero text-foreground mb-6">Member Stories Snapshot</h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto font-subheading">
            Real people, real transformations, real results from our community
          </p>
        </div>

        {/* Stories Carousel */}
        <div className="relative max-w-7xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleStories.map((story, index) => (
              <Card 
                key={story.id} 
                className="p-8 bg-card hover-lift animate-scale-in border-0 shadow-medium relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-secondary/20">
                  <Quote className="h-12 w-12" />
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-foreground mb-6 font-medium leading-relaxed">
                  "{story.quote}"
                </blockquote>

                {/* Member Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={story.image}
                    alt={`${story.name} - ${story.industry}`}
                    className="w-16 h-16 rounded-full object-cover border-2 border-secondary/20"
                  />
                  <div>
                    <h4 className="font-heading text-foreground text-lg">{story.name}</h4>
                    <p className="text-muted-foreground">{story.industry}</p>
                    <span className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium mt-1">
                      {story.category}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-2 border-primary hover:bg-primary hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-2 border-primary hover:bg-primary hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Read Full Stories CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 text-lg font-semibold rounded-xl"
          >
            Read Full Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MemberStoriesSnapshot;