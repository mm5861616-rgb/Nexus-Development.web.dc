import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexus Development — Resource Hub",
  description:
    "Entdecke FiveM-, Discord- und Roblox-Ressourcen von Nexus Development. Build. Share. Develop.",
  openGraph: {
    title: "Nexus Development — Resource Hub",
    description:
      "Nexus HUD, Nexus Inventory, Nexus Garage und weitere Ressourcen von Nexus Development.",
    siteName: "Nexus Development",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Nexus Development — Resource Hub",
    description: "Build. Share. Develop.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
