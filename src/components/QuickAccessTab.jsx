// LifeCare 공식 홈페이지 하단 퀵탭(QuickAccessTab) 컴포넌트
import React from 'react';
import { Link } from 'react-router-dom';

const tabs = [
  { label: 'LifeCare 소개', to: '/lifecare' },
  { label: 'LifeCareFrame 소개', to: '/lifecareframe' },
  { label: 'AX 기반 주요기능', to: '/ax-features' },
  { label: '도입기업 후기', to: '/testimonials' },
  { label: '체험하기', to: '/simulator' },
  { label: '무료 도입 상담', to: '/contact/lifecare' },
  { label: '도입문의', to: '/contact/lifecareframe' },
];

const QuickAccessTab = () => (
  <nav className="sticky bottom-0 z-20 w-full bg-white border-t border-blue-100 shadow flex flex-wrap justify-center gap-2 py-3 px-2 md:px-0">
    {tabs.map(tab => (
      <Link
        key={tab.to}
        to={tab.to}
        className="px-4 py-2 rounded-full text-sm md:text-base font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition"
      >
        {tab.label}
      </Link>
    ))}
  </nav>
);

export default QuickAccessTab; 