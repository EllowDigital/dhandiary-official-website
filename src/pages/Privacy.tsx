import { Shield, Database, Lock, Users, FileText, Mail } from "lucide-react";
import Layout from "@/components/layout/Layout";

const sections = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "1. Data We Collect",
    content: (
      <>
        <p>We collect only what is necessary to provide our services:</p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-3">
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
      </>
    ),
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "2. How We Use Data",
    content: (
      <>
        <p>Data is used to:</p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-3">
          <li>Display ledgers, charts, and insights</li>
          <li>Authenticate and sync accounts</li>
          <li>Provide optional cloud backups</li>
          <li>Improve stability and performance</li>
        </ul>
        <p className="mt-3">We never sell or rent personal data.</p>
      </>
    ),
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "3. Cloud Backup & Sync",
    content: (
      <ul className="list-disc list-inside text-muted-foreground space-y-2">
        <li>Cloud sync is optional</li>
        <li>Data is transmitted securely over HTTPS</li>
        <li>Data is encrypted at rest</li>
        <li>Only authenticated sessions can access data</li>
      </ul>
    ),
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "4. Security Practices",
    content: (
      <ul className="list-disc list-inside text-muted-foreground space-y-2">
        <li>Secure credential storage</li>
        <li>Enforced transport encryption</li>
        <li>Regular dependency updates</li>
        <li>Restricted access to production data</li>
      </ul>
    ),
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "5. Sharing & Third Parties",
    content: (
      <>
        <p>We do not share personal or financial data with marketers.</p>
        <p className="mt-3">Limited partners include:</p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-3">
          <li>Database hosting providers</li>
          <li>Authentication services</li>
          <li>Analytics and crash-reporting tools</li>
        </ul>
      </>
    ),
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "6. Your Rights",
    content: (
      <>
        <p>You have the right to:</p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-3">
          <li>Access and export your data</li>
          <li>Request deletion of backups</li>
          <li>Manage preferences in-app</li>
        </ul>
      </>
    ),
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "7. Retention & Data Residency",
    content: (
      <ul className="list-disc list-inside text-muted-foreground space-y-2">
        <li>Local data stays on your device until deleted</li>
        <li>Cloud backups remain until account deletion</li>
        <li>Infrastructure complies with Indian privacy regulations</li>
      </ul>
    ),
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "8. Children’s Privacy",
    content: (
      <p>
        DhanDiary is not intended for children under 13. We do not knowingly collect
        children’s data.
      </p>
    ),
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "9. Policy Changes",
    content: (
      <p>
        This policy may be updated due to legal or feature changes. Material updates will be
        announced in-app.
      </p>
    ),
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "10. Contact Us",
    content: (
      <>
        <p>Developer Email: sarwanyadav6174@gmail.com</p>
        <p>Team Email: ellowdigitalindia@gmail.com</p>
      </>
    ),
  },
];

const Privacy = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-subtle-gradient section-padding">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Privacy First
          </div>
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
          <div className="space-y-8">
            <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border">
              <h2 className="font-display text-xl font-semibold text-foreground mb-2">
                Privacy Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                DhanDiary provides finance tools designed with privacy by default. This policy
                explains what data we collect and how it is used.
              </p>
            </div>

            {sections.map((section, index) => (
              <div key={index} className="p-6 lg:p-8 rounded-2xl bg-card border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-primary flex-shrink-0">
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {section.title}
                    </h3>
                    <div className="text-muted-foreground leading-relaxed">{section.content}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>Last updated: 12 December 2025</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
