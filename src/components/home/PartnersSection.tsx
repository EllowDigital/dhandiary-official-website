import { motion } from "framer-motion";
import { Star, ExternalLink, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { APP_CONFIG } from "@/lib/appConfig";

const PartnersSection = () => {
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
      name: "Samsung Galaxy Store",
      rating: "4.8",
      reviews: "25+",
      url: APP_CONFIG.downloads.samsung,
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
            Galaxy Store
          </text>
        </svg>
      ),
    },
    {
      name: "See more",
      url: "/download",
      internal: true,
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
            SEE MORE
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
            Download Page
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
    <section className="section-padding relative overflow-hidden bg-card">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            Download Now
          </span>
          <h2 className="heading-2 text-foreground mb-3 sm:mb-4 text-balance">
            Available on Multiple Platforms
          </h2>
          <p className="body-default max-w-2xl mx-auto">
            Get DhanDiary from your preferred app store. Free to download, no
            subscriptions required.
          </p>
        </motion.div>

        {/* App Store Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6"
        >
          {appStores.map((store) => (
            <motion.div
              key={store.name}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group"
            >
              {store.url ? (
                store.internal ? (
                  <Link
                    to={store.url}
                    className="flex flex-col items-center p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 h-full hover-lift"
                    aria-label="See more download options"
                  >
                    <div className="mb-2 sm:mb-3 lg:mb-4 transform group-hover:scale-105 transition-transform duration-300">
                      {store.badge}
                    </div>
                    <h3 className="font-semibold text-foreground text-xs sm:text-sm mb-1 sm:mb-2 text-center line-clamp-1">
                      {store.name}
                    </h3>
                    <div className="flex items-center gap-1 text-primary text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Open</span>
                      <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </div>
                  </Link>
                ) : (
                  <a
                    href={store.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 h-full hover-lift"
                    aria-label={`Download from ${store.name}`}
                  >
                    <div className="mb-2 sm:mb-3 lg:mb-4 transform group-hover:scale-105 transition-transform duration-300">
                      {store.badge}
                    </div>
                    <h3 className="font-semibold text-foreground text-xs sm:text-sm mb-1 sm:mb-2 text-center line-clamp-1">
                      {store.name}
                    </h3>
                    {store.rating && store.reviews ? (
                      <div className="flex items-center gap-1 sm:gap-1.5 mb-2 sm:mb-3">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs sm:text-sm font-semibold text-foreground">
                          {store.rating}
                        </span>
                        <span className="text-[10px] sm:text-xs text-muted-foreground hidden xs:inline">
                          ({store.reviews})
                        </span>
                      </div>
                    ) : null}
                    <div className="flex items-center gap-1 text-primary text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Download</span>
                      <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </div>
                  </a>
                )
              ) : (
                <div
                  className="flex flex-col items-center p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl bg-muted/50 border border-border h-full opacity-60 cursor-not-allowed"
                  title={store.disabledTitle || "Link coming soon"}
                >
                  <div className="mb-2 sm:mb-3 lg:mb-4">{store.badge}</div>
                  <h3 className="font-semibold text-foreground text-xs sm:text-sm mb-1 sm:mb-2 text-center line-clamp-1">
                    {store.name}
                  </h3>
                  <span className="text-[10px] sm:text-xs text-muted-foreground">
                    Coming Soon
                  </span>
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
          className="mt-8 sm:mt-12 lg:mt-16 flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-10"
        >
          {[
            { label: "100% Free", sublabel: "No hidden costs" },
            { label: "No Ads", sublabel: "Clean experience" },
            { label: "Privacy First", sublabel: "Your data stays yours" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <p className="font-semibold text-foreground text-sm sm:text-base">{item.label}</p>
              <p className="text-xs sm:text-sm text-muted-foreground">{item.sublabel}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
