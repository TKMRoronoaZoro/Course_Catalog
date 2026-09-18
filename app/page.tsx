import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">My course catalog</h1>
      <p className="text-gray-600 mb-6">
        Welcome! Here you will find up-to-date materials on modern web technologies and backend development.
      </p>
      <Link href="/courses" className="text-blue-600 hover:text-blue-800 font-medium underline">
        Go to list of courses
      </Link>
    </main>
  );
}