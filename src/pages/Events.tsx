import { useEffect, useRef } from "react";

const Events = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  // Mock event photos - will be replaced with actual photos via GitHub
  const eventPhotos = [
    {
      id: 1,
      title: "Weekly Morning Session",
      category: "Weekly Sessions",
      image: "/1J0A5038.JPG",
      year: "2023"
    },
    {
      id: 2,
      title: "Diwali Celebration",
      category: "Festivals",
      image: "/IMG_6089.jpg", 
      year: "2022"
    },
    {
      id: 3,
      title: "Growth Summit",
      category: "Annual Events",
      image: "/DSC09141.jpg",
      year: "2023"
    },
    {
      id: 4,
      title: "Team Building Retreat",
      category: "Retreats",
      image: "/DSC09154.jpg",
      year: "2022"
    },
    {
      id: 5,
      title: "Ashayein",
      category: "Cultural Events",
      image: "/aashayein.JPG",
      year: "2023"
    },
    {
      id: 6,
      title: "Strategic Planning Session",
      category: "Business",
      image: "/1J0A5038.JPG",
      year: "2021"
    },
    {
      id: 7,
      title: "Dussehra Celebration",
      category: "Festivals",
      image: "/IMG_5934.jpg",
      year: "2022"
    },
    {
      id: 8,
      title: "Social Wellness",
      category: "Cultural Events",
      image: "/DSC_6452.JPG",
      year: "2023"
    },
    {
      id: 9,
      title: "Networking Dinner",
      category: "Networking",
      image: "/IMG_20230304_184711_501.jpg",
      year: "2023"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/90">
          <div className="absolute inset-0 bg-[url('/IMG_3915.mp4')] bg-cover bg-center opacity-30 animate-pulse"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-6xl md:text-8xl font-hero leading-tight mb-8 animate-fade-in">
            3 Years of Connection,
            <br />
            <span className="text-secondary">Growth, and Celebration</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-12 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            A visual journey through our memories, milestones, and moments that matter
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-2 h-4 bg-white/80 rounded-full mt-3 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Main Gallery - Immersive Mosaic Layout */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          {/* Story Introduction */}
          <div className="text-center mb-20 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-heading text-primary mb-6">
              Our Visual Story
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From weekly morning sessions to grand celebrations, every moment captures 
              the essence of growth, friendship, and shared success
            </p>
          </div>

          {/* Mosaic Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[200px]">
            {/* Large Featured Images */}
            <div className="md:col-span-2 lg:col-span-3 md:row-span-2 scroll-animate group relative overflow-hidden rounded-2xl">
              <img
                src={eventPhotos[0].image}
                alt={eventPhotos[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{eventPhotos[0].title}</h3>
                  <p className="text-white/90">{eventPhotos[0].category} • {eventPhotos[0].year}</p>
                </div>
              </div>
            </div>

            {/* Regular Images */}
            {eventPhotos.slice(1, 5).map((photo, index) => (
              <div key={photo.id} className={`scroll-animate group relative overflow-hidden rounded-xl ${index === 1 ? 'md:row-span-2' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-lg font-bold text-white mb-1">{photo.title}</h4>
                    <p className="text-white/90 text-sm">{photo.category}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Wide Panoramic Image */}
            <div className="md:col-span-4 lg:col-span-4 scroll-animate group relative overflow-hidden rounded-2xl">
              <img
                src={eventPhotos[5].image}
                alt={eventPhotos[5].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{eventPhotos[5].title}</h3>
                  <p className="text-white/90">{eventPhotos[5].category} • {eventPhotos[5].year}</p>
                </div>
              </div>
            </div>

            {/* Remaining Images */}
            {eventPhotos.slice(6).map((photo, index) => (
              <div key={photo.id} className={`scroll-animate group relative overflow-hidden rounded-xl ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`} style={{ animationDelay: `${(index + 5) * 0.1}s` }}>
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-lg font-bold text-white mb-1">{photo.title}</h4>
                    <p className="text-white/90 text-sm">{photo.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Stats */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-heading text-primary mb-6">
              Our Journey in Numbers
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center scroll-animate">
              <div className="text-5xl font-bold text-primary mb-4">30+</div>
              <div className="text-xl text-muted-foreground">Events Hosted</div>
            </div>
            <div className="text-center scroll-animate" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl font-bold text-secondary mb-4">36</div>
              <div className="text-xl text-muted-foreground">Months of Growth</div>
            </div>
            <div className="text-center scroll-animate" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl font-bold text-primary mb-4">200+</div>
              <div className="text-xl text-muted-foreground">Memories Created</div>
            </div>
            <div className="text-center scroll-animate" style={{ animationDelay: '0.3s' }}>
              <div className="text-5xl font-bold text-secondary mb-4">₹800Cr+</div>
              <div className="text-xl text-muted-foreground">Combined Success</div>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Closing */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 text-center scroll-animate">
          <h2 className="text-4xl md:text-5xl font-heading mb-8">
            Every Picture Tells Our Story
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            Behind every smile is a story of growth. Behind every celebration is a milestone achieved. 
            Behind every gathering is the power of community that transforms dreams into reality.
          </p>
          <div className="space-y-4">
            <p className="text-2xl font-semibold text-secondary">
              "Together we've created something beautiful."
            </p>
            <p className="text-lg opacity-80">
              – The GD Power House Family
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;