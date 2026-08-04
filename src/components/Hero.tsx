import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import heroImg from "@/assets/Gemini_Generated_Image_25u17s25u17s25u1.png";

interface HeroProps {
  scrollTo: (id: string) => void;
}

export function Hero({ scrollTo }: HeroProps) {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary via-background to-background" />
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] mb-6 text-foreground">
            Meetings without losing your flow
          </h1>
          <p className="text-lg text-foreground/80 mb-8 max-w-lg">
            Control mute, camera, reactions, and more with your eyes and hand gestures.
            Without touching the keyboard. Without interrupting the conversation.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <Button size="lg" onClick={() => scrollTo("waitlist")} className="shadow-glow">
              I want to try it <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollTo("como")}>
              See how it works
            </Button>
          </div>
          <div className="flex items-center gap-6 text-sm text-foreground/70 font-medium">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" /> No hardware installation required
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary" /> Compatible with Zoom, Meet, Teams, OBS
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-hero opacity-20 blur-3xl rounded-3xl" />
          <img
            src={heroImg}
            alt="Professional controlling a video call with hand gestures and eye tracking"
            width={1536}
            height={1024}
            className="relative rounded-[2.5rem] shadow-glow w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
