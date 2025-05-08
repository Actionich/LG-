import React from 'react';

// 관리자 대시보드 예시 컴포넌트
const AdminDashboard = () => {
  // 더미 통계 데이터
  const stats = [
    { label: '총 회원 수', value: 1240 },
    { label: '상품 등록 수', value: 87 },
    { label: '문의 내역', value: 32 },
    { label: '오늘 방문자', value: 210 },
  ];
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-8 text-gray-900">대시보드</h2>
      {/* 통계 카드 그리드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
            <div className="text-3xl font-extrabold text-purple-700 mb-2">{stat.value.toLocaleString()}</div>
            <div className="text-gray-600 font-semibold">{stat.label}</div>
          </div>
        ))}
      </div>
      {/* 최근 문의/회원 등 추가 영역(확장 가능) */}
      <div className="bg-white rounded-2xl shadow p-6 text-gray-500 text-center">최근 문의, 회원, 상품 등 주요 현황을 한눈에 확인할 수 있습니다. (추후 확장)</div>
    </div>
  );
};

export default AdminDashboard; 