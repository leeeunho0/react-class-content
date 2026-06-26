// UseObjectList.jsx
import React, { useState } from "react";

export default function UseObjectList() {
  // 여러개의 값을 저장하려면 배열
  //  만들고 나서 화면에 보여줘야된다. 그래서 객체를 같이 쓴다.
  let [students, setStudents] = useState([]);
  return (
    <div>
      <h2>실무에서 가장 많이 사용하는 객체와 배열 함께 사용하기</h2>
      <button
        onClick={() => {
          setStudents([
            ...students,
            {
              name: "이완",
              age: 30,
            },
          ]);
        }}
      >
        학생 추가
      </button>

      <button
        onClick={() => {
          setStudents([
            ...students,
            {
              name: "희주",
              age: 25,
            },
          ]);
        }}
      >
        학생 추가
      </button>

      <h2>학생 정보: {JSON.stringify(students)}</h2>
    </div>
  );
}
// 배열을 이용해서 여러개를 저장한다.
// 그때 안에 들어가는 내용들이 숫자, 문자, 객체 있다.
// 배열을 가지고 기존에 내용들을 유지한다.
// 그리고 새로 저장되는 값들을 맨 뒤에 추가한다.

// 배열 [] = 여러개를 저장
// 객체 {} = 한 개의 정보를 묶어서 저장