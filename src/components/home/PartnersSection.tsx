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
          className="h-10 sm:h-12 w-auto max-w-full object-contain"
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
        <div className="h-10 sm:h-12 px-3 sm:px-4 flex flex-col items-center justify-center bg-foreground rounded-md">
          <span className="text-[8px] sm:text-[9px] text-background uppercase tracking-wider">Available on</span>
          <span className="text-[10px] sm:text-xs text-background font-bold">Amazon Appstore</span>
        </div>
      ),
    },
    {
      name: "Galaxy Store",
      rating: "4.8",
      reviews: "25+",
      url: APP_CONFIG.downloads.samsung,
      badge: (
        <div className="h-10 sm:h-12 px-3 sm:px-4 flex flex-col items-center justify-center bg-foreground rounded-md">
          <span className="text-[8px] sm:text-[9px] text-background uppercase tracking-wider">Available on</span>
          <span className="text-[10px] sm:text-xs text-background font-bold">Galaxy Store</span>
        </div>
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
            className="h-10 sm:h-12 w-auto max-w-full object-contain dark:hidden"
            loading="lazy"
          />
          <img
            src="/img/Appstores/Huawei-dark.png"
            alt="Huawei AppGallery"
            className="h-10 sm:h-12 w-auto max-w-full object-contain hidden dark:block"
            loading="lazy"
          />
        </>
      ),
    },
    {
      name: "OPPO App Market",
      rating: "4.8",
      reviews: "25+",
      url: APP_CONFIG.downloads.oppo,
      badge: (
        <div className="h-10 sm:h-12 px-3 sm:px-4 flex flex-col items-center justify-center bg-foreground rounded-md">
          <span className="text-[8px] sm:text-[9px] text-background uppercase tracking-wider">Available on</span>
          <span className="text-[10px] sm:text-xs text-background font-bold">OPPO App Market</span>
        </div>
      ),
    },
    {
      name: "More Options",
      url: "/download",
      internal: true,
      badge: (
        <div className="h-10 sm:h-12 px-3 sm:px-4 flex flex-col items-center justify-center bg-primary rounded-md">
          <span className="text-[8px] sm:text-[9px] text-primary-foreground uppercase tracking-wider">See All</span>
          <span className="text-[10px] sm:text-xs text-primary-foreground font-bold">Download Options</span>
        </div>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
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
        <div className="absolute top-0 left-1/4 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 lg:mb-14"
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

        {/* App Store Cards - Improved grid for mobile/tablet */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5 max-w-5xl mx-auto"
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
                    className="flex flex-col items-center p-3 sm:p-4 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 h-full hover-lift"
                    aria-label="See more download options"
                  >
                    <div className="mb-2 sm:mb-3 transform group-hover:scale-105 transition-transform duration-300 flex items-center justify-center min-h-[40px] sm:min-h-[48px]">
                      {store.badge}
                    </div>
                    <h3 className="font-semibold text-foreground text-xs sm:text-sm text-center line-clamp-1">
                      {store.name}
                    </h3>
                    <div className="flex items-center gap-1 text-primary text-xs font-medium mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>View</span>
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  </Link>
                ) : (
                  <a
                    href={store.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-3 sm:p-4 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 h-full hover-lift"
                    aria-label={`Download from ${store.name}`}
                  >
                    <div className="mb-2 sm:mb-3 transform group-hover:scale-105 transition-transform duration-300 flex items-center justify-center min-h-[40px] sm:min-h-[48px]">
                      {store.badge}
                    </div>
                    <h3 className="font-semibold text-foreground text-xs sm:text-sm text-center line-clamp-1">
                      {store.name}
                    </h3>
                    {store.rating && store.reviews && (
                      <div className="flex items-center gap-1 mt-1.5">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-medium text-foreground">
                          {store.rating}
                        </span>
                      </div>
                    )}
                    <div className="flex items-center gap-1 text-primary text-xs font-medium mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Get</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </a>
                )
              ) : null}
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 sm:mt-10 lg:mt-14 flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12"
        >
          {[
            { label: "100% Free", sublabel: "No hidden costs" },
            { label: "No Ads", sublabel: "Clean experience" },
            { label: "Privacy First", sublabel: "Your data stays yours" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <p className="font-semibold text-foreground text-sm sm:text-base">
                {item.label}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {item.sublabel}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
