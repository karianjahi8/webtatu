import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AgentChat, { QuickReply } from "@/components/agents/AgentChat";

const initial =
  "**Karibu. Africa Market Entry Intelligence Online.** 🌍\n\nI'm **ZARA** — Web Tatu Hub's Africa Market Entry specialist. My mission: help global blockchain projects penetrate African markets with precision — right regulation, right communities, right partners.\n\nAfrica is the world's fastest-growing crypto market. 54 countries. 620M+ mobile money users. First-mover windows are closing fast.\n\n**What type of protocol or project are you representing?**\n\n*(Exchange, DeFi, L1/L2, token launch, payment solution, NFT platform, wallet, or other?)*";

const quick: QuickReply[] = [
  { icon: "💱", label: "Crypto Exchange", msg: "We operate a crypto exchange and want to expand into African markets" },
  { icon: "🔗", label: "DeFi Protocol", msg: "We are a DeFi protocol seeking to grow users across Africa" },
  { icon: "🪙", label: "Token / ICO", msg: "We are launching a token and want to target African markets" },
  { icon: "⛓️", label: "L1 / L2 Chain", msg: "We are an L1 or L2 blockchain seeking African developer adoption" },
];

const GlobalEntry = () => (
  <>
    <Helmet>
      <title>ZARA — Africa Market Entry Intelligence | Web Tatu Hub</title>
      <meta name="description" content="ZARA helps global blockchain projects enter African markets — regulation, community, KOLs, exchange listings, and mobile-money rails." />
      <link rel="canonical" href="https://webtatuhub.com/global-entry" />
    </Helmet>
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-3">Meet ZARA</h1>
            <p className="text-muted-foreground">Africa market entry intelligence for global blockchain projects, exchanges, and token issuers.</p>
          </div>
          <AgentChat agent="zara" agentName="ZARA" tagline="Africa Market Entry Intelligence" initialMessage={initial} quickReplies={quick} />
        </div>
      </main>
      <Footer />
    </div>
  </>
);

export default GlobalEntry;
