// ChangeButton.jsx

import React from 'react';
import { useState } from 'react';

export default function ChangeButton({setColor }) {
  return(
  <div>
      <button onClick={()=>{
        setColor("red");
      }}>빨간불로 바꾸기</button>
  </div>
);
}