// UseStateTest2.jsx
import React, { useState } from 'react';

export default function UseStateTest2() {
  // 1. 아이디랑 패스워드 저장하기 (입력)

  // 처음에는 아이디값이 비어있다!
  let [아이디, set아이디] = useState("");
  let [비밀번호, set비밀번호] = useState("");

  // 버튼 클릭시 값이 변경되는 것!
  let [숫자, set숫자] = useState(0);

  // 이미지의 시작번호가 1부터 시작!
  let [이미지, set이미지] = useState(1);

  // 이미지배열
  let [이미지배열, set이미지배열] = useState([
    "project1.webp",
    "project2.webp",
    "project3.webp",
    "project4.webp",
    "project5.webp",
  ]);
  // 현재 배열의 순서!
  let [순서, set순서] = useState(0);

  return (
    <div>

    <h2>버튼을 클릭하면 이미지가 변경되게 실습</h2>
    <img 
    // src={"/project"+ 이미지 +".webp"} 
    
    // 실무에서 가장 많이 사용하는 방법
    // 문자 안에 데이터를 집어넣을 때
    // src={`/project${이미지}.webp`}
    src={이미지배열[순서]}
    alt="" 
    onClick={()=>{
      console.log("이미지 클릭됨");
      // set이미지(이미지 + 1);
      if(순서 == 4){
        순서 = 0;
      }
      set순서(순서 + 1);
    }} />
    

    <br /><br /><br />


      <h2>버튼 클릭시 1씩 증가</h2>
      <button onClick={()=>{
  // 클릭했을 때 바로 실행해라!
  // 함수를 간단하게 적는 화살표 함수!
  // 값을 변경할 때 쓴다!
        set숫자(숫자 + 1);
      }}>1씩 증가</button>
      <h3>변경된 숫자: {숫자}</h3>


      <h2>아이디를 입력하세요</h2>
      <input type="text" onChange={(이벤트)=>{
        set아이디(이벤트.target.value);
      }} />

      <h2>비밀번호를 입력하세요</h2>
      <input type="text" onChange={(이벤트)=>{
        set비밀번호(이벤트.target.value);
      }} />

      <h3>입력한 아이디: {아이디}</h3>
      <h3>입력한 비밀번호: {비밀번호}</h3>

    </div>
  );
}
