import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import RequestHelp from "./pages/RequestHelp";
import LiveSession from "./pages/LiveSession";
import AIAssistant from "./pages/AIAssistant";
import Profile from "./pages/Profile";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";

// Mentorship
import FindAMentor from "./pages/FindAMentor";
import HowMentorshipWorks from "./pages/HowMentorshipWorks";
import BecomeAMentor from "./pages/BecomeAMentor";

// Expert Help
import FindExperts from "./pages/FindExperts";
import HowExpertHelpWorks from "./pages/HowExpertHelpWorks";
import PythonExperts from "./pages/PythonExperts";
import ReactExperts from "./pages/ReactExperts";
import MachineLearningExperts from "./pages/MachineLearningExperts";
import FeatureSelectionExperts from "./pages/FeatureSelectionExperts";
import WebDevelopmentExperts from "./pages/WebDevelopmentExperts";

// Freelancing
import FindFreelancers from "./pages/FindFreelancers";
import HowFreelancingWorks from "./pages/HowFreelancingWorks";
import BecomeAFreelancer from "./pages/BecomeAFreelancer";

// More
import Teams from "./pages/Teams";
import DevProjects from "./pages/DevProjects";
import Blog from "./pages/Blog";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="dark">
          <MainLayout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/request-help" element={<RequestHelp />} />
              <Route path="/live-session" element={<LiveSession />} />
              <Route path="/ai-assistant" element={<AIAssistant />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/community" element={<Community />} />

              {/* Mentorship */}
              <Route path="/find-mentor" element={<FindAMentor />} />
              <Route path="/how-mentorship-works" element={<HowMentorshipWorks />} />
              <Route path="/become-a-mentor" element={<BecomeAMentor />} />

              {/* Expert Help */}
              <Route path="/find-experts" element={<FindExperts />} />
              <Route path="/how-expert-help-works" element={<HowExpertHelpWorks />} />
              <Route path="/python-experts" element={<PythonExperts />} />
              <Route path="/react-experts" element={<ReactExperts />} />
              <Route path="/machine-learning-experts" element={<MachineLearningExperts />} />
              <Route path="/feature-selection-experts" element={<FeatureSelectionExperts />} />
              <Route path="/web-development-experts" element={<WebDevelopmentExperts />} />

              {/* Freelancing */}
              <Route path="/find-freelancers" element={<FindFreelancers />} />
              <Route path="/how-freelancing-works" element={<HowFreelancingWorks />} />
              <Route path="/become-a-freelancer" element={<BecomeAFreelancer />} />

              {/* More */}
              <Route path="/teams" element={<Teams />} />
              <Route path="/devprojects" element={<DevProjects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </MainLayout>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
