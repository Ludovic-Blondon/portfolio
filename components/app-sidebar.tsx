"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Navigation } from "./navigation";
import { navigation } from "@/config/navigation";

export function AppSidebar() {
  const pathname = usePathname();

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
    </Sidebar>
  );
}
