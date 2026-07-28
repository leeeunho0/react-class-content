import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LikeButton from './react_study/Likebutton.jsx'
import ColorPicker from './react_study/ColorPicker.jsx'
import ImageSlider from './react_study/ImageSlider.jsx'
import LoginCheck from './react_study/LoginCheck.jsx'
import TrafficLight from './react_study/TrafficLight.jsx'
import PetChoice from './react_study/PetChoice.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PetChoice />
  </StrictMode>,
)
