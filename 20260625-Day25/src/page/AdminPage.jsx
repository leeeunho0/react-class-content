// AdminPage.jsx
import React, { useState } from "react";

export default function AdminPage() {
  // input에서 입력이 일어나면 (고객이 정보를 입력하면)
  // 리액트 변수에 저장하기
  // 변수처럼 단 하나의 값만 저장하는 이름!
  // useState = 변수 하나 값 저장 + 
  //            화면에 실시간 적용!
  // 리액트는 DOM이 두 개 있어서!

  let [이름, set이름] = useState("");
  let [전화번호, set전화번호] = useState("");
  let [주소, set주소] = useState("");

  // 아래처럼 코드를 작성하면 하나의 값만 저장이 가능하다
  let [고객정보들, set고객정보들] = useState([]);

  return (
  <div className="user-group max-container">
    <h2>관리자 페이지</h2>
    <hr />
    <h3>고객 정보 추가</h3>

    <input type="text" placeholder="이름 입력"
    onChange={(이벤트)=>{
      set이름(이벤트.target.value);
    }} />
    <br />
    <input type="text" placeholder="번화번호 입력"
    onChange={(이벤트)=>{
      set전화번호(이벤트.target.value);
    }} />
    <br />
    <input type="text" placeholder="주소 입력"
    onChange={(이벤트)=>{
      set주소(이벤트.target.value);
    }} />
    <br />
    <h3>고객 목록</h3>
    <div className="1">
      <h3>첫번째 고객</h3>
      <p>이름: {이름}</p>
      <p>전화번호: {전화번호}</p>
      <p>주소: {주소}</p>
    </div>
  </div>

  );
}