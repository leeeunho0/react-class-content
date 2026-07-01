// SelectObjectTest.jsx
// url = /select
// SelectObjectTest.jsx 보여줘 App 경로 설정

import React, { useState } from 'react';

export default function SelectObjectTest() {
  // 고정된 값들을 저장할 때는 자바스크립트의 일반 변수를 사용하면 된다.
  let 카테고리 = {
    전자제품 : "컴퓨터",
    과일 : "사과",
    가구 : "의자",
  };

  // 리액트에서 선택한 값을 기억하는 변수
  let [선택한카테고리, set선택한카테고리] = useState("");

  return (
    <div>
      <h2>select박스 선택시 카테고리 가져오기</h2>
      <h2>드롭다운(select 태그)</h2>

<br /><br />
<hr />

      <select onChange={(e)=>{
        set선택한카테고리(e.target.value)
      }}>
        <option value="전자제품">전자제품</option>
        <option value="과일">과일</option>
        <option value="가구">가구</option>
      </select>

      <h3>선택한 상품 : {카테고리[선택한카테고리]}</h3>
      <h3>선택한 상품 카테고리: {선택한카테고리}</h3>
    </div>
  );
}
