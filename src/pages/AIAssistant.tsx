import { useState, useEffect, useRef } from "react";
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { Components } from 'react-markdown';
import { MainLayout, Container } from "@/components/layout";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientText } from "@/components/ui/gradient-text";
import { NeonButton } from "@/components/ui/neon-button";
import { Input } from "@/components/ui/input";
import { FloatingCodeBlocks } from "@/components/3d/FloatingCodeBlocks";
import {
  Bot,
  Send,
  Plus,
  MessageSquare,
  Clock,
  Sparkles,
  Code2,
  Copy,
  Check,
  Trash2,
  Download,
  FolderOpen
} from "lucide-react";
import { cn } from "@/lib/utils";

const conversations = [
  { id: 1, title: "React useEffect cleanup", date: "Today", topic: "React", active: true },
  { id: 2, title: "TypeScript generics", date: "Yesterday", topic: "TypeScript", active: false },
  { id: 3, title: "Next.js API routes", date: "Jan 5", topic: "Next.js", active: false },
  { id: 4, title: "GraphQL mutations", date: "Jan 4", topic: "GraphQL", active: false },
  { id: 5, title: "Docker compose setup", date: "Jan 3", topic: "DevOps", active: false },
  { id: 6, title: "CSS Grid layouts", date: "Jan 2", topic: "CSS", active: false },
  { id: 7, title: "Node.js streams", date: "Jan 1", topic: "Node.js", active: false },
];

const messages = [
  {
    id: 1,
    role: "user",
    content: "How do I properly clean up subscriptions in useEffect?",
    time: "2:30 PM",
  },
  {
    id: 2,
    role: "assistant",
    content: `Great question! When working with subscriptions, WebSocket connections, or any async operations in useEffect, you need to return a cleanup function to prevent memory leaks.

Here's the pattern:

\`\`\`typescript
useEffect(() => {
  const subscription = someAPI.subscribe(data => {
    setData(data);
  });

  // Cleanup function
  return () => {
    subscription.unsubscribe();
  };
}, []);
\`\`\`

**Key points:**
1. The cleanup function runs when the component unmounts
2. It also runs before the effect runs again (if dependencies change)
3. For async operations, you might need an "isMounted" flag

Would you like me to show you the async pattern with a flag?`,
    time: "2:30 PM",
  },
  {
    id: 3,
    role: "user",
    content: "Yes, please show me the async pattern!",
    time: "2:31 PM",
  },
  {
    id: 4,
    role: "assistant",
    content: `Here's the robust async pattern:

\`\`\`typescript
useEffect(() => {
  let isMounted = true;
  const controller = new AbortController();

  const fetchData = async () => {
    try {
      const response = await fetch('/api/data', {
        signal: controller.signal
      });
      const data = await response.json();
      
      // Only update state if still mounted
      if (isMounted) {
        setData(data);
      }
    } catch (error) {
      if (error.name !== 'AbortError' && isMounted) {
        setError(error);
      }
    }
  };

  fetchData();

  return () => {
    isMounted = false;
    controller.abort();
  };
}, []);
\`\`\`

This pattern:
- Uses AbortController to cancel fetch requests
- Checks isMounted before state updates
- Ignores AbortError (expected when cancelling)

This is the most bulletproof way to handle async in useEffect! 🚀`,
    time: "2:32 PM",
  },
];

function TypingIndicator() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? "" : prev + ".");
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 mb-2">
      <div className="w-6 h-6 rounded-lg bg-gradient-accent flex items-center justify-center">
        <Bot className="w-3 h-3 text-primary-foreground" />
      </div>
      <span className="text-sm font-medium">CodePhilo AI</span>
      <div className="flex items-center">
        <span className="text-muted-foreground">is thinking{dots}</span>
      </div>
    </div>
  );
}

export default function AIAssistant() {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState<number | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [currentMessages, setCurrentMessages] = useState(messages);

  const copyCode = (id: number) => {
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now(),
      role: "user" as const,
      content: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setCurrentMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage = {
        id: Date.now() + 1,
        role: "assistant" as const,
        content: "Thanks for your question! I'm processing your request and will provide a detailed response shortly. This is a simulated response to demonstrate the dynamic messaging functionality.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setCurrentMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <MainLayout showFooter={false}>
      <FloatingCodeBlocks />
      <div className="h-[calc(100vh-4rem)] flex relative z-10">
        {/* Sidebar */}
        <div className="w-64 border-r border-border/50 flex flex-col bg-card/30">
          <div className="p-4 border-b border-border/50">
            <NeonButton variant="primary" className="w-full">
              <Plus className="w-4 h-4 mr-2" />
              New Chat
            </NeonButton>
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            {Object.entries(
              conversations.reduce((acc, convo) => {
                if (!acc[convo.topic]) acc[convo.topic] = [];
                acc[convo.topic].push(convo);
                return acc;
              }, {} as Record<string, typeof conversations>)
            ).map(([topic, convos]) => (
              <div key={topic} className="mb-4">
                <div className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  <FolderOpen className="w-3 h-3" />
                  {topic}
                </div>
                {convos.map((convo) => (
                  <button
                    key={convo.id}
                    className={cn(
                      "w-full text-left p-3 rounded-lg mb-1 group transition-colors",
                      convo.active
                        ? "bg-primary/10 text-foreground"
                        : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                    )}
                  >
                    <div className="flex items-start gap-2">
                      <MessageSquare className="w-4 h-4 mt-0.5 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{convo.title}</p>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {convo.date}
                        </p>
                      </div>
                      <Trash2 className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive" />
                    </div>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="h-14 border-b border-border/50 flex items-center justify-between px-6 bg-card/50 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                <Bot className="w-4 h-4 text-muted-foreground" />
              </div>
              <div>
                <h1 className="font-semibold text-foreground">AI Assistant</h1>
                <p className="text-xs text-muted-foreground">Powered by CodePhilo AI</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  const conversationText = currentMessages.map(msg =>
                    `${msg.role === 'user' ? 'You' : 'AI'}: ${msg.content}\n`
                  ).join('\n');
                  const blob = new Blob([conversationText], { type: 'text/plain' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'conversation.txt';
                  a.click();
                  URL.revokeObjectURL(url);
                }}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="w-4 h-4 text-accent" />
                <span>Context-aware responses</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {currentMessages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "flex",
                  msg.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-3xl",
                    msg.role === "user" ? "text-right" : ""
                  )}
                >
                  {msg.role === "assistant" && (
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 rounded-lg bg-gradient-accent flex items-center justify-center">
                        <Bot className="w-3 h-3 text-primary-foreground" />
                      </div>
                      <span className="text-sm font-medium">CodePhilo AI</span>
                    </div>
                  )}
                  <div
                    className={cn(
                      "rounded-xl p-4 prose prose-sm max-w-none",
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground prose-invert"
                        : "bg-muted/50 dark:prose-invert"
                    )}
                  >
                    <ReactMarkdown
                      components={{
                        code: ({ className, children, ...props }) => {
                          const match = /language-(\w+)/.exec(className || '');
                          const isInline = !match;
                          if (!isInline && match) {
                            return (
                              <div className="relative my-3">
                                <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                                  <span className="flex items-center gap-1">
                                    <Code2 className="w-3 h-3" />
                                    {match[1]}
                                  </span>
                                  <button
                                    onClick={() => {
                                      navigator.clipboard.writeText(String(children).replace(/\n$/, ''));
                                      setCopied(msg.id);
                                      setTimeout(() => setCopied(null), 2000);
                                    }}
                                    className="flex items-center gap-1 hover:text-foreground"
                                  >
                                    {copied === msg.id ? (
                                      <Check className="w-3 h-3 text-green-500" />
                                    ) : (
                                      <Copy className="w-3 h-3" />
                                    )}
                                  </button>
                                </div>
                                <SyntaxHighlighter
                                  language={match[1]}
                                  PreTag="div"
                                  className="rounded-md"
                                >
                                  {String(children).replace(/\n$/, '')}
                                </SyntaxHighlighter>
                              </div>
                            );
                          }
                          return (
                            <code className={className} {...props}>
                              {children}
                            </code>
                          );
                        },
                      }}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  </div>
                  <span className="text-xs text-muted-foreground mt-1 block">
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="max-w-3xl">
                  <TypingIndicator />
                  <div className="rounded-xl p-4 bg-muted/50">
                    <div className="animate-pulse text-sm text-muted-foreground">
                      Generating response...
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Follow-up suggestions */}
            {!isTyping && currentMessages.length > 0 && (
              <div className="flex justify-start">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-lg bg-gradient-accent flex items-center justify-center">
                      <Sparkles className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-medium">Suggested follow-ups</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Can you explain this in more detail?",
                      "Show me a practical example",
                      "What are the common pitfalls?",
                      "How does this compare to alternatives?"
                    ].map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => setInput(suggestion)}
                        className="px-3 py-2 text-sm bg-muted/50 hover:bg-muted rounded-lg transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border/50">
            <Container size="md" className="px-0">
              <div className="flex gap-3">
                <Input
                  placeholder="Ask me anything about coding..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1 h-12"
                />
                <NeonButton
                  variant="primary"
                  size="lg"
                  className="px-6"
                  onClick={handleSendMessage}
                  disabled={!input.trim() || isTyping}
                >
                  <Send className="w-5 h-5" />
                </NeonButton>
              </div>
              <p className="text-xs text-center text-muted-foreground mt-3">
                AI can make mistakes. Consider verifying important information.
              </p>
            </Container>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
