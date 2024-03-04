import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "../globals.css";
import "./app.css"
import StoreNav from "../components/StoreNav";
import { UserStorage } from "../adminContext";
import { Suspense } from "react";
import Loading from "./loading";
import Footer from "../components/Footer";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home - PhonkSec",
  description: "Seja bem-vindo(a) ao PhonkSec, sua destinação de moda alternativa! Explore a autenticidade em cada costura. Seja único(a) e descubra mais sobre nossa coleção exclusiva.",
  openGraph: {
    images: 'https://cdn.discordapp.com/attachments/1091340777197670460/1214233466867294209/ms-icon-144x144.png?ex=65f85e09&is=65e5e909&hm=ce3eb4709934cb8e88f62d360c3f2c809c7b06f46233c409ff56b01a308e3fc4&',
  },
};

/*ABABA*/



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={leagueSpartan.className}>
          <UserStorage>
            <Suspense fallback={<Loading/>}>  
                <StoreNav/>
                {children}    
                <Footer/>
            </Suspense>
          </UserStorage>
      </body>
    </html>
  );
}
