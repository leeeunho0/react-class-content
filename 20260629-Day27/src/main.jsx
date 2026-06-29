import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.jsx';
// import Hobbies from './Hobbies.jsx';
// import RadioButtonTest from './RadioButtonTest.jsx';
// import SelectBoxTest from './SelectBoxTest.jsx';
// import DateTest from './test/DateTest.jsx';
// import Signup from './Signup.jsx';
// import UseStateRouter from './UseStateRouter.jsx';
// import UseStateRouter2 from './test/UseStateRouter2.jsx';
import Kiosk from './Kiosk.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Kiosk />
  </StrictMode>,
);

