// FoodPage.jsx 
// 페이지를 만들때도 리액트 파일이기때문에
// jsx 확장자를 사용한다.

import React from 'react';
import "./App.css";
import NavBar from './component/NavBar';

export default function FoodPage() {
// main 에게 태그를 전달! 그래야 main index.html 파일에 끼워준다. 
// 조건! 한번에 묶어서!
// 쿠팡 신발 따로 휴대폰 팩스 불고기
// 불고기랑 파랑 마늘이랑

  return (
      <>
    {/* 메뉴바 필요하다! */}
      <NavBar />
    <div className="food-menus">
      <img src="https://www.ediya.com/files/menu/IMG_1781506976892.png" alt="1" />
      <p>초코 티라미수 케이크</p>
    </div>
      </>
  )
}