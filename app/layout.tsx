import type { Metadata } from "next";
import { Geist, Geist_Mono, Bitcount_Single } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { AppBreadcrumb } from "@/components/app-breadcrumb";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: {
    default: "Portfolio",
    template: `%s - Portfolio`,
  },
  description: "Portfolio de Ludovic Blondon",
};

const bitcountSingle = Bitcount_Single({
  variable: "--font-bitcount-single",
  subsets: ["latin"],
  fallback: ["monospace"],
  preload: true,
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  preload: true,
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: false, // Utilisée moins fréquemment
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bitcountSingle.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
                <div className="flex flex-1 items-center gap-2 px-3">
                  <SidebarTrigger className="-ml-1" />
                  <Separator
                    orientation="vertical"
                    className="mr-2 data-[orientation=vertical]:h-4"
                  />
                  <AppBreadcrumb />
                </div>
                <div className="ml-auto flex items-center gap-2 px-3">
                  <Link
                    href="https://github.com/Ludovic-Blondon"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Voir mon profil GitHub"
                  >
                    <Github className="size-4" />
                  </Link>
                  <Separator
                    orientation="vertical"
                    className="mx-2 data-[orientation=vertical]:h-4"
                  />
                  <Link
                    href="https://www.linkedin.com/in/ludovic-blondon-746016178/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Voir mon profil LinkedIn"
                  >
                    <Linkedin className="size-4" />
                  </Link>
                </div>
              </header>
              {children}
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
