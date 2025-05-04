// chatbot.js
// 챗봇 UI와 간단한 메시지 전송 기능 구현 (초보자용 예시)
document.addEventListener('DOMContentLoaded', function() {
  // 챗봇이 표시될 div를 찾습니다
  const chatbotDiv = document.getElementById('chatbot');
  // 챗봇 UI HTML을 동적으로 삽입합니다
  chatbotDiv.innerHTML = `
    <div id="chat-window" style="border:1px solid #ccc; padding:10px; width:300px;">
      <div id="messages" style="height:150px; overflow-y:auto; margin-bottom:10px;"></div>
      <input id="user-input" type="text" placeholder="메시지를 입력하세요" style="width:80%;">
      <button id="send-btn">전송</button>
    </div>
  `;
  // 메시지 표시 영역, 입력창, 버튼을 변수로 저장합니다
  const messages = document.getElementById('messages');
  const input = document.getElementById('user-input');
  const sendBtn = document.getElementById('send-btn');

  // 전송 버튼 클릭 시 동작
  sendBtn.onclick = function() {
    const text = input.value.trim();
    if (text) {
      // 사용자가 입력한 메시지를 화면에 추가
      messages.innerHTML += `<div>👤 ${text}</div>`;
      // 실제 챗봇 API와 연동하면 여기서 응답을 받을 수 있습니다
      messages.innerHTML += `<div>🤖 (챗봇 응답 예시)</div>`;
      input.value = '';
      messages.scrollTop = messages.scrollHeight;
    }
  };
}); 