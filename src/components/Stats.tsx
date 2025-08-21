import React, { useState, useEffect, useRef } from 'react';
import { Users, TrendingUp, Award, Target, IndianRupee, Calendar } from 'lucide-react';

interface StatItemProps {
  number: number;
  label: string;
  suffix?: string;
  delay?: number;
}

const StatItem: React.FC<StatItemProps> = ({ number, label, suffix = "", delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        let start = 0;
        const end = number;
        const duration = 2500;
        const stepTime = 50;
        const steps = duration / stepTime;
        const increment = end / steps;

        const interval = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(interval);
          } else {
            setCount(Math.floor(start));
          }
        }, stepTime);

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, number, delay]);

  return (
    <div ref={elementRef} className="text-center animate-counter-up">
      <div className="text-5xl md:text-6xl font-hero text-secondary mb-3">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-xl text-white font-subheading">{label}</div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-24 bg-primary-deep">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-hero text-white mb-6">Impact by the Numbers</h2>
          <p className="text-2xl text-white/90 max-w-4xl mx-auto font-subheading">
            Social proof at a glance — real results from our growing community
          </p>
        </div>

        {/* Animated Counter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <StatItem number={150} label="Members" suffix="+" delay={0} />
          <StatItem number={75} label="Meetups" suffix="+" delay={300} />
          <StatItem number={500} label="₹ Cr+ Collective Turnover" delay={600} />
        </div>

        {/* Additional Impact Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-6xl mx-auto">
          <div className="text-center">
            <div className="bg-secondary/20 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-10 w-10 text-secondary" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">95%</div>
            <div className="text-white/80">Active Participation</div>
          </div>
          
          <div className="text-center">
            <div className="bg-secondary/20 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <TrendingUp className="h-10 w-10 text-secondary" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">3.2×</div>
            <div className="text-white/80">Average Growth</div>
          </div>
          
          <div className="text-center">
            <div className="bg-secondary/20 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Award className="h-10 w-10 text-secondary" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">89%</div>
            <div className="text-white/80">Success Rate</div>
          </div>
          
          <div className="text-center">
            <div className="bg-secondary/20 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Target className="h-10 w-10 text-secondary" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">24</div>
            <div className="text-white/80">Month Track Record</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;