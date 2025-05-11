import React from "react";
import Header from './components/Header';
import HeroSection from './components/Hero';
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
import { ArrowUp } from 'lucide-react';

// LG 라이프케어 서비스 메인 페이지 전체를 렌더링하는 컴포넌트입니다.
const LGLifecareServiceSite = () => {
  // 최상단 이동 함수
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div>
      <Header />
      <main>
        {/* <section id="intro">
          <h1>LG LifeCare 복지몰</h1>
          <p>모든 순간이 행복한 선택, 일상이 복지가 되다.</p>
        </section> */}
        <HeroSection />
        {/* <QuickAccessTab /> */}
        {/* <ServiceCompareTable /> */}
        <LifeCareIntro />
        <LifeCareFrameIntro />
      
        <TestimonialSection />
        <ContactSection />
        <MobileUXSection />
        <ResourceCenter />
        <SimulatorSection />
      </main>
      <Footer />
      {/* 최상단 이동 플로팅 버튼 */}
      <button
        onClick={handleScrollTop}
        aria-label="최상단으로 이동"
        className="fixed bottom-8 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg p-4 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
        style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default LGLifecareServiceSite;