import { Building, Shield, Globe, Briefcase, Target, Eye, Heart } from 'lucide-react';
import logo from '@/assets/logo.png';

const AboutSection = () => {
  const pillars = [
    {
      icon: Building,
      title: 'Institutional Excellence',
      description: 'Tailored solutions for government agencies, public institutions, and regulated enterprises.'
    },
    {
      icon: Shield,
      title: 'Responsible Innovation',
      description: 'Balancing technological advancement with regulatory compliance and risk management.'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Insights drawn from international best practices and cross-border implementations.'
    },
    {
      icon: Briefcase,
      title: 'Long-term Partnership',
      description: 'Committed advisory relationships focused on sustainable outcomes, not short-term gains.'
    }
  ];

  const missionVisionValues = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To accelerate responsible blockchain adoption across governments and institutions by providing strategic advisory, education, and implementation services that bridge emerging technology with real-world policy requirements.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the globally recognized leader in institutional blockchain consultancy, shaping the future of public infrastructure, digital governance, and enterprise innovation through trusted partnerships and transformative solutions.'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Integrity, transparency, and accountability in every engagement. We prioritize long-term impact over short-term gains, embrace continuous learning, and maintain unwavering commitment to ethical technology adoption.'
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
              A Trusted Partner for{' '}
              <span className="text-gradient-gold">Institutional Blockchain Adoption</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              WEB TATU HUB is a specialized blockchain consultancy agency serving governments, 
              public institutions, enterprises, and regulated organizations worldwide.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              We operate at the intersection of emerging technology and institutional governance, 
              providing strategic advisory services that bridge the gap between blockchain innovation 
              and real-world policy requirements. Our approach prioritizes responsible adoption, 
              regulatory alignment, and institutional-grade solutions that deliver measurable, 
              long-term value.
            </p>

            <div className="flex items-center gap-4 pt-4 border-t border-border">
              <img src={logo} alt="WEB TATU HUB Logo" className="w-14 h-14 rounded-lg object-contain" />
              <div>
                <p className="font-semibold text-foreground">WEB TATU HUB</p>
                <p className="text-sm text-muted-foreground">Blockchain Consultancy for Institutions</p>
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
              Our mission, vision, and values form the foundation of every partnership and engagement.
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
