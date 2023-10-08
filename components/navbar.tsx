'use client'
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { HomeLogo, ProjectLogo, EducationLogo } from "./icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { Tooltip } from "@nextui-org/tooltip";
import { usePathname } from "next/navigation"

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <NextUINavbar
      className="dark:bg-graymac/50 bg-black flex z-50 max-w-[890px] rounded-[80px] mt-5 transform transition ease-in-out duration-200"
      position="sticky"
    >
      <NavbarContent className="flex items-center w-full px-4" justify="center">
        <NavbarItem isActive={pathname === "/"}>
          <Tooltip content="Home 🏠">
            <Link href="/">
              <HomeLogo className="transform transition ease-in-out duration-200 dark:text-white text-white" />
            </Link>
          </Tooltip>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/project"}>
          <Tooltip content="Project 👷">
            <Link href="/project">
              <ProjectLogo className="transform transition ease-in-out duration-200 dark:text-white text-white" />
            </Link>
          </Tooltip>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/education"}>
          <Tooltip content="Education 📚">
            <Link href="/education">
              <EducationLogo className="transform transition ease-in-out duration-200 dark:text-white text-white" />
            </Link>
          </Tooltip>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};