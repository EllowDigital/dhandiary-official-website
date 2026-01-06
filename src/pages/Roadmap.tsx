import { Helmet } from "react-helmet-async";
import { CheckCircle2, Loader2, Clock, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type RoadmapItem = {
  text: string;
  status: "Released" | "In Progress" | "Planned";
};

const recentlyReleased: RoadmapItem[] = [
  { text: "Improved offline sync stability", status: "Released" },
  { text: "Faster app startup", status: "Released" },
  { text: "Enhanced security and login reliability", status: "Released" },
  { text: "Bug fixes and performance improvements", status: "Released" },
];

const inProgress: RoadmapItem[] = [
  { text: "Better analytics and insights", status: "In Progress" },
  { text: "Improved category management", status: "In Progress" },
  { text: "App stability improvements", status: "In Progress" },
  { text: "UI polish and usability enhancements", status: "In Progress" },
];

const planned: RoadmapItem[] = [
  { text: "Cloud backup improvements", status: "Planned" },
  { text: "Data export (CSV / PDF)", status: "Planned" },
  { text: "Custom categories and tags", status: "Planned" },
  { text: "App lock enhancements", status: "Planned" },
  { text: "Multi-device sync improvements", status: "Planned" },
];

const longTermVision = [
  "Smarter insights and summaries",
  "Better budgeting tools",
  "Improved accessibility",
  "Continued performance and reliability upgrades",
];

const statusBadge = (status: RoadmapItem["status"]) => {
  if (status === "Released") {
    return (
      <Badge className="bg-primary text-primary-foreground">Released</Badge>
    );
  }

  if (status === "In Progress") {
    return <Badge variant="secondary">In Progress</Badge>;
  }

  return <Badge variant="outline">Planned</Badge>;
};

const Roadmap = () => {
  const metaTitle = "DhanDiary Roadmap – What’s Coming Next";
  const metaDescription =
    "See what’s recently released, what we’re working on now, and what’s planned next for DhanDiary. This roadmap may evolve based on user feedback.";

  return (
    <Layout>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href="https://dhandiary.com/roadmap" />
      </Helmet>

      {/* Hero */}
      <section className="bg-subtle-gradient section-padding">
        <div className="container mx-auto text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            DhanDiary Roadmap
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here’s what we’re working on and what’s coming next for DhanDiary.
            This roadmap reflects our current plans and may evolve based on user
            feedback.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container mx-auto container-narrow">
          <div className="space-y-10">
            {/* Recently Released */}
            <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border">
              <div className="flex items-center justify-between gap-4 mb-6">
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Recently Released
                </h2>
                <Badge className="bg-primary text-primary-foreground">
                  Released
                </Badge>
              </div>
              <div className="grid gap-4">
                {recentlyReleased.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-foreground font-medium">
                          {item.text}
                        </p>
                        <div className="hidden sm:block">
                          {statusBadge(item.status)}
                        </div>
                      </div>
                      <div className="sm:hidden mt-2">
                        {statusBadge(item.status)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* In Progress */}
            <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border">
              <div className="flex items-center justify-between gap-4 mb-6">
                <h2 className="font-display text-2xl font-bold text-foreground">
                  In Progress
                </h2>
                <Badge variant="secondary">In Progress</Badge>
              </div>
              <div className="grid gap-4">
                {inProgress.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border"
                  >
                    <Loader2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-foreground font-medium">
                          {item.text}
                        </p>
                        <div className="hidden sm:block">
                          {statusBadge(item.status)}
                        </div>
                      </div>
                      <div className="sm:hidden mt-2">
                        {statusBadge(item.status)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-sm mt-6">
                We avoid exact dates here, because app reviews and platform
                rules can change unexpectedly.
              </p>
            </div>

            {/* Planned */}
            <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border">
              <div className="flex items-center justify-between gap-4 mb-6">
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Planned (Coming Next)
                </h2>
                <Badge variant="outline">Planned</Badge>
              </div>
              <div className="grid gap-4">
                {planned.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border"
                  >
                    <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-foreground font-medium">
                          {item.text}
                        </p>
                        <div className="hidden sm:block">
                          {statusBadge(item.status)}
                        </div>
                      </div>
                      <div className="sm:hidden mt-2">
                        {statusBadge(item.status)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Long-Term Vision */}
            <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                Long-Term Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                These are high-level goals that guide where DhanDiary is going
                over time.
              </p>
              <div className="grid gap-3">
                {longTermVision.map((text, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border"
                  >
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <p className="text-foreground font-medium">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 lg:p-8 rounded-2xl bg-accent/50 border border-primary/20 text-center">
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                Want to help shape the roadmap?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
                Your feedback helps us prioritize improvements and build the
                features that matter most.
              </p>
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">
                  <MessageSquare className="w-5 h-5" />
                  Share Feedback
                </Link>
              </Button>
            </div>

            {/* Footer note */}
            <p className="text-muted-foreground text-sm text-center">
              This roadmap is subject to change based on user feedback and
              platform requirements.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Roadmap;
