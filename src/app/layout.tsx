import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Image from "next/image";

// Import reusable components
import Header from "../components/Header";
import Footer from "../components/Footer";

// Load the Google Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Africa Unified Economic Platform",
  description: "Empowering Africa through seamless trade, finance, and innovation.",
};

// RootLayout Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="{metadata.description}" />
        <title>"AEUP"</title>
      </head>

      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}>
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="min-h-screen flex flex-col items-center justify-between p-6 lg:px-24">
          {/* Platform Hero Section */}
          <div className="w-full max-w-7xl items-center justify-between font-mono text-sm lg:flex">
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              Get started with AUEP by exploring&nbsp;
              <code className="font-mono font-bold">src/app/page.tsx</code>
            </p>

            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:w-auto lg:bg-none">
              <a
                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered by{" "}
                <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  className="dark:invert"
                  width={100}
                  height={24}
                  priority
                />
              </a>
            </div>
          </div>

          {/* Dynamic Content from Child Pages */}
          <div className="container mx-auto py-8">
            {children}
          </div>

          {/* Footer */}
          <Footer />
        </main>
      </body>
    </html>
  );
}
