// Exam.jsx
// url /exam

import React, { useState } from 'react';

export default function Exam() {
  let 과일사전 = {
    봄: ["딸기", "체리"],
    여름: ["수박", "복숭아"],
    가을: ["감", "사과"],
  };
  let [선택계절, set선택계절] = useState("");
  return (
    <div>
      <select onChange={(e) => set선택계절(e.target.value)}>
        <option value="">계절 선택</option>
        <option value="봄">봄</option>
        <option value="여름">여름</option>
        <option value="가을">가을</option>
      </select>

      {선택계절 ? (
        <div>
          <p>{과일사전[선택계절][0]}</p>
          <p>{과일사전[선택계절][1]}</p>
        </div>
      ) : (
        <p>계절을 선택하세요</p>
      )}
    </div>
  );
}
