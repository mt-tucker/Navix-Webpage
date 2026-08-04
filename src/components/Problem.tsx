import { Card } from "@/components/ui/card";

export function Problem() {
  const stats = [
    { n: "68%", t: "of remote professionals report frequent interruptions during video calls" },
    { n: "12s", t: "is the average time to regain focus after a micro-interruption" },
    { n: "5x", t: "more virtual meetings per week than in 2019" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="max-w-2xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">The problem is real</h2>
        <p className="text-foreground/80 text-lg">
          Every time you search for the mute button, move your cursor, or reach for your camera, you lose the
          thread of what you were saying. Multiply that by 5 meetings a day.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((s) => (
          <Card key={s.n} className="p-8 rounded-3xl shadow-card text-center">
            <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4 border border-border">
              <div className="text-3xl font-display font-bold text-foreground">
                {s.n}
              </div>
            </div>
            <p className="text-sm text-foreground/80 font-medium">{s.t}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
