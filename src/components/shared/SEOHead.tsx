import { Helmet } from "react-helmet-async";
import { APP_CONFIG } from "@/lib/appConfig";
// If you need pageSEO, import from './SEOHead.constants'

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
