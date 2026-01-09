import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhyUsSection from '@/components/WhyUsSection';
import WhitePaperDownload from '@/components/WhitePaperDownload';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>WEB TATU HUB | Blockchain Consultancy for Africa</title>
        <meta 
          name="description" 
          content="Trusted blockchain advisory for governments, enterprises, and startups across African markets. Expert consultancy in digital transformation, regulatory compliance, capacity building, and sustainable innovation." 
        />
        <meta name="keywords" content="blockchain Africa, blockchain consultancy, African blockchain, digital transformation Africa, fintech Africa, Web3 Africa, blockchain adoption, cross-border payments" />
        <link rel="canonical" href="https://webtatuhub.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="WEB TATU HUB | Blockchain Consultancy for Africa" />
        <meta property="og:description" content="Trusted blockchain advisory for governments, enterprises, and startups across African markets." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://webtatuhub.com" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@WebTatuhub" />
        <meta name="twitter:title" content="WEB TATU HUB | Blockchain Consultancy for Africa" />
        <meta name="twitter:description" content="Trusted blockchain advisory for governments, enterprises, and startups across African markets." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <WhyUsSection />
          <WhitePaperDownload />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
