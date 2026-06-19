import React from 'react'

// 길고 반복되는 코드를 한 단어로 줄이고 싶을 때 사용하는 것이 컴포넌트다!
export default function Feed({path, content}) {
  return (
    <div>

    <h3>작성자 이름</h3>
      <img src={path} alt="" />
      <p>{content}</p>
      <p>해시태그</p>
      <button>좋아요</button>  
    
    </div>
  )
}
