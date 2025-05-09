// 콘텐츠 커머스(Commerce) Apple 스타일 섹션 컴포넌트
import React, { useState } from 'react';

// 카테고리 예시
const categories = ['가전', '건강식품', '여행', '교육', '패션'];
// 상품 예시 데이터
const products = [
  { img: '/images/product1.png', title: '프리미엄 공기청정기', review: '실사용자 만족도 4.9/5', badge: '최대 85% 할인', category: '가전' },
  { img: '/images/product2.png', title: '건강기능식품 세트', review: '직원 추천 베스트', badge: '신규 가입 혜택', category: '건강식품' },
  { img: '/images/product3.png', title: '제주도 여행 패키지', review: '후기 1,200+개', badge: '이달의 기획전', category: '여행' },
];

const CommerceSection = () => {
  const [selected, setSelected] = useState('전체');
  // 카테고리 필터링
  const filtered = selected === '전체' ? products : products.filter(p => p.category === selected);
  return (
    <section className="py-20 bg-blue-50 border-t border-gray-100">
      {/* 타이틀 */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">실제 직원이 검증한 베스트 상품</h2>
      {/* 카테고리 필터 */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        <button onClick={() => setSelected('전체')} className={`px-5 py-2 rounded-full font-bold border ${selected==='전체'?'bg-blue-600 text-white':'bg-white text-blue-600 border-blue-600'} transition`}>전체</button>
        {categories.map(c => (
          <button key={c} onClick={() => setSelected(c)} className={`px-5 py-2 rounded-full font-bold border ${selected===c?'bg-blue-600 text-white':'bg-white text-blue-600 border-blue-600'} transition`}>{c}</button>
        ))}
      </div>
      {/* 상품 카드 리스트 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {filtered.map((p, i) => (
          <div key={i} className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
            <img src={p.img} alt={p.title} className="h-32 w-32 object-contain mb-4" />
            <div className="font-bold text-lg mb-2">{p.title}</div>
            <div className="text-gray-600 text-sm mb-2">{p.review}</div>
            <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold mb-2">{p.badge}</span>
          </div>
        ))}
      </div>
      {/* 이달의 기획전 슬라이드(예시) */}
      <div className="mt-12 text-center">
        <span className="inline-block bg-gradient-to-r from-blue-400 to-blue-200 text-white text-base font-bold px-6 py-3 rounded-full shadow-md">이달의 기획전 자동 업데이트</span>
      </div>
    </section>
  );
};

export default CommerceSection; 