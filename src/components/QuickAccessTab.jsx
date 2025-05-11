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
    <section className="py-10 text-center bg-white">
      <h2 className="text-xl font-semibold mb-2">우리 회사 복지몰 찾기</h2>
      <input
        type="text"
        placeholder="회사명을 입력하세요 (예: LG전자)"
        className="border px-3 py-2 rounded mb-2"
      />
      <div>
        <button className="bg-blue-700 text-white px-4 py-2 rounded mt-2">복지몰 바로가기</button>
      </div>
      <p className="text-sm text-gray-500 mt-2">
        검색 결과에 따라 자동 연결 또는 안내 제공
      </p>
    </section>
  );
} 