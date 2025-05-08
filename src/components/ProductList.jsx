import React from 'react';
import ProductCard from './ProductCard';

// 더미 상품 데이터 (실제 서비스에서는 API로 대체)
const dummyProducts = [
  {
    id: 1,
    image: '/images/product1.png',
    name: 'LG 퓨리케어 공기청정기',
    price: 399000,
    tags: ['가전', '공기청정', 'LG']
  },
  {
    id: 2,
    image: '/images/product2.png',
    name: 'LG 코드제로 무선청소기',
    price: 599000,
    tags: ['가전', '청소기', 'LG']
  },
  {
    id: 3,
    image: '/images/product3.png',
    name: 'LG 그램 노트북',
    price: 1599000,
    tags: ['노트북', '그램', 'LG']
  },
  {
    id: 4,
    image: '/images/product4.png',
    name: 'LG 오브제 냉장고',
    price: 2499000,
    tags: ['가전', '냉장고', '프리미엄']
  },
  {
    id: 5,
    image: '/images/product5.png',
    name: 'LG 스타일러',
    price: 1299000,
    tags: ['가전', '의류관리', '스타일러']
  },
  {
    id: 6,
    image: '/images/product6.png',
    name: 'LG 울트라HD TV',
    price: 990000,
    tags: ['가전', 'TV', '울트라HD']
  },
];

// 상품 리스트 컴포넌트
const ProductList = () => {
  return (
    <section id="products" className="py-14 md:py-20 bg-gradient-to-br from-purple-50 via-white to-purple-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-purple-700">복지몰 인기 상품</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            LG 계열사 프리미엄 상품을 복지몰에서 특별한 혜택으로 만나보세요.
          </p>
        </div>
        {/* 상품 카드 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {dummyProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList; 