// LifeCare 공식 홈페이지 HeroSection 컴포넌트 (고도화)
import React, { useState } from 'react';
import Link from 'next/link';
import { Search, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  // 검색창 상태
  const [company, setCompany] = useState('');
  
  const handleSearch = (e) => {
    e.preventDefault();
    // 실제 서비스에서는 회사명에 따라 복지몰로 이동/안내
    alert(`${company} 복지몰 바로가기 기능은 데모입니다.`);
  };
  
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 z-0"></div>
      
      {/* 배경 이미지 및 블렌드 */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-blue-400/10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%232563eb' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: 'cover'
          }}
        ></div>
      </div>
      
      {/* 좌측: 타이틀/서브타이틀/CTA */}
      <div className="flex-1 flex flex-col items-start z-10 max-w-xl relative mb-12 md:mb-0">
        <div className="absolute -top-16 -left-16 w-32 h-32 bg-blue-100 rounded-full filter blur-3xl opacity-70"></div>
        <div className="relative">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">
            LG 라이프케어 서비스
          </span>
          <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-1">LG LifeCare 복지몰</h2>
          <p className="text-base md:text-lg text-gray-600 mb-3 font-medium">모든 순간이 행복한 선택, 일상이 복지가 되다.</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
            대한민국 대표<br />프리미엄 <span className="text-blue-600">복지 플랫폼</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            기업 맞춤형 복지를 제공하는 LG 라이프케어와 함께<br />
            직접 운영도, 위탁도. 복지몰은 LifeCare로 시작하세요.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <Link href="/contact/lifecare" className="group px-8 py-4 rounded-full bg-blue-700 text-white font-semibold text-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:bg-blue-600 transition-all duration-300 flex items-center">
              라이프케어 도입문의
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact/lifecareframe" className="px-8 py-4 rounded-full bg-white text-blue-700 font-semibold text-lg border-2 border-blue-200 shadow-lg shadow-blue-100/30 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300">
              라이프케어프레임 도입문의
            </Link>
          </div>
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <span className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></span>
              실시간 서비스 운영중
            </span>
            <span className="ml-4">기업 만족도 98%</span>
            <span className="mx-2">•</span>
            <span>24시간 고객 응대</span>
          </div>
        </div>
      </div>
      
      {/* 우측: 우리 회사 복지몰 찾기 및 이미지 */}
      <div className="relative z-10 md:w-5/12">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full filter blur-3xl opacity-70"></div>
        
        {/* 복지몰 찾기 폼 */}
        <form onSubmit={handleSearch} className="mb-8 flex flex-col items-center bg-white bg-opacity-70 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-blue-100/50 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-200 rounded-full opacity-10"></div>
          
          <label className="text-blue-700 font-bold mb-4 text-lg">우리 회사 복지몰 찾기</label>
          <div className="flex w-full gap-2 mb-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" size={18} />
              <input
                type="text"
                className="w-full px-10 py-3 rounded-l-full border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80 transition-all"
                placeholder="회사명을 입력하세요 (예: LG전자)"
                value={company}
                onChange={e => setCompany(e.target.value)}
              />
            </div>
            <button 
              type="submit" 
              className="px-6 py-3 rounded-r-full bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-all shadow-md"
            >
              복지몰 바로가기
            </button>
          </div>
          <div className="text-xs text-gray-600 bg-blue-50 p-2 rounded-lg w-full text-center">
            검색 결과에 따라 자동 연결 또는 안내 제공됩니다
          </div>
        </form>
        
        {/* 3D 서비스 이미지 또는 아이콘 (대체 이미지) */}
        <div className="flex justify-center transform translate-y-4">
          <div className="relative w-full max-w-md h-64 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-1">
            <div className="absolute inset-0 bg-white rounded-2xl flex flex-col p-6 items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-lg mb-1">지금 체험해보세요</h3>
                <p className="text-gray-600 mb-4 text-sm">LG 라이프케어의 다양한 서비스를<br />무료로 체험해볼 수 있습니다</p>
                <Link href="/simulator" className="px-6 py-2.5 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 font-medium text-sm transition-all inline-flex items-center">
                  데모 체험하기 <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 하단 스크롤 아이콘 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection; 