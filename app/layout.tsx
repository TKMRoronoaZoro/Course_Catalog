import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Course Catalog Lab',
  description: 'Advanced Web Technologies Lab',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 min-h-screen text-gray-900`}>
        {/* Общая навигация для всех страниц */}
        <header className="border-b bg-white shadow-sm">
          <nav className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
            <span className="font-bold text-lg text-blue-600">AWT Lab</span>
            <div className="flex gap-6 font-medium text-sm">
              <Link href="/" className="hover:text-blue-600 transition">Главная</Link>
              <Link href="/courses" className="hover:text-blue-600 transition">Курсы</Link>
              <Link href="/about" className="hover:text-blue-600 transition">О проекте</Link>
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}