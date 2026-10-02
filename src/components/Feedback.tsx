import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { useState } from "react";
import { MessageSquareHeart, Send, CheckCircle2 } from "lucide-react";

interface FeedbackProps {
  feedback?: string;
  setFeedback?: (fb: string) => void;
  feedbackEmail?: string;
  setFeedbackEmail?: (email: string) => void;
  plan?: string;
  interest?: string;
  setInterest?: (interest: string) => void;
}

const RATING_OPTIONS = [
  {
    value: "Loved it",
    label: "🤩 Loved it!",
    desc: "I would use this in my daily calls and meetings",
  },
  {
    value: "Interesting",
    label: "👍 Very interesting",
    desc: "Great idea with clear potential",
  },
  {
    value: "Have doubts",
    label: "🤔 Have doubts",
    desc: "Not sure if I would adapt to gesture controls",
  },
  {
    value: "Not convinced",
    label: "👎 Not convinced",
    desc: "I prefer conventional mouse and keyboard controls",
  },
];

export function Feedback({
  feedbackEmail: initialEmail = "",
}: FeedbackProps) {
  const [email, setEmail] = useState(initialEmail);
  const [rating, setRating] = useState("Loved it");
  const [whatToChange, setWhatToChange] = useState("");
  const [whatToRemove, setWhatToRemove] = useState("");
  const [whatToAdd, setWhatToAdd] = useState("");
  const [wantBeta, setWantBeta] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email && !whatToChange && !whatToRemove && !whatToAdd && !rating) {
      toast.error("Please answer at least one question or enter your email.");
      return;
    }

    setIsSubmitting(true);

    const submissionData = {
      email: email || "Not provided",
      rating,
      whatToChange: whatToChange || "No comments provided",
      whatToRemove: whatToRemove || "No comments provided",
      whatToAdd: whatToAdd || "No comments provided",
      join_beta: wantBeta ? "Yes, wants Beta access" : "No",
      at: new Date().toISOString(),
    };

    // 1. Save local backup to localStorage
    try {
      const list = JSON.parse(localStorage.getItem("navix_feedback_beta") || "[]");
      list.push(submissionData);
      localStorage.setItem("navix_feedback_beta", JSON.stringify(list));
    } catch (e) {
      console.error("Error saving to localStorage:", e);
    }

    // 2. Send via FormSubmit AJAX to configured email
    const targetEmail = import.meta.env.VITE_FORMSUBMIT_EMAIL || "nick.tuckeravila@gmail.com";

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: wantBeta
            ? "🚀 New Beta Signup & Survey Feedback — Navix"
            : "💬 New Feedback Response — Navix",
          email: email || undefined,
          _replyto: email || undefined,
          "User Email": submissionData.email,
          "Did they like the platform?": submissionData.rating,
          "What would you change?": submissionData.whatToChange,
          "What would you remove?": submissionData.whatToRemove,
          "What would you like to add?": submissionData.whatToAdd,
          "Wants Beta Access?": submissionData.join_beta,
          "Submitted At": new Date().toLocaleString(),
          _template: "table",
        }),
      });

      if (res.ok) {
        toast.success(
          wantBeta
            ? "Thank you! Your feedback has been sent and you are on the Beta list."
            : "Thank you! Your feedback has been sent successfully."
        );
      } else {
        toast.success("Thank you! Your feedback has been recorded.");
      }
    } catch (err) {
      console.error("Error sending via FormSubmit:", err);
      toast.success("Thank you! Your feedback has been recorded.");
    } finally {
      setIsSubmitting(false);
      setEmail("");
      setWhatToChange("");
      setWhatToRemove("");
      setWhatToAdd("");
    }
  };

  return (
    <section id="feedback" className="relative bg-secondary/40 py-24 scroll-mt-10">
      {/* Anchor for waitlist links */}
      <div id="waitlist" className="absolute -top-10" />

      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <Badge className="mb-3 bg-gradient-hero border-0 text-white gap-1 px-3 py-1">
            <MessageSquareHeart className="w-3.5 h-3.5" /> Early Feedback
          </Badge>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-foreground tracking-tight">
            Shape The Future Of Navix
          </h2>
          <p className="text-lg md:text-xl font-medium text-primary mb-3">
            Join the Beta & Tell Us What You Think
          </p>
          <p className="text-foreground/80 max-w-xl mx-auto">
            Help us build the next generation of seamless meeting controls. Share your honest perspective and secure your early access.
          </p>
        </div>

        <Card className="p-8 md:p-10 rounded-3xl shadow-card border-border/80 bg-card">
          <form onSubmit={handleSubmit} className="space-y-7">
            {/* 1. Did you like the platform? (with options) */}
            <div>
              <Label className="text-base font-semibold text-foreground block mb-2">
                1. Did you like the platform concept?
              </Label>
              <p className="text-xs text-muted-foreground mb-3">
                Select the option that best describes your first impression:
              </p>
              <RadioGroup
                value={rating}
                onValueChange={setRating}
                className="grid sm:grid-cols-2 gap-3"
              >
                {RATING_OPTIONS.map((opt) => {
                  const isSelected = rating === opt.value;
                  return (
                    <label
                      key={opt.value}
                      htmlFor={`rating-${opt.value}`}
                      className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-smooth ${
                        isSelected
                          ? "border-primary bg-primary/5 ring-1 ring-primary/30"
                          : "border-border hover:border-primary/50 bg-background/50"
                      }`}
                    >
                      <RadioGroupItem
                        value={opt.value}
                        id={`rating-${opt.value}`}
                        className="mt-1"
                      />
                      <div className="select-none">
                        <span className="font-medium text-foreground text-sm block">
                          {opt.label}
                        </span>
                        <span className="text-xs text-muted-foreground block mt-0.5">
                          {opt.desc}
                        </span>
                      </div>
                    </label>
                  );
                })}
              </RadioGroup>
            </div>

            {/* 2. What would you change? */}
            <div>
              <Label htmlFor="what-to-change" className="text-base font-semibold text-foreground block">
                2. What would you change?
              </Label>
              <p className="text-xs text-muted-foreground mb-2">
                Aspects of the design, interactions, or control dynamics you would tweak:
              </p>
              <Textarea
                id="what-to-change"
                rows={3}
                value={whatToChange}
                onChange={(e) => setWhatToChange(e.target.value)}
                
                className="mt-1 bg-background"
              />
            </div>

            {/* 3. What would you remove? */}
            <div>
              <Label htmlFor="what-to-remove" className="text-base font-semibold text-foreground block">
                3. What would you remove?
              </Label>
              <p className="text-xs text-muted-foreground mb-2">
                Features or elements you feel are unnecessary, distracting, or add clutter:
              </p>
              <Textarea
                id="what-to-remove"
                rows={3}
                value={whatToRemove}
                onChange={(e) => setWhatToRemove(e.target.value)}
                
                className="mt-1 bg-background"
              />
            </div>

            {/* 4. What would you like to add? */}
            <div>
              <Label htmlFor="what-to-add" className="text-base font-semibold text-foreground block">
                4. What would you like to add?
              </Label>
              <p className="text-xs text-muted-foreground mb-2">
                New ideas, requested integrations (Discord, Slack, Meet), or custom actions:
              </p>
              <Textarea
                id="what-to-add"
                rows={3}
                value={whatToAdd}
                onChange={(e) => setWhatToAdd(e.target.value)}
                
                className="mt-1 bg-background"
              />
            </div>

            {/* Contact Email */}
            <div className="pt-2 border-t border-border/60">
              <Label htmlFor="fb-email" className="text-base font-semibold text-foreground block">
                Your Email Address
              </Label>
              <p className="text-xs text-muted-foreground mb-2">
                So we can follow up on your feedback or send your invitation:
              </p>
              <Input
                id="fb-email"
                type="email"
                required={wantBeta}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="bg-background"
              />
            </div>

            {/* Beta access checkbox */}
            <div className="p-4 rounded-2xl bg-secondary/60 border border-primary/20 flex items-start gap-3">
              <input
                type="checkbox"
                id="want-beta"
                checked={wantBeta}
                onChange={(e) => setWantBeta(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-primary text-primary focus:ring-primary cursor-pointer"
              />
              <label htmlFor="want-beta" className="text-sm cursor-pointer select-none">
                <span className="font-semibold text-foreground flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  I want to be among the first to test the Beta version
                </span>
                <span className="text-muted-foreground text-xs block mt-0.5">
                  Receive priority invitations and direct product release updates.
                </span>
              </label>
            </div>

            {/* Submit button */}
            <Button
              type="submit"
              size="lg"
              className="w-full shadow-glow gap-2 text-base font-medium py-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending responses..."
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  {wantBeta ? "Submit Feedback & Join Beta" : "Submit Feedback"}
                </>
              )}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
