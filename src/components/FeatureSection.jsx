// Apple 스타일 FeatureSection 컴포넌트
import React from 'react';
import { Star, Gift, Settings, Smartphone } from 'lucide-react';

// 주요 기능 데이터
const features = [
  {
    icon: <Star className="w-10 h-10 text-blue-700 mb-4" />,
    title: '스마트 추천',
    desc: '구매 이력 기반 맞춤형 혜택 추천',
  },
  {
    icon: <Gift className="w-10 h-10 text-blue-700 mb-4" />,
    title: '복지 포인트 통합 사용',
    desc: '제휴처 포인트 통합 사용 가능, 결제까지 간편하게',
  },
  {
    icon: <Settings className="w-10 h-10 text-blue-700 mb-4" />,
    title: 'AI 콘텐츠 큐레이션',
    desc: '리뷰, 트렌드, 직원 추천 콘텐츠 자동 생성',
  },
  {
    icon: <Smartphone className="w-10 h-10 text-blue-700 mb-4" />,
    title: '모바일 최적화',
    desc: '언제 어디서든 복지 혜택 이용 가능',
  },
];

const FeatureSection = () => (
  <section className="py-20 bg-white border-t border-gray-100">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-700">주요 기능</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
      {features.map((f, i) => (
        <div key={i} className="flex flex-col items-center bg-blue-50 rounded-2xl p-8 shadow hover:scale-105 transition">
          {f.icon}
          <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
          <p className="text-gray-600 text-center">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeatureSection; 