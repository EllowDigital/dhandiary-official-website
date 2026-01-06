import { Link } from "react-router-dom";
import { Heart, Target, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-subtle-gradient section-padding">
        <div className="container mx-auto text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            About DhanDiary
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Built with passion for simple, secure personal finance management.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container mx-auto container-narrow">
          <div className="prose prose-lg max-w-none">
            <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-primary">
                  <Heart className="w-5 h-5" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground m-0">
                  Our Story
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                DhanDiary was born from a simple frustration – most finance apps are bloated with features, filled with ads, and often compromise on privacy. We wanted something different: a clean, fast, and secure way to track daily income and expenses without the noise.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Built and maintained independently by EllowDigital, DhanDiary is crafted with care for people who value simplicity and privacy in their personal finance journey.
              </p>
            </div>

            <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-primary">
                  <Target className="w-5 h-5" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground m-0">
                  Our Mission
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To provide everyone with a simple, secure, and reliable tool for personal finance management – regardless of their technical expertise or financial background.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We believe that tracking your money should be as natural as checking the time. No learning curve, no subscriptions, no compromises.
              </p>
            </div>

            <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-primary">
                  <Shield className="w-5 h-5" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground m-0">
                  Our Values
                </h2>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-foreground">Privacy First:</strong> Your data is yours. We don't track, collect, or sell it.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-foreground">Simplicity:</strong> Clean design that gets out of your way.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-foreground">Reliability:</strong> Works offline, syncs seamlessly, never loses your data.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-foreground">Accessibility:</strong> Free for everyone, no hidden costs.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Ready to start your journey with DhanDiary?
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/download">
                Download Free
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
