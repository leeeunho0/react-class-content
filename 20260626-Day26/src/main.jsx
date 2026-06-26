import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index2.css';
import UseObjectList from './UseObjectList';
import GameCharList from './GameCharList';
// import UseObjectTest from './UseObjectTest';
// import FirendList from './ex/FirendList';
// import MovieList from './MovieList';
// import CartList from './CartList';
// import SearchArray from './SearchArray';
// import TextCount from './TextCount';
// import UseStateInput from './useStateInput';
// import './index.css';
// import DarkMode from './ex/DarkMode';
// import Lab from './lab/Lab';
// import BgChange from './BgChange.jsx';
// import ClassNameTest from './ClassNameTest.jsx';
// import PasswordMode from './ex/PasswordMode.jsx';
// import LikeMode from './LikeMode.jsx';
// import UseStateTest from './UseStateTest.jsx';
// import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameCharList />
  </StrictMode>,
)
