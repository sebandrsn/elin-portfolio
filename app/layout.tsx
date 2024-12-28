import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { AppContent } from "@/components/AppContent";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Elin",
  description: "A photographers portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Header />
        <AppContent>{children}</AppContent>
      </body>
    </html>
  );
}
