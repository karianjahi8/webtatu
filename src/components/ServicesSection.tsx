import { 
  Lightbulb, 
  GraduationCap, 
  Search, 
  Cog, 
  Users, 
  Handshake,
  Gamepad2,
  ArrowRight
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Lightbulb,
      title: 'Blockchain Consultancy & Advisory',
      description: 'Strategic advisory services tailored for governments, public sector agencies, and institutions seeking to leverage blockchain technology.',
      features: [
        'Digital identity infrastructure',
        'Cross-border payment systems',
        'Land registry modernization',
        'Supply chain transparency',
        'Public sector infrastructure'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Blockchain Education & Training',
      description: 'Comprehensive capacity-building programs designed for institutional stakeholders and policymakers.',
      features: [
        'Executive leadership programs',
        'Technical workshops for teams',
        'Policy and regulatory training',
        'Decision-maker briefings',
        'Customized institutional curricula'
      ]
    },
    {
      icon: Search,
      title: 'Platform & Tool Evaluation',
      description: 'Independent, unbiased assessment of blockchain platforms, protocols, and enterprise tools.',
      features: [
        'Platform suitability analysis',
        'Security and compliance audits',
        'Scalability assessments',
        'Vendor-neutral recommendations',
        'Technology due diligence'
      ]
    },
    {
      icon: Cog,
      title: 'Implementation Consulting',
      description: 'End-to-end support from strategic design through pilot programs to full-scale deployment.',
      features: [
        'Feasibility analysis',
        'Governance framework design',
        'Risk management protocols',
        'Pilot program management',
        'Full deployment oversight'
      ]
    },
    {
      icon: Users,
      title: 'Community Building & Ecosystem Marketing',
      description: 'Strategic community development and stakeholder engagement for institutional blockchain initiatives.',
      features: [
        'Stakeholder engagement strategies',
        'Developer ecosystem cultivation',
        'Public education campaigns',
        'Ecosystem growth planning',
        'Community governance design'
      ]
    },
    {
      icon: Handshake,
      title: 'Partnership Development',
      description: 'Connecting institutions with vetted blockchain solution providers and technology partners.',
      features: [
        'Vendor matching and vetting',
        'Partnership facilitation',
        'Contract advisory support',
        'Long-term alignment planning',
        'Quality assurance oversight'
      ]
    },
    {
      icon: Gamepad2,
      title: 'Esports & Gaming Division',
      description: 'A dedicated arm supporting the convergence of blockchain technology with gaming and esports.',
      features: [
        'Blockchain gaming integration',
        'Digital asset frameworks',
        'Esports tournament infrastructure',
        'Game studio partnerships',
        'Community-driven innovation'
      ],
      highlight: true
    }
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
            Comprehensive Blockchain Solutions for{' '}
            <span className="text-gradient-gold">Institutional Success</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            From strategic advisory to implementation support, we provide end-to-end services 
            designed for the unique needs of governments and regulated organizations.
          </p>
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
                  Specialized Division
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
