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
      className="dark:bg-graymac/50 bg-graymac/30 flex rounded-[80px] my-5 transform transition ease-in-out duration-200"
      maxWidth="full"
      position="sticky"
    >
      <NavbarContent className="flex items-center w-full px-4" justify="center">
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
