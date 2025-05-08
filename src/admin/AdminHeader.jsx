import React from 'react';

// 관리자 헤더 컴포넌트
const AdminHeader = () => {
  return (
    <header className="w-full h-20 bg-white/80 shadow flex items-center justify-between px-8">
      {/* 로고/서비스명 */}
      <div className="text-2xl font-extrabold text-purple-700 tracking-tight">LG 라이프케어 관리자</div>
      {/* 사용자 정보 및 로그아웃 */}
      <div className="flex items-center gap-4">
        <span className="text-gray-700 font-semibold">홍길동 관리자</span>
        <button className="bg-gradient-to-r from-purple-700 to-purple-400 text-white font-bold px-4 py-2 rounded-xl shadow hover:from-purple-800 hover:to-purple-500 transition-all">로그아웃</button>
      </div>
    </header>
  );
};

export default AdminHeader; 