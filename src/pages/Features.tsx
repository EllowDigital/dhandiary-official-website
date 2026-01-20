import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const features = [
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: "Income & Expense Tracking",
    description:
      "Log your daily income and expenses with just a few taps. Categorize transactions and keep a clear record of where your money goes.",
    highlight: true,
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: "Charts & Insights",
    description:
      "Visualize your spending patterns with clean, intuitive charts. Get meaningful insights into your financial habits at a glance.",
    highlight: true,
  },
  {
    icon: <WifiOff className="w-7 h-7" />,
    title: "Offline-First Database",
    description:
      "DhanDiary works fully offline. Your data is stored locally on your device and syncs automatically when you're back online.",
    highlight: true,
  },
  {
    icon: <Lock className="w-7 h-7" />,
    title: "Secure Authentication",
    description:
      "Sign in securely with email verification or use Google/GitHub OAuth. Your account is protected with modern security standards.",
    highlight: true,
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Privacy-Focused Design",
    description:
      "No ads, no trackers, no selling your data. DhanDiary respects your privacy and keeps your financial information confidential.",
    highlight: false,
  },
  {
    icon: <Database className="w-7 h-7" />,
    title: "Local Data Storage",
    description:
      "All your data is stored securely on your device. You're always in control of your information.",
    highlight: false,
  },
  {
    icon: <Eye className="w-7 h-7" />,
    title: "Clean, Simple Interface",
    description:
      "No clutter, no distractions. DhanDiary features a minimal UI that focuses on what matters most – your finances.",
    highlight: false,
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Lightweight & Fast",
    description:
      "Optimized for performance. DhanDiary is lightweight, uses minimal resources, and runs smoothly on any device.",
    highlight: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const Features = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-subtle-gradient overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Powerful Yet Simple
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Powerful Features,
              <span className="text-gradient block mt-2">
                Simple Experience
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage your personal finances, without the
              complexity. Built for speed, security, and simplicity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 lg:gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`group p-6 lg:p-8 rounded-2xl border transition-all duration-300 ${
                  feature.highlight
                    ? "bg-accent/50 border-primary/20 hover:border-primary/40"
                    : "bg-card border-border hover:border-primary/30"
                } hover:shadow-card`}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors ${
                    feature.highlight
                      ? "bg-primary text-primary-foreground"
                      : "bg-accent text-primary group-hover:bg-primary group-hover:text-primary-foreground"
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Experience These Features Today
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Download DhanDiary and start managing your finances the smart way.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/download">
                Download Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Features;
