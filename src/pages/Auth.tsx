import { useState } from "react";
import { MainLayout, Container, Section } from "@/components/layout";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientText } from "@/components/ui/gradient-text";
import { NeonButton } from "@/components/ui/neon-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FloatingCodeBlocks } from "@/components/3d/FloatingCodeBlocks";
import { Github, Mail, Eye, EyeOff, User, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";
import { account } from "@/lib/appwrite";
import { OAuthProvider } from "appwrite";
import { useNavigate } from "react-router-dom";

type AuthMode = "login" | "signup";
type UserRole = "learner" | "mentor";

export default function Auth() {
   const [mode, setMode] = useState<AuthMode>("login");
   const [role, setRole] = useState<UserRole>("learner");
   const [showPassword, setShowPassword] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const navigate = useNavigate();

   const handleOAuth = async (provider: string) => {
     try {
       setIsLoading(true);
       await account.createOAuth2Session(
         provider as any,
         `${window.location.origin}/dashboard`,
         `${window.location.origin}/auth`
       );
     } catch (error) {
       console.error(`${provider} login failed:`, error);
       setIsLoading(false);
     }
   };

  return (
    <MainLayout showFooter={false}>
      <FloatingCodeBlocks />
      <Section spacing="xl" className="min-h-[calc(100vh-4rem)] flex items-center">
        <Container size="xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Form */}
            <div className="max-w-md mx-auto w-full lg:mx-0">
              <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2">
                  {mode === "login" ? "Welcome back" : "Create your account"}
                </h1>
                <p className="text-muted-foreground">
                  {mode === "login" 
                    ? "Sign in to continue your learning journey" 
                    : "Join the global community of developers"
                  }
                </p>
              </div>

              {/* Mode Toggle */}
              <div className="flex p-1 rounded-lg bg-muted/50 mb-8">
                <button
                  onClick={() => setMode("login")}
                  className={cn(
                    "flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all",
                    mode === "login" 
                      ? "bg-background shadow text-foreground" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  Sign In
                </button>
                <button
                  onClick={() => setMode("signup")}
                  className={cn(
                    "flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all",
                    mode === "signup" 
                      ? "bg-background shadow text-foreground" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  Sign Up
                </button>
              </div>

              {/* OAuth */}
              <NeonButton
                variant="outline"
                size="lg"
                className="w-full mb-4"
                onClick={() => handleOAuth(OAuthProvider.Github)}
                disabled={isLoading}
              >
                <Github className="w-5 h-5 mr-2" />
                Continue with GitHub
              </NeonButton>
              <NeonButton
                variant="outline"
                size="lg"
                className="w-full mb-4"
                onClick={() => handleOAuth(OAuthProvider.Google)}
                disabled={isLoading}
              >
                <span className="w-5 h-5 mr-2 flex items-center justify-center bg-red-500 text-white rounded text-xs font-bold">G</span>
                Continue with Google
              </NeonButton>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>

              {/* Form */}
              <form className="space-y-4">
                {mode === "signup" && (
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      className="mt-1.5"
                    />
                  </div>
                )}

                <div>
                  <Label htmlFor="email">Email</Label>
                  <div className="relative mt-1.5">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="you@example.com" 
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <div className="relative mt-1.5">
                    <Input 
                      id="password" 
                      type={showPassword ? "text" : "password"} 
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {mode === "signup" && (
                    <p className="text-xs text-muted-foreground mt-1.5">
                      Must be at least 8 characters with one number and symbol
                    </p>
                  )}
                </div>

                {/* Role Selection (Signup only) */}
                {mode === "signup" && (
                  <div className="pt-2">
                    <Label>I want to</Label>
                    <div className="grid grid-cols-2 gap-3 mt-2">
                      <button
                        type="button"
                        onClick={() => setRole("learner")}
                        className={cn(
                          "flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all",
                          role === "learner"
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-muted-foreground"
                        )}
                      >
                        <GraduationCap className={cn(
                          "w-6 h-6",
                          role === "learner" ? "text-primary" : "text-muted-foreground"
                        )} />
                        <span className="font-medium text-sm">Learn & Grow</span>
                        <span className="text-xs text-muted-foreground text-center">
                          Get help from AI & mentors
                        </span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setRole("mentor")}
                        className={cn(
                          "flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all",
                          role === "mentor"
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-muted-foreground"
                        )}
                      >
                        <User className={cn(
                          "w-6 h-6",
                          role === "mentor" ? "text-primary" : "text-muted-foreground"
                        )} />
                        <span className="font-medium text-sm">Mentor Others</span>
                        <span className="text-xs text-muted-foreground text-center">
                          Share knowledge & earn
                        </span>
                      </button>
                    </div>
                  </div>
                )}

                <NeonButton variant="primary" size="lg" className="w-full mt-6">
                  {mode === "login" ? "Sign In" : "Create Account"}
                </NeonButton>

                {mode === "login" && (
                  <p className="text-center text-sm text-muted-foreground">
                    <a href="#" className="text-primary hover:underline">Forgot your password?</a>
                  </p>
                )}
              </form>
            </div>

            {/* Right - Illustration */}
            <div className="hidden lg:flex items-center justify-center">
              <GlassCard className="w-full max-w-lg aspect-square flex items-center justify-center relative overflow-hidden">
                {/* Abstract 3D-like illustration placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 via-transparent to-neon-blue/20" />
                <div className="relative text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-primary flex items-center justify-center animate-float">
                    <span className="text-4xl font-bold text-primary-foreground">&lt;/&gt;</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">
                    <GradientText>Join 10K+ Developers</GradientText>
                  </h3>
                  <p className="text-muted-foreground">
                    Learning, building, and growing together with AI-powered mentorship.
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>
        </Container>
      </Section>
    </MainLayout>
  );
}
