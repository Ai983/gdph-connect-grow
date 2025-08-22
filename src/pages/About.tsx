import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Lightbulb, HandHeart, TrendingUp, Calendar, MapPin, Crown } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: HandHeart,
      title: "Collaboration",
      description: "Together we achieve more than we ever could alone"
    },
    {
      icon: TrendingUp,
      title: "Transformation",
      description: "Continuous evolution and growth mindset"
    },
    {
      icon: Target,
      title: "Implementation",
      description: "Turning ideas into actionable results"
    },
    {
      icon: Users,
      title: "Peer Support",
      description: "Accountability partners for your journey"
    },
    {
      icon: Lightbulb,
      title: "Growth",
      description: "Exponential thinking for exponential results"
    }
  ];

  const timeline = [
    {
      year: "2021",
      title: "Launch",
      description: "Founded as a peer-to-peer entrepreneurial hub with vision to transform businesses",
      icon: Calendar
    },
    {
      year: "2022", 
      title: "Expansion",
      description: "Grew our network and refined our proven frameworks for business acceleration",
      icon: MapPin
    },
    {
      year: "2023",
      title: "Growth & Celebrations",
      description: "Achieved ₹500 Cr+ combined turnover and celebrated milestones together",
      icon: Crown
    }
  ];

  const powermates = [
    {
      name: "Saurabh Khandelwal",
      role: "Co-Founder & Visionary",
      bio: "Leading entrepreneur with 15+ years experience in scaling businesses and mentoring growth-focused leaders.",
      image: "/placeholder.svg"
    },
    {
      name: "Narendra Surana", 
      role: "Co-Founder & Strategy",
      bio: "Strategic business architect specializing in operational excellence and sustainable growth frameworks.",
      image: "/placeholder.svg"
    },
    {
      name: "Mohit Gupta",
      role: "Co-Founder & Innovation",
      bio: "Innovation catalyst focused on technology integration and disruptive business model development.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-hero text-primary mb-8">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Empowering entrepreneurs to achieve 10× growth through peer learning, 
              accountability, and proven frameworks since 2021.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading text-primary mb-8">
                Who We Are
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Founded in 2021, GD Power House emerged as a revolutionary peer-to-peer 
                  entrepreneurial hub with a bold mission: to transform how businesses grow 
                  and entrepreneurs connect.
                </p>
                <p>
                  Our community has achieved remarkable success, with members generating 
                  ₹500 Cr+ combined turnover through our proven frameworks and collaborative approach.
                </p>
                <p>
                  We believe in the power of exponential thinking, structured learning, 
                  and peer accountability to unlock unprecedented business growth.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center p-6 border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Power</h3>
                  <p className="text-muted-foreground">Unleashing entrepreneurial potential</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 border-secondary/20 hover:border-secondary/40 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-2">Learning</h3>
                  <p className="text-muted-foreground">Continuous growth and development</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Accountability</h3>
                  <p className="text-muted-foreground">Peer support and commitment</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values & Beliefs */}
      <section className="py-24 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading text-primary mb-6">
              Our Values & Beliefs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The core principles that guide everything we do and every relationship we build
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow border-none bg-white/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading text-primary mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three years of growth, milestones, and transformation
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <item.icon className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-3xl font-bold text-secondary">{item.year}</span>
                        <h3 className="text-2xl font-bold text-primary">{item.title}</h3>
                      </div>
                      <p className="text-lg text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Powermates */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading text-primary mb-6">
              Meet Our Powermates
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The visionary leaders driving our mission forward
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {powermates.map((member, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl">
                <div className="aspect-[4/5] relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:blur-sm"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                      <p className="text-secondary font-semibold mb-3">{member.role}</p>
                      <p className="text-white/90 text-sm leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                  <p className="text-secondary font-semibold">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">
            Ready to Join Our Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Connect with like-minded entrepreneurs and start your 10× growth story
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-12 py-6 text-xl">
            Connect Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;