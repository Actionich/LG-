// 기업 고객 전용(Enterprise) Apple 스타일 섹션 컴포넌트
import React from 'react';

// 도입 기업 로고 예시
const logos = [
  '/images/lg_elec.png',
  '/images/lg_chem.png',
  '/images/lg_cns.png',
];

const EnterpriseSection = () => (
  <section className="py-20 bg-white border-t border-gray-100">
    {/* 카피 문구 */}
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-blue-700">직원이 만족하는 복지, 기업의 경쟁력이 됩니다</h2>
    {/* 도입 기업 로고 슬라이드 */}
    <div className="flex justify-center gap-8 my-8 flex-wrap">
      {logos.map((src, i) => (
        <img key={i} src={src} alt="기업 로고" className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition" />
      ))}
    </div>
    {/* 인포그래픽 */}
    <div className="flex flex-wrap justify-center gap-8 mb-8">
      <div className="bg-blue-50 rounded-xl p-6 text-center shadow min-w-[180px]">
        <div className="text-3xl font-bold text-blue-600 mb-2">+38%</div>
        <div className="text-gray-700">복지 포인트 사용률</div>
      </div>
      <div className="bg-blue-50 rounded-xl p-6 text-center shadow min-w-[180px]">
        <div className="text-3xl font-bold text-blue-600 mb-2">4.7/5점</div>
        <div className="text-gray-700">만족도 설문 결과</div>
      </div>
      <div className="bg-blue-50 rounded-xl p-6 text-center shadow min-w-[180px]">
        <div className="text-3xl font-bold text-blue-600 mb-2">25%↓</div>
        <div className="text-gray-700">운영관리 비용 절감</div>
      </div>
    </div>
    {/* CTA 버튼 */}
    <div className="text-center mt-8">
      <a href="#contact" className="px-10 py-4 rounded-full bg-blue-600 text-white font-bold shadow-lg hover:bg-blue-700 transition">도입문의</a>
    </div>
  </section>
);

export default EnterpriseSection; 