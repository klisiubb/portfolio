import TypingAnimation from "@/components/magicui/typing-animation";

export default function Page() {
  return (
    <div className="h-screen flex flex-row justify-center items-center">
      <TypingAnimation
        text="Hi, I'm Mateusz Kliś"
        duration={50}
        className="text-6xl"
      />
    </div>
  );
}
