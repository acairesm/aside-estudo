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
        <div className="w-[1200px] mx-auto my-14 max-w-[90%] flex gap-7 h-screen">
          <Aside/>
          {children}
        </div>
      </body>
    </html>
  );
}
