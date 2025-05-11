// 도입문의 및 상담 섹션 컴포넌트
import React from 'react';

// 상담 및 문의 섹션
const ContactSection = () => {
  // 고객 유형별 문의 옵션
  const contactOptions = [
    {
      id: 1,
      title: "기업 고객",
      description: "복지 플랫폼 도입을 위한 기업 맞춤형 상담 제공",
      icon: "🏢",
      buttonText: "기업 상담 신청",
      color: "blue"
    },
    {
      id: 2,
      title: "복지 담당자",
      description: "임직원 복지 관리를 위한 솔루션 도입 안내",
      icon: "👨‍💼",
      buttonText: "담당자 상담 신청",
      color: "indigo"
    },
    {
      id: 3,
      title: "파트너십 문의",
      description: "서비스 확장을 위한 비즈니스 파트너십 제안",
      icon: "🤝",
      buttonText: "파트너십 문의",
      color: "purple"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-4">
            CONTACT US
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            시작이 어렵다면, 전문가와 상담하세요
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            LG 라이프케어 도입을 위한 맞춤형 상담 서비스를 제공합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactOptions.map(option => (
            <div 
              key={option.id} 
              className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:-translate-y-2 hover:shadow-2xl`}
            >
              <div className={`bg-${option.color}-600 h-2`}></div>
              <div className="p-8">
                <div className="text-4xl mb-6">{option.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-8">{option.description}</p>
                <button 
                  className={`w-full py-3 rounded-lg bg-${option.color}-100 text-${option.color}-700 font-semibold hover:bg-${option.color}-200 transition-colors`}
                >
                  {option.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">전화 상담도 가능합니다</h3>
              <p className="text-gray-600 mb-6">
                복지몰 구축, 운영, 도입에 관한 모든 사항을 전화로도 빠르게 상담해 드립니다.
              </p>
              <div className="flex items-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500">고객센터 운영시간: 평일 09:00 - 18:00</div>
                  <div className="text-2xl font-bold text-blue-600">1588-1234</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-gray-50 rounded-xl p-6">
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                    이름 / 직함
                  </label>
                  <input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="name" placeholder="홍길동 / 인사팀장" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="company">
                    회사명
                  </label>
                  <input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="company" placeholder="주식회사 예시" />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="phone">
                    연락처
                  </label>
                  <input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="tel" id="phone" placeholder="010-1234-5678" />
                </div>
                <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  빠른 상담 요청하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 