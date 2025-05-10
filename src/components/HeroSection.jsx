// LifeCare 공식 홈페이지 HeroSection 컴포넌트 (기획안 반영)
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  // 검색창 상태
  const [company, setCompany] = useState('');
  const handleSearch = (e) => {
    e.preventDefault();
    // 실제 서비스에서는 회사명에 따라 복지몰로 이동/안내
    alert(`${company} 복지몰 바로가기 기능은 데모입니다.`);
  };
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-[60vh] py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* 좌측: 타이틀/서브타이틀/CTA */}
      <div className="flex-1 flex flex-col items-start z-10 max-w-xl">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">대한민국 대표 프리미엄 복지 플랫폼</h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-8">직접 운영도, 위탁도. 복지몰은 LifeCare로 시작하세요.</p>
        <div className="flex flex-wrap gap-4 mb-8">
          <Link to="/contact/lifecare" className="px-6 py-3 rounded-full bg-blue-700 text-white font-semibold text-lg shadow hover:bg-blue-800 transition">라이프케어 도입문의</Link>
          <Link to="/contact/lifecareframe" className="px-6 py-3 rounded-full bg-white text-blue-700 font-semibold text-lg border border-blue-700 shadow hover:bg-blue-50 transition">라이프케어프레임 도입문의</Link>
          <Link to="/simulator" className="px-6 py-3 rounded-full bg-orange-500 text-white font-semibold text-lg shadow hover:bg-orange-600 transition">체험하기</Link>
        </div>
      </div>
      {/* 우측: 우리 회사 복지몰 찾기 */}
      <form onSubmit={handleSearch} className="flex flex-col items-center bg-white bg-opacity-80 rounded-2xl shadow p-6 mt-8 md:mt-0 md:ml-12 w-full max-w-sm z-10">
        <label className="text-blue-700 font-semibold mb-2">우리 회사 복지몰 찾기</label>
        <div className="flex w-full gap-2">
          <input
            type="text"
            className="flex-1 px-4 py-2 rounded-l-full border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="회사명을 입력하세요 (예: LG전자)"
            value={company}
            onChange={e => setCompany(e.target.value)}
          />
          <button type="submit" className="px-5 py-2 rounded-r-full bg-blue-700 text-white font-semibold hover:bg-blue-800 transition">복지몰 바로가기</button>
        </div>
        <span className="text-xs text-gray-400 mt-2">검색 결과에 따라 자동 연결 또는 안내 제공</span>
      </form>
      {/* 배경 이미지(선택) */}
      {/* <img src="/images/hero_family.jpg" alt="배경" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" /> */}
    </section>
  );
};

export default HeroSection; 