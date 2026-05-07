import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AgentChat, { QuickReply } from "@/components/agents/AgentChat";

const initial =
  "**Habari! Welcome to Web Tatu Hub.** 🌍\n\nI'm **TATU** — your Pan-African blockchain advisory intelligence. We advise governments, institutions, enterprises, and startups across Africa on blockchain strategy, Web3 regulation, and digital transformation.\n\nTo direct you correctly — **who are you, and what brings you here today?**\n\nAre you from a government or regulatory body, an enterprise or bank, a global blockchain project entering Africa, or a Web3 startup?";

const quick: QuickReply[] = [
  { icon: "🏛️", label: "Government Ministry", msg: "I represent a government ministry exploring blockchain for public services" },
  { icon: "🌍", label: "Global Project", msg: "We are a global blockchain project seeking to enter African markets" },
  { icon: "🏢", label: "Enterprise / Bank", msg: "We are an enterprise or financial institution exploring blockchain integration" },
  { icon: "🚀", label: "Web3 Startup", msg: "I run a Web3 startup and need regulatory and strategy guidance" },
];

const Advisory = () => (
  <>
    <Helmet>
      <title>TATU — Pan-African Blockchain Advisory | Web Tatu Hub</title>
      <meta name="description" content="Talk to TATU, Web Tatu Hub's AI advisory assistant for governments, enterprises, and startups navigating blockchain adoption across Africa." />
      <link rel="canonical" href="https://webtatuhub.com/advisory" />
    </Helmet>
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-3">Meet TATU</h1>
            <p className="text-muted-foreground">Pan-African blockchain advisory — for governments, enterprises, institutions, and startups.</p>
          </div>
          <AgentChat agent="tatu" agentName="TATU" tagline="Pan-African Blockchain Advisory" initialMessage={initial} quickReplies={quick} />
        </div>
      </main>
      <Footer />
    </div>
  </>
);

export default Advisory;
