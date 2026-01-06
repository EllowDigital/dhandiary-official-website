import Layout from "@/components/layout/Layout";
import {
  Scale,
  User,
  Shield,
  CreditCard,
  BadgeCheck,
  Link2,
  Ban,
  AlertTriangle,
  Gavel,
  RefreshCcw,
  Mail,
} from "lucide-react";

const sections = [
  {
    icon: <Scale className="w-6 h-6" />,
    title: "1. Acceptance of Terms",
    content: (
      <p>
        By downloading, installing, or using DhanDiary, you agree to these Terms
        &amp; Conditions. If you are accepting on behalf of a company, you
        represent that you have the authority to bind that entity.
      </p>
    ),
  },
  {
    icon: <User className="w-6 h-6" />,
    title: "2. Eligibility & Accounts",
    content: (
      <ul className="list-disc list-inside text-muted-foreground space-y-2">
        <li>
          You must be at least 13 years old or of legal age in your
          jurisdiction.
        </li>
        <li>Account credentials must be kept confidential.</li>
        <li>You are responsible for all activity under your account.</li>
        <li>
          Accounts violating these terms or applicable law may be suspended or
          terminated.
        </li>
      </ul>
    ),
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "3. Permitted Use",
    content: (
      <>
        <p>
          DhanDiary is provided for personal or organizational finance tracking
          only.
        </p>
        <p className="mt-3">You agree NOT to:</p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-3">
          <li>
            Reverse engineer, decompile, or extract source code except where
            permitted by law.
          </li>
          <li>Upload malicious code, automated scripts, or excessive data.</li>
          <li>
            Use the service for unlawful, fraudulent, or infringing activities.
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "4. Subscription & Fees",
    content: (
      <>
        <p>
          Core mobile functionality is currently free. If paid tiers are
          introduced, pricing and billing details will be disclosed in advance.
        </p>
        <p className="mt-3">
          Taxes may apply. All fees are non-refundable unless required by law.
        </p>
      </>
    ),
  },
  {
    icon: <BadgeCheck className="w-6 h-6" />,
    title: "5. Intellectual Property",
    content: (
      <p>
        All logos, trademarks, code, and content provided by EllowDigital remain
        our property. You retain ownership of the content you input into the
        service.
      </p>
    ),
  },
  {
    icon: <Link2 className="w-6 h-6" />,
    title: "6. Third-Party Services",
    content: (
      <p>
        Some features rely on third-party services such as databases, analytics,
        or authentication providers. Their individual terms may apply.
      </p>
    ),
  },
  {
    icon: <Ban className="w-6 h-6" />,
    title: "7. Termination",
    content: (
      <>
        <p>You may stop using DhanDiary at any time.</p>
        <p className="mt-3">We may suspend or terminate access if you:</p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-3">
          <li>Breach these terms</li>
          <li>Engage in fraud</li>
          <li>Present security risks</li>
        </ul>
        <p className="mt-3">
          Upon termination, cloud data may be deleted. Local data remains on
          your device until you remove it.
        </p>
      </>
    ),
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "8. Disclaimers",
    content: (
      <p>
        DhanDiary is provided &quot;AS IS&quot; without warranties of any kind,
        including implied warranties of merchantability or fitness for a
        particular purpose.
      </p>
    ),
  },
  {
    icon: <Gavel className="w-6 h-6" />,
    title: "9. Limitation of Liability",
    content: (
      <>
        <p>
          To the fullest extent permitted by law, EllowDigital is not liable for
          indirect, incidental, special, or consequential damages.
        </p>
        <p className="mt-3">Total liability is limited to the greater of:</p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-3">
          <li>INR 500, or</li>
          <li>The amount paid in the previous six months.</li>
        </ul>
      </>
    ),
  },
  {
    icon: <Gavel className="w-6 h-6" />,
    title: "10. Governing Law & Disputes",
    content: (
      <>
        <p>These terms are governed by the laws of India.</p>
        <p className="mt-3">Jurisdiction: Courts located in Delhi, India.</p>
      </>
    ),
  },
  {
    icon: <RefreshCcw className="w-6 h-6" />,
    title: "11. Changes to Terms",
    content: (
      <p>
        Terms may be updated due to new features or legal requirements.
        Continued use after the effective date constitutes acceptance.
      </p>
    ),
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "12. Contact",
    content: (
      <>
        <p>Developer Email: sarwanyadav6174@gmail.com</p>
        <p>Team Email: ellowdigitalindia@gmail.com</p>
      </>
    ),
  },
];

const Terms = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-subtle-gradient section-padding">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
            <Scale className="w-4 h-4" />
            Legal
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Effective Date: 12 December 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container mx-auto container-narrow">
          <div className="space-y-8">
            <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border">
              <h2 className="font-display text-xl font-semibold text-foreground mb-2">
                DhanDiary — Terms &amp; Conditions
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms &amp; Conditions describe the mutual
                responsibilities between you and EllowDigital when using the
                DhanDiary mobile, desktop, or web products.
              </p>
            </div>

            {sections.map((section, index) => (
              <div
                key={index}
                className="p-6 lg:p-8 rounded-2xl bg-card border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-primary flex-shrink-0">
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {section.title}
                    </h3>
                    <div className="text-muted-foreground leading-relaxed">
                      {section.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>Effective date: 12 December 2025</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
