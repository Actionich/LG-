import React, { useState } from 'react';

// 복지몰 도입 효과 시뮬레이터 섹션
const SimulatorSection = () => {
  // 시뮬레이터 입력 상태
  const [inputs, setInputs] = useState({
    employees: 250,
    budget: 500000,
    benefits: ['식대', '교통비', '문화생활'],
  });

  // 가상의 결과 계산 함수
  const calculateResults = () => {
    const monthlySavings = Math.round(inputs.budget * 0.15);
    const yearlyTotalSavings = monthlySavings * 12;
    const employeeSatisfaction = 87;
    const retentionImprovement = 22;
    
    return {
      monthlySavings,
      yearlyTotalSavings,
      employeeSatisfaction,
      retentionImprovement,
    };
  };

  // 결과 데이터 가져오기
  const results = calculateResults();

  // 혜택 옵션 목록
  const benefitOptions = [
    { id: '식대', label: '식대', icon: '🍽️' },
    { id: '교통비', label: '교통비', icon: '🚌' },
    { id: '문화생활', label: '문화생활', icon: '🎭' },
    { id: '건강관리', label: '건강관리', icon: '🏥' },
    { id: '자기계발', label: '자기계발', icon: '📚' },
    { id: '육아지원', label: '육아지원', icon: '👶' },
  ];

  // 혜택 토글 처리 함수
  const toggleBenefit = (benefitId) => {
    setInputs(prev => {
      if (prev.benefits.includes(benefitId)) {
        return { ...prev, benefits: prev.benefits.filter(b => b !== benefitId) };
      } else {
        return { ...prev, benefits: [...prev.benefits, benefitId] };
      }
    });
  };

  // 인풋 값 변경 처리 함수
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: parseInt(value, 10) }));
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-white bg-opacity-20 text-white text-sm font-semibold mb-4">
            SIMULATOR
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            라이프케어 도입 효과 시뮬레이터
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            간단한 정보 입력으로 복지 플랫폼 도입 시 예상되는 효과를 확인해 보세요
          </p>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 md:p-10 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 직원 수 입력 */}
            <div>
              <label className="block text-lg font-semibold mb-4">
                <div className="flex items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292V15a3 3 0 0 1-3 3h6a3 3 0 0 1-3-3V9.646a4 4 0 110-5.292zm0 15.352a3 3 0 100-6 3 3 0 000 6z" />
                  </svg>
                  직원 수
                </div>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="10"
                  name="employees"
                  value={inputs.employees}
                  onChange={handleInputChange}
                  className="w-full h-2 bg-white bg-opacity-30 rounded-full appearance-none focus:outline-none cursor-pointer"
                />
              </label>
              <div className="flex justify-between">
                <span className="text-sm opacity-70">10명</span>
                <span className="text-xl font-bold">{inputs.employees}명</span>
                <span className="text-sm opacity-70">1000명</span>
              </div>
            </div>
            
            {/* 복지 예산 입력 */}
            <div>
              <label className="block text-lg font-semibold mb-4">
                <div className="flex items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  월 복지 예산(1인당)
                </div>
                <input
                  type="range"
                  min="100000"
                  max="1000000"
                  step="50000"
                  name="budget"
                  value={inputs.budget}
                  onChange={handleInputChange}
                  className="w-full h-2 bg-white bg-opacity-30 rounded-full appearance-none focus:outline-none cursor-pointer"
                />
              </label>
              <div className="flex justify-between">
                <span className="text-sm opacity-70">10만원</span>
                <span className="text-xl font-bold">{(inputs.budget).toLocaleString()}원</span>
                <span className="text-sm opacity-70">100만원</span>
              </div>
            </div>
            
            {/* 희망 복지 항목 선택 */}
            <div>
              <label className="block text-lg font-semibold mb-4">
                <div className="flex items-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  희망 복지 항목
                </div>
              </label>
              <div className="flex flex-wrap gap-2">
                {benefitOptions.map(option => (
                  <button
                    key={option.id}
                    className={`flex items-center px-3 py-2 rounded-full border transition-all ${
                      inputs.benefits.includes(option.id)
                        ? 'bg-white text-blue-600 border-white'
                        : 'bg-transparent border-white border-opacity-30 hover:border-opacity-80'
                    }`}
                    onClick={() => toggleBenefit(option.id)}
                  >
                    <span className="mr-1">{option.icon}</span>
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 결과 화면 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 text-blue-900 text-center">
            <div className="text-blue-600 opacity-80 mb-2">월 절감 효과</div>
            <div className="text-3xl font-bold">{results.monthlySavings.toLocaleString()}원</div>
            <div className="text-sm mt-1 text-gray-500">전체 복지 비용 대비</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-blue-900 text-center">
            <div className="text-blue-600 opacity-80 mb-2">연간 절감 효과</div>
            <div className="text-3xl font-bold">{results.yearlyTotalSavings.toLocaleString()}원</div>
            <div className="text-sm mt-1 text-gray-500">총 직원 복지 비용 기준</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-blue-900 text-center">
            <div className="text-blue-600 opacity-80 mb-2">임직원 만족도</div>
            <div className="text-3xl font-bold">+{results.employeeSatisfaction}%</div>
            <div className="text-sm mt-1 text-gray-500">도입 전 대비 개선 효과</div>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-blue-900 text-center">
            <div className="text-blue-600 opacity-80 mb-2">인재 유지율</div>
            <div className="text-3xl font-bold">+{results.retentionImprovement}%</div>
            <div className="text-sm mt-1 text-gray-500">예상 인재 이탈률 감소</div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="/contact" className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105">
            도입 전문가 상담 예약하기
          </a>
        </div>
      </div>
    </section>
  );
};

export default SimulatorSection;
