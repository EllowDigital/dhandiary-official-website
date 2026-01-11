import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { APP_CONFIG } from "@/lib/appConfig";

const PartnersSection = () => {
  const appStores = [
    {
      name: "Indus App Store",
      rating: "4.8",
      reviews: "10K+ Reviews",
      url: APP_CONFIG.downloads.indus || "https://indusapp.store/gfda9h89",
      badge: (
        <img
          alt="Get it on Indus Appstore"
          src="https://docstore.indusappstore.com/public/external/developerdashboard-static/badge-black-full-color-english.png"
          className="h-10 w-auto"
          loading="lazy"
        />
      ),
    },
    {
      name: "Amazon Appstore",
      rating: "4.9",
      reviews: "5K+ Downloads",
      url: APP_CONFIG.downloads.amazon,
      badge: (
        <svg viewBox="0 0 135 40" className="h-10 w-auto">
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
      name: "Huawei AppGallery",
      rating: "4.9",
      reviews: "AppGallery",
      url: APP_CONFIG.downloads.huawei,
      badge: (
        <>
          <img
            src="/img/Appstores/Huawei-light.png"
            alt="Huawei AppGallery"
            className="h-10 w-auto dark:hidden"
            loading="lazy"
          />
          <img
            src="/img/Appstores/Huawei-dark.png"
            alt="Huawei AppGallery"
            className="h-10 w-auto hidden dark:block"
            loading="lazy"
          />
        </>
      ),
    },
    {
      name: "OPPO App Market",
      rating: "4.8",
      reviews: "OPPO",
      url: APP_CONFIG.downloads.oppo,
      badge: (
        <svg viewBox="0 0 135 40" className="h-10 w-auto">
          <rect
            width="135"
            height="40"
            rx="5"
            fill="hsl(var(--foreground))"
          />
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
                {store.url ? (
                  <a
                    href={store.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-105 transition-transform"
                    aria-label={`Download from ${store.name}`}
                  >
                    {store.badge}
                  </a>
                ) : (
                  <div
                    className="opacity-60 cursor-not-allowed"
                    aria-label={`${store.name} link coming soon`}
                    title="Link coming soon"
                  >
                    {store.badge}
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-semibold text-foreground">
                    {store.rating}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    ({store.reviews})
                  </span>
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
            As featured in
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
