'use client'
import { AdminContext } from "@/app/adminContext";
import { Inter } from "next/font/google";
import { useRouter } from "next/navigation";
import { useContext } from "react";

const inter = Inter({ subsets: ["latin"], weight: ["400","500", "600", "700"], display: 'swap' });



export default function InnerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const user = useContext(AdminContext)
  const router = useRouter()

  if(user.login) return router.push('/myaccount');
  else
  return (
    <html>
          <body className={`${inter.className} app`}> 
              {children}
          </body>
    </html>
  );
}
