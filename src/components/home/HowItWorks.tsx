import { motion } from "framer-motion";
import { Download, UserPlus, Wallet, PieChart, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <Download className="w-6 h-6" />,
    title: "Download the App",
    description: "Get DhanDiary free from our website. Quick install, no bloatware.",
  },
  {
    number: "02",
    icon: <UserPlus className="w-6 h-6" />,
    title: "Create Your Account",
    description: "Sign up with email or continue with Google. Takes less than a minute.",
  },
  {
    number: "03",
    icon: <Wallet className="w-6 h-6" />,
    title: "Add Transactions",
    description: "Log your income and expenses with just a few taps. Fast and intuitive.",
  },
  {
    number: "04",
    icon: <PieChart className="w-6 h-6" />,
    title: "Track & Analyze",
    description: "View beautiful charts and insights to understand your spending habits.",
  },
];

const HowItWorks = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Get started with DhanDiary in just 4 simple steps
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Mobile Arrow */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute -bottom-4 left-1/2 -translate-x-1/2 sm:hidden">
                    <ArrowRight className="w-5 h-5 text-primary/50 rotate-90" />
                  </div>
                )}

                <div className="relative bg-card border border-border rounded-2xl p-6 sm:p-8 text-center group hover:border-primary/30 hover:shadow-card transition-all duration-300 h-full">
                  {/* Step Number */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                    Step {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-accent flex items-center justify-center text-primary mb-4 sm:mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-semibold text-foreground text-base sm:text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Desktop Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
