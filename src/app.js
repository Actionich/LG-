// 앱의 루트 컴포넌트 역할을 하는 app.js 파일입니다.
// LGLifecareServiceSite.jsx(서비스 소개/메인페이지)를 import하여 내보냅니다.
import React from 'react';
import LGLifecareServiceSite from './LGLifecareServiceSite.jsx'; // 서비스 메인페이지 import

// App 컴포넌트: 전체 서비스 사이트를 렌더링합니다.
function App() {
  // 앱 시작 시 LGLifecareServiceSite를 보여줍니다.
  return <LGLifecareServiceSite />;
}

export default App; 