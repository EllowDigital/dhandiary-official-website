import { motion } from "framer-motion";
import { Star } from "lucide-react";

const PartnersSection = () => {
  const appStores = [
    {
      name: "Google Play",
      rating: "4.8",
      reviews: "10K+ Reviews",
      badge: (
        <svg viewBox="0 0 135 40" className="h-10 w-auto">
          <rect width="135" height="40" rx="5" fill="hsl(var(--foreground))" />
          <text x="67.5" y="14" textAnchor="middle" fill="hsl(var(--background))" fontSize="7" fontFamily="system-ui">GET IT ON</text>
          <text x="67.5" y="28" textAnchor="middle" fill="hsl(var(--background))" fontSize="12" fontWeight="bold" fontFamily="system-ui">Google Play</text>
        </svg>
      ),
    },
    {
      name: "APK Direct",
      rating: "4.9",
      reviews: "5K+ Downloads",
      badge: (
        <svg viewBox="0 0 135 40" className="h-10 w-auto">
          <rect width="135" height="40" rx="5" fill="hsl(var(--foreground))" />
          <text x="67.5" y="14" textAnchor="middle" fill="hsl(var(--background))" fontSize="7" fontFamily="system-ui">DOWNLOAD</text>
          <text x="67.5" y="28" textAnchor="middle" fill="hsl(var(--background))" fontSize="12" fontWeight="bold" fontFamily="system-ui">APK Direct</text>
        </svg>
      ),
    },
  ];

  const pressMentions = [
    { name: "TechCrunch", text: "TECHCRUNCH" },
    { name: "Product Hunt", text: "PRODUCT HUNT" },
    { name: "Android Authority", text: "ANDROID AUTHORITY" },
    { name: "XDA Developers", text: "XDA" },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* App Store Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Available On
          </h2>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {appStores.map((store, index) => (
              <motion.div
                key={store.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center gap-2"
              >
                <div className="hover:scale-105 transition-transform cursor-pointer">
                  {store.badge}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold text-foreground">{store.rating}</span>
                  <span className="text-xs text-muted-foreground">({store.reviews})</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Press Mentions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6">
            As Featured In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {pressMentions.map((mention, index) => (
              <motion.div
                key={mention.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="text-muted-foreground/60 hover:text-foreground transition-colors cursor-pointer"
              >
                <span className="text-lg md:text-xl font-bold tracking-wider">
                  {mention.text}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
