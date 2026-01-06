import Layout from "@/components/layout/Layout";

const Eula = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-subtle-gradient section-padding">
        <div className="container mx-auto text-center">
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
          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <p>
              This EULA is a legal agreement between you and EllowDigital governing the
              installation and use of the DhanDiary software.
            </p>

            <div className="space-y-3">
              <h2 className="font-display text-2xl font-semibold text-foreground">1. License Grant</h2>
              <p>
                You are granted a limited, revocable, non-exclusive, non-transferable license
                to install and use DhanDiary on devices you own or control.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-2xl font-semibold text-foreground">2. Restrictions</h2>
              <p>You may NOT:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Rent, lease, sell, sublicense, or redistribute the software.</li>
                <li>Copy or modify the app except as permitted by law.</li>
                <li>Bypass security features or license checks.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-2xl font-semibold text-foreground">3. Updates &amp; Availability</h2>
              <p>Updates may be installed automatically.</p>
              <p>We are not obligated to provide ongoing support or updates.</p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-2xl font-semibold text-foreground">4. Ownership</h2>
              <p>
                EllowDigital retains all ownership and intellectual property rights. This
                agreement does not transfer ownership to you.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-2xl font-semibold text-foreground">5. Third-Party Components</h2>
              <p>
                The software may include open-source or third-party components governed by
                their own licenses.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-2xl font-semibold text-foreground">6. Termination</h2>
              <p>
                This EULA remains effective until terminated. Upon termination, you must
                uninstall and delete all copies of the software.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-2xl font-semibold text-foreground">7. Export Compliance</h2>
              <p>You agree to comply with all applicable export laws and regulations.</p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-2xl font-semibold text-foreground">8. Disclaimer of Warranty</h2>
              <p>
                The software is provided &quot;AS IS&quot; without warranties of any kind. You assume
                all risks related to its use.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-2xl font-semibold text-foreground">9. Limitation of Liability</h2>
              <p>
                EllowDigital is not liable for incidental or consequential damages. Liability
                is limited to:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Amount paid for the license, or</li>
                <li>INR 500 if no fees were paid.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-2xl font-semibold text-foreground">10. Contact</h2>
              <p>Developer Email: sarwanyadav6174@gmail.com</p>
              <p>Team Email: ellowdigitalindia@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Eula;
