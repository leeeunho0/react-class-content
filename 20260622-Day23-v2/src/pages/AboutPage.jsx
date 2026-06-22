// AboutPage.jsx
import React from 'react'
import StackCard from '../component/StackCard'

export default function AboutPage() {
  // css파일에서 클래스명은 리액트에서 className으로 사용된다.
  return (
    <div className="about-me-box">
      <h2>About Me</h2>
      <p className='title'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus atque facilis saepe deserunt laudantium autem ad iste nam omnis est optio, voluptatibus eaque quas nesciunt excepturi consequuntur placeat dicta velit!</p>

      <div className="my-stacks">
        <StackCard />
        <StackCard />
        <StackCard />
      </div>

    </div>
  )
}
