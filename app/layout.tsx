import type { Metadata } from "next";
import { IBM_Plex_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { MobileNav } from "@/components/mobile-nav";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: {
    default: "Portfolio",
    template: `%s - Portfolio`,
  },
  description: "Portfolio de Ludovic Blondon",
};

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  preload: true,
  display: "swap",
});

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start-2p",
  subsets: ["latin"],
  weight: "400",
  fallback: ["monospace"],
  preload: true,
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${ibmPlexMono.variable} ${pressStart2P.variable} antialiased`}
      >
        <div className="md:flex md:h-dvh md:overflow-hidden">
          <SiteNav className="border-border hidden w-[300px] flex-none border-r md:flex md:h-dvh" />
          <div className="flex min-w-0 flex-1 flex-col md:h-dvh md:overflow-y-auto">
            <MobileNav />
            <main className="flex-1">{children}</main>
          </div>
        </div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
