// 앱의 루트 컴포넌트 역할을 하는 app.js 파일입니다.
// MainPage.jsx(모바일 반응형 메인페이지)를 import하여 내보냅니다.
import React from 'react';
import MainPage from './pages/MainPage'; // 메인페이지(모바일 최적화) import

// App 컴포넌트: 전체 서비스 사이트를 렌더링합니다.
function App() {
  // 앱 시작 시 MainPage를 보여줍니다.
  return <MainPage />;
}

export default App; 