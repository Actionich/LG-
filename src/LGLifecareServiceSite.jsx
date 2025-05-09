import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Users, Gift, Star, Settings, Heart } from 'lucide-react';
import ContactModal from './components/ContactModal';
import AuthModal from './components/AuthModal';
// import ProductList from './components/ProductList'; // 상품 리스트 컴포넌트
import ReviewList from './components/ReviewList'; // 고객 리뷰 리스트 컴포넌트 import
// Apple 스타일 헤더 컴포넌트 import
import Header from './components/Header';
// Apple 스타일 Hero(인트로) 섹션 import
import HeroSection from './components/HeroSection';
// Apple 스타일 주요 기능 섹션 import
import FeatureSection from './components/FeatureSection';
// Apple 스타일 기업 고객 전용 섹션 import
import EnterpriseSection from './components/EnterpriseSection';
// Apple 스타일 혜택 안내 섹션 import
import BenefitSection from './components/BenefitSection';
// Apple 스타일 커머스(상품 큐레이션) 섹션 import
import CommerceSection from './components/CommerceSection';
// Apple 스타일 실제 후기 섹션 import
import TestimonialSection from './components/TestimonialSection';
// Apple 스타일 푸터 import
import Footer from './components/Footer';

// LG 라이프케어 서비스 소개 랜딩페이지 컴포넌트 (모바일/PC 반응형 최적화)
const LGLifecareServiceSite = () => {
  // 상태 관리: 메뉴, 스크롤, 통계 애니메이션, 모달
  const [activeTab, setActiveTab] = useState('overview');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [stats, setStats] = useState({ companies: 0, employees: 0, products: 0, brands: 0 });
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // 스크롤 감지 (헤더 스타일 변경)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 통계 숫자 애니메이션
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => {
        const newStats = { ...prev };
        if (newStats.companies < 1000) newStats.companies += 10;
        if (newStats.employees < 100) newStats.employees += 1;
        if (newStats.products < 100) newStats.products += 1;
        if (newStats.brands < 10) newStats.brands += 0.1;
        if (newStats.companies >= 1000 && newStats.employees >= 100 && newStats.products >= 100 && newStats.brands >= 10) {
          clearInterval(interval);
        }
        return newStats;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <FeatureSection />
        <EnterpriseSection />
        <BenefitSection />
        <CommerceSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
};

export default LGLifecareServiceSite; 