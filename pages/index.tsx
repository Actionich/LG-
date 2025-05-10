import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Footer from '../components/Footer';

// Apple 스타일 메인 페이지
const Home = () => {
  return (
    <div className="font-sans bg-white min-h-screen">
      {/* 상단 고정 헤더 */}
      <Header />
      {/* 풀스크린 Hero 배너 */}
      <Hero />
      {/* 서비스 소개 섹션 */}
      <Section title="LG 라이프케어란?" description="프리미엄 복지와 AX 혁신이 결합된 국내 유일 통합 복지 플랫폼">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 예시 카드 */}
          <div className="rounded-2xl bg-gray-100 p-8 shadow-xl flex flex-col items-center text-center hover:shadow-2xl transition-all">
            <span className="text-5xl font-extrabold text-blue-600 mb-2">1,000+</span>
            <div className="text-lg font-bold mb-1">도입 기업</div>
            <div className="text-gray-500">국내 대표 기업들이 선택한 신뢰의 플랫폼</div>
          </div>
          <div className="rounded-2xl bg-gray-100 p-8 shadow-xl flex flex-col items-center text-center hover:shadow-2xl transition-all">
            <span className="text-5xl font-extrabold text-blue-600 mb-2">100만+</span>
            <div className="text-lg font-bold mb-1">임직원 회원</div>
            <div className="text-gray-500">누적 이용자 수 기준 업계 1위</div>
          </div>
          <div className="rounded-2xl bg-gray-100 p-8 shadow-xl flex flex-col items-center text-center hover:shadow-2xl transition-all">
            <span className="text-5xl font-extrabold text-blue-600 mb-2">85%</span>
            <div className="text-lg font-bold mb-1">LG 제품 할인</div>
            <div className="text-gray-500">최대 85% 할인, 하루특가 등 실질적 혜택</div>
          </div>
        </div>
      </Section>
      {/* 주요 기능 섹션 */}
      <Section title="주요 기능" description="AX 기반 초개인화, 자동화, 통합 연동 등 혁신 기능 제공">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow flex flex-col items-center text-center hover:shadow-xl transition-all">
            <div className="text-2xl font-bold text-blue-600 mb-2">초개인화 추천</div>
            <div className="text-gray-500">AI 기반 맞춤형 복지/상품 추천</div>
          </div>
          <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow flex flex-col items-center text-center hover:shadow-xl transition-all">
            <div className="text-2xl font-bold text-blue-600 mb-2">콘텐츠 자동화</div>
            <div className="text-gray-500">트렌드/이벤트 자동 기획전 생성</div>
          </div>
          <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow flex flex-col items-center text-center hover:shadow-xl transition-all">
            <div className="text-2xl font-bold text-blue-600 mb-2">운영 자동화</div>
            <div className="text-gray-500">복지 신청~정산까지 원스톱 자동화</div>
          </div>
          <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow flex flex-col items-center text-center hover:shadow-xl transition-all">
            <div className="text-2xl font-bold text-blue-600 mb-2">생태계 연동</div>
            <div className="text-gray-500">기업/제휴사 시스템 실시간 연동</div>
          </div>
        </div>
      </Section>
      {/* 혜택/이벤트 섹션 */}
      <Section title="혜택 & 이벤트" description="실질적 혜택과 다양한 이벤트로 임직원 만족도 극대화">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-gradient-to-br from-blue-100 via-white to-gray-100 p-8 shadow-xl flex flex-col items-start hover:scale-105 transition-all">
            <div className="text-xl font-bold text-blue-700 mb-2">하루특가</div>
            <div className="text-gray-600 mb-2">매일 달라지는 초특가 상품</div>
            <button className="mt-4 px-6 py-2 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition">오늘의 특가 보기</button>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-blue-100 via-white to-gray-100 p-8 shadow-xl flex flex-col items-start hover:scale-105 transition-all">
            <div className="text-xl font-bold text-blue-700 mb-2">끝장딜</div>
            <div className="text-gray-600 mb-2">기간 한정 파격 할인</div>
            <button className="mt-4 px-6 py-2 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition">이벤트 확인</button>
          </div>
        </div>
      </Section>
      {/* 고객 후기 섹션 */}
      <Section title="고객 후기" description="실제 도입 기업과 임직원들의 생생한 경험담">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow flex flex-col gap-2 hover:shadow-xl transition-all">
            <div className="font-bold text-gray-900">삼성전자 인사담당자</div>
            <div className="text-gray-500 text-sm">"LG 라이프케어 도입 후 임직원 만족도가 크게 올랐어요. 운영도 훨씬 편해졌습니다."</div>
          </div>
          <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow flex flex-col gap-2 hover:shadow-xl transition-all">
            <div className="font-bold text-gray-900">현대자동차 복지팀</div>
            <div className="text-gray-500 text-sm">"복지몰 관리가 자동화되어 업무 효율이 2배 이상 향상되었습니다."</div>
          </div>
          <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow flex flex-col gap-2 hover:shadow-xl transition-all">
            <div className="font-bold text-gray-900">LG전자 임직원</div>
            <div className="text-gray-500 text-sm">"혜택이 정말 다양하고, 모바일에서도 너무 편리하게 이용하고 있습니다."</div>
          </div>
        </div>
      </Section>
      {/* 심플 푸터 */}
      <Footer />
    </div>
  );
};

export default Home; 