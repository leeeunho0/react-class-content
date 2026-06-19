import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import JsxEx from './JsxEx.jsx'
import Info from './Info.jsx'
import BoardList from './BoardList.jsx'
import SnsPage from './SnsPage.jsx'
import ProductPage from './ProductPage.jsx'

// 시작점 (리액트 처음 시작)
// index.html 파일과 리액트를 연결하는 시작점!
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductPage />
  </StrictMode>,
);
