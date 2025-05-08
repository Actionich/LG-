import React from 'react';

// 관리자 사이드바 컴포넌트
const AdminSidebar = ({ active, onMenuClick }) => {
  // 메뉴 목록
  const menus = [
    { key: 'dashboard', label: '대시보드' },
    { key: 'products', label: '상품관리' },
    { key: 'inquiries', label: '문의관리' },
    { key: 'users', label: '회원관리' },
    { key: 'settings', label: '설정' },
  ];
  return (
    <aside className="w-56 min-h-screen bg-gradient-to-b from-purple-700 to-purple-400 text-white flex flex-col py-8 px-4 shadow-2xl">
      <div className="text-2xl font-extrabold mb-10 tracking-tight text-center">관리자</div>
      <nav className="flex-1 flex flex-col gap-2">
        {menus.map(menu => (
          <button
            key={menu.key}
            className={`text-lg font-semibold rounded-xl px-4 py-3 text-left transition-colors ${active === menu.key ? 'bg-white/20 shadow text-yellow-200' : 'hover:bg-white/10'}`}
            onClick={() => onMenuClick(menu.key)}
          >
            {menu.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default AdminSidebar; 