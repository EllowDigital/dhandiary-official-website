import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Wifi,
  WifiOff,
  BarChart3,
  Lock,
  Star,
  Download,
  Users,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ScreenshotCarousel from "@/components/home/ScreenshotCarousel";
import FAQ from "@/components/home/FAQ";
import Testimonials from "@/components/home/Testimonials";
import HowItWorks from "@/components/home/HowItWorks";
import StatsCounter from "@/components/home/StatsCounter";
import ComparisonTable from "@/components/home/ComparisonTable";
import PartnersSection from "@/components/home/PartnersSection";

import ScrollReveal, {
  StaggerContainer,
  StaggerItem,
} from "@/components/home/ScrollReveal";
import { APP_CONFIG } from "@/lib/appConfig";

const features = [
  {
    icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Track Income & Expenses",
    description:
      "Log your daily transactions with ease. Clean, simple, and fast.",
  },
  {
    icon: <WifiOff className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Works Offline",
    description:
      "Full functionality without internet. Auto-syncs when you're back online.",
  },
  {
    icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Privacy First",
    description:
      "No ads, no trackers. Your financial data stays private and secure.",
  },
  {
    icon: <Lock className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Secure Login",
    description: "Email verification and OAuth support with Google & GitHub.",
  },
];

const stats = [
  {
    icon: <Download className="w-4 h-4 sm:w-5 sm:h-5" />,
    value: "1K+",
    label: "Downloads",
  },
  {
    icon: <Star className="w-4 h-4 sm:w-5 sm:h-5" />,
    value: "4.8",
    label: "Rating",
  },
  {
    icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />,
    value: "5K+",
    label: "Active Users",
  },
];

const Home = () => {
  return (
    <Layout>
      {/* Hero Section - Enhanced with Framer Motion */}
      <section className="relative overflow-hidden bg-subtle-gradient min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
            className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-accent/20 rounded-full blur-3xl"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative w-full">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Version {APP_CONFIG.version} — Now Available
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-4 sm:mb-6"
              >
                Your Personal
                <span className="text-gradient block mt-1 sm:mt-2">
                  Finance Companion
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-6 sm:mb-8 leading-relaxed"
              >
                Track income and expenses effortlessly. DhanDiary is fast,
                secure, offline-first, and designed for simplicity.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              >
                <Button
                  asChild
                  variant="hero"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Link to="/download">
                    Download Free
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="heroOutline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <Link to="/features">Explore Features</Link>
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-4 sm:gap-6 lg:gap-8 mt-8 sm:mt-10 justify-center lg:justify-start"
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center gap-1 sm:gap-1.5 text-primary mb-0.5 sm:mb-1">
                      {stat.icon}
                      <span className="font-display font-bold text-lg sm:text-xl text-foreground">
                        {stat.value}
                      </span>
                    </div>
                    <span className="text-muted-foreground text-xs sm:text-sm">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap items-center gap-2 sm:gap-4 lg:gap-6 mt-6 sm:mt-8 justify-center lg:justify-start"
              >
                <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground text-xs sm:text-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-background/50 border border-border">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  No Ads
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground text-xs sm:text-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-background/50 border border-border">
                  <Wifi className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  Offline First
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground text-xs sm:text-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-background/50 border border-border">
                  <Lock className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  Secure
                </div>
              </motion.div>
            </div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex justify-center lg:justify-end order-1 lg:order-2"
            >
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-hero-gradient opacity-20 sm:opacity-30 blur-3xl rounded-full scale-110 sm:scale-125" />

                {/* Phone Frame */}
                <div className="relative animate-float">
                  <div className="relative bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-[2rem] sm:rounded-[3rem] p-2 sm:p-3 shadow-elevated">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 sm:w-28 h-5 sm:h-7 bg-zinc-900 rounded-b-xl sm:rounded-b-2xl z-10 flex items-center justify-center">
                      <div className="w-12 sm:w-16 h-3 sm:h-4 bg-zinc-800 rounded-full" />
                    </div>
                    {/* Screen (add a top safe-area so the notch doesn't cover screenshot content) */}
                    <div className="relative bg-black rounded-[1.75rem] sm:rounded-[2.5rem] overflow-hidden pt-6 sm:pt-7">
                      <img
                        src="/img/Screenshot/1s.jpg"
                        alt="DhanDiary App Dashboard"
                        className="block w-48 sm:w-64 md:w-72 lg:w-80 h-auto object-cover"
                        loading="eager"
                      />
                    </div>
                    {/* Home Indicator */}
                    <div className="absolute bottom-1.5 sm:bottom-2 left-1/2 -translate-x-1/2 w-20 sm:w-28 h-1 sm:h-1.5 bg-zinc-600 rounded-full" />
                  </div>

                  {/* Floating Elements - Hidden on very small screens */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-card border border-border rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-elevated hidden xs:block"
                  >
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                        <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                      </div>
                      <div>
                        <p className="text-[10px] sm:text-xs text-muted-foreground">
                          Income
                        </p>
                        <p className="font-semibold text-green-500 text-xs sm:text-sm">
                          +₹25,000
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-card border border-border rounded-xl sm:rounded-2xl p-2 sm:p-3 shadow-elevated hidden xs:block"
                  >
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-[10px] sm:text-xs text-muted-foreground">
                          Savings
                        </p>
                        <p className="font-semibold text-primary text-xs sm:text-sm">
                          ₹12,500
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal
            animation="fadeUp"
            className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-16"
          >
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Why Choose DhanDiary?
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Built with simplicity and privacy at its core. Everything you
              need, nothing you don't.
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <StaggerItem key={index}>
                <div className="group h-full p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-accent flex items-center justify-center text-primary mb-3 sm:mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-1.5 sm:mb-2 text-sm sm:text-base">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal
            animation="fadeUp"
            delay={0.4}
            className="text-center mt-8 sm:mt-12"
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Link to="/features">
                View All Features
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* How It Works Section */}
      <ScrollReveal animation="fadeUp">
        <HowItWorks />
      </ScrollReveal>

      {/* Stats Counter Section */}
      <ScrollReveal animation="fadeUp">
        <StatsCounter />
      </ScrollReveal>

      {/* Partners/Featured Section */}
      <ScrollReveal animation="fadeUp">
        <PartnersSection />
      </ScrollReveal>

      {/* Screenshots Section */}
      <ScrollReveal animation="fadeUp">
        <ScreenshotCarousel />
      </ScrollReveal>

      {/* Comparison Table Section */}
      <ScrollReveal animation="fadeUp">
        <ComparisonTable />
      </ScrollReveal>

      {/* Testimonials Section */}
      <ScrollReveal animation="fadeUp">
        <Testimonials />
      </ScrollReveal>

      {/* FAQ Section */}
      <ScrollReveal animation="fadeUp">
        <FAQ />
      </ScrollReveal>


      {/* CTA Section */}
      <section className="section-padding bg-subtle-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="scale">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Ready to Take Control of Your Finances?
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 max-w-xl mx-auto">
                Download DhanDiary today and start your journey to better money
                management. Free, secure, and private.
              </p>
              <Button
                asChild
                variant="hero"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Link to="/download">
                  Get DhanDiary Now
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
