import { Link } from "react-router-dom";
import { ArrowRight, Shield, Wifi, WifiOff, BarChart3, Smartphone, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ScreenshotCarousel from "@/components/home/ScreenshotCarousel";
import appMockup from "@/assets/app-mockup.png";

const features = [
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Track Income & Expenses",
    description: "Log your daily transactions with ease. Clean, simple, and fast.",
  },
  {
    icon: <WifiOff className="w-6 h-6" />,
    title: "Works Offline",
    description: "Full functionality without internet. Auto-syncs when you're back online.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Privacy First",
    description: "No ads, no trackers. Your financial data stays private and secure.",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Secure Login",
    description: "Email verification and OAuth support with Google & GitHub.",
  },
];

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-subtle-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
                <Smartphone className="w-4 h-4" />
                Version 2.4.0 Now Available
              </div>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Your Personal
                <span className="text-gradient block">Finance Companion</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
                Track income and expenses effortlessly. DhanDiary is fast, secure, offline-first, and designed for simplicity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild variant="hero" size="xl">
                  <Link to="/download">
                    Download Free
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="heroOutline" size="xl">
                  <Link to="/features">Explore Features</Link>
                </Button>
              </div>

              <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Shield className="w-4 h-4 text-primary" />
                  No Ads
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Wifi className="w-4 h-4 text-primary" />
                  Offline First
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Lock className="w-4 h-4 text-primary" />
                  Secure
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end animate-slide-up">
              <div className="relative">
                <div className="absolute inset-0 bg-hero-gradient opacity-20 blur-3xl rounded-full scale-110" />
                <img
                  src={appMockup}
                  alt="DhanDiary App Preview"
                  className="relative w-72 sm:w-80 lg:w-96 animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose DhanDiary?
            </h2>
            <p className="text-muted-foreground text-lg">
              Built with simplicity and privacy at its core. Everything you need, nothing you don't.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {feature.icon}
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/features">
                View All Features
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <ScreenshotCarousel />

      {/* CTA Section */}
      <section className="section-padding bg-subtle-gradient">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Take Control of Your Finances?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Download DhanDiary today and start your journey to better money management. Free, secure, and private.
            </p>
            <Button asChild variant="hero" size="xl">
              <Link to="/download">
                Get DhanDiary Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
