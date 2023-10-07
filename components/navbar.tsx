import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { HomeLogo, ProjectLogo, EducationLogo } from "./icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { Tooltip } from "@nextui-org/tooltip";

export const Navbar = () => {
  return (
    <NextUINavbar
      className="dark:bg-graymac/50 bg-graymac/30 flex z-50 w-full md:w-[80px] rounded-[80px] top-5 md:top-[500px] md:h-[300px] transform transition ease-in-out duration-200"
      position="sticky"
    >
      <NavbarContent className="flex md:flex-col items-center w-full px-4" justify="center">
        <NavbarItem>
          <Tooltip content="Home 🏠">
            <Link href="/">
              <HomeLogo className="transform transition ease-in-out duration-200 dark:text-white text-black" />
            </Link>
          </Tooltip>
        </NavbarItem>
        <NavbarItem>
          <Tooltip content="Project 👷">
            <Link href="/project">
              <ProjectLogo className="transform transition ease-in-out duration-200 dark:text-white text-black" />
            </Link>
          </Tooltip>
        </NavbarItem>
        <NavbarItem>
          <Tooltip content="Education 📚">
            <Link href="/education">
              <EducationLogo className="transform transition ease-in-out duration-200 dark:text-white text-black" />
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