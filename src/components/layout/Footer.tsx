import { Link } from "react-router-dom";
import { Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src="/img/logo.png"
                alt="DhanDiary"
                className="w-9 h-9 rounded-xl object-contain shadow-soft"
                loading="lazy"
              />
              <span className="font-display font-bold text-xl text-foreground">
                DhanDiary
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Simple, secure personal finance tracking for everyone. No ads, no
              trackers, just clean money management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/features"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/download"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Download
                </Link>
              </li>
              <li>
                <Link
                  to="/how-to-install-apk"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  How to Install APK
                </Link>
              </li>
              <li>
                <Link
                  to="/roadmap"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Roadmap
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/terms"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/eula"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  EULA
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:sarwanyadav6174@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  sarwanyadav6174@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground text-sm">
                <ExternalLink className="w-4 h-4" />
                <a
                  href="https://ellowdigital.space"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  ellowdigital.space
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} DhanDiary. Built by{" "}
               <a
                 href="https://ellowdigital.space"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-primary hover:underline"
               >
                 EllowDigital
               </a>{" "}
               Credits to{" "}
            </p>
            <p className="text-muted-foreground text-sm">
              Made with ❤️ by Sarwan Yadav
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
