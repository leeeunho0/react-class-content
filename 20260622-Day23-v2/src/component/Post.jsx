// Post.jsx
// 게시글의 제목과 내용을 구성하는 Post 태그를 새로 만든다.
// HTML에서 게시글을 작성하면 계속 반복적으로 div, h2, p 태그 계속 쓰인다.
import React from 'react';

// 리액트가 자바스크립트 문법을 조금 쉽세 변경했다.
// document.getElementById("title").innerText
// 리액트가 줄였다 {변수명}
// 바로 값을 저장할 수 있도록!
// 내가 새로운 태그를 만들었을때 각각 태그가 다른 값들을 넣어서 화면에 보여줘야된다(Props)

// 각각에 값을 넣어주는 방식 = Props
export default function Post({title, content, image}) {
  return (
    <div className="box">
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>{content}</p>
    </div>
  );
}
/**

<script>
function Post(title){

  return `
    <div class="box">
      <h3>${title}</h3>
      <p>집에 가고싶어요!</p>
    </div>
  `;

}

document.getElementById("posts").innerHTML =
  Post("React");
</script>

 */