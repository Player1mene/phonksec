'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css'
import { UserStorage } from "./adminContext";

const inter = Inter({ subsets: ["latin"], weight: ["400","500", "600", "700"], display: 'swap' });



export default function InnerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
          <body className={`${inter.className} app`}>
            <UserStorage>  
              {children}
            </UserStorage>
          </body>
    </html>
  );
}
