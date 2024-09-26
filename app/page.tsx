import TypingAnimation from "@/components/magicui/typing-animation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export default function Page() {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] flex flex-col justify-center items-center">
      <TypingAnimation
        text="Hi, I'm Mateusz Kliś"
        duration={50}
        className="text-6xl"
      />
      <p className="text-xl my-4 text-center max-w-2xl">
        CS Student at University of Bielsko-Biała & Fullstack Next.js Developer.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-8">
        <Button
          size="lg"
          asChild
          className="group relative overflow-hidden transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg"
        >
          <Link href="/project" className="flex items-center gap-2">
            Browse my portfolio
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            <span className="absolute inset-0 bg-white/10 transition-transform duration-300 group-hover:scale-[2.5] rounded-full scale-0" />
          </Link>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="group relative overflow-hidden transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:bg-white/10"
        >
          <span className="flex items-center gap-2">
            Download my CV
            <Download className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </span>
          <span className="absolute inset-0 bg-white/5 transition-transform duration-300 group-hover:scale-[2.5] rounded-full scale-0" />
        </Button>
      </div>
    </div>
  );
}
