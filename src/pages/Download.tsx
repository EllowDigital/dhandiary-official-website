import { motion } from "framer-motion";
import {
  ExternalLink,
  Smartphone,
  Shield,
  Check,
  Download,
  Tablet,
  HardDrive,
  Cpu,
  ChevronRight,
  WifiOff,
  Lock,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { APP_CONFIG, isApkDownloadLinkValid } from "@/lib/appConfig";

const apkLinkValid = isApkDownloadLinkValid();

const downloadOptions = [
  {
    name: "Indus App Store",
    description: "Recommended for Indian users",
    icon: <Smartphone className="w-6 h-6" />,
    badge: (
      <img
        alt="Get it on Indus Appstore"
        src="https://docstore.indusappstore.com/public/external/developerdashboard-static/badge-black-full-color-english.png"
        className="h-12 w-auto"
        loading="lazy"
      />
    ),
    url: APP_CONFIG.downloads.indus || "https://indusapp.store/gfda9h89",
    primary: true,
  },
  {
    name: "Amazon Appstore",
    description: "Available worldwide",
    icon: <Smartphone className="w-6 h-6" />,
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
    url: APP_CONFIG.downloads.amazon,
    primary: true,
  },
  {
    name: "Huawei AppGallery",
    description: "For Huawei devices",
    icon: <Smartphone className="w-6 h-6" />,
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
    url: APP_CONFIG.downloads.huawei,
    primary: true,
  },
  {
    name: "Direct APK Download",
    description: apkLinkValid
      ? "Manual install (valid for 30 days)"
      : "APK link expired — use app stores",
    icon: <Download className="w-6 h-6" />,
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
          DOWNLOAD
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
          APK Direct
        </text>
      </svg>
    ),
    url: apkLinkValid ? APP_CONFIG.downloads.apk : "",
    primary: false,
  },
  {
    name: "OPPO App Market",
    description: "Coming soon",
    icon: <Smartphone className="w-6 h-6" />,
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
    url: "",
    primary: false,
  },
];

const requirements = [
  {
    icon: <Cpu className="w-5 h-5" />,
    label: "Android Version",
    value: `${APP_CONFIG.minAndroid} or higher`,
  },
  {
    icon: <HardDrive className="w-5 h-5" />,
    label: "Storage Space",
    value: `${APP_CONFIG.sizeMb} MB`,
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    label: "Device Type",
    value: "Phones & Tablets",
  },
  {
    icon: <Tablet className="w-5 h-5" />,
    label: "Screen Size",
    value: "All sizes supported",
  },
];

const features = [
  {
    icon: <WifiOff className="w-5 h-5" />,
    title: "Works Offline",
    description: "Full functionality without internet",
  },
  {
    icon: <Lock className="w-5 h-5" />,
    title: "Secure & Private",
    description: "Your data stays on your device",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Smart Insights",
    description: "Beautiful charts & analytics",
  },
];

const installSteps = [
  {
    step: 1,
    title: "Download the App",
    description: "Choose your preferred app store above and tap to download.",
  },
  {
    step: 2,
    title: "Install & Open",
    description: "Once downloaded, open the app and grant necessary permissions.",
  },
  {
    step: 3,
    title: "Create Account",
    description: "Sign up with email or use Google/GitHub for quick access.",
  },
  {
    step: 4,
    title: "Start Tracking",
    description: "Add your first transaction and take control of your finances!",
  },
];

const DownloadPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-subtle-gradient overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Safe & Verified Download
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Download DhanDiary
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8">
              Get the app on your Android device. Free forever, no ads, no subscriptions.
            </p>

            {/* Quick feature badges */}
            <div className="flex flex-wrap justify-center gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border"
                >
                  <span className="text-primary">{feature.icon}</span>
                  <span className="text-sm font-medium text-foreground">{feature.title}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download Options */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Choose Your App Store
            </h2>
            <p className="text-muted-foreground">
              Download from your preferred platform
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {downloadOptions.filter(opt => opt.primary && opt.url).map((option, index) => (
              <motion.a
                key={index}
                href={option.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 group"
              >
                <div className="mb-4 transform group-hover:scale-105 transition-transform">
                  {option.badge}
                </div>
                <h3 className="font-semibold text-foreground mb-1">{option.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{option.description}</p>
                <div className="flex items-center gap-1 text-primary text-sm font-medium">
                  <span>Download</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Secondary options */}
          <div className="grid sm:grid-cols-2 gap-4">
            {downloadOptions.filter(opt => !opt.primary || !opt.url).map((option, index) =>
              option.url ? (
                <motion.a
                  key={index}
                  href={option.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-5 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-all group"
                >
                  <div className="shrink-0">{option.badge}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground">{option.name}</h3>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </motion.a>
              ) : (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-5 rounded-xl bg-muted/30 border border-border opacity-60"
                >
                  <div className="shrink-0">{option.badge}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground">{option.name}</h3>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Device Requirements */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Device Compatibility
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {requirements.map((req, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-background border border-border"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-primary mb-3">
                      {req.icon}
                    </div>
                    <p className="text-sm text-muted-foreground">{req.label}</p>
                    <p className="font-semibold text-foreground">{req.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Version Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Current Version
              </h2>
              <div className="p-6 rounded-2xl bg-background border border-border">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="font-display text-3xl font-bold text-primary">
                      v{APP_CONFIG.version}
                    </p>
                    <p className="text-muted-foreground">Latest Stable Release</p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    Stable
                  </div>
                </div>
                {APP_CONFIG.releaseDate && (
                  <p className="text-sm text-muted-foreground mb-4">
                    Released: {APP_CONFIG.releaseDate}
                  </p>
                )}
                <div className="space-y-2">
                  {["All features unlocked", "Latest security updates", "Bug fixes & improvements"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Installation Guide */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Installation Guide
            </h2>
            <p className="text-muted-foreground">
              Get started in just a few simple steps
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {installSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-4 p-5 rounded-xl bg-card border border-border"
              >
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* APK Help Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 p-5 rounded-xl bg-accent/50 border border-primary/20"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  Trouble installing APK?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Follow our step-by-step guide for manual installation
                </p>
              </div>
              <Link
                to="/how-to-install-apk"
                className="flex items-center gap-1 text-primary font-medium hover:underline shrink-0"
              >
                View Guide
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "Is DhanDiary free to use?",
                a: "Yes! DhanDiary is completely free with no ads, no subscriptions, and no hidden costs.",
              },
              {
                q: "Is my data safe?",
                a: "Absolutely. Your data is stored locally on your device. We don't collect, share, or sell your personal information.",
              },
              {
                q: "Does it work offline?",
                a: "Yes! DhanDiary is designed to work fully offline. All your data is stored locally and syncs when you're back online.",
              },
              {
                q: "Is it available on iOS?",
                a: "Currently, DhanDiary is available only for Android devices. iOS support may come in the future.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-5 rounded-xl bg-background border border-border"
              >
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DownloadPage;
