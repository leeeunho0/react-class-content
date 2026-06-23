// App4.jsx
import React from 'react';

// 리액트가 편하게 {변수명}
export default function App4() {
  let name = "eryna";
  let age = 20;

  // 배열(리스트)
  // 여러개의 값을 한번에 저장하는 공간이다!
  // 순서대로 저장을 할 때
  let list =[1, 2, 3, 4, 5];

  // 객체 타입
  // key이용해서 value를 꺼내기
  // 순서 상관없이 여러개의 값을 저장하고 싶으면 객체!
  let info ={
    name: "이은호",
    job: "fullstack 개발자",

  };

  // 프론트엔드 및 자바스크립트에서 여러개의 데이터를 순서대로 가지고 와서 쉽게 꺼내는 방법! 
  // 배열 + 객체 타입을 섞어서 많이 쓴다.!
  let product = [
  {
    productName : "갤럭시 s26",
    price : 1200000,
    color : "그레이",
  },
  {
    productName : "갤럭시 S26 기본",
    price : 1200000,
    color: "하얀색"
  },
  {
    productName : "아이폰 17 pro",
    price : 2000000,
    color: "검은색"
  },
  ];

  // for
  for(product of products){
    // 개발자가 보는 창에서 (콘솔에서) 보는건 가능
    // 실제 태그를 넣어서 만들지는 못한다.
   console.log();
  }

  return (
    <div>
      <h2>반복문을 이용해서 HTML태그에 넣기</h2>


      <br /><br /><br />
      <hr />

      <h3>배열 + 객체 HTML 태그에 넣기</h3>
      <h4>물품명: {product[0].productName}</h4>
      <p>가격: {product[0].price}</p>
      <p>색상: {product[0].color}</p>

      <br /><br /><br />
      <hr />

      <h3>객체 HTML태그에 넣기</h3>
      <p>이름: {info.name}</p>
      <p>직업: {info.job}</p>

      <br /><br /><br />
      <hr />

      <h3>배열 HTML태그에 넣기</h3>
      <p>첫번째 공간 : {list[0]}</p>
      <p>두번째 공간 : {list[1]}</p>
      <p>세번째 공간 : {list[2]}</p>

      <br /><br /><br />
      <hr />

      <h2>각 타입을 HTML태그에 넣기</h2>
      <h3>이름: {name}</h3>
      <p>나이: {age}</p>
    </div>
  );
}
