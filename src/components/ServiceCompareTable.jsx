// LifeCare vs LifeCareFrame 비교표 컴포넌트(더미)
import React from 'react';

// 서비스 비교표 섹션
export default function ServiceCompareTable() {
  return (
    <section className="py-10 text-center bg-white">
      <h2 className="text-xl font-semibold mb-4">서비스 비교표</h2>
      <table className="mx-auto border">
        <thead>
          <tr>
            <th className="border px-4 py-2">항목</th>
            <th className="border px-4 py-2">LifeCare</th>
            <th className="border px-4 py-2">타사</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">AX 기반 자동화</td>
            <td className="border px-4 py-2">O</td>
            <td className="border px-4 py-2">X</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">맞춤형 추천</td>
            <td className="border px-4 py-2">O</td>
            <td className="border px-4 py-2">△</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
} 