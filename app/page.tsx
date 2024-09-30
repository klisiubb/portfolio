"use client";
import { FlipWords } from "@/components/ui/flip-words";
import { SparklesCore } from "@/components/ui/sparkles";
import { sentences } from "@/misc";
import TypingAnimation from "@/components/magicui/typing-animation";

export default function Page() {
  return (
    <div className="absolute h-screen w-screen flex justify-center items-center flex-col">
      <div className="absolute inset-0">
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          particleColor="#FFFFFF"
          className="w-full h-full"
        />
      </div>
      <TypingAnimation
        className="text-4xl md:text-6xl font-bold text-blue-500"
        text="Hi, I am Mateusz Kliś."
        duration={50}
      />
      <div className="md:text-xl my-4">
        <FlipWords words={sentences} duration={4000} />
      </div>
    </div>
  );
}
