//Kiosk.jsx
import React, { useState } from "react";
import ThirdPage from "./pages/ThirdPage";
import SecondPage from "./pages/SecondPage";
import FirstPage from "./pages/FirstPage";

export default function Kiosk() {
  // 현재 페이지를 기억하는 변수!
  let [page, setPage] = useState("first");

  // 키오스크 단계별 보기!
  return (
    <div className="wrap">
      {/* 첫번째 박스 약관동의 */}
      <h2>회원가입</h2>
      <hr />

      <p> 변수의 값이 true && 태그보이기!</p>
      {page == "first" && (
        <div className="first-box">
          <h3>1단계. 약관동의</h3>
          <p>회원가입을 위해 약관에 동의해주세요</p>
          <button>동의하고 다음</button>
        </div>
      )}

      {page == "second" && (
        <div className="first-box">
          <h3>2단계. 정보입력</h3>
          <input type="text" placeholder="이름" />
          <input type="text" placeholder="아이디" />
          <input type="text" placeholder="비밀번호" />
          <button>가입하기</button>
        </div>
      )}

      {page == "third" && (
        <div className="first-box">
          <h3>가입 완료!</h3>
          <p>회원가입이 완료 되었습니다.</p>
        </div>
      )}
    </div>
  );
}
/*
    <div className="wrap">
        <h2>회원가입</h2>
        <hr />
      {page == "first" && <div className="first-box">
        <h2>1단계. 약관 동의</h2>
        <p>회원가입을 위해 약관에 동의해주세요.</p>
        <button onClick={()=>{
          setPage("second");
        }}>동의하고 다음</button>
      </div>}

      {page == "second" && 
      <div className="first-box">
        <h2>2단계. 정보 입력</h2>
        <div className="input">
          <input type="text" placeholder="이름" />
          <input type="text" placeholder="아이디" />
          <input type="password" placeholder="비밀번호" />
        </div>
        <button onClick={()=>{
          setPage("third");
        }}>가입하기</button>
      </div>}

      {page == "third" && 
      <div className="first-box">
        <h2>🎉가입 완료!</h2>
        <p>회원가입이 완료되었습니다.</p>
      </div>}
    </div>
*/
/* 
<div className="wrap">
      <h2>간단 키오스크</h2>
      <h3>현재 페이지: {page}</h3>
      {page == "first" && <FirstPage 변수공유={setPage} /> }
      {page == "second" && <SecondPage 변수공유={setPage}/>}
      {page == "third" && <ThirdPage 변수공유={setPage}/>}

  실무에서는 url에 현재 화면을 저장한다.
  React Router 라이브러리!
  리액트가 기존적으로 가지고 있는 라이브러리가 아니다!

    </div>

    하나의 페이지에서는 useState변수를 변수명으로 가져다가 사용할 수 있다!
    문제가 되는 상황 분리!(페이지와 페이지 분리!)
    분리한 페이지는 변수명을 가져다 못쓴다.
    함수도 공유하고 값도 공유할 수 있다.
 */