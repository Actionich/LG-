import React from 'react';
import Image from 'next/image';

// Apple 스타일의 풀스크린 Hero(메인 배너) 컴포넌트
const Hero = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
      {/* 배경 이미지 */}
      <Image
        src="/hero.jpg"
        alt="LG 라이프케어 프리미엄 배너"
        fill
        priority
        className="object-cover object-center w-full h-full select-none"
        placeholder="blur"
        blurDataURL="/hero-blur.jpg" // 예시: 저해상도 블러 이미지
        onError={(e) => { if (e.currentTarget) e.currentTarget.src = '/fallback.jpg'; }}
      />
      {/* 텍스트 오버레이 + 그라데이션/blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent backdrop-blur-sm flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg mb-6">
          모든 순간이 행복한 선택,<br className="hidden md:block" />
          <span className="text-blue-400">일상이 복지가 되다</span>
        </h1>
        <p className="text-white/90 text-lg md:text-2xl font-light mb-8 max-w-2xl mx-auto">
          LG의 프리미엄 복지와 AX 혁신 기술이 만난<br />
          국내 유일 통합 복지 플랫폼을 경험하세요.
        </p>
        {/* CTA 버튼 */}
        <a href="#service" className="inline-block px-8 py-4 rounded-full bg-blue-600 text-white text-lg font-bold shadow-xl hover:scale-105 transition-all duration-300">서비스 자세히 보기</a>
      </div>
    </section>
  );
};

export default Hero; 