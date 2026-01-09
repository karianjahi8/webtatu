import { 
  Lightbulb, 
  GraduationCap, 
  Search, 
  Cog, 
  Users, 
  Handshake,
  Gamepad2,
  ArrowRight,
  Banknote,
  Truck,
  Building2,
  FileCheck
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Lightbulb,
      title: 'Strategic Advisory',
      description: 'Comprehensive blockchain strategy for governments, enterprises, and startups navigating Africa\'s unique regulatory and infrastructure landscape.',
      features: [
        'Digital transformation roadmaps',
        'Infrastructure readiness assessment',
        'Regulatory navigation support',
        'Use case identification',
        'Technology selection guidance'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Education & Capacity Building',
      description: 'Building local expertise through training programs, workshops, and knowledge transfer initiatives.',
      features: [
        'Executive blockchain literacy',
        'Developer training programs',
        'Policy and regulatory workshops',
        'Institutional capacity building',
        'Talent pipeline development'
      ]
    },
    {
      icon: Search,
      title: 'Platform & Vendor Evaluation',
      description: 'Independent assessment of blockchain solutions, ensuring technology choices fit African market realities.',
      features: [
        'Technology due diligence',
        'Vendor suitability analysis',
        'Interoperability assessment',
        'Cost-benefit modeling',
        'Risk evaluation frameworks'
      ]
    },
    {
      icon: Cog,
      title: 'Implementation Support',
      description: 'End-to-end guidance from pilot programs to full-scale deployment across diverse African contexts.',
      features: [
        'Proof of concept development',
        'Pilot program management',
        'Integration with existing systems',
        'Change management support',
        'Post-deployment optimization'
      ]
    },
    {
      icon: Users,
      title: 'Community & Ecosystem Building',
      description: 'Cultivating innovation ecosystems that connect developers, startups, and institutions across African markets.',
      features: [
        'Developer community programs',
        'Startup ecosystem support',
        'Hackathons and innovation labs',
        'Cross-border collaboration',
        'Knowledge sharing networks'
      ]
    },
    {
      icon: Handshake,
      title: 'Global Partnership Development',
      description: 'Connecting African institutions with vetted international partners, technology providers, and investors.',
      features: [
        'Partner identification and vetting',
        'Joint venture facilitation',
        'Investment readiness support',
        'Technology transfer guidance',
        'International market access'
      ]
    },
    {
      icon: Gamepad2,
      title: 'Web3 Gaming & Esports',
      description: 'Dedicated support for blockchain gaming, digital assets, and esports innovation across the African continent.',
      features: [
        'Blockchain gaming integration',
        'Digital asset frameworks',
        'Esports infrastructure advisory',
        'Gaming studio partnerships',
        'Play-to-earn ecosystem design'
      ],
      highlight: true
    }
  ];

  const sectors = [
    { icon: Banknote, label: 'Finance & Payments', desc: 'Cross-border payments, remittances, DeFi' },
    { icon: Truck, label: 'Supply Chain & Trade', desc: 'Trade finance, logistics, provenance' },
    { icon: Building2, label: 'Public Services', desc: 'Identity, land registry, transparency' },
    { icon: FileCheck, label: 'Governance', desc: 'Voting, records, accountability' }
  ];

  return (
    <section id="services" className="py-24 lg:py-32 relative bg-gradient-dark">
      {/* Subtle pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-6">
            <span className="text-sm text-primary font-medium uppercase tracking-wider">Our Services</span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
            Practical Blockchain Solutions for{' '}
            <span className="text-gradient-gold">African Markets</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            From strategy to implementation, we provide comprehensive services designed for 
            Africa's unique challenges and opportunities in blockchain adoption.
          </p>
        </div>

        {/* Sector Tags */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {sectors.map((sector, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 rounded-xl bg-secondary/30 border border-border">
              <sector.icon className="w-6 h-6 text-primary mb-2" />
              <span className="text-sm font-medium text-foreground">{sector.label}</span>
              <span className="text-xs text-muted-foreground mt-1">{sector.desc}</span>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative p-8 rounded-2xl border transition-smooth hover:shadow-card ${
                service.highlight 
                  ? 'bg-gradient-to-br from-primary/10 to-transparent border-primary/30 lg:col-span-1'
                  : 'bg-gradient-card border-border hover:border-primary/30'
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-gold text-primary-foreground text-xs font-semibold rounded-full">
                  Growth Sector
                </div>
              )}
              
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-smooth ${
                service.highlight 
                  ? 'bg-primary/20 group-hover:bg-primary/30' 
                  : 'bg-secondary group-hover:bg-primary/10'
              }`}>
                <service.icon className={`w-7 h-7 ${service.highlight ? 'text-primary' : 'text-primary'}`} />
              </div>
              
              <h3 className="font-serif text-xl md:text-2xl mb-3 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="w-3 h-3 text-primary flex-shrink-0" />
                    {feature}
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

export default ServicesSection;
