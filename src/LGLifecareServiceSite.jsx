import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Users, Gift, Star, Settings, Heart } from 'lucide-react';
import ContactModal from './components/ContactModal';
import AuthModal from './components/AuthModal';
// import ProductList from './components/ProductList'; // 상품 리스트 컴포넌트
import ReviewList from './components/ReviewList'; // 고객 리뷰 리스트 컴포넌트 import

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
    // 전체 배경: 옅은 보라색 그라데이션 적용
    <div className="bg-gradient-to-br from-purple-100 via-purple-50 to-white min-h-screen">
      {/* 헤더: 반응형 네비게이션 및 서비스명, 보라색 강조 */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-purple-700 tracking-tight">LG 라이프케어</div>
            </div>
            {/* 데스크탑 네비게이션 */}
            <nav className="hidden md:flex space-x-6 lg:space-x-10" aria-label="주요 메뉴">
              <a href="#overview" onClick={() => setActiveTab('overview')} className={`font-semibold transition-colors ${activeTab === 'overview' ? 'text-purple-700' : 'text-gray-600 hover:text-purple-700'}`}>서비스 개요</a>
              <a href="#platform" onClick={() => setActiveTab('platform')} className={`font-semibold transition-colors ${activeTab === 'platform' ? 'text-purple-700' : 'text-gray-600 hover:text-purple-700'}`}>통합 복지몰</a>
              <a href="#cases" onClick={() => setActiveTab('cases')} className={`font-semibold transition-colors ${activeTab === 'cases' ? 'text-purple-700' : 'text-gray-600 hover:text-purple-700'}`}>고객 사례</a>
              <a href="#contacts" onClick={() => setActiveTab('contacts')} className={`font-semibold transition-colors ${activeTab === 'contacts' ? 'text-purple-700' : 'text-gray-600 hover:text-purple-700'}`}>도입 문의</a>
            </nav>
            {/* 모바일 메뉴 버튼 */}
            <button className="md:hidden" onClick={toggleMenu} aria-label="모바일 메뉴 열기">
              <svg className="w-8 h-8 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
            {/* 헤더의 체험하기 버튼: 외부 링크 연결 */}
            <a href="https://lgnara.lglifecare.com" target="_blank" rel="noopener noreferrer" className="hidden md:block bg-purple-700 text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-purple-800 transition-colors shadow-lg" aria-label="체험하기(새 창)">체험하기</a>
            {/* 로그인/회원가입 버튼 추가 */}
            <button
              className="ml-4 hidden md:block bg-white text-purple-700 border-2 border-purple-700 px-6 py-2 rounded-xl font-bold text-lg hover:bg-purple-50 transition-colors shadow-md"
              onClick={() => setIsAuthModalOpen(true)}
            >
              로그인/회원가입
            </button>
            {/* 헤더 우측에 CTA(문의하기) 버튼 추가 */}
            <button
              className="hidden md:block bg-gradient-to-r from-purple-700 via-purple-500 to-purple-400 text-white px-8 py-3 rounded-xl font-bold text-lg hover:bg-purple-800 transition-colors shadow-lg ml-4"
              onClick={() => setIsContactModalOpen(true)}
            >
              무료 도입 상담
            </button>
          </div>
          {/* 모바일 네비게이션 */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white/90 shadow-lg py-4 z-50 rounded-b-xl animate-fadeIn">
              <div className="flex flex-col space-y-4 px-4">
                <a href="#overview" onClick={() => {setActiveTab('overview'); setIsMenuOpen(false);}} className={`font-semibold text-lg ${activeTab === 'overview' ? 'text-purple-700' : 'text-gray-600'}`}>서비스 개요</a>
                <a href="#platform" onClick={() => {setActiveTab('platform'); setIsMenuOpen(false);}} className={`font-semibold text-lg ${activeTab === 'platform' ? 'text-purple-700' : 'text-gray-600'}`}>통합 복지몰</a>
                <a href="#cases" onClick={() => {setActiveTab('cases'); setIsMenuOpen(false);}} className={`font-semibold text-lg ${activeTab === 'cases' ? 'text-purple-700' : 'text-gray-600'}`}>고객 사례</a>
                <a href="#contacts" onClick={() => {setActiveTab('contacts'); setIsMenuOpen(false);}} className={`font-semibold text-lg ${activeTab === 'contacts' ? 'text-purple-700' : 'text-gray-600'}`}>도입 문의</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero 섹션: Glassmorphism, 더 부드러운 그라데이션, 그림자, 폰트, 버튼 인터랙션 적용 */}
      <section className="pt-28 pb-14 sm:pt-36 sm:pb-20 bg-gradient-to-br from-purple-300 via-purple-100 to-white relative overflow-hidden">
        {/* Glassmorphism 배경 효과 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-400/30 rounded-full blur-2xl animate-pulse-slow" />
        </div>
        <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10 relative z-10">
          {/* 왼쪽: 메시지/버튼 */}
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight drop-shadow-2xl tracking-tight">
              <span className="text-purple-700 bg-white/70 px-3 rounded-2xl shadow-lg inline-block mb-2 animate-fadeInUp">LG 라이프케어</span><br />
              임직원 복지의 <span className="text-purple-400 bg-white/50 px-2 rounded-xl shadow">새로운 기준</span>을 만나다
            </h1>
            <p className="text-lg leading-relaxed xs:text-xl sm:text-2xl md:text-3xl text-gray-700 mb-10 max-w-md md:max-w-none bg-white/70 rounded-xl px-4 py-2 shadow-md animate-fadeInUp">
              국내 유일의 통합 복지몰, AI 기반 맞춤형 혜택, 자동화된 복지 서비스까지<br />한 번에 경험하세요.
            </p>
            <div className="flex flex-col xs:flex-row gap-4 xs:gap-6 w-full max-w-xs md:max-w-none">
              <button
                className="w-full xs:w-auto bg-gradient-to-r from-purple-700 via-purple-500 to-purple-400 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 hover:from-purple-800 hover:to-purple-500 transition-all flex items-center justify-center focus:ring-4 focus:ring-purple-200 animate-fadeInUp"
                onClick={() => setIsContactModalOpen(true)}
              >
                30초만에 무료 도입 문의
                <ArrowRight className="ml-3 h-6 w-6" />
              </button>
              <a href="https://lgnara.lglifecare.com" target="_blank" rel="noopener noreferrer" className="w-full xs:w-auto border-2 border-purple-700 text-purple-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-purple-50 transition-all shadow-xl flex items-center justify-center hover:scale-105 focus:ring-4 focus:ring-purple-200 animate-fadeInUp" aria-label="데모 체험하기(새 창)">
                데모 체험하기
              </a>
            </div>
            {/* Hero 아래에 사회적 증거(도입사, 수치) 강조 */}
            <div className="flex flex-wrap gap-4 mt-8 justify-center">
              <div className="bg-white/80 rounded-xl px-6 py-4 shadow text-center">
                <div className="text-2xl font-bold text-purple-700">{Math.floor(stats.companies)}+</div>
                <div className="text-xs text-gray-600">도입 기업</div>
              </div>
              <div className="bg-white/80 rounded-xl px-6 py-4 shadow text-center">
                <div className="text-2xl font-bold text-purple-700">{Math.floor(stats.employees)}만+</div>
                <div className="text-xs text-gray-600">임직원</div>
              </div>
              <div className="bg-white/80 rounded-xl px-6 py-4 shadow text-center">
                <div className="text-2xl font-bold text-purple-700">{Math.floor(stats.products)}억+</div>
                <div className="text-xs text-gray-600">상품</div>
              </div>
              <div className="bg-white/80 rounded-xl px-6 py-4 shadow text-center">
                <div className="text-2xl font-bold text-purple-700">{Math.floor(stats.brands)}만+</div>
                <div className="text-xs text-gray-600">프리미엄 브랜드</div>
              </div>
            </div>
          </div>
          {/* 오른쪽: Glassmorphism 카드 + 대시보드 예시 */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg animate-fadeInUp">
              <div className="bg-white/60 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden border-4 border-purple-100 ring-2 ring-purple-200">
                {/* 실제 대시보드 샘플 이미지로 교체, public/images/dashboard_sample.png 등 */}
                <img src="/images/dashboard_sample.png" alt="LG 라이프케어 플랫폼 대시보드 샘플" className="w-full object-cover" onError={e => {e.target.onerror=null; e.target.src='/images/contact_illustration.png';}} />
              </div>
              {/* Glassmorphism 강조 배지 */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-700 via-purple-500 to-purple-400 text-white px-6 py-3 rounded-xl text-base sm:text-lg font-bold shadow-xl border-2 border-white/60 animate-fadeInUp">
                국내 유일 통합 복지몰
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 서비스 개요(overview) 섹션: 카드형, 보라색 강조 */}
      <section id="overview" className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-purple-700">라이프케어를 선택하는 이유</span>
            </h2>
            <p className="text-lg leading-relaxed sm:text-xl text-gray-600 max-w-2xl mx-auto">
              라이프케어는 LG가 운영하는 국내 유일의 통합 복지몰로 유수의 대형 복지몰 및 폐쇄형 서비스를 통합 제공하고 기업문화와 임직원 DATA의 AI 분석을 통해 생애주기별 맞춤형 복지서비스를 최적의 혜택으로 제공합니다.
            </p>
          </div>
          <h2>Taskmaster 기반 복지몰 서비스</h2>
          <ul>
            <li>업무 자동화 및 효율화</li>
            <li>기업별 맞춤 복지몰 관리</li>
            <li>복지 포인트 및 상품 관리</li>
            <li>AI 기반 맞춤형 복지 추천</li>
            <li>통합 대시보드 제공</li>
          </ul>
        </div>
      </section>
      {/* 상품 리스트 섹션 추가 */}
      {/* <ProductList /> */}

      {/* 프리미엄 혜택(benefits) 섹션: 카드형, 보라색 강조 */}
      <section id="benefits" className="py-14 md:py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-purple-700">프리미엄 혜택</span>
            </h2>
            <p className="text-lg leading-relaxed sm:text-xl text-gray-600 max-w-2xl mx-auto">
              LG 계열사 상품 및 서비스를 LG임직원 복지혜택과 동일하게 제공합니다.<br />국내 유일 통합 복지몰로 최다 상품 및 서비스를 보유하여 임직원 만족도와 기업 로열티를 증대시킵니다.
            </p>
          </div>
          <h2>프리미엄 혜택</h2>
          <ul>
            <li>LG 계열사 상품/서비스 임직원가 제공</li>
            <li>대형 복지몰 통합, 다양한 상품</li>
            <li>AI 맞춤형 혜택 추천</li>
          </ul>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* 카드 예시 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
              <Gift className="h-12 w-12 text-purple-600 mb-4" />
              <div className="font-bold text-xl mb-2">LG 계열사 혜택</div>
              <div className="text-gray-500 text-base">LG 임직원과 동일한 복지 혜택 제공</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
              <Star className="h-12 w-12 text-yellow-400 mb-4" />
              <div className="font-bold text-xl mb-2">프리미엄 상품</div>
              <div className="text-gray-500 text-base">최다 프리미엄 상품/서비스 보유</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
              <Users className="h-12 w-12 text-purple-400 mb-4" />
              <div className="font-bold text-xl mb-2">맞춤형 복지</div>
              <div className="text-gray-500 text-base">AI 기반 임직원 맞춤형 혜택</div>
            </div>
          </div>
        </div>
      </section>

      {/* 통합 복지몰(platform) 섹션: 카드형, 보라색 강조 */}
      <section id="platform" className="py-14 md:py-20 bg-purple-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-purple-700">국내 유일의 통합복지몰</span>
            </h2>
            <p className="text-lg leading-relaxed sm:text-xl text-gray-600 max-w-2xl mx-auto">
              LG 계열사 프리미엄 혜택 + 대형 복지몰 + B2C 커머스 종합몰을 모두 통합한 국내 유일의 복지몰입니다.<br />상품 1억개, 최저가 상품 20만개 및 개인화 상품 추천 서비스를 제공합니다.
            </p>
          </div>
          <h2>통합 복지몰 플랫폼</h2>
          <ul>
            <li>복지/커머스/추천 통합 제공</li>
            <li>1억개 상품, 20만개 최저가</li>
            <li>AI 기반 맞춤형 상품 추천</li>
          </ul>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* 카드 예시 */}
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
              <Settings className="h-12 w-12 text-green-500 mb-4" />
              <div className="font-bold text-xl mb-2">통합 플랫폼</div>
              <div className="text-gray-500 text-base">복지/커머스/추천 통합 제공</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
              <CheckCircle className="h-12 w-12 text-purple-500 mb-4" />
              <div className="font-bold text-xl mb-2">최다 상품</div>
              <div className="text-gray-500 text-base">1억개 상품, 20만개 최저가</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
              <Heart className="h-12 w-12 text-pink-400 mb-4" />
              <div className="font-bold text-xl mb-2">개인화 추천</div>
              <div className="text-gray-500 text-base">AI 기반 맞춤형 상품 추천</div>
            </div>
          </div>
        </div>
      </section>

      {/* 고객 사례(cases) 섹션: 카드형, 반응형 그리드 -> ReviewList로 대체 */}
      <div className="flex flex-wrap justify-center gap-6 my-8">
        <img src="/images/client1.png" alt="고객사1" className="h-10" />
        <img src="/images/client2.png" alt="고객사2" className="h-10" />
        <img src="/images/client3.png" alt="고객사3" className="h-10" />
        {/* 실제 도입사 로고로 교체 */}
      </div>
      <ReviewList />

      {/* 도입 문의(contacts) 섹션: 모달 트리거 버튼으로 변경 */}
      <section id="contacts" className="py-14 md:py-20 bg-gradient-to-br from-purple-200 via-purple-100 to-purple-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          {/* 왼쪽: 설명 + 이미지 */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-purple-700">도입 문의</span>
            </h2>
            <p className="text-lg leading-relaxed sm:text-xl text-gray-600 mb-8 max-w-lg">
              복지 플랫폼의 한계를 뛰어넘는 AX 기반의 차세대 임직원 경험을 지금 바로 체험해보세요.<br />전문 컨설턴트가 귀사에 최적화된 솔루션을 제안해 드립니다.
            </p>
            <img src="/images/www_lglifecare_com.png" alt="LG 라이프케어 대표 이미지" className="w-60 h-40 object-contain rounded-2xl shadow-lg border-2 border-purple-200 mb-4" onError={e => {e.target.onerror=null; e.target.src='/images/contact_illustration.png';}} />
          </div>
          {/* 오른쪽: 문의하기 버튼 */}
          <div className="w-full md:w-1/2 flex justify-center">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="w-full max-w-lg bg-gradient-to-r from-purple-700 via-purple-500 to-purple-400 text-white font-bold text-xl py-6 rounded-xl shadow-lg hover:from-purple-800 hover:to-purple-500 transition-all"
            >
              서비스 도입 문의하기
            </button>
          </div>
        </div>
      </section>

      {/* 푸터(footer) 섹션: 반응형, 가독성 강화 */}
      <footer className="bg-gray-900 text-white py-10 md:py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-xl md:text-2xl font-extrabold mb-3">LG 라이프케어</div>
          <p className="text-sm md:text-base text-gray-400 max-w-md mx-auto">
            LG CNS의 IT 기술력을 바탕으로 AX 기반 임직원 복지 경험을 제공하는 차세대 복지 플랫폼입니다.
          </p>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-xs md:text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 LG CNS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* 각 주요 섹션 하단에 CTA 버튼 반복 */}
      <div className="text-center mt-10">
        <button
          className="bg-gradient-to-r from-purple-700 via-purple-500 to-purple-400 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-all"
          onClick={() => setIsContactModalOpen(true)}
        >
          지금 무료 컨설팅 받기
        </button>
      </div>

      {/* 하단 고정 CTA(문의하기) 버튼 - 모바일/PC 모두 노출 */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          className="bg-gradient-to-r from-purple-700 via-purple-500 to-purple-400 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-all"
          onClick={() => setIsContactModalOpen(true)}
        >
          1분 문의하기
        </button>
      </div>

      {/* 문의 모달 */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      {/* AuthModal 모달 */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />

      {/* 1. AX 기반 혁신 기술 섹션 추가 */}
      <section id="ax-innovation" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-purple-700">AX 기반 4대 혁신 기술</span>
            </h2>
            <p className="text-lg leading-relaxed sm:text-xl text-gray-600 max-w-2xl mx-auto">
              AI와 자동화로 완성되는 초개인화, 콘텐츠 자동화, 운영 자동화, 통합 연동 자동화의 혁신을 경험하세요.<br />
              <span className="font-bold text-purple-700">비용 절감 <span className="text-xl">32%</span>, 만족도 증가 <span className="text-xl">58%</span>, 이직률 감소 <span className="text-xl">27%</span></span> 등 실질적 효과를 제공합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* 초개인화 자동화 */}
            <div className="bg-purple-50 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
              <div className="font-bold text-xl mb-2 text-purple-700">초개인화 자동화</div>
              <div className="text-gray-500 text-base mb-2">실시간 행동/상황 분석 기반 맞춤형 복지 제안</div>
              <ul className="text-sm text-gray-600 list-disc list-inside">
                <li>사용자 라이프스타일 통합 분석</li>
                <li>AI 기반 복지 추천</li>
              </ul>
              <button className="mt-4 text-purple-700 underline" onClick={() => window.location.href='/ax-innovation-detail'}>자세히 보기</button>
            </div>
            {/* 콘텐츠 자동화 */}
            <div className="bg-purple-50 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
              <div className="font-bold text-xl mb-2 text-purple-700">콘텐츠 자동화</div>
              <div className="text-gray-500 text-base mb-2">AI가 자동 생성하는 맞춤형 복지 콘텐츠</div>
              <ul className="text-sm text-gray-600 list-disc list-inside">
                <li>트렌드/시즌별 자동 기획전</li>
                <li>실시간 피드백 반영</li>
              </ul>
              <button className="mt-4 text-purple-700 underline" onClick={() => window.location.href='/ax-innovation-detail'}>자세히 보기</button>
            </div>
            {/* 운영 자동화 */}
            <div className="bg-purple-50 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
              <div className="font-bold text-xl mb-2 text-purple-700">운영 자동화</div>
              <div className="text-gray-500 text-base mb-2">복지 신청~정산까지 전 과정 자동화</div>
              <ul className="text-sm text-gray-600 list-disc list-inside">
                <li>원스톱 복지 프로세스</li>
                <li>예외 상황 자동 처리</li>
              </ul>
              <button className="mt-4 text-purple-700 underline" onClick={() => window.location.href='/ax-innovation-detail'}>자세히 보기</button>
            </div>
            {/* 통합 연동 자동화 */}
            <div className="bg-purple-50 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
              <div className="font-bold text-xl mb-2 text-purple-700">통합 연동 자동화</div>
              <div className="text-gray-500 text-base mb-2">기업/제휴사 시스템과 완전 자동 연동</div>
              <ul className="text-sm text-gray-600 list-disc list-inside">
                <li>API 기반 실시간 데이터 동기화</li>
                <li>생태계 통합 자동화</li>
              </ul>
              <button className="mt-4 text-purple-700 underline" onClick={() => window.location.href='/ax-innovation-detail'}>자세히 보기</button>
            </div>
          </div>
          {/* 혁신 키워드 인포그래픽 */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <span className="bg-gradient-to-r from-purple-500 to-purple-300 text-white text-sm font-bold px-4 py-2 rounded-full shadow-md">초개인화 자동화</span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-200 text-white text-sm font-bold px-4 py-2 rounded-full shadow-md">예측적 복지 관리</span>
            <span className="bg-gradient-to-r from-pink-400 to-purple-200 text-white text-sm font-bold px-4 py-2 rounded-full shadow-md">상황 인지형 UX</span>
            <span className="bg-gradient-to-r from-green-400 to-purple-200 text-white text-sm font-bold px-4 py-2 rounded-full shadow-md">엔드투엔드 자동화</span>
            <span className="bg-gradient-to-r from-yellow-400 to-purple-200 text-white text-sm font-bold px-4 py-2 rounded-full shadow-md">생태계 통합 자동화</span>
          </div>
        </div>
      </section>

      {/* 2. LG 프리미엄 혜택/실질적 혜택 사례 강화 */}
      <section id="premium-benefits" className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-purple-700">LG 프리미엄 혜택</span>
            </h2>
            <p className="text-lg leading-relaxed sm:text-xl text-gray-600 max-w-2xl mx-auto">
              LG 제품 최대 <span className="font-bold text-purple-700">85% 할인</span>, 하루특가, 끝장딜 등 실질적 혜택을 국내 유일 통합 복지몰에서 경험하세요.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
              <Gift className="h-12 w-12 text-purple-600 mb-4" />
              <div className="font-bold text-xl mb-2">LG 제품 최대 85% 할인</div>
              <div className="text-gray-500 text-base">임직원 전용가로 프리미엄 제품 제공</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
              <Star className="h-12 w-12 text-yellow-400 mb-4" />
              <div className="font-bold text-xl mb-2">하루특가/끝장딜</div>
              <div className="text-gray-500 text-base">매일 새로운 특가/딜로 실질적 혜택 제공</div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
              <Users className="h-12 w-12 text-purple-400 mb-4" />
              <div className="font-bold text-xl mb-2">국내 유일 통합 복지몰</div>
              <div className="text-gray-500 text-base">1억개 상품, 20만개 최저가, AI 맞춤 추천</div>
            </div>
          </div>
          <div className="text-center mt-10">
            <button className="bg-gradient-to-r from-purple-700 via-purple-500 to-purple-400 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-all" onClick={() => setIsContactModalOpen(true)}>
              혜택 더 알아보기
            </button>
          </div>
        </div>
      </section>

      {/* 3. 도입 장벽 제거 메시지 강조 섹션 */}
      <section id="adoption-barrier-free" className="py-16 bg-gradient-to-br from-purple-200 via-purple-100 to-purple-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-purple-700">도입 장벽 ZERO!</span>
            </h2>
            <p className="text-lg leading-relaxed sm:text-xl text-gray-600 mb-8 max-w-lg">
              구축비용, 운영비, 약정 모두 <span className="font-bold text-purple-700">ZERO</span>!<br />
              30일 무료 체험, 무료 컨설팅, 맞춤형 서비스, 전담 매니저 지원까지 부담 없이 시작하세요.
            </p>
            <ul className="space-y-3 text-base text-gray-700">
              <li>✔️ 30일 무료 체험</li>
              <li>✔️ 무료 복지 컨설팅</li>
              <li>✔️ 맞춤형 서비스 설계</li>
              <li>✔️ 전담 매니저 지원</li>
            </ul>
            <button className="mt-8 bg-gradient-to-r from-purple-700 via-purple-500 to-purple-400 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-all" onClick={() => setIsContactModalOpen(true)}>
              부담 없이 문의하기
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img src="/images/adoption_zero.png" alt="도입 장벽 ZERO" className="w-80 h-60 object-contain rounded-2xl shadow-lg border-2 border-purple-200" />
          </div>
        </div>
      </section>

      {/* 4. 사용자 경험 최적화 메시지 시각적 보강 */}
      <section id="ux-optimization" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-purple-700">최적의 사용자 경험</span>
            </h2>
            <p className="text-lg leading-relaxed sm:text-xl text-gray-600 max-w-2xl mx-auto">
              모바일/PC 어디서나 직관적이고 모던한 UI, 신뢰성 있는 통계와 실제 고객 사례로 신뢰를 더합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-purple-50 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
              <div className="font-bold text-xl mb-2 text-purple-700">모바일 최적화</div>
              <div className="text-gray-500 text-base">모든 디바이스에서 완벽한 접근성</div>
            </div>
            <div className="bg-purple-50 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
              <div className="font-bold text-xl mb-2 text-purple-700">직관적 UI/UX</div>
              <div className="text-gray-500 text-base">누구나 쉽게 사용할 수 있는 디자인</div>
            </div>
            <div className="bg-purple-50 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
              <div className="font-bold text-xl mb-2 text-purple-700">신뢰성 있는 데이터</div>
              <div className="text-gray-500 text-base">1,000+ 고객사, 100만+ 임직원, 실제 사례</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LGLifecareServiceSite; 