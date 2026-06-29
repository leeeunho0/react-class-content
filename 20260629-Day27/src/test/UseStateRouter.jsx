// UseStateRouter.jsx

import React, { useState } from "react";

export default function UseStateRouter() {
  // 현재 페이지를 저장
  // 새로운 리액트 파일을 만들면 자꾸 우리 main 수정하기 힘들다.
  // 그래서 한 페이지에서 useState 현재 페이지를 기억한다.
  let [page, setPage] = useState("home");
  

  return (
    <div>
      <h2>하나의 페이지에서 여러 페이지를 볼 수있다.</h2>
      <p>메뉴를 하나 만들어서 클릭을 하면 페이지 전환!</p>

      <nav>
        <button onClick={()=>{
          setPage("home")
        }}>홈</button>
        <button onClick={()=>{
          setPage("notice")
        }}>공지사항</button>
        <button onClick={()=>{
          setPage("gallery")
        }}>갤러리</button>
        <button onClick={()=>{
          setPage("contact")
        }}>문의하기</button>
      </nav>
      <br />
      <hr />

      {/* page가 "home" h3 홈 화면입니다. */}

      {page == "home" && <h3>🏠 홈 화면입니다.</h3>}
      {page == "notice" && <h3>📢 공지사항입니다.</h3>}
      {page == "gallery" && <h3>🖼️ 갤러리입니다.</h3>}
      {page == "contact" && <h3>📞 문의하기 화면입니다.</h3>}
    </div>
  );
}