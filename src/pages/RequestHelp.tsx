import { useState } from "react";
import { MainLayout, Container, Section } from "@/components/layout";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientText } from "@/components/ui/gradient-text";
import { NeonButton } from "@/components/ui/neon-button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FloatingCodeBlocks } from "@/components/3d/FloatingCodeBlocks";
import CodeEditor from '@uiw/react-textarea-code-editor';
import {
  Bot,
  Code2,
  ArrowRight,
  Sparkles,
  Users,
  AlertCircle,
  Check,
  Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";

const techStack = [
  "JavaScript", "TypeScript", "React", "Vue", "Angular", "Node.js",
  "Python", "Django", "FastAPI", "Go", "Rust", "Java", "Spring",
  "PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST API", "Docker",
  "AWS", "GCP", "Kubernetes", "CI/CD", "Testing", "DevOps"
];

type Step = "describe" | "code" | "tech" | "ai-analysis" | "escalate";

export default function RequestHelp() {
  const [currentStep, setCurrentStep] = useState<Step>("describe");
  const [problem, setProblem] = useState("");
  const [codeSnippet, setCodeSnippet] = useState("");
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [aiAnalyzed, setAiAnalyzed] = useState(false);

  const steps: { id: Step; label: string; completed: boolean }[] = [
    { id: "describe", label: "Describe Problem", completed: problem.length > 10 },
    { id: "code", label: "Add Code", completed: codeSnippet.length > 0 },
    { id: "tech", label: "Select Tech", completed: selectedTech.length > 0 },
    { id: "ai-analysis", label: "AI Analysis", completed: aiAnalyzed },
    { id: "escalate", label: "Get Mentor", completed: false },
  ];

  const currentStepIndex = steps.findIndex(s => s.id === currentStep);

  const toggleTech = (tech: string) => {
    setSelectedTech(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const handleAiAnalysis = () => {
    setAiAnalyzed(true);
    setCurrentStep("escalate");
  };

  return (
    <MainLayout>
      <FloatingCodeBlocks />
      <Section spacing="lg">
        <Container size="lg">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl font-bold mb-3">
              Get <GradientText>Expert Help</GradientText>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Describe your problem, let AI analyze it, and optionally connect with a mentor.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center gap-2 mb-12 overflow-x-auto pb-2">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <button
                  onClick={() => setCurrentStep(step.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                    currentStep === step.id 
                      ? "bg-gradient-primary text-primary-foreground" 
                      : step.completed
                        ? "bg-primary/20 text-primary"
                        : "bg-muted text-muted-foreground"
                  )}
                >
                  {step.completed ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <span className="w-5 h-5 rounded-full border flex items-center justify-center text-xs">
                      {index + 1}
                    </span>
                  )}
                  <span className="hidden sm:inline">{step.label}</span>
                </button>
                {index < steps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-muted-foreground mx-2 shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="max-w-2xl mx-auto">
            {/* Step 1: Describe Problem */}
            {currentStep === "describe" && (
              <GlassCard className="animate-fade-in-up transform hover:scale-105 transition-transform duration-300 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Describe Your Problem</h2>
                    <p className="text-sm text-muted-foreground">Be as specific as possible</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="problem">What's the issue you're facing?</Label>
                    <Textarea
                      id="problem"
                      placeholder="e.g., I'm getting an infinite loop in my useEffect hook when fetching data. The component keeps re-rendering even though the dependency array is empty..."
                      className="mt-2 min-h-[150px] resize-none"
                      value={problem}
                      onChange={(e) => setProblem(e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground mt-2">
                      {problem.length}/500 characters
                    </p>
                  </div>

                  <NeonButton 
                    variant="primary" 
                    className="w-full"
                    disabled={problem.length < 10}
                    onClick={() => setCurrentStep("code")}
                  >
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </NeonButton>
                </div>
              </GlassCard>
            )}

            {/* Step 2: Add Code */}
            {currentStep === "code" && (
              <GlassCard className="animate-fade-in-up transform hover:scale-105 transition-transform duration-300 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Add Code Snippet</h2>
                    <p className="text-sm text-muted-foreground">Optional but helpful</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="code">Paste relevant code here</Label>
                    <CodeEditor
                      value={codeSnippet}
                      language="javascript"
                      placeholder={`useEffect(() => {\n  fetchData();\n}, []);`}
                      onChange={(evn) => setCodeSnippet(evn.target.value)}
                      padding={15}
                      data-color-mode="dark"
                      className="mt-2 min-h-[200px] rounded-md border border-border bg-muted/50 font-mono text-sm"
                      style={{
                        fontFamily: '"Fira Code", "Fira Mono", monospace',
                        fontSize: 14,
                      }}
                    />
                  </div>

                  <div className="flex gap-3">
                    <NeonButton 
                      variant="ghost" 
                      onClick={() => setCurrentStep("describe")}
                    >
                      Back
                    </NeonButton>
                    <NeonButton 
                      variant="primary" 
                      className="flex-1"
                      onClick={() => setCurrentStep("tech")}
                    >
                      {codeSnippet ? "Continue" : "Skip"}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </NeonButton>
                  </div>
                </div>
              </GlassCard>
            )}

            {/* Step 3: Select Tech Stack */}
            {currentStep === "tech" && (
              <GlassCard className="animate-fade-in-up transform hover:scale-105 transition-transform duration-300 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Select Technologies</h2>
                    <p className="text-sm text-muted-foreground">Help us match you with the right mentor</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {techStack.map((tech) => (
                    <button
                      key={tech}
                      onClick={() => toggleTech(tech)}
                      className={cn(
                        "px-3 py-1.5 rounded-full text-sm font-medium transition-all transform hover:scale-110 hover:shadow-lg active:scale-95",
                        selectedTech.includes(tech)
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "bg-muted text-muted-foreground hover:bg-muted/80 hover:shadow-md"
                      )}
                    >
                      {tech}
                    </button>
                  ))}
                </div>

                <div className="flex gap-3">
                  <NeonButton 
                    variant="ghost" 
                    onClick={() => setCurrentStep("code")}
                  >
                    Back
                  </NeonButton>
                  <NeonButton 
                    variant="primary" 
                    className="flex-1"
                    disabled={selectedTech.length === 0}
                    onClick={() => setCurrentStep("ai-analysis")}
                  >
                    Analyze with AI
                    <Bot className="w-4 h-4 ml-2" />
                  </NeonButton>
                </div>
              </GlassCard>
            )}

            {/* Step 4: AI Analysis */}
            {currentStep === "ai-analysis" && (
              <GlassCard glow="accent" className="animate-fade-in-up transform scale-105 shadow-2xl border-2 border-accent/20">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-xl bg-gradient-accent flex items-center justify-center animate-pulse-glow shadow-lg">
                    <Bot className="w-8 h-8 text-primary-foreground animate-bounce" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">AI Analysis</h2>
                    <p className="text-sm text-muted-foreground">Our AI is analyzing your problem in real-time</p>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-muted/30 border border-border/50 mb-6">
                  <div className="flex items-start gap-3">
                    <Bot className="w-5 h-5 text-accent mt-0.5" />
                    <div className="space-y-3 text-sm">
                      <p>Based on your description and the React/useEffect context, this looks like a common issue with effect dependencies.</p>
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Possible causes:</strong>
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>The fetchData function is recreated on every render</li>
                        <li>State updates inside the effect trigger re-renders</li>
                        <li>Missing cleanup function for async operations</li>
                      </ul>
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Suggested solution:</strong> Wrap fetchData in useCallback or move it inside useEffect.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <NeonButton 
                    variant="ghost" 
                    onClick={() => setCurrentStep("tech")}
                  >
                    Back
                  </NeonButton>
                  <NeonButton 
                    variant="outline"
                    className="flex-1"
                    onClick={handleAiAnalysis}
                  >
                    This solved it!
                    <Check className="w-4 h-4 ml-2" />
                  </NeonButton>
                  <NeonButton 
                    variant="primary" 
                    className="flex-1"
                    onClick={handleAiAnalysis}
                  >
                    Get Human Help
                    <Users className="w-4 h-4 ml-2" />
                  </NeonButton>
                </div>
              </GlassCard>
            )}

            {/* Step 5: Escalate to Mentor */}
            {currentStep === "escalate" && (
              <GlassCard glow="primary" className="animate-fade-in-up text-center transform scale-105 shadow-2xl border-2 border-primary/20">
                <div className="py-12">
                  <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-8 animate-pulse-glow shadow-xl">
                    <Users className="w-12 h-12 text-primary-foreground animate-bounce" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">
                    <GradientText>Finding Your Mentor</GradientText>
                  </h2>
                  <p className="text-muted-foreground mb-8 text-lg">
                    Matching you with an expert in {selectedTech.slice(0, 3).join(", ")}...
                  </p>
                  {/* Progress bar */}
                  <div className="w-full max-w-md mx-auto mb-6">
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-primary rounded-full animate-pulse" style={{ width: '60%' }} />
                    </div>
                  </div>
                  {/* Animated dots */}
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0s' }} />
                    <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Average wait time: 2-3 minutes</span>
                  </div>
                </div>
              </GlassCard>
            )}
          </div>
        </Container>
      </Section>
    </MainLayout>
  );
}
