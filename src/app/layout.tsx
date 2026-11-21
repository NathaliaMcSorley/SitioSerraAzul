import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Farmhouse | Country Retreat",
  description: "A welcoming countryside farmhouse rental experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
