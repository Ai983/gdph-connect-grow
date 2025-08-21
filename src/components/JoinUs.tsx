import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Calendar, Users, ArrowRight } from "lucide-react";

const JoinUs = () => {
  return (
    <section className="py-20 bg-hero-gradient text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Get Inspired by 
                <span className="text-secondary"> Real Stories </span>
                of Transformation
              </h2>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                Stay connected with our community of entrepreneurs and discover the stories, 
                insights, and experiences that could shape your journey.
              </p>
              
              {/* Inspiration Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">Daily</div>
                  <div className="text-sm opacity-80">Stories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">Global</div>
                  <div className="text-sm opacity-80">Network</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">Authentic</div>
                  <div className="text-sm opacity-80">Experiences</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Signup Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Stay Connected & Get Inspired
              </h3>
              
              <form className="space-y-4">
                <div>
                  <Input 
                    type="text" 
                    placeholder="Your Name"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-secondary"
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    placeholder="Email Address"
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-secondary"
                  />
                </div>
                <div>
                  <select className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white focus:border-secondary focus:outline-none">
                    <option value="" className="text-gray-900">What interests you most?</option>
                    <option value="stories" className="text-gray-900">Success Stories</option>
                    <option value="events" className="text-gray-900">Community Events</option>
                    <option value="learning" className="text-gray-900">Learning Opportunities</option>
                    <option value="networking" className="text-gray-900">Networking</option>
                    <option value="all" className="text-gray-900">All of the above</option>
                  </select>
                </div>
                <div>
                  <select className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white focus:border-secondary focus:outline-none">
                    <option value="" className="text-gray-900">Your Business Stage</option>
                    <option value="idea" className="text-gray-900">Idea Stage</option>
                    <option value="startup" className="text-gray-900">Early Startup</option>
                    <option value="growing" className="text-gray-900">Growing Business</option>
                    <option value="established" className="text-gray-900">Established Company</option>
                    <option value="exit" className="text-gray-900">Exploring Exit</option>
                  </select>
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary-light text-white py-3 text-lg font-semibold rounded-xl mt-6"
                >
                  Stay Connected & Get Inspired
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
              
              <p className="text-center text-sm opacity-80 mt-4">
                Free newsletter • Inspiring stories weekly
              </p>
            </div>
          </div>
          
          {/* Find Meetups Section */}
          <div className="mt-20 text-center">
            <h3 className="text-3xl font-bold mb-8">
              Experience Community First-Hand
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Sample Meetup Cards */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover-lift">
                <div className="flex items-center justify-between mb-4">
                  <MapPin className="h-5 w-5 text-secondary" />
                  <span className="text-sm opacity-80">New York</span>
                </div>
                <h4 className="font-semibold mb-2">NYC Success Stories</h4>
                <div className="flex items-center text-sm opacity-80 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  Tomorrow, 7:00 PM
                </div>
                <div className="flex items-center text-sm opacity-80">
                  <Users className="h-4 w-4 mr-2" />
                  45 attendees
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover-lift">
                <div className="flex items-center justify-between mb-4">
                  <MapPin className="h-5 w-5 text-secondary" />
                  <span className="text-sm opacity-80">San Francisco</span>
                </div>
                <h4 className="font-semibold mb-2">Bay Area Innovators</h4>
                <div className="flex items-center text-sm opacity-80 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  Friday, 6:30 PM
                </div>
                <div className="flex items-center text-sm opacity-80">
                  <Users className="h-4 w-4 mr-2" />
                  67 attendees
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover-lift">
                <div className="flex items-center justify-between mb-4">
                  <MapPin className="h-5 w-5 text-secondary" />
                  <span className="text-sm opacity-80">London</span>
                </div>
                <h4 className="font-semibold mb-2">London Growth Circle</h4>
                <div className="flex items-center text-sm opacity-80 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  Saturday, 2:00 PM
                </div>
                <div className="flex items-center text-sm opacity-80">
                  <Users className="h-4 w-4 mr-2" />
                  32 attendees
                </div>
              </div>
            </div>
            
            <Button 
              variant="outline"
              className="mt-8 border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold rounded-xl"
            >
              View All Experiences
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;