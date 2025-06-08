// LifeCare 공식 홈페이지 하단 퀵탭(QuickAccessTab) 컴포넌트
import React from 'react';
import Link from 'next/link';

const tabs = [
  { label: 'LifeCare 소개', to: '/lifecare' },
  { label: 'LifeCareFrame 소개', to: '/lifecareframe' },
  { label: 'AX 기반 주요기능', to: '/ax-features' },
  { label: '도입기업 후기', to: '/testimonials' },
  { label: '체험하기', to: '/simulator' },
  { label: '무료 도입 상담', to: '/contact/lifecare' },
  { label: '도입문의', to: '/contact/lifecareframe' },
];

// 회사 검색/바로가기 섹션
export default function QuickAccessTab() {
  return (
    <section className="py-12 bg-blue-50 text-center shadow-inner">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">우리 회사 복지몰 찾기</h2>
      <div className="flex justify-center max-w-md mx-auto gap-2">
        <input
          type="text"
          placeholder="회사명을 입력하세요 (예: LG전자)"
          className="flex-1 border border-blue-200 px-4 py-3 rounded-l-full focus:outline-none"
        />
        <button
          className="px-6 py-3 rounded-r-full bg-blue-700 text-white font-semibold hover:bg-blue-800 transition"
        >
          복지몰 바로가기
        </button>
      </div>
      <p className="text-sm text-gray-600 mt-2">
        검색 결과에 따라 자동 연결 또는 안내 제공됩니다
      </p>
    </section>
  );
}
