import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_WEBSITE_URL as string),
  title: "Mateusz Kliś | Portfolio",
  description:
    "Mateusz Kliś - CS student at University of Bielsko-Biała. Fullstack Next.js developer.",
  keywords: ["Mateusz Kliś", "klisiubb", "Bielsko-Biała"],
  openGraph: {
    title: "Mateusz Kliś | Portfolio",
    description:
      "Mateusz Kliś - CS student at University of Bielsko-Biała. Fullstack Next.js developer.",
    type: "website",
    locale: "en-GB",
    images: [
      {
        url: `/opengraph-image.png`,
      },
    ],
    url: process.env.NEXT_PUBLIC_WEBSITE_URL,
    siteName: "Mateusz Kliś | Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        async
        src="https://umami.klisiu.me/script.js"
        data-website-id="499d9b5b-8e38-4032-9d99-e999c41b62e4"
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
