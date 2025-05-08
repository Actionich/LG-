import React, { useEffect, useState } from 'react';
import { getProducts } from '../api/productApi';

// 관리자 상품 목록 컴포넌트
const AdminProductList = () => {
  // 상태: 로딩, 에러, 데이터
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [products, setProducts] = useState([]);

  // 컴포넌트 마운트 시 상품 목록 API 호출
  useEffect(() => {
    setLoading(true);
    getProducts()
      .then(data => {
        setProducts(data);
        setError('');
      })
      .catch(err => {
        setError(err.message || '에러 발생');
        setProducts([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-8 text-gray-900">상품관리</h2>
      {/* 로딩 상태 */}
      {loading && <div className="text-purple-700 font-semibold">상품 목록을 불러오는 중...</div>}
      {/* 에러 메시지 */}
      {error && !loading && <div className="text-red-500 font-semibold mb-4">{error}</div>}
      {/* 상품 테이블 */}
      {!loading && !error && (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-2xl shadow-lg">
            <thead>
              <tr className="bg-purple-100 text-purple-700">
                <th className="px-6 py-3 text-left font-bold">이미지</th>
                <th className="px-6 py-3 text-left font-bold">상품명</th>
                <th className="px-6 py-3 text-left font-bold">가격</th>
                <th className="px-6 py-3 text-left font-bold">설명</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id} className="border-b hover:bg-purple-50 transition-colors">
                  <td className="px-6 py-3">
                    <img src={product.image} alt={product.name} className="w-16 h-16 object-contain rounded-xl bg-purple-50 border" />
                  </td>
                  <td className="px-6 py-3 font-semibold text-gray-900">{product.name}</td>
                  <td className="px-6 py-3 text-purple-700 font-bold">{product.price.toLocaleString()}원</td>
                  <td className="px-6 py-3 text-gray-600 max-w-xs truncate">{product.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminProductList; 