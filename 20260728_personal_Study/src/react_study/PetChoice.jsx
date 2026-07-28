// PetChoice.jsx
import React, { useState } from 'react'
import AnimalButtons from './AnimalButtons';

export default function PetChoice() {
  let [선택한동물, set선택한동물] = useState("");

  return (
    <div>
      {선택한동물 != "" &&<p>당신은 {선택한동물}를 선택했습니다</p>}
      <AnimalButtons set선택한동물={set선택한동물} />
    </div>
  );
}