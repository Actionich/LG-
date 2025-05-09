import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

// 프리미엄 & 미니멀 헤더 컴포넌트
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // 모바일 메뉴 토글 함수
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* LG 로고 */}
        <Link href="/">
          <span className="text-2xl font-extrabold tracking-tight text-blue-700 select-none">LG LifeCare</span>
        </Link>
        {/* 데스크탑 네비게이션 */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-semibold text-lg">
          <Link href="#service" className="hover:text-blue-600 transition">서비스 소개</Link>
          <Link href="#features" className="hover:text-blue-600 transition">주요 기능</Link>
          <Link href="#benefit" className="hover:text-blue-600 transition">혜택/이벤트</Link>
          <Link href="#review" className="hover:text-blue-600 transition">고객 후기</Link>
          {/* 로그인/회원가입 버튼 */}
          <a href="https://lgnara.lglifecare.com" target="_blank" rel="noopener noreferrer" className="ml-6 px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition font-bold shadow-lg">로그인/회원가입</a>
        </nav>
        {/* 모바일 햄버거 메뉴 */}
        <button className="md:hidden p-2" onClick={toggleMenu} aria-label="메뉴 열기">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* 모바일 메뉴 드로어 */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg animate-fadeIn">
          <nav className="flex flex-col gap-4 px-6 py-6 text-gray-700 font-semibold text-lg">
            <Link href="#service" onClick={toggleMenu}>서비스 소개</Link>
            <Link href="#features" onClick={toggleMenu}>주요 기능</Link>
            <Link href="#benefit" onClick={toggleMenu}>혜택/이벤트</Link>
            <Link href="#review" onClick={toggleMenu}>고객 후기</Link>
            <a href="https://lgnara.lglifecare.com" target="_blank" rel="noopener noreferrer" className="mt-4 px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition font-bold shadow-lg">로그인/회원가입</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 