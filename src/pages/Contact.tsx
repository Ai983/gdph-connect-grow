import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    company: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        mobile: "",
        city: "",
        company: "",
        message: ""
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
        <Card className="max-w-md mx-auto text-center border-none shadow-2xl">
          <CardContent className="pt-8 pb-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-primary mb-4">Thank You!</h2>
            <p className="text-muted-foreground">
              We'll get in touch shortly to discuss how GD Power House can accelerate your business growth.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-hero text-primary mb-8">
              Connect With Us
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Ready to join a community that will transform your business? 
              Let's start the conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-heading text-primary mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Whether you're an entrepreneur looking to scale, or simply curious about our community, 
                    we'd love to hear from you.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">Email Us</h3>
                      <p className="text-muted-foreground">hello@gdpowerhouse.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">Call Us</h3>
                      <p className="text-muted-foreground">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">Visit Us</h3>
                      <p className="text-muted-foreground">Jaipur, Rajasthan, India</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    Why Connect?
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Join a ₹500Cr+ turnover community</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Access proven growth frameworks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Connect with like-minded entrepreneurs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Accelerate your business 10×</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-none shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary text-center">
                      Request a Visit
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Two Column Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="border-primary/20 focus:border-primary"
                            placeholder="Your full name"
                          />
                        </div>

                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="border-primary/20 focus:border-primary"
                            placeholder="your.email@example.com"
                          />
                        </div>

                        <div>
                          <label htmlFor="mobile" className="block text-sm font-medium text-primary mb-2">
                            Mobile Number *
                          </label>
                          <Input
                            id="mobile"
                            name="mobile"
                            type="tel"
                            required
                            value={formData.mobile}
                            onChange={handleChange}
                            className="border-primary/20 focus:border-primary"
                            placeholder="+91 98765 43210"
                          />
                        </div>

                        <div>
                          <label htmlFor="city" className="block text-sm font-medium text-primary mb-2">
                            City *
                          </label>
                          <Input
                            id="city"
                            name="city"
                            type="text"
                            required
                            value={formData.city}
                            onChange={handleChange}
                            className="border-primary/20 focus:border-primary"
                            placeholder="Your city"
                          />
                        </div>
                      </div>

                      {/* Company Name - Full Width */}
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-primary mb-2">
                          Company Name *
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className="border-primary/20 focus:border-primary"
                          placeholder="Your company name"
                        />
                      </div>

                      {/* Message - Full Width */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="border-primary/20 focus:border-primary"
                          placeholder="Tell us about your business and what you're looking to achieve..."
                        />
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-secondary hover:bg-secondary/90 text-white text-lg py-6 rounded-xl"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join entrepreneurs who have collectively achieved ₹500Cr+ turnover through our proven frameworks
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-12 py-6 text-xl">
            Start Your Journey Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;