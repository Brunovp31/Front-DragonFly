"use client";

import Footer from "@/components/main-footer";
import NavbarCustom from "@/components/main-navbar";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { AuthProvider } from "./context/auth-context";
import "./globals.css";
import { CartProvider } from "./context/cart-context";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathnames = usePathname();

  const shouldShowNavbar =
    !pathnames.includes("/dashboard") && !pathnames.includes("/auth");

  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <AuthProvider>
          <CartProvider>
            {shouldShowNavbar ? (
              <>
                <NavbarCustom>{children}</NavbarCustom>
                <div className="w-full mt-10">
                  <Footer />
                </div>
              </>
            ) : (
              children
            )}
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
