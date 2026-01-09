import { Twitter, Mail } from 'lucide-react';
import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    services: [
      { label: 'Strategic Advisory', href: '#services' },
      { label: 'Education & Training', href: '#services' },
      { label: 'Implementation Support', href: '#services' },
      { label: 'Web3 Gaming & Esports', href: '#services' },
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Why Choose Us', href: '#why-us' },
      { label: 'Contact', href: '#contact' },
    ],
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="WEB TATU HUB Logo" className="w-10 h-10 rounded-lg object-contain" />
              <span className="font-serif text-xl tracking-wide text-foreground">
                WEB TATU HUB
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Strategic blockchain consultancy for governments, enterprises, and startups across African markets.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href="https://x.com/WebTatuhub" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-smooth"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="mailto:webtatuhub@gmail.com" 
                className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-smooth"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {links.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:webtatuhub@gmail.com" className="hover:text-foreground transition-smooth">
                  webtatuhub@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://x.com/WebTatuhub" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-smooth"
                >
                  @WebTatuhub
                </a>
              </li>
              <li>Serving clients across Africa</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} WEB TATU HUB. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-smooth">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-smooth">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
