// MainPage.jsx - 서비스 소개 메인페이지, 모바일 반응형 적용 예시
// 주요 섹션: 헤더, 메인, 푸터로 구성되어 있으며 Tailwind CSS로 반응형 처리

import React from "react";

const MainPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* 헤더: 사이트 타이틀과 네비게이션, 모바일/데스크탑 반응형 */}
      <header className="w-full px-4 py-6 bg-blue-600 text-white flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl md:text-3xl font-bold">LG Lifecare 서비스</h1>
        <nav className="mt-2 md:mt-0 flex gap-4">
          <a href="#about" className="hover:underline">소개</a>
          <a href="#inquiry" className="hover:underline">도입문의</a>
          <a href="#chatbot" className="hover:underline">챗봇</a>
        </nav>
      </header>

      {/* 메인 섹션: 서비스 설명과 이미지, 반응형 레이아웃 */}
      <main className="flex flex-col md:flex-row items-center justify-center py-12 px-4">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">복지 정보, 한눈에!</h2>
          <p className="text-lg md:text-xl mb-6">
            LG Lifecare는 최신 복지 정보와 맞춤형 추천을 제공합니다.
          </p>
          <a
            href="#inquiry"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-base md:text-lg font-semibold hover:bg-blue-700 transition"
          >
            서비스 도입 문의
          </a>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          {/* 서비스 메인 이미지: 반응형 크기 적용 */}
          <img
            src="/main-visual.png"
            alt="서비스 메인 이미지"
            className="w-64 md:w-96 rounded-lg shadow-lg"
          />
        </div>
      </main>

      {/* 푸터: 저작권 안내, 가운데 정렬 */}
      <footer className="w-full py-4 text-center text-gray-500 text-sm">
        © 2025 LG Lifecare. All rights reserved.
      </footer>
    </div>
  );
};

export default MainPage; 