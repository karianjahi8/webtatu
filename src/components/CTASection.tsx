import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Calendar } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-dark" />
      
      {/* Decorative elements */}
      <div 
        className="absolute top-0 left-1/4 w-[600px] h-[600px] opacity-20"
        style={{ background: 'radial-gradient(ellipse at center, hsl(40 80% 55% / 0.2) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] opacity-15"
        style={{ background: 'radial-gradient(ellipse at center, hsl(40 80% 55% / 0.15) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <div className="relative p-10 lg:p-16 rounded-3xl bg-gradient-card border border-border shadow-card overflow-hidden">
            {/* Subtle corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-[100px]" />
            
            <div className="text-center relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
                <span className="text-sm text-primary font-medium uppercase tracking-wider">Get Started</span>
              </div>
              
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
                Ready to Transform Your{' '}
                <span className="text-gradient-gold">Institutional Strategy?</span>
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                Whether you are a government agency exploring digital transformation, an enterprise 
                seeking blockchain integration, or an institution requiring strategic assessment—we 
                are here to guide your journey.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Button variant="cta" asChild>
                  <a href="mailto:contact@webtatuhub.com" className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Book a Consultation
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="mailto:contact@webtatuhub.com" className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Request Assessment
                  </a>
                </Button>
              </div>

              {/* Trust line */}
              <p className="text-sm text-muted-foreground">
                Confidential discussions. No obligations. Institutional-grade advisory.
              </p>
            </div>
          </div>

          {/* Secondary info */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 rounded-xl bg-secondary/30 border border-border">
              <h4 className="font-serif text-lg text-foreground mb-2">Government Agencies</h4>
              <p className="text-sm text-muted-foreground">Strategic assessments for public sector blockchain initiatives</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-secondary/30 border border-border">
              <h4 className="font-serif text-lg text-foreground mb-2">Enterprises</h4>
              <p className="text-sm text-muted-foreground">Implementation consulting for regulated industries</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-secondary/30 border border-border">
              <h4 className="font-serif text-lg text-foreground mb-2">Partners</h4>
              <p className="text-sm text-muted-foreground">Collaboration opportunities with solution providers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
