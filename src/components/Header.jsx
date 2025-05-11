import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Search, User } from 'lucide-react';
import Image from 'next/image';

// 프리미엄 & 반응형 헤더 컴포넌트
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 스크롤 시 헤더 스타일 변경
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 모바일 메뉴 토글
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled ? 'bg-white text-blue-900 shadow-md' : 'bg-gradient-to-r from-blue-700 via-purple-600 to-teal-400 text-white bg-opacity-90'}
    `}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* 로고 (최상단: 흰색 텍스트, 스크롤 시: 이미지) */}
          <Link href="/" className="flex items-center">
            {scrolled ? (
              <Image
                src="/images/lg-logo.webp"
                alt="LIFECARE 로고"
                width={120}
                height={30}
                priority
                className="h-8 w-auto"
              />
            ) : (
              <span className="font-extrabold text-2xl tracking-widest text-white drop-shadow-lg select-none">LIFECARE</span>
            )}
          </Link>

          {/* 데스크탑 네비게이션 */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#intro" className="font-semibold hover:text-blue-500 transition">서비스 소개</a>
            <a href="#features" className="font-semibold hover:text-blue-500 transition">주요 기능</a>
            <a href="#events" className="font-semibold hover:text-blue-500 transition">혜택/이벤트</a>
            <a href="#testimonials" className="font-semibold hover:text-blue-500 transition">고객 후기</a>
            <button className="p-2 rounded-full hover:bg-blue-100 transition">
              <Search size={20} className="text-inherit" />
            </button>
            <button className="p-2 rounded-full hover:bg-blue-100 transition">
              <User size={20} className="text-inherit" />
            </button>
            <Link href="/login" className="ml-2 py-2 px-5 rounded-full font-bold bg-blue-600 text-white hover:bg-blue-700 shadow transition">
              로그인
            </Link>
          </nav>

          {/* 모바일 햄버거 메뉴 */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-blue-700 transition"
            onClick={toggleMenu}
            aria-label="메뉴 열기"
          >
            {menuOpen
              ? <X size={28} className="text-inherit" />
              : <Menu size={28} className="text-inherit" />
            }
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {menuOpen && (
        <div className="md:hidden bg-white text-blue-900 absolute top-full left-0 w-full shadow-lg py-6 px-6 flex flex-col gap-4 animate-fadeIn z-50">
          <a href="#intro" className="py-2 font-semibold hover:text-blue-600 border-b border-gray-100">서비스 소개</a>
          <a href="#features" className="py-2 font-semibold hover:text-blue-600 border-b border-gray-100">주요 기능</a>
          <a href="#events" className="py-2 font-semibold hover:text-blue-600 border-b border-gray-100">혜택/이벤트</a>
          <a href="#testimonials" className="py-2 font-semibold hover:text-blue-600 border-b border-gray-100">고객 후기</a>
          <div className="flex flex-col gap-3 mt-2">
            <Link href="/login" className="w-full py-3 bg-blue-600 text-white text-center rounded-full font-bold hover:bg-blue-700 transition">
              로그인
            </Link>
            <Link href="/register" className="w-full py-3 border border-blue-600 text-blue-600 text-center rounded-full font-bold hover:bg-blue-50 transition">
              회원가입
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 