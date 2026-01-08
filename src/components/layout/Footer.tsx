import { Link } from "react-router-dom";
import { Container } from "./Container";
import { Github } from "lucide-react";

const footerLinks = {
  product: [
    { label: "Dashboard", href: "/dashboard" },
    { label: "AI Assistant", href: "/ai-assistant" },
    { label: "Request Help", href: "/request-help" },
    { label: "Live Session", href: "/live-session" },
  ],
  community: [
    { label: "Find Teams", href: "/community" },
    { label: "Profile", href: "/profile" },
    { label: "Leaderboard", href: "/community" },
  ],
  careers: [
    { label: "Join Us", href: "careers" },
    { label: "Open Positions", href: "careers" },
  ],
  legal: [
    { label: "Privacy & Terms", href: "privacy" },
  ],
};

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30">
      <Container size="xl">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
            {/* Product */}
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Community</h4>
              <ul className="space-y-3">
                {footerLinks.community.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Careers */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Careers</h4>
              <ul className="space-y-3">
                {footerLinks.careers.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Privacy & Terms */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Privacy & Terms</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* GitHub */}
            <div>
              <h4 className="font-semibold mb-4 text-white">GitHub</h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} CodePhilo. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built with 💜 for developers worldwide
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
