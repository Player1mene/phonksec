import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import '../../globals.css'
import { UserStorage } from "@/app/adminContext";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Login - Painel",
  description: "Generated by create next app",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
          <body className={leagueSpartan.className}>
            <UserStorage>  
              {children}
            </UserStorage>
          </body>
    </html>
  );
}
