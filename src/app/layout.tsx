import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

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
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
      </head>

      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}>
        {/* Header Component */}
        <Header />

        {/* Main Content Area */}
        <main className="min-h-screen px-4 md:px-8">
          {children}
        </main>

        {/* Footer Component */}
        <Footer />
      </body>
    </html>
  );
}
