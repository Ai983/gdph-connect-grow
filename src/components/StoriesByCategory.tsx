import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, TrendingUp, Trophy, Globe } from "lucide-react";

const storyCategories = [
  {
    icon: Rocket,
    title: "Startup Stories",
    description: "From idea to launch",
    tagline: "The first steps matter most",
    stories: [
      {
        name: "Maya Patel",
        achievement: "Went from concept to $100K in first year",
        quote: "The community helped me avoid the mistakes most startups make."
      },
      {
        name: "James Wilson", 
        achievement: "Secured seed funding through network connections",
        quote: "I found my co-founder and first investor here."
      }
    ],
    gradient: "from-blue-500 to-purple-600",
    bgClass: "bg-gradient-to-br from-blue-50 to-purple-50"
  },
  {
    icon: TrendingUp,
    title: "Scale-up Stories",
    description: "Breaking through growth barriers",
    tagline: "When exponential growth becomes reality",
    stories: [
      {
        name: "David Rodriguez",
        achievement: "Scaled from 2 to 25 employees in 18 months",
        quote: "Learning to lead at scale was the biggest challenge I overcame here."
      },
      {
        name: "Lisa Zhang",
        achievement: "Expanded to 5 new markets internationally",
        quote: "The global perspective I gained here changed everything."
      }
    ],
    gradient: "from-green-500 to-emerald-600", 
    bgClass: "bg-gradient-to-br from-green-50 to-emerald-50"
  },
  {
    icon: Trophy,
    title: "Success Stories",
    description: "Major milestones achieved",
    tagline: "When dreams become reality",
    stories: [
      {
        name: "Sarah Mitchell",
        achievement: "Achieved life-changing exit after 3 years",
        quote: "The strategies I learned here made all the difference in my exit."
      },
      {
        name: "Michael Torres",
        achievement: "Built industry-leading brand worth $10M+",
        quote: "From unknown startup to industry leader in record time."
      }
    ],
    gradient: "from-orange-500 to-red-600",
    bgClass: "bg-gradient-to-br from-orange-50 to-red-50"
  },
  {
    icon: Globe,
    title: "Impact Stories", 
    description: "Changing the world",
    tagline: "Business as a force for good",
    stories: [
      {
        name: "Elena Rodriguez",
        achievement: "Created 500+ jobs in underserved communities",
        quote: "Success isn't just about profit—it's about purpose."
      },
      {
        name: "Ahmed Hassan",
        achievement: "Launched sustainable solution used globally",
        quote: "The community inspired me to think bigger than just business."
      }
    ],
    gradient: "from-purple-500 to-pink-600",
    bgClass: "bg-gradient-to-br from-purple-50 to-pink-50"
  }
];

const StoriesByCategory = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-6">Stories by Journey Stage</h2>
          <p className="section-subheading max-w-3xl mx-auto">
            No matter where you are in your entrepreneurial journey, others have walked this path before you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {storyCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className={`overflow-hidden hover-lift group ${category.bgClass}`}>
                <div className="p-8">
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${category.gradient} mr-4`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                      <p className="text-muted-foreground text-sm">{category.description}</p>
                    </div>
                  </div>
                  
                  {/* Tagline */}
                  <p className="text-lg font-medium text-foreground mb-6 italic">
                    "{category.tagline}"
                  </p>
                  
                  {/* Featured Stories */}
                  <div className="space-y-4 mb-6">
                    {category.stories.map((story, storyIndex) => (
                      <div key={storyIndex} className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
                        <p className="font-semibold text-sm text-primary mb-1">{story.name}</p>
                        <p className="text-sm text-foreground mb-2">{story.achievement}</p>
                        <p className="text-xs text-muted-foreground italic">"{story.quote}"</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* View More Button */}
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                  >
                    Explore More {category.title}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-section rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-muted-foreground mb-6">
              Join entrepreneurs at every stage of the journey and discover what's possible when you're not going it alone.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary-light text-white px-8 py-3 rounded-xl hover-lift">
              Begin Your Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesByCategory;