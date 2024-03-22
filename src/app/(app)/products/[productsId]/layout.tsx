import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: ["100","200","300","400","500","600","700"], display: 'swap' });
import '../../../globals.css';
import '../../app.css';

export const metadata: Metadata = {
  title: "Produto - PhonkSec",
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
      <section className={inter.className}>
            {children}       
      </section>
  );
}
