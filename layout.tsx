import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "With Joanna Beauty",
  description: "Premium skin and aesthetic treatments in Rochdale.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}