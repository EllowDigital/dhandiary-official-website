import { Helmet } from "react-helmet-async";
import {
  AlertTriangle,
  Download,
  FileDown,
  Lock,
  Settings,
  ShieldCheck,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { APP_CONFIG } from "@/lib/appConfig";

const steps = [
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "Step 1",
    text: (
      <>
        Tap{" "}
        <span className="font-semibold text-foreground">Download anyway</span>{" "}
        when Chrome shows a warning.
      </>
    ),
  },
  {
    icon: <FileDown className="w-6 h-6" />,
    title: "Step 2",
    text: (
      <>
        After download completes, tap{" "}
        <span className="font-semibold text-foreground">Open</span> to start
        installing the APK file.
      </>
    ),
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Step 3",
    text: (
      <>
        If Android blocks the install, tap{" "}
        <span className="font-semibold text-foreground">Settings</span> when
        prompted.
      </>
    ),
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Step 4",
    text: (
      <>
        Turn ON the switch{" "}
        <span className="font-semibold text-foreground">
          Allow from this source
        </span>
        .
      </>
    ),
  },
  {
    icon: <Download className="w-6 h-6" />,
    title: "Step 5",
    text: (
      <>
        Go back and tap{" "}
        <span className="font-semibold text-foreground">Install</span>.
      </>
    ),
  },
];

const InstallApk = () => {
  const title = "How to Install DhanDiary APK on Android";
  const description =
    "Install DhanDiary APK safely on Android. Learn how to allow unknown apps, fix blocked install warnings, and complete setup step-by-step.";

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="Install APK safely, Allow unknown apps Android, DhanDiary APK install"
        />
        <link rel="canonical" href="https://dhandiary.com/how-to-install-apk" />
      </Helmet>

      {/* Hero */}
      <section className="bg-subtle-gradient section-padding">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
            <ShieldCheck className="w-4 h-4" />
            Help Center
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            How to Install DhanDiary APK on Android
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            If you downloaded DhanDiary directly from your browser, follow these
            simple steps to install it safely.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding">
        <div className="container mx-auto container-narrow">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="p-6 lg:p-8 rounded-2xl bg-card border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-primary flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Reassurance */}
          <div className="mt-10 p-6 lg:p-8 rounded-2xl bg-accent/50 border border-primary/20">
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">
              You’re safe
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              DhanDiary is safe and does not contain ads or harmful content.
            </p>
          </div>

          {/* Why warning */}
          <div className="mt-10 p-6 lg:p-8 rounded-2xl bg-card border border-border">
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">
              Why does Android show this warning?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Android shows this warning to protect you from apps that are not
              installed from an app store. This is normal when you install an
              APK directly from your browser. You can allow the install for
              Chrome (or your browser) and continue.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 text-center">
            <Button asChild variant="hero" size="xl">
              <a
                href={APP_CONFIG.downloads.apk}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download DhanDiary APK
              </a>
            </Button>
            <p className="text-muted-foreground text-sm mt-3">
              Android {APP_CONFIG.minAndroid}+ • {APP_CONFIG.sizeMb} MB
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InstallApk;
