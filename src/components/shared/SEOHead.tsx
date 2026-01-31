import { Helmet } from "react-helmet-async";
import { APP_CONFIG } from "@/lib/appConfig";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "product";
  twitterCard?: "summary" | "summary_large_image";
  structuredData?: object;
  noIndex?: boolean;
}

const SEOHead = ({
  title,
  description = "Track income and expenses effortlessly with DhanDiary. A free, secure, offline-first personal finance app with no ads.",
  keywords = "personal finance app, expense tracker, income tracker, budget app, money management, offline finance app, DhanDiary",
  canonical,
  ogImage = "/og-image.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  structuredData,
  noIndex = false,
}: SEOHeadProps) => {
  const siteTitle = APP_CONFIG.name;
  const fullTitle = title
    ? `${title} | ${siteTitle}`
    : `${siteTitle} - Personal Finance Companion`;
  const siteUrl = "https://dhandiary.com";
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : undefined;
  const ogImageUrl = ogImage.startsWith("http")
    ? ogImage
    : `${siteUrl}${ogImage}`;

  // Default structured data for the app
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteTitle,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1000",
    },
    description: description,
    author: {
      "@type": "Organization",
      name: "EllowDigital",
      url: "https://ellowdigital.space",
    },
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="EllowDigital" />
      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : "index, follow"}
      />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:alt" content={`${siteTitle} Preview`} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_IN" />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* Mobile & App Meta Tags */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={siteTitle} />
      <meta name="application-name" content={siteTitle} />
      <meta name="format-detection" content="telephone=no" />
      <meta name="msapplication-TileColor" content="#2dd4bf" />
      <meta name="theme-color" content="#2dd4bf" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHead;

// Page-specific SEO configs
export const pageSEO = {
  home: {
    title: undefined,
    description:
      "DhanDiary is your personal finance companion. Track income and expenses effortlessly with a secure, offline-first app. Free forever, no ads.",
    keywords:
      "personal finance app, expense tracker, income tracker, budget app, money management, DhanDiary, free finance app",
    canonical: "/",
  },
  features: {
    title: "Features",
    description:
      "Explore DhanDiary's powerful features: income & expense tracking, beautiful charts, offline support, secure authentication, and more.",
    keywords:
      "finance app features, expense tracker features, income tracking, charts insights, offline first, secure login",
    canonical: "/features",
  },
  download: {
    title: "Download",
    description:
      "Download DhanDiary for Android. Available on Indus App Store, Amazon Appstore, Samsung Galaxy Store, Huawei AppGallery, and direct APK.",
    keywords:
      "download DhanDiary, DhanDiary APK, finance app download, Android finance app, free expense tracker",
    canonical: "/download",
  },
  about: {
    title: "About Us",
    description:
      "Learn about DhanDiary and EllowDigital. Built with passion for simple, secure personal finance management.",
    keywords:
      "about DhanDiary, EllowDigital, finance app developer, app story, mission values",
    canonical: "/about",
  },
  contact: {
    title: "Contact & Support",
    description:
      "Get in touch with the DhanDiary team. We're here to help with questions, feedback, or support.",
    keywords: "contact DhanDiary, support, feedback, help, customer service",
    canonical: "/contact",
  },
  privacy: {
    title: "Privacy Policy",
    description:
      "DhanDiary Privacy Policy. Learn how we protect your data with our privacy-first approach.",
    keywords:
      "privacy policy, data protection, DhanDiary privacy, user data, security",
    canonical: "/privacy",
  },
  terms: {
    title: "Terms & Conditions",
    description:
      "DhanDiary Terms & Conditions. Read about our service terms and user agreements.",
    keywords:
      "terms conditions, user agreement, service terms, DhanDiary terms",
    canonical: "/terms",
  },
  eula: {
    title: "End User License Agreement",
    description:
      "DhanDiary EULA. Software license agreement for DhanDiary application.",
    keywords: "EULA, license agreement, software license, DhanDiary license",
    canonical: "/eula",
  },
  roadmap: {
    title: "Product Roadmap",
    description:
      "See what's coming next for DhanDiary. Our product roadmap shows released features, in-progress work, and future plans.",
    keywords:
      "DhanDiary roadmap, upcoming features, product updates, development plans",
    canonical: "/roadmap",
  },
  installApk: {
    title: "How to Install APK",
    description:
      "Step-by-step guide to install DhanDiary APK on Android. Learn how to safely install apps from unknown sources.",
    keywords:
      "install APK, Android APK install, DhanDiary installation, unknown sources",
    canonical: "/how-to-install-apk",
  },
};
