"use client";

import { navigation } from "@/config/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { usePathname } from "next/navigation";
import { Fragment, useMemo } from "react";

export function AppBreadcrumb() {
  const pathname = usePathname();
  const breadcrumbItems = pathname.split("/").filter((item) => item);

  const navigationMap = useMemo(() => {
    const map = new Map<string, string>();
    [...navigation.navProjects.items, ...navigation.navAbout.items].forEach(
      (item) => map.set(item.href, item.label)
    );
    return map;
  }, []);

  const resolveLabel = (item: string) =>
    navigationMap.get(`/${item}`) || item.charAt(0).toUpperCase() + item.slice(1);

  return (
    <Breadcrumb className="font-bitcount-single">
      <BreadcrumbList>
        <BreadcrumbItem className="hidden md:block">
          {breadcrumbItems.length === 0 ? (
            <BreadcrumbPage>Mon portfolio</BreadcrumbPage>
          ) : (
            <BreadcrumbLink href="/">Mon portfolio</BreadcrumbLink>
          )}
        </BreadcrumbItem>
        {breadcrumbItems.map((item, index) => (
          <Fragment key={item}>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="hidden md:block">
              {index === breadcrumbItems.length - 1 ? (
                <BreadcrumbPage>{resolveLabel(item)}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={`/${item}`}>
                  {resolveLabel(item)}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
