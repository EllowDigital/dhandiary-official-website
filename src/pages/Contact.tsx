import { Mail, ExternalLink, User, Building2 } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-subtle-gradient section-padding">
        <div className="container mx-auto text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Contact & Support
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Need help or have feedback? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding">
        <div className="container mx-auto container-narrow">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Email */}
            <a
              href="mailto:sarwanyadav6174@gmail.com"
              className="p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Email Support
              </h3>
              <p className="text-primary font-medium">
                sarwanyadav6174@gmail.com
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                For questions, feedback, or bug reports
              </p>
            </a>

            {/* Website */}
            <a
              href="https://ellowdigital.space"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <ExternalLink className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Developer Website
              </h3>
              <p className="text-primary font-medium">ellowdigital.space</p>
              <p className="text-muted-foreground text-sm mt-2">
                Visit our company website for more projects
              </p>
            </a>
          </div>

          {/* Developer Info */}
          <div className="mt-12 p-6 lg:p-8 rounded-2xl bg-accent/50 border border-primary/20">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6 text-center">
              About the Developer
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center text-primary">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Developer</p>
                  <p className="font-semibold text-foreground">Sarwan Yadav</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center text-primary">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Company</p>
                  <a
                    href="https://ellowdigital.space"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-foreground hover:underline"
                  >
                    EllowDigital
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Response Time */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              We typically respond to emails within 24-48 hours.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
