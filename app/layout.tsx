import HTML from "./HTML";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js 13 cookie testing",
  description: "Tested on 13.4.7",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HTML>
      <body className={inter.className}>{children}</body>
    </HTML>
  );
}
