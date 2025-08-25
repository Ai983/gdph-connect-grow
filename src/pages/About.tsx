import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Lightbulb, HandHeart, TrendingUp, Calendar, MapPin, Crown } from "lucide-react";
import gdpLogoHorizontal from "@/assets/gdp-logo-horizontal.png";

const About = () => {
  const values = [
    {
      icon: HandHeart,
      title: "Systems & Execution",
      description: "Build scalable systems and execute with discipline"
    },
    {
      icon: TrendingUp,
      title: "10 Building Blocks",
      description: "Strengthen every pillar of your business, step by step"
    },
    {
      icon: Target,
      title: "Dil Ki Baat",
      description: "Share openly, connect deeply, and grow with trust."
    },
    {
      icon: Users,
      title: "Social Celebrations",
      description: "Celebrate milestones and festivals like one big family"
    },
    {
      icon: Lightbulb,
      title: "Peer Coaching",
      description: "Learn and teach through real experiences from fellow founders"
    }
    {
      icon: Lightbulb,
      title: "Buddies for Life",
      description: "Accountability partners who always have your back"
    }
    {
      icon: Lightbulb,
      title: "Networking",
      description: "Tap into a trusted circle to unlock opportunities and referrals"
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
      role: "Diamond Jewellery Visionary",
      bio: "Saurabh is the Founder of Dhanvi Diamonds, a leading diamond jewelry brand. He broke away from his family’s traditional jewelry business to launch his own venture, which now spans 150+ stores across seven states. Saurabh is also the author of “Family Jeweller to Legacy Brand,” sharing insights from his entrepreneurial journey. Starting with just ₹25 lakh in 2006, he bootstrapped his business into a prominent name in North India’s jewelry industry.",
      image: "/placeholder.svg"
    },
    {
      name: "Narendra Surana", 
      role: "Industry Pioneer",
      bio: "Narendra is the Chairman of Sphinx Worldbiz Ltd., bringing 45 years of visionary leadership in design engineering and software development. Renowned for his dynamic approach, he has driven transformative growth across diverse industries. Known for his passion for innovation and excellence, Narendra has consistently achieved exceptional results – steering organizations to new heights of success. His guidance and experience make him a mentor figure within our chapter.",
      image: "/placeholder.svg"
    },
    {
      name: "Mohit Gupta",
      role: "Basmati Brand Builder",
      bio: "Mohit, CEO of Shazia Basmati Rice (H.R. Exports Pvt. Ltd.), is a global expert in Basmati rice marketing. He created the R.W.R. Framework to help rice distributors boost profitability by 30%, and has built a network across 80+ countries. With an MBA and over a decade of experience, Mohit now manages $200 million+ in annual packaging and offers high-end advisory services. His efforts are backed by 51 years of family trade legacy in the rice industry, making him a true innovator carrying his family’s torch forward.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img 
                src={gdpLogoHorizontal} 
                alt="GDP PowerHouse Logo" 
                className="h-20 w-auto mx-auto mb-6 object-contain"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-hero text-primary mb-8">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              GDP Power House began with a simple idea: ambitious entrepreneurs grow faster together.
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
                  In 2021, a group of like-minded business owners – all graduates of a rigorous business mentorship program – decided to continue their journey as a team. They formed GDP Power House as a dedicated forum to implement what they learned, share wins and failures, and push each other toward bigger goals. Over the last three years, this chapter has evolved into one of the most structured and consistent entrepreneur forums around – we’ve tried, failed, learned, and achieved significantly in that time, proving that any determined entrepreneur can reach new heights with the right support.
                </p>
                <p>
                  Our realization: it’s not rocket science – you can replicate the same success, maybe faster or slower, but with us, the journey becomes easier.
                </p>
                <p>
                  What drives us is a 10× Growth Mindset and a spirit of collaboration. Every member is committed to continuous personal and professional growth, building systems that scale, and empowering others in the group. We believe in implementation over talk – ideas shared on Saturday shouldn’t stay on a notepad; they turn into action by Monday.
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
                  <h3 className="text-2xl font-bold text-primary mb-2">Support</h3>
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
              Under the GDP umbrella – your growth, all in one place!
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