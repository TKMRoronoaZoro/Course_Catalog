import Link from 'next/link';
import { Course } from '@/lib/courses';

export default function CourseCard({ id, title, description, credits, isElective, likes }: Course) {
  return (
    <Link 
      href={`/courses/${id}`} 
      className="block p-5 border rounded-xl hover:shadow-lg transition bg-white"
    >
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        {isElective && (
          <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded font-medium">
            Электив
          </span>
        )}
      </div>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <div className="flex justify-between text-xs text-gray-500 font-medium">
        <span>Credits: {credits}</span>
        <span>❤️ {likes}</span>
      </div>
    </Link>
  );
}