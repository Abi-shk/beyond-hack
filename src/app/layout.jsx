
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "BeyondHack",
  description: "Think, Build, Go Beyond",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full h-full flex-col`}
      >
      
        <main className="z-1 w-full flex-1 flex flex-col scroll-smooth">
          {children}
        </main>
       
      </body>
    </html>
  );
}
