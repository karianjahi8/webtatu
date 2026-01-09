import { Building, Shield, Globe, Users, Target, Eye, Heart, Landmark } from 'lucide-react';
import logo from '@/assets/logo.png';

const AboutSection = () => {
  const pillars = [
    {
      icon: Globe,
      title: 'Pan-African Expertise',
      description: 'Deep understanding of African markets, regulatory landscapes, and infrastructure realities across the continent.'
    },
    {
      icon: Shield,
      title: 'Compliance First',
      description: 'Navigating local regulatory frameworks while aligning with international standards and best practices.'
    },
    {
      icon: Users,
      title: 'Capacity Building',
      description: 'Investing in talent development, education, and skills transfer for sustainable ecosystem growth.'
    },
    {
      icon: Landmark,
      title: 'Institutional Bridge',
      description: 'Connecting African institutions with global partners, vendors, and technology providers.'
    }
  ];

  const missionVisionValues = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To accelerate responsible blockchain adoption across Africa by providing strategic advisory, education, and implementation services that address local challenges while connecting institutions to global innovation.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be Africa\'s most trusted blockchain consultancy, driving digital transformation that empowers governments, enterprises, and communities to participate fully in the emerging digital economy.'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Pragmatism over hype. Local impact with global standards. Transparency in every engagement. Long-term capacity building over short-term gains. Community-driven innovation and inclusive growth.'
    }
  ];

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-6">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">About Us</span>
            </div>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              Your Trusted Partner for{' '}
              <span className="text-gradient-gold">Blockchain Adoption in Africa</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              WEB TATU HUB is a specialized blockchain consultancy operating across African markets, 
              serving governments, enterprises, startups, and institutions navigating the digital frontier.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              We understand that blockchain adoption in Africa requires more than technology—it demands 
              practical solutions that address infrastructure gaps, regulatory uncertainty, and capacity 
              constraints. Our approach combines global expertise with deep local knowledge, helping 
              organizations build sustainable digital transformation strategies that create real value 
              for their stakeholders and communities.
            </p>

            <div className="flex items-center gap-4 pt-4 border-t border-border">
              <img src={logo} alt="WEB TATU HUB Logo" className="w-14 h-14 rounded-lg object-contain" />
              <div>
                <p className="font-semibold text-foreground">WEB TATU HUB</p>
                <p className="text-sm text-muted-foreground">Blockchain Consultancy for Africa</p>
              </div>
            </div>
          </div>

          {/* Pillars Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => (
              <div 
                key={index}
                className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-smooth hover:shadow-card"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-smooth">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl mb-2 text-foreground">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="mt-24 pt-16 border-t border-border">
          <div className="text-center mb-12">
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-4">
              Guided by <span className="text-gradient-gold">Purpose & Principles</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our mission, vision, and values reflect our commitment to Africa's digital transformation journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {missionVisionValues.map((item, index) => (
              <div 
                key={index}
                className="group text-center p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-smooth hover:shadow-card"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 mx-auto group-hover:scale-105 transition-smooth">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="font-serif text-xl mb-4 text-foreground">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
