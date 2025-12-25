import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import NavbarDemo from "@/components/elements/NavbarDemo";
import { Onest } from "next/font/google";
import AOSInit from "@/components/elements/AOSInit";

const onest = Onest({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-onest",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samuel Melo",
  description: "Portfólio profissional, desenvolvedor front-end UI/UX design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body
        className={`${poppins.variable} ${geistMono.variable} antialiased`}
      >

        <ThemeProvider 
          attribute={"class"} 
          defaultTheme="dark"
          enableSystem={false}
        > 
          <NavbarDemo/>    
          <AOSInit/>
          {children}
        </ThemeProvider>

      </body>

    </html>
  );
}
