// Home.jsx
// url = / 미인페이지 보여줘! localhost:5173/
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h2>여행지 소개 사이트</h2>

      <h3>버튼을 클릭하면 여행지 페이지로 보내기</h3>
      <Link to="/travel/jeju">
      <button>제주도</button>
      </Link>
      <Link to="/travel/seoul">
      <button>서울</button>
      </Link>
      <Link to="/travel/busan">
      <button>부산</button>
      </Link>
    </div>
  );
}
// to="/travel/jeju"
// 페이지들을 문자로 주게 되면 문자 중복되는 현상!
// 그래서 상세 페이지 만들때는 숫자를 이용하여 만든다!