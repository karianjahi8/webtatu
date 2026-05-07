import { useState } from "react";
import { Link } from "react-router-dom";
import { MessageSquare, X, Sparkles, Globe2 } from "lucide-react";
import { cn } from "@/lib/utils";

const AgentLauncher = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="bg-card border border-border rounded-xl shadow-card p-4 w-72 animate-fade-in">
          <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Talk to an AI Advisor</div>
          <Link
            to="/advisory"
            onClick={() => setOpen(false)}
            className="flex items-start gap-3 p-3 rounded-lg border border-border hover:border-primary/50 transition-smooth mb-2 group"
          >
            <Sparkles className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <div>
              <div className="font-semibold text-foreground group-hover:text-primary transition-smooth">TATU</div>
              <div className="text-xs text-muted-foreground">Pan-African Blockchain Advisory</div>
            </div>
          </Link>
          <Link
            to="/global-entry"
            onClick={() => setOpen(false)}
            className="flex items-start gap-3 p-3 rounded-lg border border-border hover:border-primary/50 transition-smooth group"
          >
            <Globe2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <div>
              <div className="font-semibold text-foreground group-hover:text-primary transition-smooth">ZARA</div>
              <div className="text-xs text-muted-foreground">Africa Market Entry Intelligence</div>
            </div>
          </Link>
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open AI advisors"
        className={cn(
          "w-14 h-14 rounded-full bg-gradient-gold text-primary-foreground shadow-gold flex items-center justify-center transition-smooth hover:scale-105 active:scale-95"
        )}
      >
        {open ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default AgentLauncher;
