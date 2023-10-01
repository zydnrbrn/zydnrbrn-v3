import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { HomeLogo, ProjectLogo, EducationLogo } from "./icons";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  return (
    <NextUINavbar
      className="dark:bg-graymac/50 bg-graymac/30 flex rounded-[80px] my-5"
      maxWidth="full"
      position="sticky"
    >
      <NavbarContent className="flex items-center w-full px-4" justify="center">
        <NavbarItem>
          <Link isExternal href="/">
            <HomeLogo className="dark:text-white text-black" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link isExternal href="/project">
            <ProjectLogo className="dark:text-white text-black" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link isExternal href="/education">
            <EducationLogo className="dark:text-white text-black" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
