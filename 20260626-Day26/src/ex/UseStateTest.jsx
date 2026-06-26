// UseStateTest.jsx

import React, { useState } from 'react';

export default function UseStateTest() {
  // 화면의 값이 변경되는 변수!
  // 숫자 변수는 값을 꺼내서 사용한다.
  // set숫자함수 = 값저장도 하고 화면을 변경해줘! 동작!
  // HTML, JS 사용자가 이벤트 발생! 직접 수동으로 다 작성
  // 리액트 사용자가 이벤트가 발생! -리액트가 자동으로 알아서한다.
  let [숫자, set숫자] = useState(0)
  return (
    <div>
      <h2>UseState?</h2>
      <h3>실제 UseState 실행 동작</h3>
      <p>현재숫자: {숫자}</p>
      <button onClick={()=>{
        set숫자(숫자 + 1);
      }}>눌러봐!</button>

      <br /><br /><br /><br />
      <hr />


      <p>리액트 화면에 보이는 변수!</p>
      <p>고정된 값을 보여주고 싶으면 자바스크립트 변수!</p>
      <p>화면이 기억하고 바뀌면서 다시 그리는 변수</p>
    </div>
  );
}
/*
1. UseStateTest 페이지가  처음 실행
        ↓
2. useState(0) 호출 → 기억 상자 생성 (count=0)
        ↓
3. 화면에 "현재 숫자: 0" 렌더링
        ↓
4. 사용자가 버튼 클릭
        ↓
5. setCount(count + 1) 실행
        ↓
6. React가 "값이 바뀌었다" 감지
        ↓
7. 컴포넌트 함수 재실행 (re-render)
        ↓
8. useState(0) 다시 호출 → 이번엔 "기억된 값"(1)을 가져옴
        ↓
9. 화면에 "현재 숫자: 1" 다시 렌더링
        ↓
(4번부터 반복)

*/