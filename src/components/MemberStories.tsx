import { Quote, Star } from "lucide-react";
import sarahImage from "@/assets/member-sarah.jpg";
import davidImage from "@/assets/member-david.jpg";
import alexImage from "@/assets/member-alex.jpg";

const MemberStories = () => {
  const stories = [
    {
      name: "Sarah Chen",
      title: "Tech Startup Founder",
      company: "InnovateTech Solutions",
      image: sarahImage,
      quote: "GD Power House transformed my approach to networking. The connections I've made here led to a $2M funding round and partnerships that are driving our growth.",
      growth: "300% revenue increase",
      rating: 5
    },
    {
      name: "David Rodriguez",
      title: "E-commerce Entrepreneur", 
      company: "EcoMarket Pro",
      image: davidImage,
      quote: "The mentorship and learning opportunities at GD Power House are unmatched. I've gained insights that helped me scale from $100K to $1M in annual revenue.",
      growth: "1000% revenue growth",
      rating: 5
    },
    {
      name: "Alex Thompson",
      title: "Digital Marketing Agency Owner",
      company: "Growth Catalyst Digital",
      image: alexImage,
      quote: "Being part of this community opened doors I never knew existed. The collaborative environment and shared knowledge accelerated my business beyond my expectations.",
      growth: "50+ new clients",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">Member Success Stories</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Real entrepreneurs, real results. Discover how our community has helped 
            members transform their businesses and achieve their goals.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <div 
                key={story.name}
                className="group bg-white rounded-3xl p-8 hover-lift shadow-soft hover:shadow-medium transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-6">
                  <Quote className="h-8 w-8 text-secondary opacity-60" />
                  <div className="flex space-x-1">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>
                
                {/* Quote */}
                <blockquote className="text-lg text-foreground leading-relaxed mb-6 italic">
                  "{story.quote}"
                </blockquote>
                
                {/* Growth Metric */}
                <div className="bg-accent p-4 rounded-xl mb-6">
                  <div className="text-2xl font-bold text-secondary">{story.growth}</div>
                  <div className="text-sm text-muted-foreground">Since joining</div>
                </div>
                
                {/* Author Info */}
                <div className="flex items-center">
                  <div className="relative">
                    <img
                      src={story.image}
                      alt={`${story.name} - ${story.title}`}
                      className="w-16 h-16 rounded-full object-cover border-3 border-white shadow-soft"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-foreground">{story.name}</div>
                    <div className="text-sm text-muted-foreground">{story.title}</div>
                    <div className="text-sm font-medium text-secondary">{story.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Stats */}
          <div className="mt-16 bg-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Join Thousands of Successful Entrepreneurs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Recommend Us</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <div className="text-muted-foreground">Report Growth</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Success Stories</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberStories;