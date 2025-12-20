import { Building2, Scale, Shield, TrendingUp, CheckCircle } from 'lucide-react';

const WhyUsSection = () => {
  const differentiators = [
    {
      icon: Building2,
      title: 'Institutional Focus',
      description: 'We exclusively serve governments, public institutions, and regulated enterprises—not retail or speculative markets. Our expertise is built around the unique governance, compliance, and operational requirements of institutional clients.',
      points: [
        'Tailored for public sector requirements',
        'Understanding of bureaucratic processes',
        'Proven institutional track record'
      ]
    },
    {
      icon: Scale,
      title: 'Platform Agnostic Advisory',
      description: 'As an independent consultancy, we maintain strict neutrality across all blockchain platforms and vendors. Our recommendations are based solely on what best serves your institutional objectives.',
      points: [
        'No vendor affiliations or conflicts',
        'Objective technology assessments',
        'Best-fit recommendations only'
      ]
    },
    {
      icon: Shield,
      title: 'Governance & Compliance First',
      description: 'Every engagement begins with regulatory alignment and risk assessment. We ensure that blockchain initiatives meet the highest standards of governance, transparency, and accountability.',
      points: [
        'Regulatory compliance frameworks',
        'Risk management protocols',
        'Audit-ready documentation'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Long-term Impact',
      description: 'We measure success not by project completion, but by sustainable outcomes. Our advisory relationships are designed to support institutions through the entire lifecycle of blockchain adoption.',
      points: [
        'Multi-year strategic planning',
        'Continuous improvement support',
        'Knowledge transfer programs'
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
            The <span className="text-gradient-gold">Institutional Advantage</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            What sets WEB TATU HUB apart is our unwavering commitment to institutional excellence, 
            regulatory alignment, and long-term partnership.
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
