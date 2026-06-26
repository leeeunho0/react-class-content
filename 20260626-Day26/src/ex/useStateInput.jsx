// UseStateInput.jsx

import React, { useState } from "react";

export default function UseStateInput() {

  let [name, setName] = useState("");
  return (
  <div>
    <h2>입력창에 입력을 하면 저장</h2>
    <h3>첫번째 input 저장</h3>
    <p>검색어, 아이디, 이메일 등등등</p>
    
    <h4>방금 일어난 일(이벤트)</h4>
    <p>고객이 키보드로 입력했다. 라는 정보를 가지고 있다.</p>
    <p>이벤트 객체 - 누가 입력했는지? 무엇을 입력했는지? 알려줄게!</p>
    <p>브라우저가 방금 일어날 일에 대한 정보를 묶어서 보낸다.
      그때 event변수명 자동으로 넣어준다{""}
    </p>

    <input 
    type="text" 
    onChange={(이벤트정보)=>{
      console.log(이벤트정보.target.value);
      setName(이벤트정보.target.value);
    }} />

    <p>현재 입력값 이름은: {name}</p>


  </div>
  );
}

/* 
우리는 그 정보 중 target(이벤트가 발생한 입력창)과
value(입력한 글자)를 가장 많이 사용한다.
*/