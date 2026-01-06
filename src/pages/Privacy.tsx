import { Shield, Eye, Lock, Database, Mail } from "lucide-react";
import Layout from "@/components/layout/Layout";

const policies = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Your Data Stays Private",
    content:
      "DhanDiary does not collect, store, or share your personal financial data with third parties. What you enter in the app stays on your device.",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "No Ads, No Trackers",
    content:
      "We don't display advertisements or use tracking technologies. Your usage patterns and financial information are never monitored or analyzed for advertising purposes.",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Secure Authentication",
    content:
      "When you create an account, we use industry-standard encryption and secure authentication methods. Your login credentials are protected using modern security protocols.",
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Offline Data Storage",
    content:
      "All your financial data is stored locally on your device using an offline-first database. This means your sensitive information never leaves your device without your explicit consent.",
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
            Your privacy is our priority. Learn how DhanDiary protects your data.
          </p>
        </div>
      </section>

      {/* Policy Details */}
      <section className="section-padding">
        <div className="container mx-auto container-narrow">
          <div className="space-y-8">
            {policies.map((policy, index) => (
              <div
                key={index}
                className="p-6 lg:p-8 rounded-2xl bg-card border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-primary flex-shrink-0">
                    {policy.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {policy.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {policy.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 lg:p-8 rounded-2xl bg-accent/50 border border-primary/20">
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">
              Third-Party Services
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              DhanDiary uses the following third-party services for authentication only:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Google Sign-In (for optional OAuth authentication)</li>
              <li>GitHub Sign-In (for optional OAuth authentication)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              These services are used solely for account authentication and do not have access to your financial data within the app.
            </p>
          </div>

          {/* Contact */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Have questions about our privacy practices?
            </p>
            <a
              href="mailto:sarwanyadav6174@gmail.com"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              <Mail className="w-4 h-4" />
              Contact us at sarwanyadav6174@gmail.com
            </a>
          </div>

          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>Last updated: January 2026</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
