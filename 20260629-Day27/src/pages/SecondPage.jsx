// SecondPage.jsx

import React from 'react';

export default function SecondPage({변수공유}) {
  return (
    <div className="first-box">
        <h2>2단계</h2>
        <p>콜라 고르기</p>
        <button onClick={()=>{
          // 공유받은 변수에 third로 값을 변경하고 페이지를 보여줘!
          변수공유("third");
        }}>다음</button>
      </div>
  );
}
