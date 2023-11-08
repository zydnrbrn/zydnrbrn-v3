import "@/styles/globals.css";
import { Metadata } from "next";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import LiveIsland from "react-live-island";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name || "",
    template: `%s - ${siteConfig.name || ""}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "bg-background font-sans antialiased transform transition ease-in-out duration-200",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <main className="w-full flex justify-center items-center flex-col px-6 py-8 md:py-10">
            <Navbar />
            <div className="max-w-[890px]">
              {children}
            </div>
          </main>
          <footer className="w-full flex items-center justify-center py-3 text-current">
            <span className="text-default-600">Powered by</span>
            <div className="flex items-center gap-1">
              <Link
                isExternal
                href="https://nextjs.org/"
                title="nextui.org homepage"
              >
                <p className="text-primary ml-1">Next</p>
              </Link>
              <span className="text-primary">+</span>
              <Link
                isExternal
                href="https://nextui-docs-v2.vercel.app"
                title="nextui.org homepage"
              >
                <p className="text-primary ml-1">NextUI</p>
              </Link>
            </div>
          </footer>
        </Providers>
      </body>
    </html >
  );
}
