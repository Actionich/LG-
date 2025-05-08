import React, { useState } from 'react';
import { X } from 'lucide-react';

// 회원가입/로그인 모달 컴포넌트
const AuthModal = ({ isOpen, onClose }) => {
  // 탭 상태: 'login' 또는 'register'
  const [tab, setTab] = useState('login');
  // 폼 입력값 상태 관리
  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '', // 회원가입 시만 사용
  });
  // 에러 메시지 상태
  const [error, setError] = useState('');

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // 폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    // 간단한 유효성 검사
    if (!form.email || !form.password || (tab === 'register' && !form.name)) {
      setError('모든 필드를 입력해 주세요.');
      return;
    }
    // 이메일 형식 검사
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setError('올바른 이메일 형식을 입력해 주세요.');
      return;
    }
    // 비밀번호 길이 검사
    if (form.password.length < 6) {
      setError('비밀번호는 6자 이상이어야 합니다.');
      return;
    }
    // TODO: 실제 로그인/회원가입 API 연동
    alert(tab === 'login' ? '로그인 성공(예시)' : '회원가입 성공(예시)');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-300/60 via-white/60 to-purple-100/80 backdrop-blur-[2px] z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto border-2 border-purple-100 ring-2 ring-purple-200">
        {/* 모달 헤더 */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-white/60 rounded-t-3xl">
          <div className="flex space-x-4">
            <button
              className={`text-lg font-bold px-2 py-1 rounded-xl transition-colors ${tab === 'login' ? 'text-purple-700 bg-purple-100' : 'text-gray-500 hover:text-purple-700'}`}
              onClick={() => setTab('login')}
            >
              로그인
            </button>
            <button
              className={`text-lg font-bold px-2 py-1 rounded-xl transition-colors ${tab === 'register' ? 'text-purple-700 bg-purple-100' : 'text-gray-500 hover:text-purple-700'}`}
              onClick={() => setTab('register')}
            >
              회원가입
            </button>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-purple-700 transition-colors focus:ring-2 focus:ring-purple-200 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>
        {/* 모달 본문 */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {tab === 'register' && (
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-semibold text-gray-800">이름</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="px-4 py-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-400 outline-none bg-white/80 shadow-inner placeholder-gray-400 transition-all"
                placeholder="이름을 입력하세요"
                autoComplete="off"
              />
            </div>
          )}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-semibold text-gray-800">이메일</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="px-4 py-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-400 outline-none bg-white/80 shadow-inner placeholder-gray-400 transition-all"
              placeholder="이메일을 입력하세요"
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="font-semibold text-gray-800">비밀번호</label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="px-4 py-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-400 outline-none bg-white/80 shadow-inner placeholder-gray-400 transition-all"
              placeholder="비밀번호를 입력하세요 (6자 이상)"
              autoComplete="off"
            />
          </div>
          {/* 에러 메시지 */}
          {error && <div className="text-red-500 text-sm font-semibold text-center">{error}</div>}
          {/* 제출 버튼 */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-700 via-purple-500 to-purple-400 text-white font-bold text-lg px-8 py-3 rounded-2xl shadow-xl hover:scale-105 hover:from-purple-800 hover:to-purple-500 transition-all focus:ring-4 focus:ring-purple-200"
            >
              {tab === 'login' ? '로그인' : '회원가입'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthModal; 