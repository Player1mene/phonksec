'use client'
import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import './globals.css'
import { UserStorage } from "./adminContext";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });



export default function InnerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
          <body className={`${leagueSpartan.className} app`}>
            <UserStorage>  
              {children}
            </UserStorage>
          </body>
    </html>
  );
}
