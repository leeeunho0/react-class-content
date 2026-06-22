// App2.jsx
import React from "react";
import Post from "./component/Post";

export default function App2() {
  return (
  <div>
    <h2>Props?</h2>
    <p>컴포넌트로 나누면 각각 데이터를 넘겨줘야된다.</p>
    {/* 컴포넌트로 나눴더니 똑같은 내용만 나온다. 
    다 다른 내용을 보여주고 싶다! 그래서 Props */}

    <Post title="첫번째 프로젝트" 
          content="첫번째 프로젝트"
          image="project1.webp" 
    />

    <Post title="두번째 프로젝트" 
          content="두번째 프로젝트"
          image="project2.webp" 
    />
    
    {/* 실제 값을 넘겨줄때는 title - key가 넘겨받는 Post({title})에서도
    똑같은 key이름으로 받아야 된다.
    안그러면 데이터가 안온다!
     */}
    <Post title="세번째 프로젝트" 
          content="세번째 프로젝트"
          image="project3.webp" 
    />
    
    
  </div>
  );
}