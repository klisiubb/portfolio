"use client";
import { FlipWords } from "@/components/ui/flip-words";
import { SparklesCore } from "@/components/ui/sparkles";
import { navItems, sentences } from "@/misc";
import TypingAnimation from "@/components/magicui/typing-animation";
import Navbar from "@/components/navbar";
import { FloatingDock } from "@/components/ui/floating-dock";
import { links } from "@/misc/links";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
export default function Page() {
  return (
    <div className="absolute min-h-screen w-screen flex justify-center items-center flex-col overflow-hidden">
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
      <Badge
        variant="outline"
        className="text-sm py-2 gap-x-2"
        aria-label="New Edition date is revealed!"
      >
        <span className="relative flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-700 opacity-75"></span>
          <span className="relative inline-flex h-4 w-4 rounded-full bg-red-700"></span>
        </span>
        <span>Currently not looking for a job</span>
      </Badge>
      <Image
        src="/avatar.png"
        alt="Coding Avatar"
        width={1024}
        height={1024}
        className="z-30 w-64 h-64"
      />
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
