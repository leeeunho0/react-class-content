// App5.jsx

import React from 'react';

function 숫자출력(숫자){
  return <h3>{숫자}</h3>;
}
// map함수가 자동으로 배열의 값들을 하나씩 이름 변수에 넣어준다.
function 이름출력(이름){
  return <h3>{이름}</h3>;
}
// map 기능
// 함수명만 작성하면 변수에 자동으로 값들을 넣어준다.

function 물건들출력(물건){
  console.log(물건);
  return (
  <div>
    <h3>물건명: {물건.productName}</h3>
    <p>물건 가격: {물건.price}</p>
    <p>색상: {물건.color}</p>
  </div>
  );
}

export default function App5() {
// 숫자로 배열
let numbers = [1, 2, 3, 4, 5, 6];
// 문자로 배열
let names = ["에리나", "알렉스", "덱스", "밥", "그레이스"];

// 배열과 객체를 한꺼번에 가지고 있는 타입
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

  return (
    <div>
      <h2>map()</h2>
      <p>배열에서만 사용가능하다.</p>
      <p>배열을 반복하면서 HTML태그를 만드는 기능!</p>
      <p>return () 안쪽에는 HTML태그들만 들어갈 수 있다</p>
      <br />
      {
        product.map(물건들출력)
      }

      <br />
      <hr />
      
      
      <br />
      {
        // 배열을 반복하면서 태그를 만들기
        // 리액트에서 태그를 만드는건 함수가 한다.
        names.map(이름출력)
      }


      <br />
      <hr />

      {
        // 자바스크립트를 사용하고 싶으면 { 안에 작성 }
        // 세미콜론은 붙이지 않는다.
        numbers.map(숫자출력)
      }

    <h3>숫자 배열 이용해서 HTML태그에 넣기</h3>
    </div>
  );
}
