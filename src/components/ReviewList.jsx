import React from 'react';
import ReviewCard from './ReviewCard';

// 더미 리뷰 데이터 (실제 서비스에서는 API로 대체)
const dummyReviews = [
  {
    id: 1,
    company: '대기업 A사',
    name: '김지훈',
    position: '인사팀장',
    rating: 5,
    review: 'LG 라이프케어 도입 후 임직원 만족도가 크게 향상되었습니다. 복지몰 상품도 다양하고, 맞춤형 혜택이 인상적입니다.',
    avatar: '/images/avatar1.png'
  },
  {
    id: 2,
    company: '중견기업 B사',
    name: '이수민',
    position: '총무팀',
    rating: 4,
    review: '복지몰 도입 후 이직률이 감소하고, 직원들의 복지에 대한 만족도가 높아졌어요. 상담도 친절했습니다.',
    avatar: '/images/avatar2.png'
  },
  {
    id: 3,
    company: '공공기관 C',
    name: '박영수',
    position: '복지담당',
    rating: 5,
    review: '맞춤형 복지 설계와 자동화 서비스가 정말 편리합니다. 관리자 페이지도 직관적이에요.',
    avatar: '/images/avatar3.png'
  },
  {
    id: 4,
    company: '스타트업 D',
    name: '최은지',
    position: 'CEO',
    rating: 5,
    review: '임직원 복지에 신경 쓰는 기업 이미지를 구축할 수 있었습니다. 추천합니다!',
    avatar: '/images/avatar4.png'
  },
  {
    id: 5,
    company: '제조업 E사',
    name: '정우성',
    position: '노무팀',
    rating: 4,
    review: '상품 종류가 많고, 복지 포인트 관리가 쉬워졌어요. 앞으로도 기대됩니다.',
    avatar: '/images/avatar5.png'
  },
  {
    id: 6,
    company: 'IT기업 F',
    name: '한지민',
    position: 'HR',
    rating: 5,
    review: 'AI 기반 맞춤형 혜택이 직원들에게 큰 호응을 얻고 있습니다. 도입하길 잘했어요.',
    avatar: '/images/avatar6.png'
  },
];

// 리뷰 리스트 컴포넌트
const ReviewList = () => {
  return (
    <section id="reviews" className="py-14 md:py-20 bg-gradient-to-br from-white via-purple-50 to-purple-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-blue-700">고객 성공 사례</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            다양한 산업 분야의 기업들이 LG 라이프케어와 함께 임직원 경험을 혁신하고 있습니다.
          </p>
        </div>
        {/* 리뷰 카드 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {dummyReviews.map(review => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewList; 