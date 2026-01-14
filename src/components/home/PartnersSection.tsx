import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import { APP_CONFIG, isApkDownloadLinkValid } from "@/lib/appConfig";

const PartnersSection = () => {
  const apkValid = isApkDownloadLinkValid();

  const appStores = [
    {
      name: "Indus App Store",
      rating: "4.8",
      reviews: "25+",
      url: APP_CONFIG.downloads.indus || "https://indusapp.store/gfda9h89",
      badge: (
        <img
          alt="Get it on Indus Appstore"
          src="https://docstore.indusappstore.com/public/external/developerdashboard-static/badge-black-full-color-english.png"
          className="h-12 w-auto"
          loading="lazy"
        />
      ),
    },
    {
      name: "Amazon Appstore",
      rating: "4.9",
      reviews: "25+",
      url: APP_CONFIG.downloads.amazon,
      badge: (
        <svg viewBox="0 0 135 40" className="h-12 w-auto">
          <rect width="135" height="40" rx="5" fill="hsl(var(--foreground))" />
          <text
            x="67.5"
            y="14"
            textAnchor="middle"
            fill="hsl(var(--background))"
            fontSize="7"
            fontFamily="system-ui"
          >
            AVAILABLE ON
          </text>
          <text
            x="67.5"
            y="28"
            textAnchor="middle"
            fill="hsl(var(--background))"
            fontSize="11"
            fontWeight="bold"
            fontFamily="system-ui"
          >
            Amazon Appstore
          </text>
        </svg>
      ),
    },
    {
      name: "Expo APK",
      url: apkValid ? APP_CONFIG.downloads.apk : "",
      disabledTitle: "Expo APK link expired (30-day limit)",
      badge: (
        <svg viewBox="0 0 135 40" className="h-12 w-auto">
          <rect width="135" height="40" rx="6" fill="hsl(var(--foreground))" />
          <text
            x="67.5"
            y="14"
            textAnchor="middle"
            fill="hsl(var(--background))"
            fontSize="7"
            fontFamily="system-ui"
          >
            POWERED BY
          </text>
          <text
            x="67.5"
            y="28"
            textAnchor="middle"
            fill="hsl(var(--background))"
            fontSize="11"
            fontWeight="bold"
            fontFamily="system-ui"
          >
            Expo (APK)
          </text>
        </svg>
      ),
    },
    {
      name: "Huawei AppGallery",
      rating: "4.9",
      reviews: "25+",
      url: APP_CONFIG.downloads.huawei,
      badge: (
        <>
          <img
            src="/img/Appstores/Huawei-light.png"
            alt="Huawei AppGallery"
            className="h-12 w-auto dark:hidden"
            loading="lazy"
          />
          <img
            src="/img/Appstores/Huawei-dark.png"
            alt="Huawei AppGallery"
            className="h-12 w-auto hidden dark:block"
            loading="lazy"
          />
        </>
      ),
    },
    {
      name: "Vivio Appstore",
      url: "",
      disabledTitle: "Vivio Appstore currently unavailable",
      badge: (
        <svg viewBox="0 0 135 40" className="h-12 w-auto">
          <rect width="135" height="40" rx="5" fill="hsl(var(--foreground))" />
          <text
            x="67.5"
            y="14"
            textAnchor="middle"
            fill="hsl(var(--background))"
            fontSize="7"
            fontFamily="system-ui"
          >
            AVAILABLE ON
          </text>
          <text
            x="67.5"
            y="28"
            textAnchor="middle"
            fill="hsl(var(--background))"
            fontSize="11"
            fontWeight="bold"
            fontFamily="system-ui"
          >
            Vivio Appstore
          </text>
        </svg>
      ),
    },
    {
      name: "OPPO App Market",
      rating: "4.8",
      reviews: "25+",
      url: APP_CONFIG.downloads.oppo,
      badge: (
        <svg viewBox="0 0 135 40" className="h-12 w-auto">
          <rect width="135" height="40" rx="5" fill="hsl(var(--foreground))" />
          <text
            x="67.5"
            y="14"
            textAnchor="middle"
            fill="hsl(var(--background))"
            fontSize="7"
            fontFamily="system-ui"
          >
            AVAILABLE ON
          </text>
          <text
            x="67.5"
            y="28"
            textAnchor="middle"
            fill="hsl(var(--background))"
            fontSize="11"
            fontWeight="bold"
            fontFamily="system-ui"
          >
            OPPO App Market
          </text>
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Download Now
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Available on Multiple Platforms
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get DhanDiary from your preferred app store. Free to download, no subscriptions required.
          </p>
        </motion.div>

        {/* App Store Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6"
        >
          {appStores.map((store) => (
            <motion.div
              key={store.name}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group"
            >
              {store.url ? (
                <a
                  href={store.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 h-full"
                  aria-label={`Download from ${store.name}`}
                >
                  <div className="mb-4 transform group-hover:scale-105 transition-transform duration-300">
                    {store.badge}
                  </div>
                  <h3 className="font-semibold text-foreground text-sm mb-2 text-center">
                    {store.name}
                  </h3>
                  {store.rating && store.reviews ? (
                    <div className="flex items-center gap-1.5 mb-3">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold text-foreground">
                        {store.rating}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        ({store.reviews})
                      </span>
                    </div>
                  ) : null}
                  <div className="flex items-center gap-1 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Download</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </a>
              ) : (
                <div
                  className="flex flex-col items-center p-6 rounded-2xl bg-muted/50 border border-border h-full opacity-60 cursor-not-allowed"
                  title={store.disabledTitle || "Link coming soon"}
                >
                  <div className="mb-4">{store.badge}</div>
                  <h3 className="font-semibold text-foreground text-sm mb-2 text-center">
                    {store.name}
                  </h3>
                  <span className="text-xs text-muted-foreground">Coming Soon</span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 md:mt-16 flex flex-wrap justify-center items-center gap-6 md:gap-10"
        >
          {[
            { label: "100% Free", sublabel: "No hidden costs" },
            { label: "No Ads", sublabel: "Clean experience" },
            { label: "Privacy First", sublabel: "Your data stays yours" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <p className="font-semibold text-foreground">{item.label}</p>
              <p className="text-sm text-muted-foreground">{item.sublabel}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
