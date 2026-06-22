import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ListPage from './pages/ListPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import MyWorkPage from './pages/MyWorkPage.jsx';
import App2 from './App2.jsx';
import NaverBlogPage from './pages/NaverBlogPage.jsx';

// 리액트가 가끔 import경로가 자동으로 안 걸리는 경우가 있다.
// 그럴때는 직접 경로를 작성하면 된다.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AboutPage /> */}
    {/* <MyWorkPage /> */}
    {/* <App /> */}
    {/* <App2 /> */}
    <NaverBlogPage />
  </StrictMode>,
);
