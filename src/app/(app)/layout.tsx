import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "../globals.css";
import "./app.css"
import StoreNav from "../components/StoreNav";
import { Suspense } from "react";
import Loading from "./loading";
import Footer from "../components/Footer";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home - PhonkSec",
  description: "Bem-vindo(a) ao PhonkSec - moda alternativa autêntica! Seja único(a)",
  openGraph: {
    images: 'https://cdn.discordapp.com/attachments/1091340777197670460/1214243564503048312/image.png?ex=65f86771&is=65e5f271&hm=5a12786d4b6dd2f9b6efd0de8a8f68dda2681028955dfc991e0434017a16e0b2&',
  },
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      url: 'https://cdn.discordapp.com/attachments/1091340777197670460/1214243564503048312/image.png?ex=65f86771&is=65e5f271&hm=5a12786d4b6dd2f9b6efd0de8a8f68dda2681028955dfc991e0434017a16e0b2&',
    },
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={leagueSpartan.className}>
            <Suspense fallback={<Loading/>}>  
                <StoreNav/>
                {children}    
                <Footer/>
            </Suspense>
      </body>
    </html>
  );
}
