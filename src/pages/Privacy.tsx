import Layout from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-subtle-gradient section-padding">
        <div className="container mx-auto text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Last Updated: 12 December 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container mx-auto container-narrow">
          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <p>
              DhanDiary provides finance tools designed with privacy by default. This policy
              explains what data we collect and how it is used.
            </p>

            <div className="space-y-3">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                1. Data We Collect
              </h2>
              <p>We collect only what is necessary to provide our services:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-medium text-foreground">Profile Details:</span> Name (optional)
                  and email address
                </li>
                <li>
                  <span className="font-medium text-foreground">Finance Entries:</span> Income,
                  expenses, categories, notes, and attachments
                </li>
                <li>
                  <span className="font-medium text-foreground">Diagnostics:</span> Device info, OS
                  version, crash logs, anonymized usage data
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                2. How We Use Data
              </h2>
              <p>Data is used to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Display ledgers, charts, and insights</li>
                <li>Authenticate and sync accounts</li>
                <li>Provide optional cloud backups</li>
                <li>Improve stability and performance</li>
              </ul>
              <p>We never sell or rent personal data.</p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                3. Cloud Backup &amp; Sync
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Cloud sync is optional</li>
                <li>Data is transmitted securely over HTTPS</li>
                <li>Data is encrypted at rest</li>
                <li>Only authenticated sessions can access data</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                4. Security Practices
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Secure credential storage</li>
                <li>Enforced transport encryption</li>
                <li>Regular dependency updates</li>
                <li>Restricted access to production data</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                5. Sharing &amp; Third Parties
              </h2>
              <p>We do not share personal or financial data with marketers.</p>
              <p>Limited partners include:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Database hosting providers</li>
                <li>Authentication services</li>
                <li>Analytics and crash-reporting tools</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                6. Your Rights
              </h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Access and export your data</li>
                <li>Request deletion of backups</li>
                <li>Manage preferences in-app</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                7. Retention &amp; Data Residency
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Local data stays on your device until deleted</li>
                <li>Cloud backups remain until account deletion</li>
                <li>Infrastructure complies with Indian privacy regulations</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                8. Children’s Privacy
              </h2>
              <p>
                DhanDiary is not intended for children under 13. We do not knowingly collect
                children’s data.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                9. Policy Changes
              </h2>
              <p>
                This policy may be updated due to legal or feature changes. Material updates
                will be announced in-app.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-2xl font-semibold text-foreground">10. Contact Us</h2>
              <p>Developer Email: sarwanyadav6174@gmail.com</p>
              <p>Team Email: ellowdigitalindia@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
