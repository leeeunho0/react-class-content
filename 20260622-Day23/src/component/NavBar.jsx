// NavBar.jsx

import React from "react";

// HTML이였다면 5개 파일이 메뉴바를 쓰면 모든 파일에 코드를 복붙했어야 된다.
// 근데 리액트라는 애는! NavBar 태그를 하나 새로 만든다.
// 이게 리액트가 나오게 된 이유!
export default function NavBar() {
  return (
    <nav>
      <a href="index.html">홈</a>
      <a href="menu.html">메뉴</a>
      <a href="location.html">오시는 길</a>
      <a href="login.html">로그인</a>
    </nav>
  );
}