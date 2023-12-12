"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import { HomeLogo, BlogLogo } from "./icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { usePathname } from "next/navigation";
import LiveIsland from "react-live-island";

export const Navbar = () => {
  const pathname = usePathname();
  let currentLogo = (
    <HomeLogo className="transform transition ease-in-out duration-200 dark:text-white text-white" />
  );
  if (pathname === "/") {
    currentLogo = (
      <HomeLogo className="transform transition ease-in-out duration-200 dark:text-white text-white" />
    );
  } else {
    currentLogo = (
      <BlogLogo className="transform transition ease-in-out duration-200 dark:text-white text-white" />
    );
  }
  return (
    <LiveIsland
      className="flex justify-center items-center uppercase"
      top={20}
      triggerType="hover"
      smallClassName="text-xs"
      smallHeight={50}
      smallWidth={300}
      largeClassName="text-7xl"
      initialAnimation
    >
      {(isSmall) =>
        isSmall ? (
          currentLogo
        ) : (
          <NextUINavbar
            className=" bg-black flex z-50 max-w-[890px] rounded-[80px] mt-5 transform transition ease-in-out duration-200"
            position="sticky"
          >
            <NavbarContent
              className="flex items-center w-full px-4"
              justify="center"
            >
              <NavbarItem isActive={pathname === "/"}>
                <Link href="/">
                  <HomeLogo className="transform transition ease-in-out duration-200 dark:text-white text-white" />
                </Link>
              </NavbarItem>
              <NavbarItem isActive={pathname === "/"}>
                <Link href="/blogs">
                  <BlogLogo className="transform transition ease-in-out duration-200 dark:text-white text-white" />
                </Link>
              </NavbarItem>
              <NavbarItem>
                <ThemeSwitch />
              </NavbarItem>
            </NavbarContent>
          </NextUINavbar>
        )
      }
    </LiveIsland>
  );
};
