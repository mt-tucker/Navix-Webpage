import { Card } from "@/components/ui/card";
import { Users, Video, MessageSquare, Sparkles } from "lucide-react";

export function Audience() {
  const audiences = [
    { icon: Users, t: "Remote Professionals", d: "Fewer clicks, more natural conversation." },
    { icon: Video, t: "Video Call Teams", d: "Faster, more human meetings without disruptions." },
    { icon: MessageSquare, t: "Facilitators & Coaches", d: "Control the session smoothly without breaking the rhythm." },
    { icon: Sparkles, t: "Live Streamers", d: "Manage your stream seamlessly without stepping out of frame." },
  ];

  return (
    <section id="para-quien" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-10">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-foreground tracking-tight">
          Who Can Be The User?
        </h2>
        <p className="text-lg md:text-xl font-medium text-primary mb-3">
          Built for those who live and work on camera
        </p>
        <p className="text-foreground/80 max-w-xl mx-auto">
          Tailored for anyone spending hours in virtual meetings who wants a faster, hands-free workflow.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {audiences.map((a) => (
          <Card key={a.t} className="p-6 rounded-3xl shadow-card text-center hover:shadow-soft transition-smooth border-border/60">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 border border-border/50">
              <a.icon className="w-5 h-5 text-primary" />
            </div>
            <h4 className="font-semibold mb-1 text-foreground">{a.t}</h4>
            <p className="text-sm text-muted-foreground">{a.d}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
