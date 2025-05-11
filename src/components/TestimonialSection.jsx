// Apple 스타일 TestimonialSection 컴포넌트
import React from 'react';
import { MessageCircle, ShieldCheck } from 'lucide-react';

// 실제 후기 섹션
const reviews = [
  {
    id: 1,
    name: '김지원',
    position: '대리',
    dept: 'IT기획팀',
    text: '기대 이상으로 세련되고 유용해요.',
    avatar: null // 아바타 이미지 경로가 있으면 넣으세요
  },
  {
    id: 2,
    name: '박성우',
    position: '선임',
    dept: 'R&D센터',
    text: '추천 기능이 신기하게 딱 맞아요.',
    avatar: null
  },
  {
    id: 3,
    name: '이은지',
    position: '과장',
    dept: '마케팅',
    text: '포인트 사용도 편하고 혜택도 다양해요.',
    avatar: null
  }
];

export default function TestimonialSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
          <ShieldCheck size={40} className="text-blue-500 mb-3" />
          <h3 className="font-bold text-xl text-gray-900 mb-2">안전한 서비스</h3>
          <p className="text-gray-600 text-center">최고 수준의 보안과 신뢰를 제공합니다.</p>
        </div>
        {reviews.map((r) => (
          <div key={r.id} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition">
            <div className="mb-4 text-blue-600">
              <MessageCircle size={36} />
            </div>
            <blockquote className="text-lg text-gray-800 font-medium mb-4">“{r.text}”</blockquote>
            <div className="flex flex-col items-center gap-2">
              {/* 아바타 또는 이니셜 원형 */}
              {r.avatar ? (
                <img src={r.avatar} alt={r.name} className="w-12 h-12 rounded-full object-cover border-2 border-blue-100" />
              ) : (
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl">
                  {r.name[0]}
                </div>
              )}
              <div className="text-sm font-semibold text-gray-900">{r.name} {r.position}</div>
              <div className="text-xs text-gray-500">{r.dept}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 