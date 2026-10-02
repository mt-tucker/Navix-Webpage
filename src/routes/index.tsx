import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { HowItWorks } from "@/components/HowItWorks";
import { Audience } from "@/components/Audience";
import { Pricing } from "@/components/Pricing";
import { Feedback } from "@/components/Feedback";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Navix — Control your meetings with your eyes and hands" },
      {
        name: "description",
        content:
          "Navix prevents loss of focus in video calls. Control mute, camera, and more with customizable eye and hand gestures, without interrupting the conversation.",
      },
      { property: "og:title", content: "Navix — Seamless Virtual Meetings" },
      {
        property: "og:description",
        content:
          "Tech solution allowing you to control your device with eye tracking and gestures for a more natural communication in every video call.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Landing() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Navbar scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <Problem />
      <HowItWorks />
      <Audience />
      <Pricing />
      <Feedback />
      <Footer />
    </div>
  );
}
