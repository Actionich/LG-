// 상품 관련 API 함수 모음
// 실제 서비스에서는 백엔드 API 엔드포인트로 교체 필요

// 상품 목록 조회 (예시: JSONPlaceholder posts API 사용)
export async function getProducts() {
  // 실제로는 '/api/products' 등으로 교체
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  if (!res.ok) throw new Error('상품 목록을 불러오지 못했습니다.');
  // posts API를 상품 데이터처럼 변환
  const data = await res.json();
  return data.map(item => ({
    id: item.id,
    name: item.title,
    price: 10000 + item.id * 1000, // 예시 가격
    description: item.body,
    image: '/images/product_placeholder.png',
  }));
} 