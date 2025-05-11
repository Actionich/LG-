import '../styles/globals.css';

// Next.js 앱의 모든 페이지에 공통으로 적용되는 컴포넌트입니다.
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
