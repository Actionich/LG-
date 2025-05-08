import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Users, Gift, Star, Settings, Heart } from 'lucide-react';
import ContactModal from './components/ContactModal';

// LG 라이프케어 서비스 소개 랜딩페이지 컴포넌트 (모바일/PC 반응형 최적화)
const LGLifecareServiceSite = () => {
  // 상태 관리: 메뉴, 스크롤, 통계 애니메이션, 모달
  const [activeTab, setActiveTab] = useState('overview');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [stats, setStats] = useState({ companies: 0, employees: 0, products: 0, brands: 0 });
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

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

      {/* Hero 섹션: 보라색 그라데이션, 큼직한 모바일 UI */}
      <section className="pt-24 pb-10 sm:pt-32 sm:pb-16 bg-gradient-to-br from-purple-200 via-purple-50 to-white">
        <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10">
          {/* 왼쪽: 메시지/버튼 */}
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight drop-shadow-sm">
              <span className="text-purple-700">LG 라이프케어</span>로<br />임직원 복지의 <span className="text-purple-400">새로운 기준</span>을 만나다
            </h1>
            <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl text-gray-700 mb-10 max-w-md md:max-w-none">
              국내 유일의 통합 복지몰, AI 기반 맞춤형 혜택, 자동화된 복지 서비스까지<br />한 번에 경험하세요.
            </p>
            <div className="flex flex-col xs:flex-row gap-4 xs:gap-6 w-full max-w-xs md:max-w-none">
              <button className="w-full xs:w-auto bg-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-purple-800 transition-colors flex items-center justify-center">
                서비스 소개서 다운로드
                <ArrowRight className="ml-3 h-6 w-6" />
              </button>
              <a href="https://lgnara.lglifecare.com" target="_blank" rel="noopener noreferrer" className="w-full xs:w-auto border-2 border-purple-700 text-purple-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-colors shadow-lg flex items-center justify-center" aria-label="데모 체험하기(새 창)">
                데모 체험하기
              </a>
            </div>
          </div>
          {/* 오른쪽: 이미지/대시보드 예시 */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-purple-100">
                {/* 실제 대시보드 샘플 이미지로 교체, public/images/dashboard_sample.png 등 */}
                <img src="/images/dashboard_sample.png" alt="LG 라이프케어 플랫폼 대시보드 샘플" className="w-full object-cover" onError={e => {e.target.onerror=null; e.target.src='/images/contact_illustration.png';}} />
              </div>
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-purple-700 text-white px-6 py-3 rounded-xl text-base sm:text-lg font-bold shadow-lg">
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
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              라이프케어는 LG가 운영하는 국내 유일의 통합 복지몰로 유수의 대형 복지몰 및 폐쇄형 서비스를 통합 제공하고 기업문화와 임직원 DATA의 AI 분석을 통해 생애주기별 맞춤형 복지서비스를 최적의 혜택으로 제공합니다.
            </p>
          </div>
          {/* 카드형 예시 (추가 가능) */}
        </div>
      </section>

      {/* 프리미엄 혜택(benefits) 섹션: 카드형, 보라색 강조 */}
      <section id="benefits" className="py-14 md:py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-purple-700">프리미엄 혜택</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              LG 계열사 상품 및 서비스를 LG임직원 복지혜택과 동일하게 제공합니다.<br />국내 유일 통합 복지몰로 최다 상품 및 서비스를 보유하여 임직원 만족도와 기업 로열티를 증대시킵니다.
            </p>
          </div>
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
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              LG 계열사 프리미엄 혜택 + 대형 복지몰 + B2C 커머스 종합몰을 모두 통합한 국내 유일의 복지몰입니다.<br />상품 1억개, 최저가 상품 20만개 및 개인화 상품 추천 서비스를 제공합니다.
            </p>
          </div>
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

      {/* 고객 사례(cases) 섹션: 카드형, 반응형 그리드 */}
      <section id="cases" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              <span className="text-blue-700">고객 성공 사례</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              다양한 산업 분야의 기업들이 LG 라이프케어와 함께 임직원 경험을 혁신하고 있습니다.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* 카드 예시 */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
              <Users className="h-10 w-10 text-blue-600 mb-3" />
              <div className="font-bold text-lg mb-2">대기업 사례</div>
              <div className="text-gray-500 text-sm">임직원 만족도 30%↑</div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
              <Gift className="h-10 w-10 text-indigo-500 mb-3" />
              <div className="font-bold text-lg mb-2">중견기업 사례</div>
              <div className="text-gray-500 text-sm">복지몰 도입 후 이직률 감소</div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
              <Star className="h-10 w-10 text-yellow-400 mb-3" />
              <div className="font-bold text-lg mb-2">공공기관 사례</div>
              <div className="text-gray-500 text-sm">맞춤형 복지로 만족도↑</div>
            </div>
          </div>
        </div>
      </section>

      {/* 도입 문의(contacts) 섹션: 모달 트리거 버튼으로 변경 */}
      <section id="contacts" className="py-14 md:py-20 bg-gradient-to-br from-purple-200 via-purple-100 to-purple-50">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          {/* 왼쪽: 설명 + 이미지 */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-purple-700">도입 문의</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg">
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

      {/* 문의 모달 */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
};

export default LGLifecareServiceSite; 