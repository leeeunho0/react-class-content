// ControlTest2.jsx
import React, { useState } from 'react';
import FirstPage from './page/FirstPage';
import SecondPage from './page/SecondPage';
import ThirdPage from './page/ThirdPage';

// ControlTest2에서 실제 웹 사이트처럼
// 메뉴를 클릭하면 About, Mywork페이지만 볼 수 있도록 하는 예제!

export default function ControlTest2() {

  // let 현재페이지 = 3;
  // return 안에는 HTML태그만 사용 가능하다!
  // 위에 처럼 자바스크립트 let 현재페이지는 
  // 고객이 버튼을 클릭했을때 반응하지 않는다!

  // 항상 페이지는 첫번째 페이지부터 본다!
  // 그래서 처음 값을 1로 정한다.
  let [현재페이지,set현재페이지] =useState(1);
  // setOOOO()
  // 고객이 클릭했을 때 값을 변경하고 화면에 즉시 적용해라!

  // 문자로 변경
  let [현재메뉴, set현재메뉴] = useState("first");

  return (
    <div>
      <h2>메인 페이지!</h2>
      <br />
      <hr />

      <ul className="nav">
               <li
          onClick={() => {
            console.log("첫번째 클릭됨");
            set현재페이지(1);
          }}>
          first
        </li>
        <li
          onClick={() => {
            console.log("두번째 클릭됨");
            set현재페이지(2);
          }}>
          second
        </li>
        <li
          onClick={() => {
            console.log("세번째 클릭됨");
            set현재페이지(3);
          }}>
          third
        </li>
      </ul>
      <br />
      <hr />
      <h2>문자 메뉴를 클릭했을 때 </h2>
      <ul className="nav">
               <li
          onClick={() => {
            console.log("첫번째 클릭됨");
            set현재메뉴("first");
          }}>
          first
        </li>
        <li
          onClick={() => {
            console.log("두번째 클릭됨");
            set현재메뉴("second");
          }}>
          second
        </li>
        <li
          onClick={() => {
            console.log("세번째 클릭됨");
            set현재메뉴("third");
          }}>
          third
        </li>
      </ul>

      <br />
      <hr />

      {/* 현재페이지변수가 1이면 FirstPage 보여줘 */}
      {현재페이지 == 1 && <FirstPage />}
      {현재페이지 == 2 && <SecondPage />}
      {현재페이지 == 3 && <ThirdPage />}

      <br />
      <hr />

      {현재메뉴 == "first" && <FirstPage />}
      {현재메뉴 == "second" && <SecondPage />}
      {현재메뉴 == "third" && <ThirdPage />}

    </div>
  );
}
