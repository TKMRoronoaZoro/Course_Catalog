import Link from 'next/link';

export default function CourseNotFound() {
  return (
    <main className="p-8 max-w-3xl mx-auto text-center py-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Not Found</h2>
      <p className="text-gray-600 mb-6">The requested training course does not exist or has been deleted.</p>
      <Link 
        href="/courses" 
        className="inline-block px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
      >
        Go to List of Courses
      </Link>
    </main>
  );
}