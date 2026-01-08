import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";
import {
  Home,
  Users,
  Code2,
  Briefcase,
  MoreHorizontal,
  BookOpen,
  Info,
  Phone,
  LogIn,
  Menu,
  X,
  Building2,
  FileText,
  Users2
} from "lucide-react";
import { Container } from "./Container";
import { NeonButton } from "@/components/ui/neon-button";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  {
    label: "Mentorship",
    icon: Users,
    subLinks: [
      { path: "/find-mentor", label: "Find a Mentor" },
      { path: "/how-mentorship-works", label: "How Mentorship Works" },
      { path: "/become-a-mentor", label: "Become a Mentor" },
    ]
  },
  {
    label: "Expert Help",
    icon: Code2,
    subLinks: [
      { path: "/find-experts", label: "Find Experts" },
      { path: "/how-expert-help-works", label: "How Expert Help Works" },
      { path: "/python-experts", label: "Python Experts" },
      { path: "/react-experts", label: "React Experts" },
      { path: "/machine-learning-experts", label: "Machine Learning Experts" },
      { path: "/feature-selection-experts", label: "Feature Selection Experts" },
      { path: "/web-development-experts", label: "Web Development Experts" },
    ]
  },
  {
    label: "Freelancing",
    icon: Briefcase,
    subLinks: [
      { path: "/find-freelancers", label: "Find Freelancers" },
      { path: "/how-freelancing-works", label: "How Freelancing Works" },
      { path: "/become-a-freelancer", label: "Become a Freelancer" },
    ]
  },
];

const moreLinks = [
  { path: "/teams", label: "Teams", icon: Building2 },
  { path: "/devprojects", label: "DevProjects", icon: FileText },
  { path: "/blog", label: "Blog", icon: BookOpen },
  { path: "/resources", label: "Resources", icon: BookOpen },
  { path: "/about", label: "About", icon: Info },
  { path: "/careers", label: "Careers", icon: Users2 },
  { path: "/contact", label: "Contact", icon: Phone },
];

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <Container size="xl">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/vijay.png"
              alt="CodePhilo Logo"
              className="w-20 h-20 rounded-lg object-cover group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300"
            />
            <span className="text-xl font-bold text-gradient-primary">CodePhilo</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={cn(
                        "relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg flex items-center gap-2",
                        "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      )}
                    >
                      <Icon className="w-4 h-4" />
                      {link.label}
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    {link.subLinks.map((sub) => {
                      const isActive = location.pathname === sub.path;
                      return (
                        <DropdownMenuItem key={sub.path} asChild>
                          <Link
                            to={sub.path}
                            className={cn(
                              "flex items-center gap-2 w-full",
                              isActive ? "text-primary" : ""
                            )}
                          >
                            {sub.label}
                          </Link>
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            })}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg flex items-center gap-2",
                    "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  More
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {moreLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  const Icon = link.icon;
                  return (
                    <DropdownMenuItem key={link.path} asChild>
                      <Link
                        to={link.path}
                        className={cn(
                          "flex items-center gap-2 w-full",
                          isActive ? "text-primary" : ""
                        )}
                      >
                        <Icon className="w-4 h-4" />
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <Link to="/auth" className="hidden sm:block">
              <NeonButton variant="outline" size="sm">
                <LogIn className="w-4 h-4 mr-2" />
                Sign In
              </NeonButton>
            </Link>
            <Link to="/auth" className="hidden sm:block">
              <NeonButton variant="primary" size="sm">
                Get Started
              </NeonButton>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border/50 glass"
          >
            <Container>
              <nav className="py-4 space-y-1">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                      )}
                    >
                      <Icon className="w-5 h-5" />
                      {link.label}
                    </Link>
                  );
                })}
                <div className="border-t border-border/20 my-2"></div>
                {moreLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                      )}
                    >
                      <Icon className="w-5 h-5" />
                      {link.label}
                    </Link>
                  );
                })}
                <div className="pt-4 space-y-2">
                  <Link to="/auth" className="block">
                    <NeonButton variant="outline" size="md" className="w-full">
                      Sign In
                    </NeonButton>
                  </Link>
                  <Link to="/auth" className="block">
                    <NeonButton variant="primary" size="md" className="w-full">
                      Get Started
                    </NeonButton>
                  </Link>
                </div>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

