// ApiTest.jsx
// url = /api
// url을 입력하면 보여질 페이지는 ApiTest.jsx
import axios from 'axios';
import React, { useState } from 'react';

export default function ApiTest() {
  //화면에 보여주기
  let [데이터, set데이터] = useState([]);

  // 1. 버튼을 클릭하면 콘솔에 데이터가 나오는지 찍기!

  // 2. 제대로 결과 나오면 useState에 저장하기 변수명 게시글

  // 3. map을 이용해서 화면에 띄우기 title 보이기
  return (
    <div>
      <h3>게시글 가져오기</h3>
      {/* 1. 게시글 가져오기 버튼: posts 주소에서 데이터를 가져옵니다. (title 존재) */}
      <button
        onClick={() => {
          axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((응답) => {
              console.log("게시글 응답 데이터:", 응답.data);
              set데이터(응답.data);
            });
        }}
      >
        게시글 가져오기
      </button>

      {/* 2. 회원정보 가져오기 버튼: users 주소에서 데이터를 가져옵니다. (name 존재) */}
      <button
        onClick={() => {
          axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((응답) => {
              console.log("회원정보 응답 데이터:", 응답.data);
              // 회원정보 데이터에는 title이 없고 name이 있습니다.
              // 만약 이 버튼을 누르고 아래에서 .title을 출력하면 화면에 보이지 않으므로,
              // 구분하기 위해 데이터를 변환해서 title을 억지로 넣어주거나 주소를 통일하는 것이 좋습니다.
              const 변환된데이터 = 응답.data.map(user => ({
                id: user.id,
                title: `${user.name} (${user.email})` // name을 title처럼 쓰도록 변환
              }));
              set데이터(변환된데이터);
            });
        }}
      >
        회원정보 가져오기
      </button>
      
      <h3>map을 이용해서 화면에 띄우기 title 보이기</h3>
      {데이터.map((고객한건) => {
        // 이제 '게시글 가져오기'를 누르면 게시글의 title이 보이고,
        // '회원정보 가져오기'를 누르면 변환된 회원의 이름(title 대용)이 화면에 보입니다!
        return <p key={고객한건.id}>{고객한건.title}</p>;
      })}

      <hr />
      <br />
      <br />
      <br />

      <h2>외부 사이트랑 통신해서 데이터 가져오기</h2>
      <h3>fetch?</h3>

      <h3>API란?</h3>
      <p>다른 사이트에게 데이터를 달라고 요청하는 방법</p>
      <p>서로 데이터를 주고 받는 약속 (API)</p>
      <p>자바스크립트랑 리액트에 사용하는거 똑같다 fetch</p>

      <h3>Axios란?</h3>
      <p>fetch보다 편하게 사용할 수있는 라이브러리(도구)</p>
      <p>fetch - 응답객체 - 자바스크립트 객체로 변환 - 사용</p>
      <p>axios - 사용!</p>
    </div>
  );
}
/*
<button
        onClick={() => {
          // 1. fetch가져오기
          // 2. 괄호안에 url작성하기
          fetch("https://jsonplaceholder.typicode.com/users")
            .then((응답데이터) => {
              console.log(응답데이터);
              console.log(응답데이터.json());
              return 응답데이터.json();
            })
            .then((객체로변경된데이터) => {
              // 위에 내용들을 계속 함수를 작성하고 변환하고 해야되서 불편
              // 편하게 쓸 수 있는 axios
            });
        }}
      >
        회원정보
      </button>

 <button
        onClick={() => {
          // 1. json에서 회원정보 가져오기 url
          axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((응답) => {
              console.log(응답);

              // 화면에 보이기 위해서 변수에 저장
              set데이터(응답.data);
              console.log(데이터);
              console.log(응답.data);
            });
        }}
      >
        회원정보
      </button>

      <h3>한명 꺼내기</h3>
      {데이터.map((고객한건) => {
        // map이 자동으로 반복을 해서 어떤 일을 해야된다.
        // 이 태그를 만들어서 React한테 돌려줘!행동을 해야되기
        // 때문에 함수형태로 들어간다.

        // 함수가 하는 일은 두가지다!
        // 데이터배열에서 데이터 꺼내기
        // p태그 생성
        // 꺼낸데이터를 p태그 안에 저장하기
        // 방금 만들어진 태그를 react한테 보내야된다.
        // 화면에 새로운 태그를 보여준다!
        return <p>{고객한건.name}</p>;
      })}


axios.get()
↓
API 서버에 요청
↓
(기다리는 중...)
↓
회원정보 도착!
↓
.then()
↓
console.log()
↓
setState()
↓
화면 출력

*/