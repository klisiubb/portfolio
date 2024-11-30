import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { navItems } from "@/misc";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="absolute min-h-screen w-screen flex justify-center items-center flex-col overflow-hidden">
      <Navbar navItems={navItems} />
      <h1 className="text-6xl tracking-wider">
        Hello, this page is not yet ready!
      </h1>
      <p className="text-lg mt-4">Please contact me by:</p>
      <Button asChild className="mt-4 font-bold">
        <Link href="https://github.com/klisiubb">Github</Link>
      </Button>
      <Button asChild className="mt-4 font-bold" variant="outline">
        <Link href="https://www.linkedin.com/in/klisiubb/">Linkedin</Link>
      </Button>
      <Button asChild className="mt-4 font-bold">
        <Link href="mailto://emklisbb@gmail.com">Email</Link>
      </Button>
    </div>
  );
};

export default Page;
