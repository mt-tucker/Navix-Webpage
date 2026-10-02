import { Card } from "@/components/ui/card";
import { Eye, Hand, Mic, Sliders } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Eye,
      title: "Look to Control",
      desc: "Assign your own actions to simple glances. Choose which areas of your screen trigger the controls you use most.",
    },
    {
      icon: Hand,
      title: "Custom Hand Gestures",
      desc: "Pick and define your own motions. Set up your favorite gestures to control any meeting action, your way.",
    },
    {
      icon: Mic,
      title: "Personal Voice Shortcuts",
      desc: "Create custom spoken phrases for hands-free control. Choose whatever words feel natural to your speaking style.",
    },
    {
      icon: Sliders,
      title: "Tailored to You",
      desc: "Adjust every action and sensitivity to match your personal comfort. Works with your regular webcam with zero extra gear.",
    },
  ];

  return (
    <section id="como" className="bg-secondary/40 py-24 scroll-mt-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-foreground tracking-tight">
            How It Works
          </h2>
          <p className="text-lg md:text-xl font-medium text-primary mb-3">
            Fully customizable control. Zero friction.
          </p>
          <p className="text-foreground/80 max-w-xl mx-auto">
            Navix works with your existing webcam and microphone. Personalize every glance, gesture, and shortcut so your meetings adapt to you.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((f) => (
            <Card key={f.title} className="p-7 rounded-3xl shadow-card hover:shadow-soft transition-smooth border-border/60">
              <div className="w-14 h-14 rounded-full bg-gradient-hero flex items-center justify-center mb-5 shadow-glow">
                <f.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{f.title}</h3>
              <p className="text-foreground/75 text-sm leading-relaxed">{f.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
