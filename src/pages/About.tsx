import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Target, Shield, ArrowRight, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const values = [
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Privacy First",
    description: "Your data is yours. We don't track, collect, or sell it.",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Simplicity",
    description: "Clean design that gets out of your way.",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Reliability",
    description: "Works offline, syncs seamlessly, never loses your data.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Accessibility",
    description: "Free for everyone, no hidden costs.",
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

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-subtle-gradient overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              About DhanDiary
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
              Built with passion for simple, secure personal finance management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="space-y-8">
            {/* Our Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 lg:p-8 rounded-2xl bg-card border border-border"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-primary">
                  <Heart className="w-6 h-6" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Our Story
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  DhanDiary was born from a simple frustration – most finance apps
                  are bloated with features, filled with ads, and often compromise
                  on privacy. We wanted something different: a clean, fast, and
                  secure way to track daily income and expenses without the noise.
                </p>
                <p>
                  Built and maintained independently by{" "}
                  <a
                    href="https://ellowdigital.space"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    EllowDigital
                  </a>
                  , DhanDiary is crafted with care for people who value simplicity
                  and privacy in their personal finance journey.
                </p>
              </div>
            </motion.div>

            {/* Our Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 lg:p-8 rounded-2xl bg-card border border-border"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-primary">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Our Mission
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  To provide everyone with a simple, secure, and reliable tool for
                  personal finance management – regardless of their technical
                  expertise or financial background.
                </p>
                <p>
                  We believe that tracking your money should be as natural as
                  checking the time. No learning curve, no subscriptions, no
                  compromises.
                </p>
              </div>
            </motion.div>

            {/* Our Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 lg:p-8 rounded-2xl bg-accent/50 border border-primary/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground">
                  <Shield className="w-6 h-6" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Our Values
                </h2>
              </div>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 gap-4"
              >
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-primary shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {value.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-6">
              Ready to start your journey with DhanDiary?
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/download">
                Download Free
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
