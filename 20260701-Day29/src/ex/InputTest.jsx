// InputTest.jsx
// url = /test

import React, { useState } from 'react';

export default function InputTest() {

  let 음식목록 = [
  "김치찌개",
  "된장찌개",
  "비빔밥",
  "라면",
  "짜장면",
  "짬뽕",
];

  let [검색어, set검색어] = useState("");
// 1.입력창에 된장찌개를 입력하면 음식목록에 있다! 없으면 음식목록에 없다!

// 2.입력창에 짜장 -> 짜장면 보이기
//           면  -> 짜장면, 라면 보이기
//          찌개 -> 김치찌개, 된장찌개 보이기

// 3. 화면에 보일려면 App.jsx에 경로 설정하기
  return (
    <div>
      <h2>🍴음식 검색</h2>

      <h3>배열검색</h3>
      <input type="text" placeholder='음식검색...'
             onChange={(e)=>{
              set검색어(e.target.value);
             }}/>
      <h3>입력한 검색어: {검색어}</h3>
      {/* 음식목록 있는지 확인 */}
      <h3>음식목록 {음식목록.includes(검색어) ? "있습니다." : "없습니다."}</h3>

      <hr />
      <h3>검색 결과</h3>
      {
        음식목록.map((음식)=>{
          return 음식.includes(검색어) ? (<p>{음식}</p>) : ("");
        })
      }
    </div>
  );
}
