import { Card } from "@/components/ui/card";
import { Quote, TrendingUp, Users, Target } from "lucide-react";
import sarahImage from "@/assets/member-sarah.jpg";
import davidImage from "@/assets/member-david.jpg";
import alexImage from "@/assets/member-alex.jpg";

const featuredStories = [
  {
    name: "Sarah Mitchell",
    title: "Tech Entrepreneur",
    company: "InnovateTech Solutions",
    image: sarahImage,
    beforeMetric: "$50K ARR",
    afterMetric: "$200K ARR",
    timeframe: "18 months",
    story: "I joined as a struggling startup founder with big dreams but limited connections. The mentorship and strategic partnerships I formed here didn't just grow my business—they transformed my entire approach to entrepreneurship.",
    keyWin: "Landed 3 major enterprise clients through community connections",
    icon: TrendingUp
  },
  {
    name: "David Rodriguez",
    title: "E-commerce Founder", 
    company: "EcoGoods Market",
    image: davidImage,
    beforeMetric: "Solo Founder",
    afterMetric: "Team of 12",
    timeframe: "2 years",
    story: "Building a sustainable e-commerce brand felt impossible alone. Through GD Power House, I found my co-founder, secured key partnerships, and learned scaling strategies that took my business from an idea to a thriving company.",
    keyWin: "Built strategic partnerships that increased sales by 250%",
    icon: Users
  },
  {
    name: "Alex Chen",
    title: "Service Business Owner",
    company: "Peak Performance Consulting",
    image: alexImage,
    beforeMetric: "Local Client Base",
    afterMetric: "International Reach",
    timeframe: "1 year",
    story: "The global network and diverse perspectives I gained here opened doors I never knew existed. What started as local consulting evolved into an international practice serving Fortune 500 companies.",
    keyWin: "Expanded to 3 new international markets through member referrals",
    icon: Target
  }
];

const FeaturedStories = () => {
  return (
    <section className="py-16 md:py-24 bg-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-6">Transformation Stories</h2>
          <p className="section-subheading max-w-3xl mx-auto">
            Real entrepreneurs, real growth, real impact. These are the stories that define our community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {featuredStories.map((story, index) => {
            const IconComponent = story.icon;
            return (
              <Card key={index} className="overflow-hidden hover-lift group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={story.image}
                    alt={`${story.name} - Success Story`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  {/* Growth Metrics */}
                  <div className="flex items-center justify-between mb-4 p-3 bg-accent rounded-lg">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Before</p>
                      <p className="font-semibold text-primary">{story.beforeMetric}</p>
                    </div>
                    <IconComponent className="h-5 w-5 text-secondary" />
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">After</p>
                      <p className="font-semibold text-secondary">{story.afterMetric}</p>
                    </div>
                  </div>
                  
                  {/* Timeframe */}
                  <div className="text-center mb-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      In just {story.timeframe}
                    </span>
                  </div>
                  
                  {/* Quote */}
                  <div className="relative mb-4">
                    <Quote className="h-6 w-6 text-secondary/30 absolute -top-2 -left-2" />
                    <p className="text-muted-foreground italic pl-6">
                      "{story.story}"
                    </p>
                  </div>
                  
                  {/* Key Win */}
                  <div className="bg-secondary/5 border-l-4 border-secondary pl-4 py-2 mb-4">
                    <p className="text-sm font-medium text-secondary">Key Achievement:</p>
                    <p className="text-sm text-foreground">{story.keyWin}</p>
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center">
                    <div>
                      <p className="font-semibold text-foreground">{story.name}</p>
                      <p className="text-sm text-muted-foreground">{story.title}</p>
                      <p className="text-sm text-muted-foreground">{story.company}</p>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        
        {/* Community Impact Summary */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 max-w-4xl mx-auto shadow-soft">
            <h3 className="text-2xl font-bold text-foreground mb-4">Stories Like These Happen Every Day</h3>
            <p className="text-muted-foreground mb-6">
              Join a community where transformation isn't just possible—it's inevitable.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-bold text-primary">85%</p>
                <p className="text-sm text-muted-foreground">Report significant business growth</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-secondary">92%</p>
                <p className="text-sm text-muted-foreground">Form lasting business partnerships</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">78%</p>
                <p className="text-sm text-muted-foreground">Achieve breakthrough moments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStories;