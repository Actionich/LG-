import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Users, Gift, Star, Settings, Heart } from 'lucide-react';
import ContactModal from './components/ContactModal';
import AuthModal from './components/AuthModal';
import { Link } from 'react-router-dom'; // 페이지 이동을 위한 Link 컴포넌트 import
// import ProductList from './components/ProductList'; // 상품 리스트 컴포넌트
// import ReviewList from './components/ReviewList'; // 고객 리뷰 리스트 컴포넌트 import
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
import QuickAccessTab from './components/QuickAccessTab'; // 하단 퀵탭 컴포넌트 import

// LifeCare 공식 홈페이지 메인페이지 컴포넌트 (기획안 반영)
const LGLifecareServiceSite = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 flex flex-col">
        {/* Hero + 검색 + CTA */}
        <HeroSection />
        {/* 하단 퀵탭 */}
        <QuickAccessTab />
        {/* 주요 섹션 */}
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