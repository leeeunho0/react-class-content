// Post.jsx
// component를 만드는 이유는 반복되는 HTML코드를 새로운 태그로
// 만들어서 각각 다른 내용들로 재사용!
// 리액트의 장점이다! props 기능
// 게시글의 한건!
// 회원정보 한건!
// 물건정보 한건!
// 컴포넌트를 만드는 내용! 한건! 한개!
import React from "react";

export default function ({ category, date, title, content }) {
  return (
    <div className="content">
      <div className="content-info">
        <p>{category}</p>
        <p>{date}</p>

        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}