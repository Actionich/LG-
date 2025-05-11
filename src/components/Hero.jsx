import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ArrowRight } from 'lucide-react';
import Image from 'next/image';

// Apple 스타일의 풀스크린 Hero(메인 배너) 컴포넌트
const HeroSection = () => {
  const [company, setCompany] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`${company} 복지몰 바로가기 기능은 데모입니다.`);
  };

  return (
    <section className="relative w-full pt-20 pb-10 px-4 md:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* 배경 데코레이션 */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-40 absolute -top-10 -left-10"></div>
        <div className="w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-40 absolute -bottom-10 -right-10"></div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        {/* 좌측: 타이틀/CTA */}
        <div className="w-full md:w-1/2 flex flex-col items-start mb-10 md:mb-0">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">
            LG 라이프케어 서비스
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            대한민국 대표<br />프리미엄 <span className="text-blue-600">복지 플랫폼</span>
          </h1>
          <p className="text-base md:text-xl text-gray-700 mb-8 leading-relaxed">
            기업 맞춤형 복지를 제공하는 LG 라이프케어와 함께<br />
            직접 운영도, 위탁도. 복지몰은 LifeCare로 시작하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full">
            <Link href="/contact/lifecare" className="group flex-1 px-6 py-3 rounded-full bg-blue-700 text-white font-semibold text-base shadow hover:bg-blue-800 transition flex items-center justify-center">
              라이프케어 도입문의
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact/lifecareframe" className="flex-1 px-6 py-3 rounded-full bg-white text-blue-700 font-semibold text-base border-2 border-blue-200 shadow hover:border-blue-300 hover:bg-blue-50 transition">
              라이프케어프레임 도입문의
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
            <span className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></span>
              실시간 서비스 운영중
            </span>
            <span>기업 만족도 98%</span>
            <span>•</span>
            <span>24시간 고객 응대</span>
          </div>
        </div>

        {/* 우측: 복지몰 찾기 및 체험 */}
        <div className="w-full md:w-5/12 flex flex-col items-center">
          {/* 복지몰 찾기 폼 */}
          <form onSubmit={handleSearch} className="w-full max-w-md mb-6 bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl shadow p-5 border border-blue-100/50">
            <label className="block text-blue-700 font-bold mb-2 text-base text-center">우리 회사 복지몰 찾기</label>
            <div className="flex w-full gap-2 mb-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" size={18} />
                <input
                  type="text"
                  className="w-full px-10 py-2 rounded-l-full border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80 transition-all text-sm"
                  placeholder="회사명을 입력하세요 (예: LG전자)"
                  value={company}
                  onChange={e => setCompany(e.target.value)}
                />
              </div>
              <button 
                type="submit" 
                className="px-5 py-2 rounded-r-full bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-all text-sm"
              >
                복지몰 바로가기
              </button>
            </div>
            <div className="text-xs text-gray-600 bg-blue-50 p-2 rounded-lg w-full text-center">
              검색 결과에 따라 자동 연결 또는 안내 제공됩니다
            </div>
          </form>

          {/* 체험/데모 카드 */}
          <div className="w-full max-w-md bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-1 mb-2">
            <div className="bg-white rounded-2xl flex flex-col p-6 items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-base mb-1">지금 체험해보세요</h3>
                <p className="text-gray-600 mb-2 text-xs">LG 라이프케어의 다양한 서비스를<br />무료로 체험해볼 수 있습니다</p>
                <Link href="/simulator" className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 font-medium text-xs transition-all inline-flex items-center">
                  데모 체험하기 <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 