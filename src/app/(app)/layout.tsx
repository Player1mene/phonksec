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
  title: "PhonkSec",
  description: "Seja bem-vindo(a) ao PhonkSec, sua destinação de moda alternativa! Explore a autenticidade em cada costura. Seja único(a) e descubra mais sobre nossa coleção exclusiva.",
  openGraph: {
    images: 'https://media.discordapp.net/attachments/1091340777197670460/1213468962902511636/image.png?ex=65f59609&is=65e32109&hm=b3d841f9415239d76c01fc19aff4e72f3682fef731cb6dd069ad674528ae2ef3&=&format=webp&quality=lossless&width=473&height=473',
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
