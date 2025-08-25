import { Users, Target, Handshake, Clock, Heart, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const OurStory = () => {
  const milestones = [
    { year: "2018", title: "The Beginning", description: "Founded by three ambitious entrepreneurs who saw the need for genuine connection in business" },
    { year: "2019", title: "First Chapter", description: "Launched our first local chapter with 25 passionate members" },
    { year: "2020", title: "Digital Innovation", description: "Pivoted to virtual events during the pandemic, reaching global audiences" },
    { year: "2022", title: "Expansion", description: "Opened 15 chapters across 8 countries" },
    { year: "2024", title: "Today", description: "A thriving community of 2,500+ entrepreneurs making real impact" },
  ];

  const leaders = [
    {
      name: "Sarah Chen",
      role: "Founder & CEO",
      bio: "Former startup founder with 3 successful exits. Passionate about building authentic entrepreneurial communities.",
      image: "/src/assets/member-sarah.jpg"
    },
    {
      name: "David Rodriguez",
      role: "Head of Community",
      bio: "Ex-McKinsey consultant turned community builder. Believes in the power of peer learning and mentorship.",
      image: "/src/assets/member-david.jpg"
    },
    {
      name: "Alex Thompson",
      role: "Head of Programs",
      bio: "Serial entrepreneur and investor with expertise in scaling businesses and building strategic partnerships.",
      image: "/src/assets/member-alex.jpg"
    }
  ];

  const partnerships = [
    { name: "TechStars", type: "Accelerator Partner", description: "Providing mentorship and investment opportunities" },
    { name: "Stanford Graduate School", type: "Educational Partner", description: "Executive education and research collaboration" },
    { name: "Microsoft for Startups", type: "Technology Partner", description: "Cloud credits and technical support for members" },
    { name: "Goldman Sachs 10KSB", type: "Financial Partner", description: "Business education and capital access programs" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-deep text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-hero mb-6 animate-fade-in-up">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl font-subheading mb-8 opacity-90">
              From three friends with a vision to a global community of game-changers
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Founded in 2018</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>2,500+ Members</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                <span>15 Global Chapters</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <h2 className="text-2xl font-heading">Our Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To create authentic connections between ambitious entrepreneurs, fostering an environment where 
                  innovation thrives, knowledge flows freely, and meaningful relationships drive business success 
                  and personal growth.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h2 className="text-2xl font-heading">Our Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  A world where every entrepreneur has access to a supportive community that accelerates their 
                  journey from idea to impact, creating a global network of leaders who lift each other up and 
                  drive positive change.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to global impact - the milestones that shaped us
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
              
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <Card className="p-6 hover:shadow-medium transition-all duration-300 hover:scale-105">
                      <CardContent className="p-0">
                        <div className="text-primary font-bold text-lg mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-heading mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the visionaries driving our community forward
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {leaders.map((leader) => (
              <Card key={leader.name} className="overflow-hidden hover:shadow-medium transition-all duration-300 hover:scale-105">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <Users className="w-24 h-24 text-primary/40" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading mb-1">{leader.name}</h3>
                  <p className="text-primary font-medium mb-3">{leader.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Partnerships */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading mb-4">Strategic Partnerships</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Collaborating with industry leaders to amplify our impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {partnerships.map((partner) => (
              <Card key={partner.name} className="p-6 hover:shadow-medium transition-all duration-300">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Handshake className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading mb-2">{partner.name}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{partner.type}</p>
                  <p className="text-xs text-muted-foreground">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading mb-6">
            Ready to Be Part of Our Story?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of entrepreneurs who are already writing their success stories with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Discover Our Community
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Connect With Us Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;