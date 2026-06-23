// Topic.jsx
// 반복되는 태그들을 하나로 묶어서 새로운 Topic 이라는 태그를 만들었다.
import React from 'react';

// Topic태그를 만들때 각각 다른 내용을 넣어줘야되기
// 때문에 key를이용해서 값을 넘긴다.
// {변수명}
export default function Topic({image, content}) {
  return (
    <div className="topic">
      <img src={image} alt="" />
      <div className="time-labs">
        <p>{content}</p>
      </div>
    </div>
  );
}
