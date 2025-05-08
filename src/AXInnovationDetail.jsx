import React from 'react';
import { ArrowRight } from 'lucide-react';

// AX 기반 혁신 상세페이지 컴포넌트
const AXInnovationDetail = () => {
  return (
    <div className="bg-white min-h-screen py-16 px-4">
      {/* 상단 타이틀 및 요약 */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-4">AX 기반 4대 혁신 기술 상세</h1>
        <p className="text-lg text-gray-700 mb-6">
          LG 라이프케어는 AI와 자동화 기술을 결합하여 복지의 새로운 패러다임을 제시합니다.<br />
          아래 4가지 혁신 분야를 통해 기업과 임직원 모두에게 실질적 가치를 제공합니다.
        </p>
      </div>

      {/* 1. 초개인화 자동화 */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-purple-700 mb-2">1. 초개인화 자동화</h2>
        <p className="text-gray-700 mb-2">
          AI가 사용자 행동, 선호도, 상황을 실시간 분석하여 완전 맞춤형 복지 경험을 제공합니다.<br />
          단순 추천을 넘어 라이프스타일에 통합된 복지 제안을 실현합니다.
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-2">
          <li>실시간 행동/상황 분석 기반 맞춤형 복지 제안</li>
          <li>AI 기반 라이프스타일 통합 분석</li>
          <li>개인별 최적 복지 추천</li>
        </ul>
        <div className="bg-purple-50 rounded-xl p-4 mb-2 text-sm text-purple-800">
          <b>도입 효과:</b> 복지 만족도 58% 증가, 이직률 27% 감소
        </div>
      </section>

      {/* 2. 콘텐츠 자동화 */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-purple-700 mb-2">2. 콘텐츠 자동화</h2>
        <p className="text-gray-700 mb-2">
          AI가 트렌드와 사용자 피드백을 분석해 자동으로 최적화된 복지 콘텐츠를 생성합니다.<br />
          시즌별, 트렌드별 자동 기획전과 맞춤형 콘텐츠를 제공합니다.
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-2">
          <li>트렌드/시즌별 자동 기획전 생성</li>
          <li>실시간 피드백 반영 콘텐츠 자동화</li>
          <li>맞춤형 복지 가이드 자동 생성</li>
        </ul>
        <div className="bg-purple-50 rounded-xl p-4 mb-2 text-sm text-purple-800">
          <b>도입 효과:</b> 운영 효율 32% 향상, 복지 활용률 2배 증가
        </div>
      </section>

      {/* 3. 운영 자동화 */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-purple-700 mb-2">3. 운영 자동화</h2>
        <p className="text-gray-700 mb-2">
          복지 신청부터 사용, 정산까지 전 과정을 자동화하여 관리자의 업무 부담을 획기적으로 줄입니다.<br />
          예외 상황까지 자동 처리되는 완전 자동화 시스템을 제공합니다.
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-2">
          <li>원스톱 복지 프로세스 자동화</li>
          <li>예외 상황 자동 처리</li>
          <li>복지 효과 자동 측정 및 리포트</li>
        </ul>
        <div className="bg-purple-50 rounded-xl p-4 mb-2 text-sm text-purple-800">
          <b>도입 효과:</b> 운영 비용 32% 절감, 관리자 업무 50% 감소
        </div>
      </section>

      {/* 4. 통합 연동 자동화 */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-purple-700 mb-2">4. 통합 연동 자동화</h2>
        <p className="text-gray-700 mb-2">
          기업 내부 시스템, 제휴사 서비스와의 완전 자동화된 연동으로 복지 생태계를 확장합니다.<br />
          API 기반 실시간 데이터 동기화 및 자동 정산/리포팅 시스템을 제공합니다.
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-2">
          <li>API 기반 실시간 데이터 동기화</li>
          <li>생태계 통합 자동화</li>
          <li>자동 정산/리포팅 시스템</li>
        </ul>
        <div className="bg-purple-50 rounded-xl p-4 mb-2 text-sm text-purple-800">
          <b>도입 효과:</b> 제휴사 연계 효율 40% 향상, 실시간 리포트 제공
        </div>
      </section>

      {/* CTA(문의/체험) 버튼 */}
      <div className="text-center mt-12">
        <button
          className="bg-gradient-to-r from-purple-700 via-purple-500 to-purple-400 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-all flex items-center justify-center mx-auto"
          onClick={() => window.location.href = '/#contacts'}
        >
          지금 무료 컨설팅 받기
          <ArrowRight className="ml-3 h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default AXInnovationDetail; 