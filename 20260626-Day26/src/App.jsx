import React, { useState } from 'react';

// App.jsx

export default function App() {
  return (
    <div>
      <h2>React는 화면을 담당하는 언어!</h2>
      <p>화면을 쉽고 빠르게 관리하기 위해서! (vite)</p>
      <p>데이터만 바꾸면 화면이 알아서 바뀐다</p>
      <p>필요한 부분만 업데이트해서 빠르게 화면을 보여준다</p>

      <h2>차이점</h2>
      <h3>자바스크립트 일때 HTML태그의 내용을 바꾸려면</h3>
      <p>document.getElementById("아이디").innerText += 값</p>

      <ul>
        <li>동영상이 나오고 있는 와중에 댓글 (비동기 - 멀티태스킹)</li>
        <li>let 채팅창 = document.getElementById("채팅창");</li>
        <li>
          채팅창 innerHTML += "div태그 그 안에 ${아이디}p ${댓글내용}{" "}
        </li>
      </ul>

      <h3>리액트</h3>
      <p>useState(값) 값이 언제 바뀐 setXXX()</p>
      <p>
        {" "}
        새로운태그 만들게{" "}
      </p>
        <댓글태그 아이디="부드러운휴먼" 댓글내용="아 정말 못한다."></댓글태그>

    </div>
  );
}
