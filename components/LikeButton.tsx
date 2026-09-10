'use client'; // 1. Обязательная строчка для Client Component

import { useState } from 'react';

// 2. Точный тип пропсов из инструкции
type LikeButtonProps = {
  initialLikes: number;
};

export default function LikeButton({ initialLikes }: LikeButtonProps) {
  // 3. Состояние через useState с типизацией
  const [likes, setLikes] = useState<number>(initialLikes);

  return (
    <button
      onClick={() => setLikes((prev) => prev + 1)} // 4. Увеличение счетчика по клику
      className="px-4 py-2 bg-red-50 text-red-600 border border-red-200 rounded-lg hover:bg-red-100 transition font-medium flex items-center gap-2 cursor-pointer"
    >
      ❤️ <span>{likes}</span> {/* 5. Иконка сердечка и текущее число */}
    </button>
  );
}