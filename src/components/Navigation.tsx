import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const storyLinks = [
    { title: "History", href: "/our-story/history", description: "The journey of GD Power House" },
    { title: "Leadership", href: "/our-story/leadership", description: "Meet our visionary team" },
    { title: "Partnerships", href: "/our-story/partnerships", description: "Strategic alliances" },
  ];

  const reachLinks = [
    { title: "Global Reach", href: "/our-reach/global", description: "Our worldwide presence" },
    { title: "Our Chapters", href: "/our-reach/chapters", description: "Local communities" },
  ];

  const impactLinks = [
    { title: "Newsroom", href: "/our-impact/newsroom", description: "Latest updates" },
    { title: "Podcasts", href: "/our-impact/podcasts", description: "Inspiring conversations" },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">GD</span>
            </div>
            <span className="font-bold text-xl text-foreground">GD Power House</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/about"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      About Us
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/events"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      Events Showcase
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    Our Story
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      {storyLinks.map((link) => (
                        <NavigationMenuLink key={link.href} asChild>
                          <Link
                            to={link.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{link.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {link.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    Our Reach
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      {reachLinks.map((link) => (
                        <NavigationMenuLink key={link.href} asChild>
                          <Link
                            to={link.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{link.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {link.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    Our Impact
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      {impactLinks.map((link) => (
                        <NavigationMenuLink key={link.href} asChild>
                          <Link
                            to={link.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{link.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {link.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      to="/stories"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      Stories + Resources
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" asChild>
              <Link to="/contact">Get Inspired</Link>
            </Button>
            <Button asChild>
              <Link to="/contact">Connect Today</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="space-y-4">
              <Link
                to="/about"
                className="block font-semibold text-foreground"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>

              <Link
                to="/events"
                className="block font-semibold text-foreground"
                onClick={() => setIsOpen(false)}
              >
                Events Showcase
              </Link>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Our Story</h3>
                <div className="space-y-2 pl-4">
                  {storyLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Our Reach</h3>
                <div className="space-y-2 pl-4">
                  {reachLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">Our Impact</h3>
                <div className="space-y-2 pl-4">
                  {impactLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/stories"
                className="block font-semibold text-foreground"
                onClick={() => setIsOpen(false)}
              >
                Stories + Resources
              </Link>

              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" asChild>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>Get Inspired</Link>
                </Button>
                <Button asChild>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>Connect Today</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;