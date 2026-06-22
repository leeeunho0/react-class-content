// StackCard.jsx

import React from 'react'

// StackCard를 만드는 이유는 HTML코드가 중복된다.
// 하나 만들어놓고 (틀) 계속 가져다 쓰고 싶어서!
export default function StackCard() {
  return (
  <div className="stack-card">
    <i class="fa-brands fa-html5"></i>
    <h3>Front End</h3>
    <p>HTML, CSS, JavaScript, TypeScript, React, Vue, Web APIs</p>
  </div>
  )
}
