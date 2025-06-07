import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Head from "next/head";
import StoryblokProvider from "@/components/StoryblokProvider";
import { getStoryblokApi } from "@/service/storyblok";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Elin",
  description: "A photographers portfolio",
};

const poppins = Poppins({
  weight: ["400"],
  style: "normal",
  subsets: ["latin"],
});

try {
  // Initialize Storyblok API client
  getStoryblokApi();
} catch (error) {
  console.error("Error initializing Storyblok API client:", error);
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <StoryblokProvider>
      <html lang="en" className={poppins.className}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <body>
          <Header />
          {children}
        </body>
      </html>
    </StoryblokProvider>
  );
}
