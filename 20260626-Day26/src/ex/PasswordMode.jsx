// PasswordMode.jsx

import React, { useState } from 'react'

// 로그인, 회원가입할 때 비밀번호 보이기/안 보이기
// 웹이 보이기/안보이기 하느냐 그걸 기억을 해야된다.
// 화면에 보여줘야 된다.

export default function PasswordMode() {
// 비밀번호 입력은 기본적으로 false 되어있다.
  let [show, setShow] = useState(false);

  return (
    <div>
      <h2>비밀번호 보이기 / 안보이기 예제</h2>
      <h3>{show ? "👀 보기" : "🙈 숨기기"}</h3>

      <input type={show ? "text":"password"} />

      {/* 버튼을 클릭하면 숨기기/보이기 왔다 갔다 할 수 있도록 */}
      <button onClick={()=>{
        setShow(!show);
      }}>비밀번호</button>
    </div>
  )
}

/**
순수 자바스크립트 언어
let 비밀번호H3태그 = document.getElementById("비밀번호H3태그");
let 비밀번호입력창 = document.getElementById("비밀번호입력창"); 
 if (비밀번호H3태그.innerText == "보기") {
        비밀번호H3태그.innerText = "숨기기";
        비밀번호입력창.type = "password";
 } else {
    비밀번호H3태그.innerText = "보기";
  }

 */