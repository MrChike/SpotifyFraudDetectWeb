"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();

  const route = useMemo(
    () => [
      {
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        label: "Search",
        active: pathname !== "/search",
        href: "/search",
      },
    ],
    [pathname]
  );

  return <div>{children}</div>;
};

export default Sidebar;
