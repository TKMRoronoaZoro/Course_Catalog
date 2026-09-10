import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Мой Каталог Курсов</h1>
      <p className="text-gray-600 mb-6">
        Добро пожаловать! Здесь собраны актуальные материалы по современным веб-технологиям и бэкенду.
      </p>
      <Link href="/courses" className="text-blue-600 hover:text-blue-800 font-medium underline">
        Перейти к списку курсов
      </Link>
    </main>
  );
}