import React from 'react';

// 상품 카드 컴포넌트
// props: { image, name, price, tags }
const ProductCard = ({ image, name, price, tags }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center text-center hover:shadow-2xl transition-shadow group">
      {/* 상품 이미지 */}
      <div className="w-32 h-32 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="object-contain w-full h-full group-hover:scale-105 transition-transform"
          onError={e => {e.target.onerror=null; e.target.src='/images/product_placeholder.png';}}
        />
      </div>
      {/* 상품명 */}
      <div className="font-bold text-lg mb-2 text-gray-900 truncate w-full" title={name}>{name}</div>
      {/* 가격 */}
      <div className="text-purple-700 font-extrabold text-xl mb-2">{price.toLocaleString()}원</div>
      {/* 태그 */}
      <div className="flex flex-wrap gap-2 justify-center mb-4">
        {tags && tags.map((tag, idx) => (
          <span key={idx} className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full">#{tag}</span>
        ))}
      </div>
      {/* 장바구니/구매 버튼 */}
      <button className="mt-auto bg-gradient-to-r from-purple-700 via-purple-500 to-purple-400 text-white font-bold px-6 py-2 rounded-xl shadow-md hover:scale-105 hover:from-purple-800 hover:to-purple-500 transition-all focus:ring-2 focus:ring-purple-200">
        장바구니 담기
      </button>
    </div>
  );
};

export default ProductCard; 