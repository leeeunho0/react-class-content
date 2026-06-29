// FirstPage.jsx
import React from 'react';

export default function FirstPage({변수공유}) {

  // 페이지가 안 바뀌는 이유는 키오스크 파일에서 useState 저장공간을 공유시켜야된다.
  // 키오스크야, useState 공간좀 줄래?

  return (
    <div className="first-box">
        <h2>1단계</h2>
        <p>햄버거 고르기</p>
        <button onClick={()=>{
          변수공유("second");
        }}>다음</button>
      </div>
  );
}
