import { Card } from "@/components/ui/card";
import { Users, Video, MessageSquare, Sparkles } from "lucide-react";

export function Audience() {
  const audiences = [
    { icon: Users, t: "Remote Professionals", d: "Fewer clicks, more conversation." },
    { icon: Video, t: "Video Call Teams", d: "Faster, more human meetings." },
    { icon: MessageSquare, t: "Facilitators & Coaches", d: "Control the session without breaking the rhythm." },
    { icon: Sparkles, t: "Live Streamers", d: "Manage your stream without stepping out of frame." },
  ];

  return (
    <section id="para-quien" className="max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for those who live on camera</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {audiences.map((a) => (
          <Card key={a.t} className="p-6 rounded-3xl shadow-card text-center">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
              <a.icon className="w-5 h-5 text-primary" />
            </div>
            <h4 className="font-semibold mb-1">{a.t}</h4>
            <p className="text-sm text-muted-foreground">{a.d}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
