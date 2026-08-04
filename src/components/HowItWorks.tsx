import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Hand, Mic, Sliders } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Eye,
      title: "Eye Triggers",
      desc: "Fully configurable eye-tracking hotspots. Assign any screen region to your preferred control action.",
    },
    {
      icon: Hand,
      title: "Hand Gestures",
      desc: "Customize your own hand gestures for toggling mic, camera, reactions, or custom shortcuts.",
    },
    {
      icon: Mic,
      title: "Voice Shortcuts",
      desc: "Define custom voice commands tailored to your speaking style and meeting workflow.",
    },
    {
      icon: Sliders,
      title: "Adaptive Setup",
      desc: "Fine-tune sensitivities and custom mappings so every control feels effortless and natural.",
    },
  ];

  return (
    <section id="como" className="bg-secondary/40 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge className="mb-4" variant="outline">How it works</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Fully customizable control. Zero friction.
          </h2>
          <p className="text-foreground/80">
            Navix adapts to your habits. Configure any gesture, eye trigger, or voice shortcut using your existing camera and mic.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((f) => (
            <Card key={f.title} className="p-7 rounded-3xl shadow-card hover:shadow-soft transition-smooth border-border/60">
              <div className="w-14 h-14 rounded-full bg-gradient-hero flex items-center justify-center mb-5 shadow-glow">
                <f.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{f.title}</h3>
              <p className="text-foreground/75 text-sm">{f.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
