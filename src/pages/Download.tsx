import { ExternalLink, Download as DownloadIcon, Smartphone, Shield, Check } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { APP_CONFIG } from "@/lib/appConfig";

const downloadOptions = [
  {
    name: "Indus App Store",
    description: "Download from Indus App Store for Android",
    icon: <Smartphone className="w-6 h-6" />,
    url: APP_CONFIG.downloads.indus,
    primary: true,
  },
  {
    name: "Amazon Appstore",
    description: "Available on Amazon Appstore",
    icon: <Smartphone className="w-6 h-6" />,
    url: APP_CONFIG.downloads.amazon,
    primary: true,
  },
  {
    name: "Direct APK Download",
    description: `Download APK directly (v${APP_CONFIG.version})`,
    icon: <DownloadIcon className="w-6 h-6" />,
    url: APP_CONFIG.downloads.apk,
    primary: false,
  },
  {
    name: "Huawei AppGallery",
    description: "Available on Huawei AppGallery (link coming soon)",
    icon: <Smartphone className="w-6 h-6" />,
    url: "",
    primary: false,
  },
  {
    name: "OPPO App Market",
    description: "Available on OPPO App Market (link coming soon)",
    icon: <Smartphone className="w-6 h-6" />,
    url: "",
    primary: false,
  },
];

const requirements = [
  `Android ${APP_CONFIG.minAndroid} or higher`,
  `${APP_CONFIG.sizeMb} MB storage space`,
  "Works on phones and tablets",
];

const DownloadPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-subtle-gradient section-padding">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Safe & Secure Download
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Download DhanDiary
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Get the app on your Android device. Free, no ads, no subscriptions.
          </p>
        </div>
      </section>

      {/* Download Options */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="grid gap-4 mb-12">
            {downloadOptions.map((option, index) => (
              option.url ? (
                <a
                  key={index}
                  href={option.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-6 rounded-2xl border transition-all duration-300 hover:shadow-card group ${
                    option.primary
                      ? "bg-card border-border hover:border-primary/30"
                      : "bg-muted/50 border-border hover:border-primary/30"
                  }`}
                >
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {option.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-foreground text-lg">
                      {option.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">{option.description}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ) : (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-6 rounded-2xl border ${
                    option.primary ? "bg-card border-border" : "bg-muted/50 border-border"
                  }`}
                >
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center text-primary">
                    {option.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-foreground text-lg">
                      {option.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">{option.description}</p>
                  </div>
                </div>
              )
            ))}
          </div>

          <div className="mb-12 p-6 rounded-2xl bg-card border border-border">
            <h2 className="font-display text-xl font-semibold text-foreground mb-2">
              Installing via APK?
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              If Android shows a warning or blocks installation, follow our step-by-step guide: {" "}
              <Link to="/how-to-install-apk" className="text-primary hover:underline font-medium">
                How to Install DhanDiary APK
              </Link>
              .
            </p>
          </div>

          {/* Version Info */}
          <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Current Version: {APP_CONFIG.version}
                </h3>
                <p className="text-muted-foreground">
                  Latest stable release with all features and security updates.
                </p>
                {APP_CONFIG.releaseDate ? (
                  <p className="text-muted-foreground text-sm mt-2">
                    Released: {APP_CONFIG.releaseDate}
                  </p>
                ) : null}
              </div>
              <div className="space-y-2">
                <h4 className="font-medium text-foreground text-sm">Requirements:</h4>
                <ul className="space-y-1">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Check className="w-4 h-4 text-primary" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-card">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-background border border-border">
              <h3 className="font-display font-semibold text-foreground mb-2">
                Is DhanDiary free to use?
              </h3>
              <p className="text-muted-foreground">
                Yes! DhanDiary is completely free with no ads, no subscriptions, and no hidden costs.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-background border border-border">
              <h3 className="font-display font-semibold text-foreground mb-2">
                Is my data safe?
              </h3>
              <p className="text-muted-foreground">
                Absolutely. Your data is stored locally on your device. We don't collect, share, or sell your personal information.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-background border border-border">
              <h3 className="font-display font-semibold text-foreground mb-2">
                Does it work offline?
              </h3>
              <p className="text-muted-foreground">
                Yes! DhanDiary is designed to work fully offline. All your data is stored locally and syncs when you're back online.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-background border border-border">
              <h3 className="font-display font-semibold text-foreground mb-2">
                Is it available on iOS?
              </h3>
              <p className="text-muted-foreground">
                Currently, DhanDiary is available only for Android devices. iOS support may come in the future.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DownloadPage;
