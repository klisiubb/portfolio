"use client";
import { FlipWords } from "@/components/ui/flip-words";
import { SparklesCore } from "@/components/ui/sparkles";
import { navItems, sentences } from "@/misc";
import TypingAnimation from "@/components/magicui/typing-animation";
import Navbar from "@/components/navbar";
import { FloatingDock } from "@/components/ui/floating-dock";
import { links } from "@/misc/links";

export default function Page() {
  return (
    <div className="absolute min-h-screen w-screen flex justify-center items-center flex-col">
      <Navbar navItems={navItems} />
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
        text="Hi, I am Mateusz Kliś."
        duration={50}
      />
      <div className="text-xs md:text-xl my-14 font-semibold">
        <FlipWords words={sentences} duration={4000} />
      </div>
      <FloatingDock items={links} />
    </div>
  );
}
