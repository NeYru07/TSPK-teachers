import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Преподаватели ТСПК",
  description: "Сайт с описание преподавателей в ТСПК",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`$h-full antialiased`}
    >
      <body className="min-h-full flex flex-col items-center">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
