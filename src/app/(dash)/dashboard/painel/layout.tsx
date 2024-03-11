'use client'
import { League_Spartan } from "next/font/google";
import React from "react";
import { AdminContext } from "../../../adminContext";
import { redirect } from "next/navigation";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });
import './global.css'
import Nav from "./Nav";

export default function PainelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const user = React.useContext(AdminContext);

  if(user.admin === false) redirect("/dashboard");
  else
  return (
  <section className={`${leagueSpartan.className} painel`}>
        <Nav/>
        {children}
  </section>
  );
}
