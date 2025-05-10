import React from 'react';
import { Instagram, Youtube, BookOpen } from 'lucide-react';

// Apple 스타일의 심플 푸터 컴포넌트
const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 border-t border-gray-200 py-8 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-6">
        {/* 회사 정보 */}
        <div className="text-gray-700 text-sm text-center md:text-left">
          <div className="font-bold text-lg mb-1">㈜LG 라이프케어</div>
          <div>서울특별시 강서구 마곡중앙8로 71</div>
          <div>사업자등록번호: 123-45-67890 | 대표: 홍길동</div>
          <div className="mt-1">&copy; {new Date().getFullYear()} LG LifeCare. All rights reserved.</div>
        </div>
        {/* 소셜 링크 */}
        <div className="flex gap-6 text-gray-500">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="인스타그램" className="hover:text-blue-600 transition"><Instagram size={28} /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="유튜브" className="hover:text-blue-600 transition"><Youtube size={28} /></a>
          <a href="https://blog.naver.com" target="_blank" rel="noopener noreferrer" aria-label="네이버블로그" className="hover:text-blue-600 transition"><BookOpen size={28} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 