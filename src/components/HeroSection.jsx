// Apple 스타일 HeroSection 컴포넌트
import React from 'react';

const HeroSection = () => (
  <section className="relative flex flex-col items-center justify-center min-h-[60vh] py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
    {/* 배경 이미지(예시) */}
    <img src="/images/hero_family.jpg" alt="직원 가족 중심 배경" className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none" />
    <div className="relative z-10 flex flex-col items-center text-center px-4">
      {/* 메인 메시지 */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 drop-shadow">당신의 일상을 바꾸는 프리미엄 복지 플랫폼</h1>
      {/* 서브카피 */}
      <p className="text-lg md:text-2xl text-gray-700 mb-8">LG LifeCare에서 더 똑똑하게, 더 특별하게<br />직장인의 삶을 더 가치 있게. 단순한 쇼핑을 넘어, 생활의 모든 혜택을 담았습니다.</p>
      {/* CTA 버튼 */}
      <div className="flex gap-4 justify-center">
        <a href="#contact" className="px-8 py-3 rounded-full bg-blue-700 text-white font-semibold text-lg shadow hover:bg-blue-800 transition">우리 회사 도입문의</a>
        <a href="#benefits" className="px-8 py-3 rounded-full bg-white text-blue-700 font-semibold text-lg border border-blue-700 shadow hover:bg-blue-50 transition">혜택 미리보기</a>
      </div>
    </div>
  </section>
);

export default HeroSection; 