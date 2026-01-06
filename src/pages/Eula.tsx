import Layout from "@/components/layout/Layout";
import { KeyRound, Shield, RefreshCcw, BadgeCheck, Link2, Ban, AlertTriangle, Globe, Mail } from "lucide-react";

const sections = [
  {
    icon: <KeyRound className="w-6 h-6" />,
    title: "1. License Grant",
    content: (
      <p>
        You are granted a limited, revocable, non-exclusive, non-transferable license to
        install and use DhanDiary on devices you own or control.
      </p>
    ),
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "2. Restrictions",
    content: (
      <>
        <p>You may NOT:</p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-3">
          <li>Rent, lease, sell, sublicense, or redistribute the software.</li>
          <li>Copy or modify the app except as permitted by law.</li>
          <li>Bypass security features or license checks.</li>
        </ul>
      </>
    ),
  },
  {
    icon: <RefreshCcw className="w-6 h-6" />,
    title: "3. Updates & Availability",
    content: (
      <>
        <p>Updates may be installed automatically.</p>
        <p className="mt-3">We are not obligated to provide ongoing support or updates.</p>
      </>
    ),
  },
  {
    icon: <BadgeCheck className="w-6 h-6" />,
    title: "4. Ownership",
    content: (
      <p>
        EllowDigital retains all ownership and intellectual property rights. This agreement
        does not transfer ownership to you.
      </p>
    ),
  },
  {
    icon: <Link2 className="w-6 h-6" />,
    title: "5. Third-Party Components",
    content: (
      <p>
        The software may include open-source or third-party components governed by their own
        licenses.
      </p>
    ),
  },
  {
    icon: <Ban className="w-6 h-6" />,
    title: "6. Termination",
    content: (
      <p>
        This EULA remains effective until terminated. Upon termination, you must uninstall
        and delete all copies of the software.
      </p>
    ),
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "7. Export Compliance",
    content: <p>You agree to comply with all applicable export laws and regulations.</p>,
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "8. Disclaimer of Warranty",
    content: (
      <p>
        The software is provided &quot;AS IS&quot; without warranties of any kind. You assume all
        risks related to its use.
      </p>
    ),
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "9. Limitation of Liability",
    content: (
      <>
        <p>
          EllowDigital is not liable for incidental or consequential damages. Liability is
          limited to:
        </p>
        <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-3">
          <li>Amount paid for the license, or</li>
          <li>INR 500 if no fees were paid.</li>
        </ul>
      </>
    ),
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "10. Contact",
    content: (
      <>
        <p>Developer Email: sarwanyadav6174@gmail.com</p>
        <p>Team Email: ellowdigitalindia@gmail.com</p>
      </>
    ),
  },
];

const Eula = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-subtle-gradient section-padding">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
            <KeyRound className="w-4 h-4" />
            License
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            End User License Agreement (EULA)
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
                DhanDiary — End User License Agreement (EULA)
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This EULA is a legal agreement between you and EllowDigital governing the
                installation and use of the DhanDiary software.
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
            <p>Effective date: 12 December 2025</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Eula;
