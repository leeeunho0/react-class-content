// Drink.jsx
//  - 반복되는 HTML태그들을 리액트의 기능을 이용해서 새로운 태그를 만들어서 쓸 수 있다.
// 리액트는 자바스크립트 안에서 HTML을 사용할 수 있다.

import React from 'react';

// 함수명이랑 파일명이 똑같아야 된다!
// 리액트는 웹 사이트를 쉽게 만들 수있는 도구!

/*
  [프로필]
  [게시글(이미지)]
  [좋아요 버튼]
  [댓글]

  계속 반복으로 작성된다.
  리액트의 장점은 한번 만들어놓고 여러번
  사용할 수있다.

*/

export default function Drink() {
  return (
    <div className="drink-menus">
      <img src="https://www.ediya.com/files/menu/IMG_1780021002320.png" alt="1" />
      <p>블루베리</p>
      <button>선물하기</button>
    </div>
  );
}
