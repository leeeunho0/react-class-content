import React, { useState } from 'react';

export default function DateTest() {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <div>
      <h2>Date Test</h2>
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      <h3>선택한 날짜: {selectedDate || '없음'}</h3>
    </div>
  );
}

// src안에 새로운 폴더 만들기
// 새로운폴더명 test 하고 그안에 src폴더에 있는 DateTest, Hobbies,
// RadioButtonTest, SelectBoxTest.jsx 파일을 이동시켜줘.