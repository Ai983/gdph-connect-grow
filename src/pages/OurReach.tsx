import { MapPin, Globe, Users, Building, ArrowRight, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const OurReach = () => {
  const globalStats = [
    { number: "15", label: "Active Chapters", icon: Building },
    { number: "8", label: "Countries", icon: Globe },
    { number: "2,500+", label: "Members", icon: Users },
    { number: "150+", label: "Monthly Events", icon: Calendar },
  ];

  const chapters = [
    {
      city: "New York",
      country: "USA",
      members: 425,
      founded: "2018",
      highlights: ["Monthly investor pitch nights", "Fintech focus group", "Women in tech initiative"],
      status: "Flagship Chapter",
      nextEvent: "Startup Showcase - Dec 15"
    },
    {
      city: "London",
      country: "UK",
      members: 380,
      founded: "2019",
      highlights: ["European expansion network", "Sustainable business focus", "Cross-border partnerships"],
      status: "Regional Hub",
      nextEvent: "Scale-up Summit - Dec 18"
    },
    {
      city: "Singapore",
      country: "Singapore",
      members: 290,
      founded: "2020",
      highlights: ["Asian market entry", "Tech innovation labs", "Government partnerships"],
      status: "Innovation Center",
      nextEvent: "AI & Future Business - Dec 20"
    },
    {
      city: "Toronto",
      country: "Canada",
      members: 245,
      founded: "2021",
      highlights: ["Maple leaf mentorship", "Healthcare innovation", "Clean tech ventures"],
      status: "Growing Community",
      nextEvent: "Venture Capital Night - Dec 22"
    },
    {
      city: "Berlin",
      country: "Germany",
      members: 215,
      founded: "2021",
      highlights: ["European startup hub", "Deep tech focus", "Sustainability leaders"],
      status: "Tech Innovation",
      nextEvent: "DeepTech Demo Day - Dec 25"
    },
    {
      city: "Sydney",
      country: "Australia",
      members: 180,
      founded: "2022",
      highlights: ["Pacific region network", "Mining tech innovation", "Export opportunities"],
      status: "Pacific Gateway",
      nextEvent: "Export Success Stories - Jan 8"
    }
  ];

  const upcomingChapters = [
    { city: "Dubai", country: "UAE", launchDate: "Q1 2024", focus: "Middle East hub" },
    { city: "São Paulo", country: "Brazil", launchDate: "Q2 2024", focus: "Latin American market" },
    { city: "Tokyo", country: "Japan", launchDate: "Q3 2024", focus: "Asian innovation" },
    { city: "Mumbai", country: "India", launchDate: "Q4 2024", focus: "South Asian growth" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Flagship Chapter": return "bg-primary text-primary-foreground";
      case "Regional Hub": return "bg-secondary text-secondary-foreground";
      case "Innovation Center": return "bg-accent text-accent-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-deep text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-hero mb-6 animate-fade-in-up">
              Our Global Reach
            </h1>
            <p className="text-xl md:text-2xl font-subheading mb-8 opacity-90">
              Connecting entrepreneurs across continents, cultures, and industries
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {globalStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.number}</div>
                  <div className="text-sm opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading mb-4">Global Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our chapters don't just host events—they catalyze ecosystems, drive innovation, 
              and create lasting change in their communities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 hover:shadow-medium transition-all duration-300">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading mb-3">Cross-Border Collaboration</h3>
                <p className="text-muted-foreground">
                  Facilitating international partnerships, joint ventures, and knowledge exchange 
                  between entrepreneurs across different markets and time zones.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-medium transition-all duration-300">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-heading mb-3">Local Ecosystem Building</h3>
                <p className="text-muted-foreground">
                  Each chapter strengthens its local startup ecosystem through mentorship programs, 
                  investor connections, and strategic partnerships with government and institutions.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-medium transition-all duration-300">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-heading mb-3">Diverse Community</h3>
                <p className="text-muted-foreground">
                  Our global network represents 50+ industries, with 40% women entrepreneurs 
                  and members from over 80 countries creating rich, diverse perspectives.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Active Chapters */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading mb-4">Our Chapters</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each chapter has its own personality, focus areas, and community spirit
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {chapters.map((chapter) => (
              <Card key={`${chapter.city}-${chapter.country}`} className="overflow-hidden hover:shadow-medium transition-all duration-300 hover:scale-105">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-heading mb-1">{chapter.city}</h3>
                      <p className="text-muted-foreground flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {chapter.country}
                      </p>
                    </div>
                    <Badge className={getStatusColor(chapter.status)}>
                      {chapter.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Members</span>
                      <p className="font-medium">{chapter.members}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Founded</span>
                      <p className="font-medium">{chapter.founded}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Chapter Highlights</h4>
                    <ul className="space-y-1">
                      {chapter.highlights.map((highlight, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                          <ArrowRight className="w-3 h-3 text-primary" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-2">Next Event</p>
                    <p className="font-medium text-primary">{chapter.nextEvent}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Chapters */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading mb-4">Coming Soon</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expanding our global footprint to serve entrepreneurs everywhere
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {upcomingChapters.map((chapter) => (
              <Card key={`${chapter.city}-upcoming`} className="p-6 border-dashed border-2 hover:shadow-medium transition-all duration-300">
                <CardContent className="p-0 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading mb-1">{chapter.city}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{chapter.country}</p>
                  <Badge variant="outline" className="mb-3">{chapter.launchDate}</Badge>
                  <p className="text-xs text-muted-foreground">{chapter.focus}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg">
              Bring GD Power House to Your City
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-accent text-secondary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading mb-6">
            Find Your Local Chapter
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Connect with entrepreneurs in your city or explore opportunities in new markets
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Explore Chapters
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
              Start a New Chapter
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurReach;