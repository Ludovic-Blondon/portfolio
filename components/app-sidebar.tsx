"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Navigation } from "./navigation";
import { navigation } from "@/config/navigation";
import { SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export function AppSidebar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <Sidebar className="font-bitcount-single">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild isActive={pathname === "/"}>
              <Link href="/">
                <div className="flex size-8 items-center justify-center rounded-lg">
                  <Avatar>
                    <AvatarImage src="/avatar-small.png" />
                    <AvatarFallback>LB</AvatarFallback>
                  </Avatar>
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Ludovic Blondon</span>
                  <span className="truncate text-xs">Portfolio</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <Navigation navigation={navigation.navAbout} pathname={pathname} />
        <Navigation navigation={navigation.navProjects} pathname={pathname} />
      </SidebarContent>
      <SidebarFooter className="flex w-full justify-center">
        <Button
          className="ml-auto cursor-pointer"
          variant="ghost"
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
          size="icon"
          aria-label="Toggle theme"
        >
          <SunMoon className="size-5" />
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
