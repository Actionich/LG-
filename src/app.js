// 앱의 루트 컴포넌트 역할을 하는 app.js 파일입니다.
// LGLifecareServiceSite.jsx(서비스 소개/메인페이지)를 import하여 내보냅니다.
import React from 'react';
import LGLifecareServiceSite from './LGLifecareServiceSite.jsx'; // 서비스 메인페이지 import
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // 라우팅을 위한 컴포넌트 import
import AXInnovationDetail from './AXInnovationDetail.jsx'; // AX Innovation 상세페이지 import

// App 컴포넌트: 전체 서비스 사이트를 렌더링합니다.
function App() {
  // 라우팅 구조: 메인과 AX Innovation 상세페이지
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LGLifecareServiceSite />} />
        <Route path="/ax-innovation" element={<AXInnovationDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 