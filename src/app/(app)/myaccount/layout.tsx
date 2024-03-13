'use client'
import "../../globals.css";
import "../app.css"
import "./account.css"
import { redirect } from "next/navigation";
import React, { useContext } from "react";
import { AdminContext } from "@/app/adminContext";
import AccountHeader from "./components/AccountHeader/AccountHeader";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    
  const user = useContext(AdminContext);

  if(user.login === false) redirect('/login');
  else
  return (
      <section className="myaccount">
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
