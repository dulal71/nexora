import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { NextThemeProvider } from "@/provider/NextThemeProvider";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/cart/CartDrawer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexora | Modern E-Commerce Shopping Platform",
  description:
    "Shop the latest products on Nexora. Enjoy secure authentication, fast checkout, smart product search, category filtering, sorting, and a seamless online shopping experience.",
  keywords: [
    "Nexora",
    "E-Commerce",
    "Online Shopping",
    "Next.js",
    "React",
    "Shopping Platform",
    "Secure Checkout",
    "Product Search",
    "MongoDB",
    "Better Auth",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    suppressHydrationWarning
    >

      <body className="min-h-full flex flex-col">
        <NextThemeProvider>
          <CartProvider>
               {children}
               <CartDrawer></CartDrawer>
          </CartProvider>
          
        </NextThemeProvider>
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
