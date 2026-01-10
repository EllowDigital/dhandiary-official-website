import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Is DhanDiary really free?",
    answer:
      "Yes! DhanDiary is completely free to download and use. There are no hidden charges, subscriptions, or in-app purchases. We believe everyone deserves access to simple, effective personal finance tools.",
  },
  {
    question: "Does DhanDiary work offline?",
    answer:
      "Absolutely! DhanDiary is built with an offline-first approach. All your data is stored locally on your device, so you can track expenses even without internet. When you're back online, your data syncs automatically.",
  },
  {
    question: "Is my financial data secure?",
    answer:
      "Your privacy is our top priority. DhanDiary stores data locally on your device with encryption. We don't have ads, trackers, or analytics that collect personal information. Your financial data stays yours.",
  },
  {
    question: "What platforms is DhanDiary available on?",
    answer:
      "DhanDiary is currently available for Android devices. You can download it from the Indus App Store, Amazon App Store, or directly as an APK. iOS and web versions are planned for future releases.",
  },
  {
    question: "Can I backup my data?",
    answer:
      "Yes! DhanDiary supports data backup and export features. You can create local backups and restore them whenever needed. Cloud sync is available when you sign in with your account.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No account is required to use DhanDiary's core features. However, creating an account (with email, Google, or GitHub) enables cloud sync, backup, and access across multiple devices.",
  },
  {
    question: "How do I add recurring transactions?",
    answer:
      "DhanDiary supports recurring transactions for regular income or expenses. Simply toggle the 'Recurring' option when adding a transaction and set the frequency (daily, weekly, monthly, or yearly).",
  },
  {
    question: "Can I export my data?",
    answer:
      "Yes! You can export your transaction history and reports in multiple formats. This makes it easy to analyze your finances in spreadsheets or share with financial advisors.",
  },
];

const FAQ = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            Got Questions?
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about DhanDiary. Can't find what you're
            looking for? Contact our support.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl px-6 data-[state=open]:shadow-card transition-shadow"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary py-5 [&[data-state=open]>svg]:rotate-180">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
