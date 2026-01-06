import { Link } from "react-router-dom";
import {
  BarChart3,
  WifiOff,
  Shield,
  Lock,
  TrendingUp,
  Database,
  Eye,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const features = [
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Income & Expense Tracking",
    description:
      "Log your daily income and expenses with just a few taps. Categorize transactions and keep a clear record of where your money goes.",
    highlight: true,
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Charts & Insights",
    description:
      "Visualize your spending patterns with clean, intuitive charts. Get meaningful insights into your financial habits at a glance.",
    highlight: true,
  },
  {
    icon: <WifiOff className="w-8 h-8" />,
    title: "Offline-First Database",
    description:
      "DhanDiary works fully offline. Your data is stored locally on your device and syncs automatically when you're back online.",
    highlight: true,
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Secure Authentication",
    description:
      "Sign in securely with email verification or use Google/GitHub OAuth. Your account is protected with modern security standards.",
    highlight: true,
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Privacy-Focused Design",
    description:
      "No ads, no trackers, no selling your data. DhanDiary respects your privacy and keeps your financial information confidential.",
    highlight: false,
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Local Data Storage",
    description:
      "All your data is stored securely on your device. You're always in control of your information.",
    highlight: false,
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Clean, Simple Interface",
    description:
      "No clutter, no distractions. DhanDiary features a minimal UI that focuses on what matters most – your finances.",
    highlight: false,
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightweight & Fast",
    description:
      "Optimized for performance. DhanDiary is lightweight, uses minimal resources, and runs smoothly on any device.",
    highlight: false,
  },
];

const Features = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-subtle-gradient section-padding">
        <div className="container mx-auto text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Powerful Features,
            <span className="text-gradient block">Simple Experience</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage your personal finances, without the complexity. Built for speed, security, and simplicity.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-6 lg:p-8 rounded-2xl border transition-all duration-300 ${
                  feature.highlight
                    ? "bg-accent/50 border-primary/20 hover:border-primary/40"
                    : "bg-card border-border hover:border-primary/30"
                } hover:shadow-card`}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                    feature.highlight
                      ? "bg-primary text-primary-foreground"
                      : "bg-accent text-primary"
                  }`}
                >
                  {feature.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="container mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Experience These Features Today
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Download DhanDiary and start managing your finances the smart way.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/download">
              Download Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Features;
