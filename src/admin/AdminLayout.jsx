import React, { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';
import AdminDashboard from './AdminDashboard';
import AdminProductList from './AdminProductList';

// 관리자 전체 레이아웃 컴포넌트
const AdminLayout = () => {
  // 현재 선택된 메뉴 상태
  const [activeMenu, setActiveMenu] = useState('dashboard');

  // 메뉴별 콘텐츠 렌더링
  const renderContent = () => {
    switch (activeMenu) {
      case 'dashboard':
        return <AdminDashboard />;
      case 'products':
        return <AdminProductList />;
      case 'inquiries':
        return <div className="p-8 text-gray-700">문의관리 페이지 (추후 구현)</div>;
      case 'users':
        return <div className="p-8 text-gray-700">회원관리 페이지 (추후 구현)</div>;
      case 'settings':
        return <div className="p-8 text-gray-700">설정 페이지 (추후 구현)</div>;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* 사이드바 */}
      <AdminSidebar active={activeMenu} onMenuClick={setActiveMenu} />
      {/* 메인 영역 */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* 헤더 */}
        <AdminHeader />
        {/* 콘텐츠 */}
        <main className="flex-1 bg-gray-50">{renderContent()}</main>
      </div>
    </div>
  );
};

export default AdminLayout; 