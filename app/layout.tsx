import type { Metadata } from "next";
import "./globals.css";
import "./intensive.css";
import "./interview.css";
import "./theme.css";
import "./refinements.css";
import "./logo-strip.css";

export const metadata: Metadata = {
  title: "DataForge — SAP Data Analytics Academy",
  description: "A hands-on SAP data analytics learning pathway for the next generation of data engineers.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
