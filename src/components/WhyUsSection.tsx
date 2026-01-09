import { MapPin, Scale, GraduationCap, Handshake, CheckCircle } from 'lucide-react';

const WhyUsSection = () => {
  const differentiators = [
    {
      icon: MapPin,
      title: 'African Market Expertise',
      description: 'We understand Africa\'s diverse regulatory environments, infrastructure constraints, and market dynamics. Our solutions are designed for local realities, not imported wholesale from other contexts.',
      points: [
        'Deep knowledge of regional regulations',
        'Understanding of infrastructure gaps',
        'Cross-border market experience'
      ]
    },
    {
      icon: Scale,
      title: 'Regulatory Navigation',
      description: 'Blockchain regulation varies significantly across African nations. We help organizations navigate compliance requirements while preparing for evolving regulatory frameworks.',
      points: [
        'Country-specific compliance guidance',
        'Proactive regulatory engagement',
        'Risk mitigation strategies'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Capacity Building Focus',
      description: 'Sustainable blockchain adoption requires local expertise. We prioritize skills transfer, education, and talent development to build lasting capabilities within organizations and communities.',
      points: [
        'Knowledge transfer programs',
        'Local talent development',
        'Institutional capacity building'
      ]
    },
    {
      icon: Handshake,
      title: 'Global-Local Bridge',
      description: 'We connect African institutions with trusted global partners, technology providers, and investors—while ensuring solutions are adapted for local success.',
      points: [
        'Vetted global partner network',
        'Technology provider matching',
        'Investment readiness support'
      ]
    }
  ];

  return (
    <section id="why-us" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-6">
            <span className="text-sm text-primary font-medium uppercase tracking-wider">Why Choose Us</span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
            The <span className="text-gradient-gold">Africa Advantage</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            What sets WEB TATU HUB apart is our deep commitment to practical, sustainable 
            blockchain adoption tailored for African markets.
          </p>
        </div>

        {/* Differentiators */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {differentiators.map((item, index) => (
            <div 
              key={index}
              className="group relative p-8 lg:p-10 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-smooth hover:shadow-card"
            >
              {/* Number badge */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center shadow-lg">
                <span className="font-serif text-lg text-primary-foreground font-bold">{index + 1}</span>
              </div>

              <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-smooth">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="font-serif text-2xl md:text-3xl mb-4 text-foreground">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {item.description}
              </p>
              
              <ul className="space-y-3">
                {item.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
