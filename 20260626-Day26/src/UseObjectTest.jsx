// UseObjectTest.jsx

import React, { useState } from 'react'

// 학생들의 정보를 저장하는 객체 타입으로
// useState쓰기!
export default function UseObjectTest() {
  
  let [stu, setStu] = useState({});
  return (
    <div>
      <h2>useState이용해서 객체 타입으로 저장하기</h2>
      <p>객체 타입은 key가 있으면 value 바꾼다.</p>
      <p>새롭게 만들어지는게 아니다!</p>
      <button onClick={()=>{
        setStu({
          
          name : "이완",
          age: 30
        });
      }}>학생 추가</button>
      <button
        onClick={() => {
          setStu({
          
          name: "희주",
          age: 25,
        });
      }}
      >학생 추가</button>
      <br />
      <hr />
      {/* 객체타입을 문자로 변경해주는 기능! */}
      <h2>학생 정보: {JSON.stringify(stu)}</h2>
    </div>
  )
}
