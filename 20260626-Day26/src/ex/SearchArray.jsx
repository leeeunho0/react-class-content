// SearchArray.jsx
import React, { useState } from "react";

// 내가 입력한 여러개의 검색어를 저장할 때 사용하는
// 방법
// 장바구니..
// 친구목록..
// 게시글..

export default function SearchArray() {
  // 입력창
  let [search, setSearch] = useState("");

  //검색 기록들을 저장하는 변수!
  let [history, setHistory] = useState([]);

  return (
    <div>
      <h2>검색 기록 저장 </h2>
      <p>검색 기록은 여러개 저장해야 하므로 배열 사용한다</p>

      <input
        type="text"
        placeholder="검색어 입력"
        onChange={(이벤트정보) => {
          setSearch(이벤트정보.target.value);
        }}
      />

      <button
        onClick={() => {
          setHistory([...history, search]);
        }}
      >
        검색
      </button>

      {/* join(" 문자 연결")  */}
      <h3>검색기록 : {history}</h3>
    </div>
  );
}

/**
  처음 페이지가 열릴 때 useState()배열 저장 
  onChange 하는 순간 문자로 변경되서 안됬다.
  join() 배열을 문자로 변경!


  setHistory([...history, search]);
  ...search  기존 데이터 가져와라!!
  ,search 방금 입력한 값을 맨 뒤에 추가해라!
 */