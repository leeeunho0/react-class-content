import { useState } from "react";

export default function LikeButton() {
  const [좋아요, set좋아요] = useState(0); // ① 초기값 0

  return (
    <div>
      <p>좋아요: {좋아요}개</p>
      <button onClick={() => {
        set좋아요(좋아요 + 1); // ② 클릭 시 1 증가
      }}>👍 좋아요</button>
    </div>
  );
}
