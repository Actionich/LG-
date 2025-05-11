import React from 'react';
import HeroSection from './HeroSection';

// 라이프케어 자료실 섹션 컴포넌트
const ResourceCenter = () => {
  // 리소스 데이터
  const resources = [
    {
      id: 1,
      title: '라이프케어 도입 가이드',
      description: '기업 규모별 복지몰 도입 전략 및 성공 사례를 담은 PDF 가이드',
      type: 'PDF',
      icon: '📊',
      color: 'blue'
    },
    {
      id: 2,
      title: '복지 트렌드 리포트 2023',
      description: '최신 기업 복지 동향과 임직원이 선호하는 복지 항목 분석',
      type: 'PDF',
      icon: '📈',
      color: 'green'
    },
    {
      id: 3,
      title: '라이프케어 제품 소개서',
      description: '라이프케어 주요 기능 및 특장점을 한눈에 확인할 수 있는 브로슈어',
      type: 'PDF',
      icon: '🔍',
      color: 'purple'
    },
    {
      id: 4,
      title: '라이프케어 구축 웨비나',
      description: '기업 복지몰 구축 과정 및 운영 노하우를 공유하는 온라인 세미나',
      type: 'VIDEO',
      icon: '🎬',
      color: 'red'
    },
    {
      id: 5,
      title: '복지 관리자 인터뷰',
      description: '라이프케어를 도입한 기업 복지 담당자들의 생생한 인터뷰 모음',
      type: 'AUDIO',
      icon: '🎙️',
      color: 'orange'
    },
    {
      id: 6,
      title: '복지 계정 관리 매뉴얼',
      description: '효율적인 복지 계정 관리를 위한 단계별 매뉴얼',
      type: 'PDF',
      icon: '📝',
      color: 'teal'
    }
  ];

  // 리소스 타입에 따른 배지 색상
  const typeBadgeColor = {
    PDF: 'bg-blue-100 text-blue-700',
    VIDEO: 'bg-red-100 text-red-700',
    AUDIO: 'bg-yellow-100 text-yellow-700'
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-4">
            RESOURCES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            라이프케어 지식 센터
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            복지 플랫폼 도입과 운영을 위한 유용한 자료를 다운로드하세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map(resource => (
            <div key={resource.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
              <div className={`h-3 bg-${resource.color}-500`}></div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-4xl">{resource.icon}</span>
                  <span className={`${typeBadgeColor[resource.type]} text-xs font-semibold px-2 py-1 rounded-full`}>
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                <div className="flex justify-between items-center">
                  <button className="text-blue-600 font-semibold flex items-center hover:text-blue-800 transition-colors">
                    <span>자세히 보기</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="text-gray-500 hover:text-gray-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <form className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="이메일을 입력하면 유용한 자료를 보내드립니다"
                className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                자료 구독하기
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              * 입력하신 이메일로 복지 운영에 도움이 되는 최신 자료와 트렌드를 정기적으로 보내드립니다
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ResourceCenter;