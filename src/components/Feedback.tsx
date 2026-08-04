import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { useState } from "react";

interface FeedbackProps {
  feedback: string;
  setFeedback: (fb: string) => void;
  feedbackEmail: string;
  setFeedbackEmail: (email: string) => void;
  plan: string;
  interest: string;
  setInterest: (interest: string) => void;
}

export function Feedback({
  feedback,
  setFeedback,
  feedbackEmail,
  setFeedbackEmail,
  plan,
  interest,
  setInterest,
}: FeedbackProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [wantBeta, setWantBeta] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackEmail && !feedback) {
      toast.error("Please enter your email or feedback.");
      return;
    }

    setIsSubmitting(true);

    const submissionData = {
      email: feedbackEmail || "Not provided",
      feedback: feedback || "No comments provided",
      join_beta: wantBeta ? "Yes, wants Beta access" : "No",
      preferred_plan: plan || "Pro",
      interest_level: interest || "Want to try it",
      at: new Date().toISOString(),
    };

    // 1. Save to localStorage
    const list = JSON.parse(localStorage.getItem("navix_feedback_beta") || "[]");
    list.push(submissionData);
    localStorage.setItem("navix_feedback_beta", JSON.stringify(list));

    // 2. Send via FormSubmit AJAX to nick.tuckeravila@gmail.com
    const targetEmail = import.meta.env.VITE_FORMSUBMIT_EMAIL || "nick.tuckeravila@gmail.com";

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          _subject: wantBeta ? "🚀 New Beta Signup & Feedback — Navix" : "💬 New Feedback — Navix",
          email: submissionData.email,
          wants_beta_access: submissionData.join_beta,
          preferred_plan: submissionData.preferred_plan,
          interest_level: submissionData.interest_level,
          feedback_message: submissionData.feedback,
          _template: "table",
        }),
      });

      if (res.ok) {
        toast.success(
          wantBeta
            ? "Thank you! You're on the Beta list and your feedback has been sent."
            : "Thank you! Your feedback has been sent successfully."
        );
      } else {
        toast.success("Thank you! Your response has been saved.");
      }
    } catch (err) {
      console.error("FormSubmit error:", err);
      toast.success("Thank you! Your response has been saved.");
    }

    setIsSubmitting(false);
    setFeedback("");
    setFeedbackEmail("");
  };

  return (
    <section id="feedback" className="bg-secondary/40 py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <Badge className="mb-3 bg-gradient-hero border-0">Beta & Feedback</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
            Help us build Navix & join the Beta
          </h2>
          <p className="text-foreground/80">
            Share your ideas, suggestions, and sign up to be among the first to test the Beta version.
          </p>
        </div>
        <Card className="p-8 md:p-10 rounded-3xl shadow-card border-border/80">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="fb-email" className="text-foreground">Your Email</Label>
              <Input
                id="fb-email"
                type="email"
                required={wantBeta}
                value={feedbackEmail}
                onChange={(e) => setFeedbackEmail(e.target.value)}
                placeholder="you@email.com"
                className="mt-1.5"
              />
            </div>

            {/* Beta Access Checkbox */}
            <div className="p-4 rounded-xl bg-secondary/50 border border-primary/20 flex items-start gap-3">
              <input
                type="checkbox"
                id="want-beta"
                checked={wantBeta}
                onChange={(e) => setWantBeta(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-primary text-primary focus:ring-primary cursor-pointer"
              />
              <label htmlFor="want-beta" className="text-sm cursor-pointer select-none">
                <span className="font-semibold text-foreground block">
                  I want to be among the first to test the Beta version
                </span>
                <span className="text-muted-foreground text-xs block mt-0.5">
                  Get early access invites and direct product updates.
                </span>
              </label>
            </div>

            {/* Level of interest options */}
            <div>
              <Label className="mb-2 block text-foreground">What best describes you?</Label>
              <RadioGroup
                value={interest}
                onValueChange={setInterest}
                className="grid sm:grid-cols-3 gap-2"
              >
                {[
                  { v: "explorar", l: "Just exploring" },
                  { v: "apoyar", l: "Keep me updated" },
                  { v: "comprar", l: "I'd pay for Navix" }
                ].map((o) => (
                  <label
                    key={o.v}
                    htmlFor={o.v}
                    className="flex items-center gap-2 rounded-lg border border-border p-3 cursor-pointer hover:border-primary transition-smooth has-[:checked]:border-primary has-[:checked]:bg-secondary/50"
                  >
                    <RadioGroupItem value={o.v} id={o.v} />
                    <span className="text-sm text-foreground/90">{o.l}</span>
                  </label>
                ))}
              </RadioGroup>
            </div>

            {/* Feedback textarea */}
            <div>
              <Label htmlFor="fb" className="text-foreground">Your Feedback & Suggestions (Optional)</Label>
              <Textarea
                id="fb"
                rows={4}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="What features would you like to see? Any specific custom gestures or integrations?"
                className="mt-1.5"
              />
            </div>

            <Button type="submit" size="lg" className="w-full shadow-glow" disabled={isSubmitting}>
              {isSubmitting
                ? "Submitting..."
                : wantBeta
                ? "Join Beta & Send Feedback"
                : "Submit Feedback"}
            </Button>

          </form>
        </Card>
      </div>
    </section>
  );
}
