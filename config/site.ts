import { HomeLogo, ProjectLogo, EducationLogo } from "@/components/icons";

export const siteConfig = {
  name: "Zidan Khulul Sajid",
  description: "An software engineer who loves to build things.",
  navItems: [
    {
      label: "Home",
      href: "/",
      tipText: "Go to home page",
    },
    {
      label: "Projects",
      href: "/docs",
      tipText: "Go to projects page",
    },
    {
      label: "Education",
      href: "/pricing",
      tipText: "Go to education page",
    },
  ],

  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    discord: "https://discord.gg/9b6yyZKmH4",
  },
};

export type SiteConfig = typeof siteConfig;
