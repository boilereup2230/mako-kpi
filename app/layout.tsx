import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mako KPI",
  description: "Daily KPI reporting for Mako Freight",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
