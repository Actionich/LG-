import React from 'react';
import { Instagram, Youtube, BookOpen } from 'lucide-react';

// Apple 스타일의 심플 푸터 컴포넌트
const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-6 border-t border-white/10">
      {/* 상단 구분선 */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* 회사 정보 */}
        <div className="space-y-1 text-gray-300 text-sm">
          <div className="font-bold text-lg text-white mb-1">㈜LG 라이프케어</div>
          <div>서울특별시 강서구 마곡중앙8로 71</div>
          <div>사업자등록번호: 123-45-67890 | 대표: 홍길동</div>
        </div>
        {/* 소셜 아이콘 */}
        <div className="flex gap-5 items-center mt-2 md:mt-0">
          <a href="#" aria-label="Instagram" className="hover:text-blue-400 transition-colors"><Instagram size={24} /></a>
          <a href="#" aria-label="Youtube" className="hover:text-red-500 transition-colors"><Youtube size={24} /></a>
          <a href="#" aria-label="Blog" className="hover:text-green-400 transition-colors"><BookOpen size={24} /></a>
        </div>
      </div>
      {/* 하단 카피라이트 */}
      <div className="mt-6 text-center text-xs text-gray-500">© 2025 LG LifeCare. All rights reserved.</div>
    </footer>
  );
};

export default Footer; 