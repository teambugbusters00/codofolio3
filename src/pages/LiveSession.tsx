import { useState, useEffect } from "react";
import { MainLayout, Container } from "@/components/layout";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientText } from "@/components/ui/gradient-text";
import { NeonButton } from "@/components/ui/neon-button";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FloatingCodeBlocks } from "@/components/3d/FloatingCodeBlocks";
import {
  Bot,
  Video,
  Mic,
  MicOff,
  VideoOff,
  Phone,
  Send,
  Sparkles,
  Clock,
  Settings,
  Maximize2,
  GripVertical,
  Star
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const mockMessages = [
  {
    id: 1,
    sender: "mentor",
    name: "Marcus J.",
    message: "Hey! I see you're having trouble with the useEffect hook. Let me share my screen and show you the issue.",
    time: "2:34 PM",
  },
  {
    id: 2,
    sender: "user",
    name: "You",
    message: "Thanks! Yes, the component keeps re-rendering even with an empty dependency array.",
    time: "2:35 PM",
  },
  {
    id: 3,
    sender: "mentor",
    name: "Marcus J.",
    message: "I see the problem. Your fetchData function is defined outside useEffect. Let's fix that.",
    time: "2:36 PM",
  },
];

const aiSuggestions = [
  "Consider using useCallback for the fetchData function",
  "Add a cleanup function to prevent state updates on unmounted components",
  "Check if the API response structure matches your state shape",
];

export default function LiveSession() {
  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);
  const [message, setMessage] = useState("");

  return (
    <MainLayout showFooter={false}>
      <FloatingCodeBlocks />
      <div className="h-[calc(100vh-4rem)] flex flex-col relative z-10">
        {/* Session Header */}
        <div className="h-14 border-b border-border/50 glass flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-medium">Live Session with Marcus J.</span>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Clock className="w-3 h-3" />
              12:34
            </span>
          </div>
          <div className="flex items-center gap-2">
            <NeonButton variant="ghost" size="sm">
              <Settings className="w-4 h-4" />
            </NeonButton>
            <NeonButton variant="ghost" size="sm">
              <Maximize2 className="w-4 h-4" />
            </NeonButton>
            <NeonButton variant="outline" size="sm" className="!bg-destructive !text-destructive-foreground hover:!bg-destructive/90 !border-destructive">
              <Phone className="w-4 h-4 mr-2" />
              End Session
            </NeonButton>
          </div>
        </div>

        {/* Main Content - Three Panel Layout */}
        <div className="flex-1 overflow-hidden">
          <ResizablePanelGroup direction="horizontal" className="h-full">
            {/* Left Panel - Video/Chat */}
            <ResizablePanel defaultSize={30} minSize={25}>
              <div className="h-full flex flex-col border-r border-border/50">
                {/* Video Section */}
                <div className="p-4 border-b border-border/50">
                  <GlassCard className="aspect-video relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-neon-blue/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-2">
                          <span className="text-2xl font-bold text-primary-foreground">MJ</span>
                        </div>
                        <span className="text-sm text-muted-foreground">Marcus J.</span>
                      </div>
                    </div>
                    {/* Self video preview */}
                    <div className="absolute bottom-3 right-3 w-20 h-14 rounded-lg bg-card border border-border/50 flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">You</span>
                    </div>
                  </GlassCard>

                  {/* Video Controls */}
                  <div className="flex items-center justify-center gap-3 mt-4">
                    <button
                      onClick={() => setMicOn(!micOn)}
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                        micOn ? "bg-muted hover:bg-muted/80" : "bg-destructive"
                      )}
                    >
                      {micOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
                    </button>
                    <button
                      onClick={() => setVideoOn(!videoOn)}
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                        videoOn ? "bg-muted hover:bg-muted/80" : "bg-destructive"
                      )}
                    >
                      {videoOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Chat Section */}
                <div className="flex-1 flex flex-col">
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {mockMessages.map((msg) => (
                      <div
                        key={msg.id}
                        className={cn(
                          "flex",
                          msg.sender === "user" ? "justify-end" : "justify-start"
                        )}
                      >
                        <div
                          className={cn(
                            "max-w-[80%] rounded-lg p-3",
                            msg.sender === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted"
                          )}
                        >
                          <p className="text-sm">{msg.message}</p>
                          <span className="text-xs opacity-70 mt-1 block">{msg.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chat Input */}
                  <div className="p-4 border-t border-border/50">
                    <div className="flex gap-2">
                      <Input
                        placeholder="Type a message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="flex-1"
                      />
                      <NeonButton variant="primary" size="sm">
                        <Send className="w-4 h-4" />
                      </NeonButton>
                    </div>
                  </div>
                </div>
              </div>
            </ResizablePanel>

            <ResizableHandle withHandle className="bg-border/50">
              <GripVertical className="w-3 h-3 text-muted-foreground" />
            </ResizableHandle>

            {/* Center Panel - Code Editor */}
            <ResizablePanel defaultSize={45} minSize={30}>
              <div className="h-full flex flex-col">
                <div className="h-10 border-b border-border/50 flex items-center px-4">
                  <span className="text-sm font-medium">Shared Code</span>
                  <span className="text-xs text-muted-foreground ml-2">useEffect.tsx</span>
                </div>
                <div className="flex-1 p-4 overflow-auto">
                  <pre className="code-block h-full overflow-auto">
                    <code className="text-sm">{`import { useState, useEffect, useCallback } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Move fetchData inside useEffect
  // or wrap it in useCallback
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/data');
      const json = await response.json();
      setData(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []); // No dependencies needed

  useEffect(() => {
    fetchData();
    
    // Cleanup function for async operations
    return () => {
      // Cancel any pending requests here
    };
  }, [fetchData]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return <div>{JSON.stringify(data)}</div>;
}`}</code>
                  </pre>
                </div>
              </div>
            </ResizablePanel>

            <ResizableHandle withHandle className="bg-border/50">
              <GripVertical className="w-3 h-3 text-muted-foreground" />
            </ResizableHandle>

            {/* Right Panel - AI Assistant */}
            <ResizablePanel defaultSize={25} minSize={20}>
              <div className="h-full flex flex-col border-l border-border/50">
                <div className="h-10 border-b border-border/50 flex items-center px-4 gap-2">
                  <Bot className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium">AI Assistant</span>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium">Real-time Suggestions</span>
                    </div>
                    <ul className="space-y-2">
                      {aiSuggestions.map((suggestion, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-4 h-4 rounded-full bg-accent/20 text-accent text-xs flex items-center justify-center shrink-0 mt-0.5">
                            {index + 1}
                          </span>
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <GlassCard className="p-3">
                    <h4 className="text-sm font-medium mb-2">Related Resources</h4>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href="#" className="text-primary hover:underline">React useEffect documentation</a>
                      </li>
                      <li>
                        <a href="#" className="text-primary hover:underline">useCallback vs useMemo guide</a>
                      </li>
                      <li>
                        <a href="#" className="text-primary hover:underline">Handling async in React</a>
                      </li>
                    </ul>
                  </GlassCard>

                  <GlassCard className="p-3">
                    <h4 className="text-sm font-medium mb-2">Session Summary</h4>
                    <p className="text-sm text-muted-foreground">
                      Topic: useEffect infinite loop issue<br />
                      Key insight: Function definition placement<br />
                      Solution: useCallback or inline definition
                    </p>
                  </GlassCard>
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    </MainLayout>
  );
}
