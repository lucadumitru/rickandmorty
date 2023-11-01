import "./globals.css";
import type { Metadata } from "next";
import { roboto } from "public/fonts/fonts";

import { Footer, Header } from "@/components/layout/";

export const metadata: Metadata = {
  description: "Rick and morty webpage using Rick and Morty API, Next.js, React.js and TailwindCSS",
  title: "Rick and Morty"
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
  <html lang="en">
    <body className={`${roboto.className}`}>
      <Header />
      {children}
      <Footer />
    </body>
  </html>
);

export default RootLayout;
