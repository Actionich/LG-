// LifeCareFrame 서비스 소개 컴포넌트(더미)
import React from 'react';
import { ShieldCheck, Layers, Users, Settings, Lock, Zap, Gift, ClipboardList } from 'lucide-react';
import Link from 'next/link';

// 주요 특징 데이터
const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-700 mb-2" />,
    title: '강력한 보안',
    desc: '기업 데이터와 임직원 정보를 안전하게 보호합니다.',
  },
  {
    icon: <Layers className="w-8 h-8 text-blue-700 mb-2" />,
    title: '유연한 커스터마이징',
    desc: '기업별 맞춤형 복지몰 UI/UX 제공',
  },
  {
    icon: <Users className="w-8 h-8 text-blue-700 mb-2" />,
    title: '대규모 임직원 지원',
    desc: '수만 명의 임직원도 안정적으로 운영',
  },
  {
    icon: <Settings className="w-8 h-8 text-blue-700 mb-2" />,
    title: '통합 관리 시스템',
    desc: '복지 운영, 통계, 리포트까지 한 번에 관리',
  },
];

const LifeCareFrameIntro = () => (
  <section className="py-20 px-4 bg-gray-50">
    <div className="max-w-5xl mx-auto">
      {/* 타이틀 영역 */}
      <div className="text-center mb-12">
        <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold inline-block mb-3">LifeCareFrame 서비스 소개</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">유연한 기업형 복지/멤버십 플랫폼</h2>
        <p className="text-base text-gray-600 max-w-2xl mx-auto">
          복지몰, 멤버십, 리워드몰 등 다양한 형태로 커스터마이징 가능한 통합 플랫폼을 제공합니다.
        </p>
      </div>
      {/* 주요 기능 카드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-white rounded-2xl shadow p-6 flex items-start gap-4">
          <Settings className="w-8 h-8 text-blue-700 mt-1" />
          <div>
            <h3 className="font-bold text-lg mb-1">전용 CMS</h3>
            <p className="text-gray-600 text-sm">운영/기획/배너 구성까지 노코드 자동화</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 flex items-start gap-4">
          <Lock className="w-8 h-8 text-blue-700 mt-1" />
          <div>
            <h3 className="font-bold text-lg mb-1">SSO 및 포인트 연동</h3>
            <p className="text-gray-600 text-sm">고객사 시스템과의 싱글사인온 연계, 포인트 실시간 연동</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 flex items-start gap-4">
          <Zap className="w-8 h-8 text-blue-700 mt-1" />
          <div>
            <h3 className="font-bold text-lg mb-1">AI 큐레이션 & 기획전 자동 생성</h3>
            <p className="text-gray-600 text-sm">트렌드+리뷰+이벤트 조합 추천, 자동 기획전</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 flex items-start gap-4">
          <Gift className="w-8 h-8 text-blue-700 mt-1" />
          <div>
            <h3 className="font-bold text-lg mb-1">마이크로 리워드 자동화</h3>
            <p className="text-gray-600 text-sm">출석체크, 추천인 등 캠페인 자동 운영</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow p-6 flex items-start gap-4">
          <ClipboardList className="w-8 h-8 text-blue-700 mt-1" />
          <div>
            <h3 className="font-bold text-lg mb-1">복지제도 템플릿 제공</h3>
            <p className="text-gray-600 text-sm">공공기관, 중소기업, 교육기관 등 맞춤형 초기 설정</p>
          </div>
        </div>
      </div>
      {/* 특장점/도입효과 */}
      <div className="bg-white rounded-2xl shadow p-8 mb-10">
        <h3 className="font-bold text-lg mb-3 text-blue-900">서비스 특장점 및 도입효과</h3>
        <ul className="text-gray-700 text-sm space-y-2 list-disc list-inside">
          <li>자사 브랜드로 운영되는 독립형 복지/멤버십 플랫폼 구축 가능</li>
          <li>빠른 구축과 유지보수 비용 절감</li>
          <li>자체 정책에 맞춘 커스터마이징과 SaaS 확장성 확보</li>
          <li>복지/포인트/멤버십 등 기업 맞춤 운영방식 구현 가능</li>
          <li>플랫폼 내 고객사만의 정책과 이벤트 전략 자유 구현 가능</li>
        </ul>
      </div>
      {/* CTA 버튼 */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
        <a href="/contact/lifecareframe" className="bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow hover:bg-blue-800 transition">라이프케어프레임 견적 문의</a>
        <a href="/cases" className="bg-blue-100 text-blue-700 font-bold py-3 px-6 rounded-full shadow hover:bg-blue-200 transition">도입 사례 보기</a>
        <a href="/trial" className="bg-gradient-to-r from-blue-700 to-blue-400 text-white font-bold py-3 px-6 rounded-full shadow hover:from-blue-800 hover:to-blue-500 transition">무료 체험하기</a>
      </div>
    </div>
  </section>
);

export default LifeCareFrameIntro;