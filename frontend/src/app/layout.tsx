import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TanstackProvider } from "@/providers/TanstackProvider";
import "./globals.css";
import { UserProvider } from "@/providers/UserProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanstackProvider>
          <UserProvider>{children}</UserProvider>
        </TanstackProvider>
      </body>
    </html>
  );
}
