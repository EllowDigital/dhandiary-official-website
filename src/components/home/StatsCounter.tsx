import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Download, Users, Receipt, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: <Download className="w-6 h-6 sm:w-8 sm:h-8" />,
    value: 1000,
    suffix: "+",
    label: "Downloads",
    description: "Happy users worldwide",
  },
  {
    icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
    value: 5000,
    suffix: "+",
    label: "Active Users",
    description: "Managing finances daily",
  },
  {
    icon: <Receipt className="w-6 h-6 sm:w-8 sm:h-8" />,
    value: 500000,
    suffix: "+",
    label: "Transactions",
    description: "Tracked and organized",
  },
  {
    icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
    value: 98,
    suffix: "%",
    label: "Satisfaction",
    description: "User satisfaction rate",
  },
];

const AnimatedCounter = ({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, inView]);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num.toString();
  };

  return (
    <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
      {formatNumber(count)}
      {suffix}
    </span>
  );
};

const StatsCounter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-subtle-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Join our growing community of smart money managers
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-card border border-border rounded-2xl p-5 sm:p-6 lg:p-8 text-center group hover:border-primary/30 hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto rounded-xl sm:rounded-2xl bg-accent flex items-center justify-center text-primary mb-3 sm:mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                {stat.icon}
              </div>

              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                inView={isInView}
              />

              <h3 className="font-display font-semibold text-foreground text-sm sm:text-base mt-2 mb-1">
                {stat.label}
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm hidden sm:block">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
