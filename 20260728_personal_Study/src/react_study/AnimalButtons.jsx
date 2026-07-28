// AnimalButtons.jsx
import React from 'react'

export default function AnimalButtons({ set선택한동물 }) {
  return (
    <div>
      <button onClick={()=>set선택한동물("강아지")}>강아지</button>
      <button onClick={()=>set선택한동물("고양이")}>고양이</button>
    </div>
  );
}