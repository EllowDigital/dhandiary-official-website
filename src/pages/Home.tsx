import { Link } from "react-router-dom";
import {
  ArrowRight,
  Shield,
  Wifi,
  WifiOff,
  BarChart3,
  Smartphone,
  Lock,
  Star,
  Download,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ScreenshotCarousel from "@/components/home/ScreenshotCarousel";
import FAQ from "@/components/home/FAQ";
import { APP_CONFIG } from "@/lib/appConfig";

const features = [
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Track Income & Expenses",
    description:
      "Log your daily transactions with ease. Clean, simple, and fast.",
  },
  {
    icon: <WifiOff className="w-6 h-6" />,
    title: "Works Offline",
    description:
      "Full functionality without internet. Auto-syncs when you're back online.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Privacy First",
    description:
      "No ads, no trackers. Your financial data stays private and secure.",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Secure Login",
    description: "Email verification and OAuth support with Google & GitHub.",
  },
];

const stats = [
  { icon: <Download className="w-5 h-5" />, value: "10K+", label: "Downloads" },
  { icon: <Star className="w-5 h-5" />, value: "4.8", label: "Rating" },
  { icon: <Users className="w-5 h-5" />, value: "5K+", label: "Active Users" },
];

const Home = () => {
  return (
    <Layout>
      {/* Hero Section - Enhanced */}
      <section className="relative overflow-hidden bg-subtle-gradient">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-pulse">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Version {APP_CONFIG.version} — Now Available
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6">
                Your Personal
                <span className="text-gradient block mt-2">Finance Companion</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
                Track income and expenses effortlessly. DhanDiary is fast,
                secure, offline-first, and designed for simplicity.
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

              {/* Stats */}
              <div className="flex items-center gap-8 mt-10 justify-center lg:justify-start">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center gap-1.5 text-primary mb-1">
                      {stat.icon}
                      <span className="font-display font-bold text-xl text-foreground">
                        {stat.value}
                      </span>
                    </div>
                    <span className="text-muted-foreground text-sm">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-muted-foreground text-sm px-3 py-1.5 rounded-full bg-background/50 border border-border">
                  <Shield className="w-4 h-4 text-primary" />
                  No Ads
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm px-3 py-1.5 rounded-full bg-background/50 border border-border">
                  <Wifi className="w-4 h-4 text-primary" />
                  Offline First
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm px-3 py-1.5 rounded-full bg-background/50 border border-border">
                  <Lock className="w-4 h-4 text-primary" />
                  Secure
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="flex justify-center lg:justify-end animate-slide-up">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-hero-gradient opacity-30 blur-3xl rounded-full scale-125" />
                
                {/* Phone Frame */}
                <div className="relative animate-float">
                  <div className="relative bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-[3rem] p-3 shadow-elevated">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-zinc-900 rounded-b-2xl z-10 flex items-center justify-center">
                      <div className="w-16 h-4 bg-zinc-800 rounded-full" />
                    </div>
                    {/* Screen */}
                    <div className="relative bg-black rounded-[2.5rem] overflow-hidden">
                      <img
                        src="/img/Screenshot/1s.jpg"
                        alt="DhanDiary App Dashboard"
                        className="w-64 sm:w-72 lg:w-80 h-auto object-cover"
                        loading="eager"
                      />
                    </div>
                    {/* Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1.5 bg-zinc-600 rounded-full" />
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-card border border-border rounded-2xl p-3 shadow-elevated animate-bounce-slow">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-green-500 rotate-[-45deg]" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Income</p>
                        <p className="font-semibold text-green-500 text-sm">+₹25,000</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl p-3 shadow-elevated animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Savings</p>
                        <p className="font-semibold text-primary text-sm">₹12,500</p>
                      </div>
                    </div>
                  </div>
                </div>
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
              Built with simplicity and privacy at its core. Everything you
              need, nothing you don't.
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

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="section-padding bg-subtle-gradient">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Take Control of Your Finances?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Download DhanDiary today and start your journey to better money
              management. Free, secure, and private.
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
