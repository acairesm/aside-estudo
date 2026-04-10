import type { Metadata } from "next";
import { Aside } from '@/components/Aside';
import './globals.css'
import {Prompt } from 'next/font/google';


export const metadata: Metadata = {
  title: "  Code Connect ",
  description: "Uma Rede Social Para devs",
};

const prompt  = Prompt ({
  subsets: ['latin'],
  weight: ['400', '600'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={prompt.className} >
      <body className={prompt.className}>
        <div className="main-content w-[1200px] mx-auto my-14 max-w-[90%] flex gap-7 h-screen">
          <Aside/>
          {children}
        </div>
      </body>
    </html>
  );
}
