import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import Image from 'next/image';
import "./globals.css";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lista de paises",
  description: "Uma lista de paises criada com o Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        
        <main className="bg-gray-100 min-h-screen flex flex-col items-center">
          <nav className="w-full bg-white h-16 flex items-center justify-center">
            <section className="flex items-center container ml-20 gap-3">
            <Image width={48} height={48} src="/earth.svg" alt="Logo"/>
              <h1 className="font-bold text-2xl text-slate-900">Lista de paises</h1>
            
            </section>
          </nav>
        {children}
        </main>
      </body>
    </html>
  );
}
