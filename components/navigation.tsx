import Link from "next/link";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { NavigationConfig } from "@/types";

export function Navigation({
  navigation,
  pathname,
}: {
  navigation: NavigationConfig;
  pathname: string;
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{navigation.label}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {navigation.items.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton isActive={pathname === item.href} asChild>
                <Link href={item.href}>{item.label}</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
