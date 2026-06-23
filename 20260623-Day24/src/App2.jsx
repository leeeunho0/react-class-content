// App2.jsx
import React from 'react';

// index.html 파일은 ctrl + s를 하면 새로고침이 계속 일어난다.
// jsx 파일은 ctrl + s 를 해도 새로고침 되는게 아니라 현재 저장된 내용만 다시 확인한다.

// index.html 파일 한 번 실행되면 DOM 구조 두개 생긴다.
// 하는 고객이 보고있는 원본 DOM있고 하나는 똑같은 사본 DOM이 생긴다.
// 내가 저장한 내용이(새롭게 추가한 내용) 그게 사본에 먼저 저장되고 실시간으로
// 원본DOM이랑 비교해서 바뀐 부분만 덮어쓰기 한다!
// HMR 방식

// 자바스크립트 파일에서 .js 함수 밖에 쓰면 딱! 한번 변수를 만들고 페이지가 닫힐때까지 유지!
// 리액트는 함수 밖에 쓰든 안에 변수를 만들면 계속 생성 됐다가 삭제 됐다가 한다.

// 자바스크립트에서 사용했던 이벤트들도 똑같이 사용 가능하다!
// count변수는 증가 함수에서도 사용할 수 있고 App2함수에서도 사용할 수 있다.
// 만약 App2안에 count변수를 넣게 되면 App2만 사용가능하다

// 지역변수 {중괄호가 열리면 생성 중괄호가 닫히면 삭제}

export default function App2() {
  let count = 0;
  
  function 증가(){
    count = count +1;
    console.log(count);
  }
  
  return (
    <div>
      <h2>버튼을 누르면 1씩 증가되는 예제</h2>
      <p>필요한 것들! 변수, 매번 실행하는 함수!</p>
      <button onClick={증가}>1 증가</button>
    </div>
  );
}

