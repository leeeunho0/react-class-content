//TailwindTest.jsx
// 새로운 페이지가 열린다.
// App 리액트파일에 새로운 페이지 경로를 알려준다.

import React from "react";

export default function TailwindTest() {
  return (
    <div>
      {/* 클래스로 이름을 만든 이유는 여러개의 태그에서 공통적으로 사용 */}
      <h2 className="text-3xl font-bold underline">테일윈드 예제</h2>
      
      <br /><br /><br />
      <hr />

      <p className="font-bold underline">다른 태그에서 또 쓰네?</p>
      <h2>실무에서 가장 많이 쓰는 CSS = Tailwind</h2>

      <ol>
        <li>get started 꼭 보기(vite)</li>
        <li>npm install tailwindcss @tailwindcss/vite 터미널 작성</li>
        <li>vite.config.ts에 아래 두개 설정하기</li>
        <li>import tailwindcss from '@tailwindcss/vite'</li>
        <li>tailwindcss(), 위에 설정 두개 vite.config.js참고하기</li>
        <li>@import "tailwindcss"; index.css맨위에! 설정한다</li>
      </ol>
    </div>
  );
}