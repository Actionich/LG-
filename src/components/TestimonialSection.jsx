// Apple 스타일 TestimonialSection 컴포넌트
import React from 'react';

const testimonials = [
  {
    name: '김지원 대리',
    team: 'IT기획팀',
    text: '기대 이상으로 세련되고 유용해요.'
  },
  {
    name: '박성우 선임',
    team: 'R&D센터',
    text: '추천 기능이 신기하게 딱 맞아요.'
  },
  {
    name: '이은지 과장',
    team: '마케팅',
    text: '포인트 사용도 편하고 혜택도 다양해요.'
  },
];

const TestimonialSection = () => (
  <section className="py-20 bg-white border-t border-gray-100">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-700">실제 후기</h2>
    <div className="flex flex-wrap justify-center gap-8">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-blue-50 rounded-2xl shadow p-8 max-w-xs w-full flex flex-col items-center">
          <p className="text-lg text-gray-800 mb-4">“{t.text}”</p>
          <div className="text-blue-700 font-semibold">{t.name}</div>
          <div className="text-gray-500 text-sm">{t.team}</div>
        </div>
      ))}
    </div>
  </section>
);

export default TestimonialSection; 