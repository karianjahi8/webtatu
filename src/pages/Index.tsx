import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyUsSection from '@/components/WhyUsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>WEB TATU HUB | Blockchain Consultancy for Governments & Institutions</title>
        <meta 
          name="description" 
          content="Strategic blockchain advisory for governments, public institutions, and enterprises. Expert consultancy in digital transformation, regulatory compliance, and institutional-grade blockchain solutions." 
        />
        <meta name="keywords" content="blockchain consultancy, government blockchain, institutional blockchain, enterprise blockchain, digital transformation, regulatory compliance" />
        <link rel="canonical" href="https://webtatuhub.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="WEB TATU HUB | Blockchain Consultancy for Governments & Institutions" />
        <meta property="og:description" content="Strategic blockchain advisory for governments, public institutions, and enterprises." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webtatuhub.com" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="WEB TATU HUB | Blockchain Consultancy" />
        <meta name="twitter:description" content="Strategic blockchain advisory for governments and institutions." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <WhyUsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
