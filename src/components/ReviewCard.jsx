import React from 'react';

// 별점 렌더링 함수
const renderStars = (rating) => {
  return Array.from({ length: 5 }).map((_, i) => (
    <svg key={i} className={`w-5 h-5 inline ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
      <polygon points="10,1 12.59,6.99 19,7.64 14,12.26 15.18,18.51 10,15.27 4.82,18.51 6,12.26 1,7.64 7.41,6.99" />
    </svg>
  ));
};

// 고객 리뷰 카드 컴포넌트
// props: { company, name, position, rating, review, avatar }
const ReviewCard = ({ company, name, position, rating, review, avatar }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow">
      {/* 담당자 썸네일 */}
      <div className="w-16 h-16 mb-3 rounded-full overflow-hidden border-2 border-purple-200 bg-purple-50 flex items-center justify-center">
        <img
          src={avatar}
          alt={name}
          className="object-cover w-full h-full"
          onError={e => {e.target.onerror=null; e.target.src='/images/avatar_placeholder.png';}}
        />
      </div>
      {/* 별점 */}
      <div className="mb-2">{renderStars(rating)}</div>
      {/* 후기 */}
      <div className="text-gray-700 text-base mb-3 line-clamp-3">"{review}"</div>
      {/* 회사명/담당자 */}
      <div className="font-bold text-purple-700 text-lg">{company}</div>
      <div className="text-sm text-gray-500">{name} {position && `(${position})`}</div>
    </div>
  );
};

export default ReviewCard; 