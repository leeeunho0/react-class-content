// SelectArray.jsx
// url /array 치면 SelectArray 화면 보여줘!

import React, { useState } from 'react';

export default function SelectArray() {

  let 강의목록 = ["HTML", "CSS", "JS", "React"];
  
  let [선택한과목, set선택한과목] = useState("");

  return (
    <div>
      <select onChange={(e)=>{
        set선택한과목(e.target.value);
      }}>
        <option value="0">첫번째과목</option>
        <option value="1">두번째과목</option>
        <option value="2">세번째과목</option>
        <option value="3">네번째과목</option>
      </select>

      <h3>선택한 과일 : {강의목록[선택한과목]}</h3>
    </div>
  );
}
/*
① 사용자가 "두번째과목" 선택
           │
           ▼
② onChange 이벤트 실행
           │
           ▼
③ 이벤트정보.target.value
   ↓
   "1"
           │
           ▼
④ set선택한과목("1")
           │
           ▼
⑤ useState 값 변경
   선택한과목 = "1"
           │
           ▼
⑥ React가 컴포넌트를 다시 실행(렌더링)
           │
           ▼
⑦ 강의목록[선택한과목]
   ↓
   강의목록["1"]
   ↓
   "CSS"
           │
           ▼
⑧ 화면에 출력

선택한 과목 : CSS

*/