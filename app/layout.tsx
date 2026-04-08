import type { Metadata } from "next";
import { Aside } from '@/components/Aside';
import './globals.css'

export const metadata: Metadata = {
  title: "  Code Connect ",
  description: "Uma Rede Social Para devs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Aside/>
        {children}
      </body>
    </html>
  );
}
