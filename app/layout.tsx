//app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../src/components/Shared/Header";
import Footer from "../src/components/Shared/Footer";
import WhatsAppButton from "../src/components/Shared/Whatsapp";
import { ThemeProvider } from "../src/context/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tunjo Cars",
  description: "Sell of used cars in Colombia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <ThemeProvider>
          <Header />
          <main style={{ flex: 1 }}>{children}</main>
          <WhatsAppButton />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
