import "./globals.css";
import { Baloo_2 } from "next/font/google";
import type { Viewport } from "next";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={baloo.className}>
        {children}
      </body>
    </html>
  );
}
