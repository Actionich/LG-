// LifeCare 서비스 소개 컴포넌트(더미)
import React from 'react';
import { CheckCircle, Activity, Users, TrendingUp, Zap, Lock, Globe, Settings, CreditCard, Gift, Smartphone } from 'lucide-react';

// LifeCare 소개 섹션 컴포넌트 - 비전, 미션, 장점을 설명합니다.
const LifeCareIntro = () => {
  const features = [
    { icon: <CheckCircle className="text-green-500" />, title: "검증된 복지 솔루션", description: "100여 대기업 고객사가 선택한 검증된 솔루션" },
    { icon: <Activity className="text-blue-500" />, title: "실시간 모니터링", description: "복지 사용 현황을 실시간으로 확인 가능" },
    { icon: <Users className="text-indigo-500" />, title: "맞춤형 서비스", description: "기업 규모와 특성에 맞는 맞춤형 복지 제공" },
    { icon: <TrendingUp className="text-purple-500" />, title: "성장하는 복지 혜택", description: "지속적으로 확장되는 제휴사 및 혜택" },
    { icon: <Zap className="text-yellow-500" />, title: "간편한 도입 절차", description: "빠르고 간편한 복지 서비스 도입 및 운영" },
    { icon: <Lock className="text-red-500" />, title: "보안 관리", description: "ISO 27001 인증을 통한 안전한 정보 관리" },
    { icon: <Globe className="text-blue-600" />, title: "글로벌 서비스", description: "국내외 기업을 위한 다국어 서비스 지원" },
    { icon: <Settings className="text-gray-500" />, title: "커스터마이징", description: "기업 아이덴티티에 맞는 UI/UX 제공" }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      {/* Quick Access 탭 - 주요 섹션 바로가기 네비게이션 (두 줄로 자연스럽게 줄바꿈, 겹치지 않게 넉넉한 여백/크기, 스크롤 없이 flex-wrap) */}
      <nav className="max-w-5xl mx-auto mb-8">
        <ul className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base font-semibold">
          {/* 선택된(Active) 탭: 보라색 그라데이션, 흰색 글씨, 그림자, min-w, text-center */}
          <li className="min-w-[110px] text-center whitespace-nowrap mb-2">
            <a
              href="#lifecare-intro"
              className="block px-5 py-2 rounded-full transition
                bg-gradient-to-r from-purple-600 to-indigo-500 text-white shadow
                hover:from-purple-700 hover:to-indigo-600
                focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              LifeCare 소개
            </a>
          </li>
          {/* 나머지 탭: 흰 배경, 회색 테두리, min-w, text-center, 호버시 연보라 */}
          <li className="min-w-[110px] text-center whitespace-nowrap mb-2">
            <a
              href="#lifecareframe-intro"
              className="block px-5 py-2 rounded-full transition
                bg-white text-gray-900 border border-gray-200
                hover:bg-purple-50 hover:text-purple-700
                focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              LifeCareFrame 소개
            </a>
          </li>
          <li className="min-w-[110px] text-center whitespace-nowrap mb-2">
            <a
              href="#ax-feature"
              className="block px-5 py-2 rounded-full transition
                bg-white text-gray-900 border border-gray-200
                hover:bg-purple-50 hover:text-purple-700
                focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              AX 기반 주요기능
            </a>
          </li>
          <li className="min-w-[110px] text-center whitespace-nowrap mb-2">
            <a
              href="#testimonial"
              className="block px-5 py-2 rounded-full transition
                bg-white text-gray-900 border border-gray-200
                hover:bg-purple-50 hover:text-purple-700
                focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              도입기업 후기
            </a>
          </li>
          <li className="min-w-[110px] text-center whitespace-nowrap mb-2">
            <a
              href="#trial"
              className="block px-5 py-2 rounded-full transition
                bg-white text-gray-900 border border-gray-200
                hover:bg-purple-50 hover:text-purple-700
                focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              체험하기
            </a>
          </li>
          <li className="min-w-[110px] text-center whitespace-nowrap mb-2">
            <a
              href="#consult"
              className="block px-5 py-2 rounded-full transition
                bg-white text-gray-900 border border-gray-200
                hover:bg-purple-50 hover:text-purple-700
                focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              무료 도입 상담
            </a>
          </li>
          <li className="min-w-[110px] text-center whitespace-nowrap mb-2">
            <a
              href="#contact"
              className="block px-5 py-2 rounded-full transition
                bg-white text-gray-900 border border-gray-200
                hover:bg-purple-50 hover:text-purple-700
                focus:outline-none focus:ring-2 focus:ring-purple-300"
            >
              도입문의
            </a>
          </li>
        </ul>
      </nav>
      <div className="max-w-5xl mx-auto">
        {/* 타이틀 영역 */}
        <div className="text-center mb-12">
          <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold inline-block mb-3">LifeCare 서비스 소개</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">LG CNS가 직접 운영하는 프리미엄 복지몰</h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            임직원 대상 선택적 복지 플랫폼 위탁 운영 서비스, 운영 부담 없이 AI 기반 맞춤 복지 경험을 제공합니다.
          </p>
        </div>
        {/* 주요 기능 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-gray-50 rounded-2xl shadow p-6 flex items-start gap-4">
            <Zap className="w-8 h-8 text-blue-700 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-1">AI 맞춤 추천</h3>
              <p className="text-gray-600 text-sm">연령, 기념일, 구매이력 기반 자동 상품 큐레이션</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl shadow p-6 flex items-start gap-4">
            <CreditCard className="w-8 h-8 text-blue-700 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-1">복지포인트 통합 사용</h3>
              <p className="text-gray-600 text-sm">포인트+현금 결제, 실시간 연동</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl shadow p-6 flex items-start gap-4">
            <Gift className="w-8 h-8 text-blue-700 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-1">생애주기 맞춤 혜택</h3>
              <p className="text-gray-600 text-sm">입사/생일/결혼 등 자동 기획전 제공</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl shadow p-6 flex items-start gap-4">
            <Smartphone className="w-8 h-8 text-blue-700 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-1">앱 최적화 UX</h3>
              <p className="text-gray-600 text-sm">사내캘린더, 푸시 알림 연동</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl shadow p-6 flex items-start gap-4">
            <Users className="w-8 h-8 text-blue-700 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-1">직원리뷰 큐레이션</h3>
              <p className="text-gray-600 text-sm">동료의 리뷰로 상품 선택 신뢰도 향상</p>
            </div>
          </div>
        </div>
        {/* 고객사/임직원 이점 */}
        <div className="bg-blue-50 rounded-2xl shadow p-8 mb-10">
          <h3 className="font-bold text-lg mb-3 text-blue-900">고객사/임직원 이점</h3>
          <ul className="text-gray-700 text-sm space-y-2 list-disc list-inside">
            <li>운영 부담 없는 복지몰 위탁 시스템</li>
            <li>LG CNS 전문 운영팀의 고도화된 운영</li>
            <li>다양한 복지상품 자동 업데이트 및 운영 대행</li>
            <li>임직원 로열티 제고 및 복지 만족도 향상</li>
            <li>기업 브랜드 가치 제고와 인재 유지 효과</li>
            <li>취향 기반 콘텐츠 큐레이션 제공</li>
            <li>실시간 포인트 연동과 간편한 결제</li>
            <li>생애주기 맞춤형 복지 경험</li>
            <li>회사의 배려를 체감할 수 있는 맞춤 복지 혜택</li>
          </ul>
        </div>
        {/* CTA 버튼 */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
          <a href="/contact/lifecare" className="bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow hover:bg-blue-800 transition">상담 신청</a>
          <a href="/features" className="bg-blue-100 text-blue-700 font-bold py-3 px-6 rounded-full shadow hover:bg-blue-200 transition">기능 상세 보기</a>
          <a href="/trial" className="bg-gradient-to-r from-blue-700 to-blue-400 text-white font-bold py-3 px-6 rounded-full shadow hover:from-blue-800 hover:to-blue-500 transition">무료 체험하기</a>
        </div>
      </div>
    </section>
  );
};

export default LifeCareIntro; 