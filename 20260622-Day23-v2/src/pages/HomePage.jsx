// HomePage.jsx

import React from 'react'

export default function HomePage() {
  return (
    <div className='HomePage'>
      <div className='HomePage-menu'>
        <h1>Kotaro</h1>
        <ul>
          <li><span>Home</span></li>
          <li>About</li>
          <li>Skills</li>
          <li>My work</li>
          <li>Testimonial</li>
          <li>Contact</li>
        </ul>
      </div>
      {/* HTML 코드 작성 */}
      <div className='HomePage-main'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ9Z8xutdjhHkkbk_GH-lsWeQtl52UiEKwug&s" alt="ko" />
        <p>Hello</p>
        <p>I'm <span>Coder</span>, Kotaro</p>
        <button>Contact Me</button>
      </div>
      <button className='HomePage-btn'>👆</button>
    </div>
  )
}
