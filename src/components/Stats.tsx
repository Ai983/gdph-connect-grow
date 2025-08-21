import { useEffect, useState } from "react";

interface StatItemProps {
  number: number;
  label: string;
  suffix?: string;
  delay?: number;
}

const StatItem = ({ number, label, suffix = "", delay = 0 }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`stat-${label.replace(/\s+/g, '-').toLowerCase()}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [label]);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = number / steps;
      let current = 0;

      const counter = setInterval(() => {
        current += increment;
        if (current >= number) {
          setCount(number);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, number, delay]);

  return (
    <div 
      id={`stat-${label.replace(/\s+/g, '-').toLowerCase()}`}
      className="text-center animate-counter-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-4xl md:text-6xl font-black text-primary mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-lg md:text-xl text-muted-foreground font-medium">
        {label}
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-20 bg-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">Stories of Impact</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Every number represents a breakthrough moment, a life changed, and a business transformed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <StatItem 
            number={2500} 
            label="Growth Stories" 
            suffix="+"
            delay={0}
          />
          <StatItem 
            number={150} 
            label="Life-Changing Moments" 
            delay={200}
          />
          <StatItem 
            number={25} 
            label="Dreams Realized" 
            suffix="B+"
            delay={400}
          />
          <StatItem 
            number={50} 
            label="Communities United" 
            suffix="+"
            delay={600}
          />
        </div>
        
        {/* Additional Metrics */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-2xl shadow-soft hover-lift">
            <div className="text-2xl font-bold text-secondary mb-2">$2.5B+</div>
            <div className="text-muted-foreground">In Member Business Value Created</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-soft hover-lift">
            <div className="text-2xl font-bold text-secondary mb-2">85%</div>
            <div className="text-muted-foreground">Report Breakthrough Moments</div>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-soft hover-lift">
            <div className="text-2xl font-bold text-secondary mb-2">Global</div>
            <div className="text-muted-foreground">Network of Changemakers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;