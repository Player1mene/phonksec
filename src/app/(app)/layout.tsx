import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "./app.css"
import StoreNav from "../components/StoreNav";
import { Suspense } from "react";
import Loading from "./loading";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"], weight: ["400","500", "600", "700"], display: 'swap' });

export const metadata: Metadata = {
  title: "Home - PhonkSec",
  description: "Bem-vindo(a) ao PhonkSec - moda alternativa autêntica! Seja único(a)",
  openGraph: {
    images: 'https://cdn.discordapp.com/attachments/1091340777197670460/1214243564503048312/image.png?ex=65f86771&is=65e5f271&hm=5a12786d4b6dd2f9b6efd0de8a8f68dda2681028955dfc991e0434017a16e0b2&',
  },
  icons: [
    {
      rel: 'icon',
      type: 'image/webp',
      url: 'https://firebasestorage.googleapis.com/v0/b/phonksec.appspot.com/o/logo-and-wallpapers%2Ffavicon.webp?alt=media&token=f277508a-6cf8-4c15-9510-42c92a3e7bf3',
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
      <body className={inter.className}>
            <Suspense fallback={<Loading/>}>  
                <StoreNav/>
                {children}    
                <Footer/>
            </Suspense>
      </body>
    </html>
  );
}
