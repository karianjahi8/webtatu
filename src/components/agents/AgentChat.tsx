import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Send, RotateCcw, Loader2, CheckCircle2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

export interface QuickReply {
  icon: string;
  label: string;
  msg: string;
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface AgentChatProps {
  agent: "tatu" | "zara";
  agentName: string;
  tagline: string;
  initialMessage: string;
  quickReplies: QuickReply[];
  accentClass?: string; // optional override; defaults to gold
}

function renderContent(text: string) {
  return text.split("\n").map((line, i) => {
    if (!line.trim()) return <div key={i} className="h-2" />;
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    const rendered = parts.map((p, j) =>
      p.startsWith("**") && p.endsWith("**") ? (
        <strong key={j} className="text-primary font-semibold">{p.slice(2, -2)}</strong>
      ) : (
        <span key={j}>{p}</span>
      )
    );
    if (/^[\s\-•]/.test(line) && line.trim().length > 1) {
      return (
        <div key={i} className="flex gap-2 my-1">
          <span className="text-primary">◆</span>
          <span>{rendered}</span>
        </div>
      );
    }
    return <p key={i} className="my-1 leading-relaxed">{rendered}</p>;
  });
}

const AgentChat = ({ agent, agentName, tagline, initialMessage, quickReplies }: AgentChatProps) => {
  const [messages, setMessages] = useState<Message[]>([{ role: "assistant", content: initialMessage }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [captured, setCaptured] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = useCallback(async (override?: string) => {
    const text = (override ?? input).trim();
    if (!text || loading) return;
    if (/[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/.test(text)) setCaptured(true);
    setError(null);
    const next: Message[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const { data, error: invokeError } = await supabase.functions.invoke("agent-chat", {
        body: { messages: next, agent },
      });
      if (invokeError) throw new Error(invokeError.message);
      if (data?.error) throw new Error(data.error);
      const reply = data?.content;
      if (!reply) throw new Error("Empty response");
      setMessages((p) => [...p, { role: "assistant", content: reply }]);
    } catch (err: any) {
      setError(err.message || "Connection issue");
      setMessages((p) => [...p, { role: "assistant", content: "Connection issue. Please **retry** or email **webtatuhub@gmail.com**" }]);
    } finally {
      setLoading(false);
    }
  }, [input, messages, loading, agent]);

  const reset = () => {
    setMessages([{ role: "assistant", content: initialMessage }]);
    setInput("");
    setError(null);
    setCaptured(false);
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-card border border-border rounded-xl shadow-card overflow-hidden flex flex-col" style={{ height: "min(80vh, 720px)" }}>
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-gradient-to-r from-secondary/40 to-transparent">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Web Tatu Hub" className="w-10 h-10 rounded-lg object-contain ring-1 ring-primary/30" />
          <div>
            <div className="font-serif text-lg leading-tight text-foreground">{agentName}</div>
            <div className="text-xs text-muted-foreground tracking-wider uppercase">{tagline}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className={cn("w-2 h-2 rounded-full", loading ? "bg-amber-400 animate-pulse" : "bg-emerald-400")} />
            {loading ? "PROCESSING" : "ONLINE"}
          </div>
          <Button variant="ghost" size="sm" onClick={reset} className="text-xs">
            <RotateCcw className="w-3.5 h-3.5 mr-1" /> Reset
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-5 py-6 space-y-4">
        {messages.map((m, i) => (
          <div key={i} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
            <div
              className={cn(
                "max-w-[85%] px-4 py-3 rounded-xl text-sm",
                m.role === "user"
                  ? "bg-primary/15 text-foreground border border-primary/30"
                  : "bg-secondary/50 text-foreground border border-border"
              )}
            >
              {renderContent(m.content)}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="px-4 py-3 rounded-xl bg-secondary/50 border border-border">
              <Loader2 className="w-4 h-4 animate-spin text-primary" />
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Quick replies */}
      {messages.length === 1 && !loading && (
        <div className="px-5 pb-3 flex flex-wrap gap-2">
          {quickReplies.map((q, i) => (
            <button
              key={i}
              onClick={() => send(q.msg)}
              className="text-xs px-3 py-2 rounded-md border border-border bg-secondary/40 text-muted-foreground hover:text-primary hover:border-primary/50 transition-smooth"
            >
              <span className="mr-1">{q.icon}</span>
              {q.label}
            </button>
          ))}
        </div>
      )}

      {captured && (
        <div className="px-5 py-2 flex items-center gap-2 text-xs text-emerald-400 border-t border-border bg-emerald-500/5">
          <CheckCircle2 className="w-3.5 h-3.5" /> Contact captured — our advisory team will follow up within 24 hours.
        </div>
      )}

      {error && (
        <div className="px-5 py-2 text-xs text-destructive border-t border-border">⚠ {error}</div>
      )}

      {/* Input */}
      <div className="border-t border-border p-4 flex gap-2">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              send();
            }
          }}
          rows={1}
          placeholder={`Message ${agentName}…`}
          disabled={loading}
          maxLength={2000}
          className="flex-1 resize-none bg-background/60 border border-border rounded-md px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 min-h-[44px] max-h-32"
        />
        <Button onClick={() => send()} disabled={!input.trim() || loading} variant="hero" size="icon" className="h-11 w-11 shrink-0">
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        </Button>
      </div>
    </div>
  );
};

export default AgentChat;
