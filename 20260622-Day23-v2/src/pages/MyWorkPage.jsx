//MyWorkPage.jsx

import React from "react";
import ProjectMeta from "../component/ProjectMeta";

// HTML로 만들었던 mywork페이지를 리액트로 옮기기!
export default function MyWorkPage() {
  return (
    //css 파일안에 내용은 className으로 바꿔서 사용해야된다.
    <div className="my-work-box">
      <div className="my-work-content-box">
        <h2>My Work</h2>
        <p>Projects</p>

      <ul>
        <li>
          All<span>8</span>
        </li>
        <li>
          Front-End<span>3</span>
        </li>
        <li>
          Back-End<span>3</span>
        </li>
        <li>
          Mobile<span>2</span>
        </li>
      </ul>
      </div>

      {/* 이미지들 올리기 */}
      <div className="projects">
        <ProjectMeta />
        <ProjectMeta />
        
      </div>
    </div>
  );
}

/* 
리액트 프로젝트들은 기본적으로 현재 경로를 URL을 기준으로 파일이나 폴더를 탐색한다.
http://localhost:5173/project3.webp
아무런 기호가 없으면, 브라우저는 기본 현재페이지인 루트 / 시작점을 기준으로 project3.webp

./project2.webp 되는 이유?
HTML이나 CSS , JS 기본 문법들은 현재 자기자신의 파일을 기준으로 경로를 선택했다면,
리액트는 현재 URL을 기준으로 찾는다.

현재 페이지를 기준으로 찾아라! ./
http://localhost:5173/project2.webp

/project1.webp 가능 했던 이유?
public 기본적으로 최상위로 복사해라!
즉 브라우저 입장에서는 이 파일들이 항상 웹 사이트 루트 / 경로에 있는 것 처럼 보여야된다.

*/
