import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// import 파일의 경로를 알려주는 것!
import App2 from './App2.jsx'
import Posts from './Posts.jsx'

// 메인아! 내가 Posts 태그를 만들었어. 그걸로 페이지를 갈아 끼울게!

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Posts />
  </StrictMode>,
)
