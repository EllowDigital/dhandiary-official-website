import { motion } from "framer-motion";
import {
  Mail,
  ExternalLink,
  User,
  Building2,
  MessageCircle,
  Clock,
} from "lucide-react";
import Layout from "@/components/layout/Layout";

const contactMethods = [
  {
    icon: <Mail className="w-7 h-7" />,
    title: "Email Support",
    value: "sarwanyadav6174@gmail.com",
    description: "For questions, feedback, or bug reports",
    href: "mailto:sarwanyadav6174@gmail.com",
    primary: true,
  },
  {
    icon: <ExternalLink className="w-7 h-7" />,
    title: "Developer Website",
    value: "ellowdigital.space",
    description: "Visit our company website for more projects",
    href: "https://ellowdigital.space",
    primary: false,
  },
];

const teamMembers = [
  {
    icon: <User className="w-6 h-6" />,
    role: "Developer",
    name: "Sarwan Yadav",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    role: "Company",
    name: "EllowDigital",
    href: "https://ellowdigital.space",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const Contact = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-subtle-gradient overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              Get in Touch
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Contact & Support
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
              Need help or have feedback? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={method.href}
                target={method.href.startsWith("mailto") ? undefined : "_blank"}
                rel={
                  method.href.startsWith("mailto")
                    ? undefined
                    : "noopener noreferrer"
                }
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`p-6 lg:p-8 rounded-2xl border transition-all duration-300 group ${
                  method.primary
                    ? "bg-accent/50 border-primary/20 hover:border-primary/40"
                    : "bg-card border-border hover:border-primary/30"
                } hover:shadow-card`}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors ${
                    method.primary
                      ? "bg-primary text-primary-foreground"
                      : "bg-accent text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                  }`}
                >
                  {method.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {method.title}
                </h3>
                <p className="text-primary font-medium mb-1">{method.value}</p>
                <p className="text-muted-foreground text-sm">
                  {method.description}
                </p>
              </motion.a>
            ))}
          </motion.div>

          {/* Developer Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 p-6 lg:p-8 rounded-2xl bg-card border border-border"
          >
            <h3 className="font-display text-xl font-semibold text-foreground mb-6 text-center">
              About the Developer
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center text-primary">
                    {member.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {member.role}
                    </p>
                    {member.href ? (
                      <a
                        href={member.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        {member.name}
                      </a>
                    ) : (
                      <p className="font-semibold text-foreground">
                        {member.name}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Response Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex items-center justify-center gap-2 text-muted-foreground"
          >
            <Clock className="w-4 h-4" />
            <p>We typically respond to emails within 24-48 hours.</p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
