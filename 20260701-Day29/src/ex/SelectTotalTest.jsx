// SelectTotalTest.jsx
// url = /total
// 드롭다운 메뉴를 이용해서 카테고리를 선택하면
// 카테고리에 선택된 데이터 보이기 배열
import React, { useState } from "react";

export default function SelectTotalTest() {
  let 캐릭터 = {
    전사: ["소드마스터", "다크나이트", "드래곤슬레이어"],
    마법사: ["소환술사", "화염술사", "흑마법사"],
    궁사: ["헌터", "엘프궁수", "새도우 레인저"],
  };
  let [선택한직업, set선택한직업] = useState("");

  return (
    <div>
      <select
        onChange={(이벤트정보) => {
          set선택한직업(이벤트정보.target.value);
        }}
      >
        <option value="">직업 선택</option>
        <option value="전사">전사</option>
        <option value="마법사">마법사</option>
        <option value="궁사">궁사</option>
      </select>

      {선택한직업 ? (
      <div>
        <h3>선택한 직업 : {선택한직업}</h3>
        <h3>캐릭터 종류</h3>
        <p>{캐릭터[선택한직업][0]}</p>
        <p>{캐릭터[선택한직업][1]}</p>
        <p>{캐릭터[선택한직업][2]}</p>
        
        {선택한직업 == "" && <p></p>}
        {선택한직업 != "" && <p></p>}
      </div>) : (
      <p>직업을 선택하세요</p>
      )}
    </div>
  );
}

/*
① 전사 선택

        ↓

② onChange 실행

        ↓

③ 선택한직업 = "전사"

        ↓

④ React 다시 실행

        ↓

⑤ 캐릭터["전사"]

        ↓

["소드마스터", "다크나이트", "드래곤슬레이어"]

        ↓

⑥ 배열의 값 출력

소드마스터
다크나이트
드래곤슬레이어

*/