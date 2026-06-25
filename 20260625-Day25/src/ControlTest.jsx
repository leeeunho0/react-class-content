// ControlTest.jsx
import React from 'react';
import FirstPage from './page/FirstPage';

// useState()
// - 리액트에서 쓰는 변수다!
// - ControlTest 페이지가 닫힐때까지 유된다.

// 리액트는 페이지 이동보다 상황에 따라 화면이 달라지는 경우가 많다!
// index.html 하나의 파일을 이용해서 태그들을 갈아 끼우는 형태!
export default function ControlTest() {
  // 1. 로그인이 되면 환영합니다.
  //    로그인이 안되어있으면 그냥 아무것도 안보이기!
  let 로그인 = true;

  // 2. jsx파일 안에서 return 은 태그만 작성이 가능하다.
  //   if문이 동작하지 않고 그냥 문자로 읽어진다.
  // {} 코드를 작성해도 에러가 발생한다.
  let 쿠폰 = true;

  // 3. 페이지 변수를 이용해서 true면 페이지 보이기

  let 페이지 = true;

  return (
    <div>
      <h2>페이지도 보여줄 수 있다.</h2>
      <p>FirstPage를 보이기!</p>
      
      {
        페이지 && <FirstPage />
      }

      <hr /><br /><br /><br /><br />

      <h2>&& if문처럼 동작하는 조건문!</h2>
      <p>앞에 조건이 맞으면(true) 뒤를 실행한다.</p>
      {로그인 && <h2>환영합니다.😊</h2>}
      
      <br />
      <hr />
      {true && <p>참이면 보인다!</p>}
      {false && <p>거짓이면 안보인다!</p>}
      <br />
      <hr />

      <h3>쿠폰 있으면 쿠폰 받기 버튼 보이기</h3>
      {
        쿠폰 && <button>쿠폰받기🎁</button>
      }
    </div>
  );
}
