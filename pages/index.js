// Next.js의 메인 페이지 파일입니다. 이 파일이 있어야 홈페이지가 정상적으로 출력됩니다.
// src 폴더에 있는 LGLifecareServiceSite 컴포넌트를 불러와서 화면에 렌더링합니다.
import LGLifecareServiceSite from '../src/LGLifecareServiceSite';

// 홈페이지의 메인 컴포넌트를 렌더링합니다.
export default function Home() {
  return <LGLifecareServiceSite />;
} 