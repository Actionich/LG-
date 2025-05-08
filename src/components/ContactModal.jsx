import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

// 서비스 도입 문의 모달 컴포넌트
const ContactModal = ({ isOpen, onClose }) => {
  // 폼 상태 관리
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    position: '',
    message: '',
    companySize: '',
    industry: '',
    currentWelfare: '',
    budget: '',
    timeline: ''
  });

  // 포커스 트랩을 위한 ref
  const modalRef = useRef(null);

  // ESC 키로 모달 닫기
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      // Tab 키 포커스 트랩
      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey ? document.activeElement === first : document.activeElement === last) {
          e.preventDefault();
          (e.shiftKey ? last : first).focus();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // 폼 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 폼 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // TODO: API 연동
      console.log('Form submitted:', formData);
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gradient-to-br from-purple-300/60 via-white/60 to-purple-100/80 backdrop-blur-[2px] z-50 flex items-center justify-center p-4 animate-fadeIn"
      aria-modal="true"
      role="dialog"
      aria-label="서비스 도입 문의 모달"
    >
      <div
        className="bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border-2 border-purple-100 ring-2 ring-purple-200 focus:outline-none"
        ref={modalRef}
        tabIndex={-1}
      >
        {/* 모달 헤더 */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-white/60 rounded-t-3xl">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight" id="contact-modal-title">서비스 도입 문의</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-purple-700 transition-colors focus:ring-2 focus:ring-purple-200 rounded-full" aria-label="모달 닫기">
            <X className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        {/* 모달 본문 */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6" aria-labelledby="contact-modal-title">
          {/* 기본 정보 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-semibold text-gray-800">이름</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="px-4 py-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-400 outline-none bg-white/80 shadow-inner placeholder-gray-400 transition-all focus-visible:ring-4"
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-semibold text-gray-800">이메일</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="px-4 py-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-400 outline-none bg-white/80 shadow-inner placeholder-gray-400 transition-all focus-visible:ring-4"
                autoComplete="off"
              />
            </div>
          </div>

          {/* 회사 정보 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="font-semibold text-gray-800">회사명</label>
              <input
                id="company"
                name="company"
                type="text"
                required
                value={formData.company}
                onChange={handleChange}
                className="px-4 py-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-400 outline-none bg-white/80 shadow-inner placeholder-gray-400 transition-all focus-visible:ring-4"
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="companySize" className="font-semibold text-gray-800">회사 규모</label>
              <select
                id="companySize"
                name="companySize"
                required
                value={formData.companySize}
                onChange={handleChange}
                className="px-4 py-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-400 outline-none bg-white/80 shadow-inner transition-all focus-visible:ring-4"
                aria-label="회사 규모 선택"
              >
                <option value="">선택하세요</option>
                <option value="1-50">1-50명</option>
                <option value="51-200">51-200명</option>
                <option value="201-500">201-500명</option>
                <option value="501-1000">501-1000명</option>
                <option value="1000+">1000명 이상</option>
              </select>
            </div>
          </div>

          {/* 산업 및 복지 현황 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="industry" className="font-semibold text-gray-800">산업 분야</label>
              <select
                id="industry"
                name="industry"
                required
                value={formData.industry}
                onChange={handleChange}
                className="px-4 py-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-400 outline-none bg-white/80 shadow-inner transition-all focus-visible:ring-4"
                aria-label="산업 분야 선택"
              >
                <option value="">선택하세요</option>
                <option value="manufacturing">제조업</option>
                <option value="it">IT/소프트웨어</option>
                <option value="finance">금융/보험</option>
                <option value="retail">유통/서비스</option>
                <option value="other">기타</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="currentWelfare" className="font-semibold text-gray-800">현재 복지 현황</label>
              <select
                id="currentWelfare"
                name="currentWelfare"
                required
                value={formData.currentWelfare}
                onChange={handleChange}
                className="px-4 py-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-400 outline-none bg-white/80 shadow-inner transition-all focus-visible:ring-4"
                aria-label="현재 복지 현황 선택"
              >
                <option value="">선택하세요</option>
                <option value="none">복지 제도 없음</option>
                <option value="basic">기본 복리후생</option>
                <option value="welfare">복지몰 운영 중</option>
                <option value="comprehensive">종합 복지 제도</option>
              </select>
            </div>
          </div>

          {/* 예산 및 일정 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="budget" className="font-semibold text-gray-800">예상 예산</label>
              <select
                id="budget"
                name="budget"
                required
                value={formData.budget}
                onChange={handleChange}
                className="px-4 py-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-400 outline-none bg-white/80 shadow-inner transition-all focus-visible:ring-4"
                aria-label="예상 예산 선택"
              >
                <option value="">선택하세요</option>
                <option value="under1m">1천만원 미만</option>
                <option value="1m-5m">1천만원-5천만원</option>
                <option value="5m-10m">5천만원-1억원</option>
                <option value="over10m">1억원 이상</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="timeline" className="font-semibold text-gray-800">도입 희망 시기</label>
              <select
                id="timeline"
                name="timeline"
                required
                value={formData.timeline}
                onChange={handleChange}
                className="px-4 py-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-400 outline-none bg-white/80 shadow-inner transition-all focus-visible:ring-4"
                aria-label="도입 희망 시기 선택"
              >
                <option value="">선택하세요</option>
                <option value="asap">즉시</option>
                <option value="1-3months">1-3개월 이내</option>
                <option value="3-6months">3-6개월 이내</option>
                <option value="6-12months">6-12개월 이내</option>
              </select>
            </div>
          </div>

          {/* 문의 내용 */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-semibold text-gray-800">추가 문의사항</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="px-4 py-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-400 outline-none resize-none bg-white/80 shadow-inner placeholder-gray-400 transition-all focus-visible:ring-4"
              placeholder="추가로 문의하실 내용이 있다면 작성해 주세요."
              aria-label="추가 문의사항 입력"
            />
          </div>

          {/* 제출 버튼 */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-700 via-purple-500 to-purple-400 text-white font-bold text-lg px-8 py-3 rounded-2xl shadow-xl hover:scale-105 hover:from-purple-800 hover:to-purple-500 transition-all focus:ring-4 focus:ring-purple-200 focus-visible:outline-none"
              aria-label="문의 제출"
            >
              문의하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal; 