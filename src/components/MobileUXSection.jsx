// 모바일 UX/앱 안내 컴포넌트
import React from 'react';
import Image from 'next/image';

// 모바일 앱 기능 소개 섹션
const MobileUXSection = () => {
  // 앱 기능 데이터
  const appFeatures = [
    {
      id: 1,
      title: "쉬운 복지포인트 조회",
      description: "언제 어디서나 내 복지포인트 잔액을 실시간으로 확인하세요.",
      icon: "📱"
    },
    {
      id: 2,
      title: "바코드 회원증",
      description: "앱 내 바코드로 오프라인 매장에서도 편리하게 혜택을 받을 수 있습니다.",
      icon: "🔍"
    },
    {
      id: 3,
      title: "맞춤형 혜택 알림",
      description: "나에게 꼭 맞는 복지 혜택과 이벤트를 알림으로 받아보세요.",
      icon: "🔔"
    },
    {
      id: 4,
      title: "원터치 결제",
      description: "간편 결제로 빠르고 안전하게 서비스를 이용하세요.",
      icon: "💳"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">언제 어디서나, 모바일에서도</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            LG 라이프케어 모바일 앱으로 더 스마트하게 복지 혜택을 이용하세요
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* 모바일 앱 목업 이미지 */}
          <div className="md:w-1/2 relative">
            <div className="bg-blue-600 rounded-3xl shadow-2xl p-2 inline-block rotate-[-6deg] relative">
              <div className="bg-white rounded-2xl p-3 overflow-hidden">
                <div className="w-64 h-[500px] bg-gray-100 rounded-xl overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white p-4 rounded-t-xl">
                    <div className="text-sm font-bold">LG LifeCare</div>
                  </div>
                  <div className="pt-16 px-4">
                    <div className="bg-white rounded-lg shadow-md p-3 mb-3">
                      <div className="text-xs text-gray-500">나의 복지포인트</div>
                      <div className="text-xl font-bold text-blue-600">850,000 P</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 mb-3">
                      <div className="text-sm font-bold text-blue-800">이달의 추천 혜택</div>
                      <div className="text-xs text-gray-600 mt-1">영화 티켓 20% 할인 중!</div>
                    </div>
                    <div className="flex gap-2 mb-3">
                      <div className="flex-1 bg-orange-50 rounded-lg p-2 text-center">
                        <div className="text-2xl">🛒</div>
                        <div className="text-xs">쇼핑</div>
                      </div>
                      <div className="flex-1 bg-green-50 rounded-lg p-2 text-center">
                        <div className="text-2xl">🏥</div>
                        <div className="text-xs">의료</div>
                      </div>
                      <div className="flex-1 bg-purple-50 rounded-lg p-2 text-center">
                        <div className="text-2xl">🎭</div>
                        <div className="text-xs">문화</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-500 rounded-3xl shadow-2xl p-2 inline-block rotate-[6deg] absolute top-20 -right-8">
              <div className="bg-white rounded-2xl p-3 overflow-hidden">
                <div className="w-64 h-[400px] bg-gray-100 rounded-xl overflow-hidden relative">
                  <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white p-4 rounded-t-xl">
                    <div className="text-sm font-bold">바코드 회원증</div>
                  </div>
                  <div className="flex flex-col items-center justify-center h-full pt-16">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="w-48 h-20 bg-gray-800 rounded-lg mb-2"></div>
                      <div className="text-center text-xs text-gray-500">회원번호: 100-3982-4829</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 앱 기능 리스트 */}
          <div className="md:w-1/2 space-y-6">
            {appFeatures.map(feature => (
              <div key={feature.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow flex items-start gap-4">
                <div className="text-3xl">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
            <div className="mt-8">
              <a href="#download" className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition-colors">
                앱 다운로드 안내 받기
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileUXSection; 