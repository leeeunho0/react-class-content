// UseStateTest.jsx
// 리액트에서 변수를 기억하는 방법!
// 자바스크립트 안에  HTML이 들어가버리니
// 저장하는 변수도 바뀐다.

// let 변수명 = "어쩌구!";
// 리액트에서는 변수 말고! state를 만들어서 데이터를 저장할 수 있다.

import React, { useState } from 'react';

export default function UseStateTest() {

  // 항상 변수들은 맨 위에 작성! 실무의 팁!
  // let [변수명, 변경함수] = useState("보관할자료");
  let [숫자, set숫자] = useState(0);
  let [문자, set문자] = useState("하하하");
  // 첫번째 변수는 현재 값!
  // 두번째는 값을 바꾸는 함수
  //   - 기존의 값을 바꾸고 화면에 자동으로 다시 그려준다.
  //   - 기존의 값을 바꾸고 화면에 적용한다.

  let [배열, set배열] = useState([10, 20, 30]);
  let [객체, set객체] = useState({
    name : "eryna",
    age: 20,
  });

  return (
    <div>
      <h3>useState에 저장한 값 꺼내기</h3>
      <p>{객체.name}</p>
      <p>{객체.age}</p>
      <button onClick={()=>{
        set객체({
          name : "알렉스",
          age: 30,

        })
      }}>객체 바꾸기</button>
      <hr />
      <br />
      <h3>useState에 저장한 값 꺼내기</h3>
      <p>{배열[0]}</p>
      <p>{배열[1]}</p>
      <p>{배열[2]}</p>
      <button onClick={()=>{
        // ()=>{}
        // function 키워드 안쓴다.
        // 함수명도 필요없다.
        // 버튼이 눌렸을 때 한번 즉시 실행하기 위해서
        // 함수들을 짧게 쓰기 위해서!
        set배열([1000, 2000, 3000]);
      }}>배열 바꾸기</button>
      <hr />
      <br />
      <h3>useState에 저장한 값 꺼내기</h3>
      <p>{문자}</p>
      <button onClick={()=>{
        set문자("안녕하세요");
      }}>문자바꾸기</button>
      <hr />
      <br />
      <h3>useState에 저장한 값 꺼내기</h3>
      <p>{숫자}</p>
      <button onClick={()=>{
// useState저장공간에 있는 0을 100으로 바꾼다.
// 리액트야 값이 바뀌니 화면에 적용해줘!
        set숫자(100);
      }}>숫자변경하기</button>
    </div>
  );
}
