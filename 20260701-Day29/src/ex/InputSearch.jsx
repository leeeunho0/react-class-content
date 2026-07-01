//InputSearch.jsx
// url /input
// App한테 경로 알려주기
import React, { useState } from "react";

export default function InputSearch() {
  let 강의목록 = ["HTML", "CSS", "Js", "React"];

  //고객이 입력한 값을 저장하는 변수
  let [검색어, set검색어] = useState("");

  return (
    <div>
      <h2>사용자가 직접 입력해서 데이터를 찾음</h2>
      <h3>실행하는 순서 -아래에서 확인</h3>

      <h3>배열 검색!</h3>
      <input
        type="text"
        placeholder="검색"
        onChange={(이벤트정보) => {
          set검색어(이벤트정보.target.value);

          // 배열에서 입력한 검색어가 있는지 찾는 기능
          // 배열명.includes(입력한값)
          //  입력한 값이 배열 안에 있니?
          //  결과가 true,없으면 false
          // 실제 이전 값을 가지고 비교를 하다보니
          // HTML 한칸을 띄어야 결과가 나온다
          // 이벤트정보.target.value 바로 꺼내서 사용해라! (최신값)
          console.log(강의목록.includes(이벤트정보.target.value));
          console.log(이벤트정보.target.value);
        }}
      />

      <h3>입력한 검색어: {검색어}</h3>
      <p>
        리액트가 화면을 다시 보여주면서 검색어가 최신 값으로 변경되었기때문에
        정상적으로 동작한다.
      </p>
      <br />
      <br />
      <br />
      {/* <h3>{강의목록.includes(검색어) ? "찾았다" : "없는 강의 입니다."}</h3> */}

      {강의목록.map((과목) => {
        console.log("현재과목:", 과목);
        // 아래 코드는 글씨가 딱 맞아야 보여준다.
        // return 과목 == 검색어 ? <p>{과목}</p> : "";

        // 한글자라도 포함된 과목들을 모두 출력하고 싶다.
        // 리액트는 비교를 하거나 포함되어있는 함수들을 쓸 때 대소문자 구별을 한다.
        return 과목
               .toLowerCase() // 모두 소문자로 변경하기
               .includes(검색어.toLowerCase()) ? (<p>{과목}</p>) : ("");
      })}
    </div>
  );
}

/*
if(과목 == 검색어){
  return <p>과목</p>;
}

return null;
*/