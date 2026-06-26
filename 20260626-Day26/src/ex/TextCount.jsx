// TextCount.jsx

import React, { useState } from 'react'

// 입력창에 값을 입력할 때 글자수를 세는 
// 예제

export default function TextCount() {

  // 글자의 새수를 저장해야되니깐
  let [text, setText] = useState("");

  return (
    <div>
      <h2>글자수 세기</h2>
      <input type="text"
             onChange={(이벤트정보)=>{
              setText(이벤트정보.target.value);
              console.log("이벤트발생");
             }} />

      <h3>글자수 : {text.length}</h3>
      <p>글자수가 4자 미만이면 "4자 이상이면 입력하세요"</p>
      <p>글자수가 4자 이상이면 "정상"</p>
      <p>비교 연산자(기호) - 비교해서 결과를 맞다true, 틀리다false</p>
      <h3>{text.length >= 4 ? "정상":"4자 이상이면 입력하세요"}</h3>
    </div>
  )
}
