import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    tag: "Basic access",
    features: ["5 active gesture profile", "3h/day limit", "Standard app support"],
  },
  {
    name: "Pro",
    price: "$6",
    tag: "Full flexibility",
    highlight: false,
    features: ["Unlimited gestures", "No time limits", "All video call apps", "Custom action mapping"],
  },
  {
    name: "Teams",
    price: "$15",
    tag: "Per team/month",
    features: ["Everything in Pro", "Team admin dashboard", "Shared gesture presets", "Priority support"],
  },
];

export function Pricing() {
  return (
    <section id="precios" className="bg-gradient-dark text-primary-foreground py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge className="mb-4 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20">
            Pricing Plans
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Planned Subscription Models</h2>
          <p className="text-primary-foreground/70">
            Transparent pricing designed for individual professionals and collaborative teams.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((p) => (
            <Card
              key={p.name}
              className={`p-7 rounded-3xl text-foreground relative ${
                p.highlight ? "ring-2 ring-primary shadow-glow scale-[1.02]" : ""
              }`}
            >
              {p.highlight && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-hero border-0">
                  Recommended
                </Badge>
              )}
              <div className="text-sm text-muted-foreground mb-1">{p.name}</div>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-bold">{p.price}</span>
                <span className="text-sm text-muted-foreground">/month</span>
              </div>
              <div className="text-xs text-muted-foreground mb-5">{p.tag}</div>
              <ul className="space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
