// RadioButtonTest.jsx

import React, { useState } from 'react';

export default function RadioButtonTest() {

  // 체크박스는 true, false 준다.
  // 라디오버튼 true, false 안 줌! 값을 줌!
  let [gender, setGender] = useState("");

  // 결제 정보를 기억해야 된다.
  // useState() 화면에 보이고 값 변경! 실시간
  // 변경된 부분만 덮어쓰기해서 화면이 깜빡 거리지 않게!
  // 해주는 기능중에 하나다!
  let [pay, setPay] = useState("");


  let [delivery, setDelivery] = useState("");

  return (
    <div>
      <h2>라디오버튼</h2>
      <h3>여러개 중에 하나만 선택가능하다!</h3>
      <p>성별 선택</p>
    {/* name속성은 같은 그룹으로 묶어서 여러개중에 하나만 선택! 
    고객이 무슨 행동을 했다. 어떤 태그가 눌렸는지? 어떤 값이 있는지?
    어떤 행동을 했는지 브라우저(크롬)가 리액트한테 알려준다. 
    이벤트정보 => 객체
    어떤태그 눌렀니? : input radio버튼 눌렸대!
    target : input
    */}
      <input type="radio" name="gender" onChange={(이벤트정보)=>{
        setGender("남성");
      }} />남성
      <input type="radio" name="gender" onChange={(이벤트정보)=>{
        setGender("여성");
      }} />여성
      <br /><br />
      <hr />
      
       <p>결제 방법</p>
      <input type="radio" name="pay" onChange={(이벤트정보) => {
          setPay("카카오페이");
        }} />카카오페이
      <input type="radio" name="pay" onChange={(이벤트정보) => {
          setPay("카드");
        }} />카드
      <input type="radio" name="pay" onChange={(이벤트정보) => {
          setPay("계좌이체");
        }} />계좌이체
      <br /><br />
      <hr />

      <p>배송 방법</p>
      {/* 일반배송, 새벽배송, 방문수령 */}
      <input type="radio" name="delivery" onChange={(이벤트정보)=>{
        setDelivery("일반배송");
      }} />일반배송
      <input type="radio" name="delivery" onChange={(이벤트정보)=>{
        setDelivery("새벽배송");
      }} />새벽배송
      <input type="radio" name="delivery" onChange={(이벤트정보)=>{
        setDelivery("방문수령");
      }} />방문수령
      <br /><br />
      <hr />
      
      <p>설문 조사</p>

      <h3>위에서 선택한 값들을 보이기</h3>
      <p>성별: {gender}</p>
      <p>결제: {pay}</p>
      <p>배송: {delivery}</p>

      <br /><br />
      <hr />

    </div>
  );
}
