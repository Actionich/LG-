// React 앱의 진입점 역할을 하는 index.js 파일입니다.
// App 컴포넌트를 불러와서 브라우저에 렌더링합니다.
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css';

// React 18 이상에서는 createRoot를 사용합니다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 