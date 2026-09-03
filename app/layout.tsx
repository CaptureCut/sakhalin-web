import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Sakhalin Web Development — минималистичные сайты",
  description:
    "Минималистичные сайты для Сахалина. Чистый северный дизайн, аккуратная структура, высокая скорость.",
  keywords: ["Сахалин", "веб разработка", "минимализм", "сайт под ключ", "северный дизайн"],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-fogWhite text-deepGraphite">
        {children}
      </body>
    </html>
  );
}
