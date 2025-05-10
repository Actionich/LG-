// Apple 스타일 BenefitSection 컴포넌트
import React from 'react';

const benefits = [
  '신규 가입 시 20,000원 쇼핑지원금 지급',
  '생일/기념일 적립금 및 맞춤 기획전 제공',
  '베스트셀러 최대 85% 할인',
  '추천인과 함께 적립되는 리워드 프로그램',
];

const BenefitSection = () => (
  <section id="benefits" className="py-20 bg-gradient-to-br from-blue-100 via-white to-blue-50 border-t border-gray-100">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-700">혜택 안내</h2>
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow p-8">
      <h3 className="text-xl font-semibold text-blue-700 mb-4">지금 가입하면 이런 혜택이!</h3>
      <ul className="space-y-4">
        {benefits.map((b, i) => (
          <li key={i} className="flex items-center text-lg text-gray-800">
            <span className="inline-block w-2 h-2 bg-blue-700 rounded-full mr-3"></span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default BenefitSection; 