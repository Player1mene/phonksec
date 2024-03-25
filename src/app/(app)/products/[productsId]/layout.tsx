import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: ["100","200","300","400","500","600","700"], display: 'swap' });
import '../../../globals.css';
import '../../app.css';

export const metadata: Metadata = {
  title: "Produto - PhonkSec",
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
