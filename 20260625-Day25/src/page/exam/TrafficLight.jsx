// TrafficLight.jsx


import React from 'react';
import { useState } from 'react';
import ChangeButton from './ChangeButton';

export default function TrafficLight() {
  let [color, setColor] = useState("green");

  return (
    <div>
      <p>현재 신호: {color}</p>
      <ChangeButton setColor={setColor} />
      
    </div>
  );
}