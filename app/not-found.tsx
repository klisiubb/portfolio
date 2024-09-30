import TypingAnimation from "@/components/magicui/typing-animation";
import { Button } from "@/components/ui/button";
import { SparklesCore } from "@/components/ui/sparkles";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="absolute min-h-screen w-screen flex justify-center items-center flex-col">
      <div className="absolute inset-0">
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
        />
      </div>
      <TypingAnimation
        className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-blue-800 inline-block text-transparent bg-clip-text"
        text="404 - not found!"
        duration={200}
      />
      <Button asChild variant="outline" size="lg" className="mt-8 relative">
        <Link href="/">Go home</Link>
      </Button>
    </div>
  );
}
