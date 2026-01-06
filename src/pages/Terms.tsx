import Layout from "@/components/layout/Layout";

const Terms = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-subtle-gradient section-padding">
        <div className="container mx-auto text-center">
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
          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <p>
              These Terms &amp; Conditions describe the mutual responsibilities between
              you and EllowDigital when using the DhanDiary mobile, desktop, or web
              products.
            </p>

            <div className="space-y-3">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                1. Acceptance of Terms
              </h2>
              <p>
                By downloading, installing, or using DhanDiary, you agree to these
                Terms &amp; Conditions. If you are accepting on behalf of a company,
                you represent that you have the authority to bind that entity.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                2. Eligibility &amp; Accounts
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>You must be at least 13 years old or of legal age in your jurisdiction.</li>
                <li>Account credentials must be kept confidential.</li>
                <li>You are responsible for all activity under your account.</li>
                <li>
                  Accounts violating these terms or applicable law may be suspended or
                  terminated.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                3. Permitted Use
              </h2>
              <p>DhanDiary is provided for personal or organizational finance tracking only.</p>
              <p>You agree NOT to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Reverse engineer, decompile, or extract source code except where
                  permitted by law.
                </li>
                <li>Upload malicious code, automated scripts, or excessive data.</li>
                <li>
                  Use the service for unlawful, fraudulent, or infringing activities.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                4. Subscription &amp; Fees
              </h2>
              <p>
                Core mobile functionality is currently free. If paid tiers are introduced,
                pricing and billing details will be disclosed in advance.
              </p>
              <p>Taxes may apply. All fees are non-refundable unless required by law.</p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                5. Intellectual Property
              </h2>
              <p>
                All logos, trademarks, code, and content provided by EllowDigital remain our
                property. You retain ownership of the content you input into the service.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                6. Third-Party Services
              </h2>
              <p>
                Some features rely on third-party services such as databases, analytics, or
                authentication providers. Their individual terms may apply.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-2xl font-semibold text-foreground">7. Termination</h2>
              <p>You may stop using DhanDiary at any time.</p>
              <p>We may suspend or terminate access if you:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Breach these terms</li>
                <li>Engage in fraud</li>
                <li>Present security risks</li>
              </ul>
              <p>
                Upon termination, cloud data may be deleted. Local data remains on your device
                until you remove it.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-2xl font-semibold text-foreground">8. Disclaimers</h2>
              <p>
                DhanDiary is provided &quot;AS IS&quot; without warranties of any kind, including
                implied warranties of merchantability or fitness for a particular purpose.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                9. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by law, EllowDigital is not liable for indirect,
                incidental, special, or consequential damages.
              </p>
              <p>Total liability is limited to the greater of:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>INR 500, or</li>
                <li>The amount paid in the previous six months.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                10. Governing Law &amp; Disputes
              </h2>
              <p>These terms are governed by the laws of India.</p>
              <p>Jurisdiction: Courts located in Delhi, India.</p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-2xl font-semibold text-foreground">11. Changes to Terms</h2>
              <p>
                Terms may be updated due to new features or legal requirements. Continued use
                after the effective date constitutes acceptance.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-2xl font-semibold text-foreground">12. Contact</h2>
              <p>Developer Email: sarwanyadav6174@gmail.com</p>
              <p>Team Email: ellowdigitalindia@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
