import { FileText, Github, Linkedin, Mail } from "lucide-react";

export const links = [
  {
    title: "Github",
    icon: (
      <Github className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: process.env.NEXT_PUBLIC_GITHUB_LINK as string,
  },
  {
    title: "Linkedin",
    icon: (
      <Linkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: process.env.NEXT_PUBLIC_LINKEDIN_LINK as string,
  },
  {
    title: "Email",
    icon: (
      <Mail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: process.env.NEXT_PUBLIC_EMAIL_ADDRESS as string,
  },
  {
    title: "Resume",
    icon: (
      <FileText className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: process.env.NEXT_PUBLIC_RESUME_LINK as string,
  },
];
