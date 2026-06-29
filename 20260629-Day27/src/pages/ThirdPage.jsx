// ThirdPage.jsx

import React from 'react';

export default function ThirdPage({변수공유}) {
  return (
    <div className="first-box">
        <h2>3단계</h2>
        <p>주문하시겠습니까?</p>
        <button onClick={()=>{
          alert("주문완료!")
        }}>결제하기</button>
        <button onClick={()=>{
          변수공유("first");
        }}>처음으로</button>
      </div>
  );
}
