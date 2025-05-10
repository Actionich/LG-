import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import QuickAccessTab from './components/QuickAccessTab';
import ServiceCompareTable from './components/ServiceCompareTable';
import LifeCareIntro from './components/LifeCareIntro';
import LifeCareFrameIntro from './components/LifeCareFrameIntro';
import AXFeatureSection from './components/AXFeatureSection';
import TestimonialSection from './components/TestimonialSection';
import ContactSection from './components/ContactSection';
import MobileUXSection from './components/MobileUXSection';
import ResourceCenter from './components/ResourceCenter';
import SimulatorSection from './components/SimulatorSection';
import Footer from './components/Footer';

// LifeCare 공식 홈페이지 메인페이지 컴포넌트 (기획안 전체 반영)
const LGLifecareServiceSite = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 flex flex-col">
        {/* Hero + 검색 + CTA */}
        <HeroSection />
        {/* 하단 퀵탭 */}
        <QuickAccessTab />
        {/* 서비스 비교표 */}
        <ServiceCompareTable />
        {/* LifeCare 서비스 소개 */}
        <LifeCareIntro />
        {/* LifeCareFrame 서비스 소개 */}
        <LifeCareFrameIntro />
        {/* AX 기반 주요기능 안내 */}
        <AXFeatureSection />
        {/* 도입기업 후기 */}
        <TestimonialSection />
        {/* 도입문의(상담/탭 분리) */}
        <ContactSection />
        {/* 모바일 UX/앱 안내 */}
        <MobileUXSection />
        {/* 리소스 센터 */}
        <ResourceCenter />
        {/* 시뮬레이터 */}
        <SimulatorSection />
      </main>
      <Footer />
    </div>
  );
};

export default LGLifecareServiceSite; 