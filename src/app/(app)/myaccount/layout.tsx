'use client'
import { redirect, useRouter } from "next/navigation";
import React, { useContext } from "react";
import { AdminContext } from "@/app/adminContext";
import './account.css'
import '../../globals.css'
import AccountHeader from "./components/AccountHeader/AccountHeader";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const router = useRouter()

    
  const user = useContext(AdminContext);

  if(user.login === false) router.push('/login');
  else
  return (
      <section className="myaccount" style={{marginTop: '70px'}}>
        <div className="container accountGrid">
            <div className="grid1">
                <AccountHeader/>
            </div>
            <div className="grid2">
                {children}
            </div>
        </div>    
      </section>
  );
}
