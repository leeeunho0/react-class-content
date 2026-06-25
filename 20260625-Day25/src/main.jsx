import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import BalanceMain from './page/balanceGame/BalanceMain';
// import TrafficLight from './page/exam/TrafficLight';
// import StartPage from './page/balanceGame/StartPage';
// import './index.css';
// import ControlTest2 from './ControlTest2';
// import ControlTest from './ControlTest.jsx';
// import AdminPage from './page/AdminPage.jsx';
// import UseStateTest from './UseStateTest.jsx';
// import UseStateTest2 from './UseStateTest2.jsx';
// import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BalanceMain />
  </StrictMode>,
);
