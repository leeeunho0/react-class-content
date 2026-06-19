// SnsPage.jsx
// 자동으로 함수 틀을 만들어주는 단축키 rfc
import React from "react";
import Feed from "./component/Feed";

// SnsPage를 만들어서 중복되는 태그들을 Feed새로운 태그를 만들어서
// 중복 제거 했는데 문제가 발생 Feed 내용들이 다 똑같음

export default function SnsPage() {
  return (
  <div>
    <Feed content="오늘 술한잔"
          path="https://pbs.twimg.com/media/HIMS7KCbIAAQHdc.jpg" />
    <Feed content="낮잠자고싶다"
          path="https://pbs.twimg.com/profile_images/1127053896197726208/bfMvgfMR_400x400.jpg" />
    <Feed content="잠이온다"
          path="https://pbs.twimg.com/media/G5jHTqgbkAABmvs.jpg" />
    <Feed content="냐옹"
          path="https://m.health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg" />
    <Feed content="재밌겠다"
          path="https://item.kakaocdn.net/do/b7dd642d22437818427af59c31bfdffd9f5287469802eca457586a25a096fd31" />
    <Feed content="히힣"
          path="https://i.namu.wiki/i/geGngQMnvmK2g3wuKU4O1uNs8Ix1HXQULk9PrnT57lHOlU4AxL9qsNCYXOOY9DIqPWtXnphq8G6NzCcvzv-ppQ.webp" />
  </div>

); 
}
