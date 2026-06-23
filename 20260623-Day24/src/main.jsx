import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import PostPage from './pages/PostPage';
// import App5 from './App5';
// import App4 from './App4';
// import App3 from './App3';
// import App2 from './App2';
// import HotTopic from './pages/HotTopic';
// import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostPage />
  </StrictMode>,
);
