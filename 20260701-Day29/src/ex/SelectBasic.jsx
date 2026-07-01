// SelectBasic.jsx
import React, { useState } from 'react';

export default function SelectBasic() {

  let [과일, set과일] = useState("");

  return (
    <div>
      <h2>드롭다운(select 태그)</h2>

      <select onChange={(e)=>{
        set과일(e.target.value);
      }}>
        <option value="사과">사과</option>
        <option value="바나나">바나나</option>
        <option value="포도">포도</option>
      </select>

      <h3>선택한 과일 : {과일}</h3>
    </div>
  );
}

/* 
실행 순서!( 파이프라인 )
① 컴포넌트 최초 렌더링 (과일 = "")
        ↓
② 사용자가 <select>에서 옵션 클릭
        ↓
③ 브라우저가 onChange 이벤트 발생 → 이벤트 객체 생성
        ↓
④ onChange에 연결된 콜백 함수 실행
        ↓
⑤ 이벤트정보.target.value 로 선택된 값 추출
        ↓
⑥ set과일(값) 호출 → state 변경 요청
        ↓
⑦ React가 리렌더링 트리거
        ↓
⑧ 컴포넌트 함수 재실행 → 새로운 과일 값으로 화면 갱신
        ↓
⑨ <h3>에 바뀐 과일 값 표시

*/