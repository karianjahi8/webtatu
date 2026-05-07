import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Globe2, ArrowRight } from "lucide-react";

const AIAdvisorsSection = () => (
  <section id="ai-advisors" className="py-24 bg-gradient-dark border-t border-border">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary/40 mb-4 text-xs uppercase tracking-wider text-primary">
          <Sparkles className="w-3.5 h-3.5" /> AI Advisors
        </div>
        <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Two intelligences. One mission.</h2>
        <p className="text-muted-foreground text-lg">
          Get instant strategic guidance from our AI-powered advisors — built on Web Tatu Hub's Pan-African expertise.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="bg-gradient-card border border-border rounded-xl p-8 hover:border-primary/40 transition-smooth shadow-card">
          <Sparkles className="w-10 h-10 text-primary mb-4" />
          <h3 className="font-serif text-2xl text-foreground mb-2">TATU</h3>
          <div className="text-xs uppercase tracking-wider text-primary mb-4">Pan-African Blockchain Advisory</div>
          <p className="text-muted-foreground mb-6">
            For governments, enterprises, institutions, and startups exploring blockchain adoption,
            regulatory navigation, and digital transformation across African markets.
          </p>
          <Button variant="hero" asChild>
            <Link to="/advisory">Talk to TATU <ArrowRight className="w-4 h-4" /></Link>
          </Button>
        </div>

        <div className="bg-gradient-card border border-border rounded-xl p-8 hover:border-primary/40 transition-smooth shadow-card">
          <Globe2 className="w-10 h-10 text-primary mb-4" />
          <h3 className="font-serif text-2xl text-foreground mb-2">ZARA</h3>
          <div className="text-xs uppercase tracking-wider text-primary mb-4">Africa Market Entry Intelligence</div>
          <p className="text-muted-foreground mb-6">
            For global blockchain projects, exchanges, and token issuers entering African markets —
            regulation, KOLs, exchange listings, and mobile-money rails.
          </p>
          <Button variant="hero" asChild>
            <Link to="/global-entry">Talk to ZARA <ArrowRight className="w-4 h-4" /></Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default AIAdvisorsSection;
