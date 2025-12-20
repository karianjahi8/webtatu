import { Building, Shield, Globe, Briefcase } from 'lucide-react';

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
              <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center">
                <span className="font-serif text-primary-foreground text-xl font-bold">W</span>
              </div>
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
      </div>
    </section>
  );
};

export default AboutSection;
