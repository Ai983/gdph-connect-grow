import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Instagram, Linkedin, Youtube, ExternalLink, Play, Heart, MessageCircle } from "lucide-react";

const socialContent = [
  {
    platform: "instagram",
    type: "post",
    image: "/api/placeholder/300/300",
    likes: "127",
    comments: "23",
    caption: "Amazing energy at our Chennai meetup! 🚀"
  },
  {
    platform: "linkedin",
    type: "article",
    image: "/api/placeholder/300/200",
    likes: "89",
    comments: "15",
    caption: "How to Scale Your Startup: Key Insights from Our Members"
  },
  {
    platform: "youtube",
    type: "video",
    image: "/api/placeholder/300/200",
    views: "2.1K",
    duration: "12:45",
    caption: "Entrepreneur Success Stories | GD Power House"
  },
  {
    platform: "instagram",
    type: "story",
    image: "/api/placeholder/300/400",
    likes: "45",
    comments: "8",
    caption: "Behind the scenes from our workshop series 📈"
  },
  {
    platform: "linkedin",
    type: "post",
    image: "/api/placeholder/300/200",
    likes: "156",
    comments: "32",
    caption: "Member Spotlight: Sarah's Journey to ₹10 Cr Revenue"
  },
  {
    platform: "youtube",
    type: "shorts",
    image: "/api/placeholder/300/400",
    views: "5.3K",
    duration: "0:58",
    caption: "60-Second Business Tip: Customer Retention Hack"
  }
];

const platformIcons = {
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube
};

const SocialGlimpse = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-hero text-foreground mb-6">Social Glimpse</h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto font-subheading mb-8">
            Live community vibes and entrepreneurial insights across our social channels
          </p>

          {/* Social Platform Links */}
          <div className="flex justify-center gap-6 mb-12">
            <Button 
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full px-6 py-3"
            >
              <Instagram className="h-5 w-5 mr-2" />
              Follow Us
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full px-6 py-3"
            >
              <Linkedin className="h-5 w-5 mr-2" />
              Connect
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-full px-6 py-3"
            >
              <Youtube className="h-5 w-5 mr-2" />
              Subscribe
            </Button>
          </div>
        </div>

        {/* Social Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {socialContent.map((content, index) => {
            const PlatformIcon = platformIcons[content.platform as keyof typeof platformIcons];
            
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden hover-lift border-0 shadow-soft cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Content Image */}
                <div className="relative aspect-square overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <PlatformIcon className="h-12 w-12 text-muted-foreground/50" />
                  </div>
                  
                  {/* Platform Indicator */}
                  <div className="absolute top-3 left-3">
                    <div className={`p-2 rounded-full ${
                      content.platform === 'instagram' ? 'bg-pink-500' :
                      content.platform === 'linkedin' ? 'bg-blue-600' :
                      'bg-red-600'
                    }`}>
                      <PlatformIcon className="h-4 w-4 text-white" />
                    </div>
                  </div>

                  {/* Video Play Button */}
                  {(content.platform === 'youtube') && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/70 rounded-full p-4 group-hover:scale-110 transition-transform">
                        <Play className="h-8 w-8 text-white fill-white" />
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white w-full">
                      <p className="text-sm font-medium line-clamp-2">{content.caption}</p>
                    </div>
                  </div>
                </div>

                {/* Engagement Stats */}
                <div className="absolute bottom-3 right-3 flex gap-2">
                  {content.likes && (
                    <div className="bg-black/70 rounded-full px-2 py-1 text-white text-xs flex items-center gap-1">
                      <Heart className="h-3 w-3" />
                      {content.likes}
                    </div>
                  )}
                  {content.views && (
                    <div className="bg-black/70 rounded-full px-2 py-1 text-white text-xs">
                      {content.views} views
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-orange-gradient hover:bg-secondary-light text-white px-8 py-4 text-lg font-semibold rounded-xl hover-lift shadow-orange"
          >
            View All Content
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialGlimpse;