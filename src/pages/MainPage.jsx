// MainPage.jsx - 서비스 소개 메인페이지, 모바일 반응형 및 접근성/디자인 개선 예시
// 주요 섹션: 헤더(로고/네비), 메인(소개/특징/버튼/이미지), 후기, 파트너, 푸터

import React from "react";
// Heroicons 또는 Emoji 아이콘 사용 예시
import { SparklesIcon, ChatBubbleLeftRightIcon, UsersIcon } from '@heroicons/react/24/solid';

const MainPage = () => {
  return (
    // 전체 배경: 옅은 보라색 그라데이션
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-50 to-white">
      {/* 헤더: 로고, 사이트 타이틀, 네비게이션, 접근성 개선 */}
      <header className="w-full px-4 py-8 bg-white/80 backdrop-blur-md shadow-md flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          {/* 로고 아이콘 */}
          <SparklesIcon className="w-10 h-10 text-purple-400" aria-hidden="true" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-700">LG Lifecare</h1>
        </div>
        <nav className="flex flex-col gap-4 md:flex-row md:gap-8" aria-label="주요 메뉴">
          <a href="#about" className="text-lg sm:text-xl md:text-2xl py-2 px-4 rounded-lg hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400 transition" tabIndex={0}>소개</a>
          <a href="#features" className="text-lg sm:text-xl md:text-2xl py-2 px-4 rounded-lg hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400 transition" tabIndex={0}>특징</a>
          <a href="#reviews" className="text-lg sm:text-xl md:text-2xl py-2 px-4 rounded-lg hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400 transition" tabIndex={0}>후기</a>
          <a href="#partners" className="text-lg sm:text-xl md:text-2xl py-2 px-4 rounded-lg hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400 transition" tabIndex={0}>파트너</a>
          <a href="#inquiry" className="text-lg sm:text-xl md:text-2xl py-2 px-4 rounded-lg bg-purple-200 text-purple-800 font-bold hover:bg-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition" tabIndex={0}>도입문의</a>
        </nav>
      </header>

      {/* 메인 섹션: 서비스 소개, CTA, 이미지 */}
      <main className="flex flex-col items-center justify-center px-4 py-12 gap-8">
        <section id="about" className="w-full max-w-xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-purple-700">모두를 위한 복지 정보, 쉽고 빠르게</h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-700">LG Lifecare는 다양한 복지 혜택과 최신 정보를 한눈에 제공합니다.</p>
          <button className="w-full sm:w-auto text-xl sm:text-2xl px-8 py-4 bg-purple-500 text-white rounded-2xl shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 transition font-bold" aria-label="지금 시작하기">지금 시작하기</button>
        </section>
        {/* 서비스 특징 섹션 */}
        <section id="features" className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mt-8">
          {/* 한글 주석: 주요 특징 3가지 */}
          <div className="flex flex-col items-center bg-white/80 rounded-xl p-6 shadow-md">
            <ChatBubbleLeftRightIcon className="w-10 h-10 text-purple-400 mb-2" aria-hidden="true" />
            <h3 className="text-lg font-bold text-purple-700 mb-1">AI 챗봇 Q&A</h3>
            <p className="text-base text-gray-600">궁금한 복지 정보를 챗봇에게 바로 질문</p>
          </div>
          <div className="flex flex-col items-center bg-white/80 rounded-xl p-6 shadow-md">
            <UsersIcon className="w-10 h-10 text-purple-400 mb-2" aria-hidden="true" />
            <h3 className="text-lg font-bold text-purple-700 mb-1">맞춤형 복지 추천</h3>
            <p className="text-base text-gray-600">개인/기업별 맞춤 복지 혜택 제공</p>
          </div>
          <div className="flex flex-col items-center bg-white/80 rounded-xl p-6 shadow-md">
            <SparklesIcon className="w-10 h-10 text-purple-400 mb-2" aria-hidden="true" />
            <h3 className="text-lg font-bold text-purple-700 mb-1">자동화 기획전</h3>
            <p className="text-base text-gray-600">최신 복지 트렌드와 기획전 자동 제공</p>
          </div>
        </section>
        {/* 예시 이미지 영역 */}
        <section className="w-full flex justify-center mt-8">
          <img src="/main-visual.png" alt="서비스 메인 비주얼" className="w-full max-w-xs sm:max-w-md md:max-w-lg rounded-2xl shadow-md" />
        </section>
        {/* 고객 후기 섹션 */}
        <section id="reviews" className="w-full max-w-2xl mt-12">
          {/* 한글 주석: 실제 사용자 후기 */}
          <h3 className="text-xl sm:text-2xl font-bold text-purple-700 mb-4">고객 후기</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <blockquote className="bg-white/80 rounded-xl p-6 shadow-md text-left">
              <p className="text-base text-gray-700 mb-2">"복지 정보가 한눈에 보여서 정말 편리해요!"</p>
              <footer className="text-sm text-gray-500">- 김지은, 직장인</footer>
            </blockquote>
            <blockquote className="bg-white/80 rounded-xl p-6 shadow-md text-left">
              <p className="text-base text-gray-700 mb-2">"챗봇이 궁금증을 바로 해결해줘서 만족합니다."</p>
              <footer className="text-sm text-gray-500">- 이민수, 기업 담당자</footer>
            </blockquote>
          </div>
        </section>
        {/* 파트너 로고 섹션 */}
        <section id="partners" className="w-full max-w-2xl mt-12 text-center">
          {/* 한글 주석: 파트너사 로고 예시 */}
          <h3 className="text-xl sm:text-2xl font-bold text-purple-700 mb-4">주요 파트너</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <span className="inline-block bg-white/80 rounded-lg px-6 py-3 shadow text-purple-600 font-bold text-lg">LG전자</span>
            <span className="inline-block bg-white/80 rounded-lg px-6 py-3 shadow text-purple-600 font-bold text-lg">LG유플러스</span>
            <span className="inline-block bg-white/80 rounded-lg px-6 py-3 shadow text-purple-600 font-bold text-lg">LG헬로비전</span>
          </div>
        </section>
      </main>

      {/* 푸터: 접근성 및 정보 강화 */}
      <footer className="w-full py-8 bg-gradient-to-t from-purple-100 via-white to-white text-center text-gray-500 text-lg sm:text-xl mt-8" role="contentinfo">
        <div className="mb-2">© 2024 LG Lifecare. 모든 권리 보유.</div>
        <nav className="flex justify-center gap-6 text-sm text-purple-600" aria-label="푸터 링크">
          <a href="#privacy" className="hover:underline focus:outline-none focus:ring-2 focus:ring-purple-400">개인정보처리방침</a>
          <a href="#terms" className="hover:underline focus:outline-none focus:ring-2 focus:ring-purple-400">이용약관</a>
          <a href="#accessibility" className="hover:underline focus:outline-none focus:ring-2 focus:ring-purple-400">접근성 안내</a>
        </nav>
      </footer>
    </div>
  );
};

export default MainPage; 