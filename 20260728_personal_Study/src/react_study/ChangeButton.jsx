// ChangeButton.jsx
import React from 'react'

export default function ChangeButton({ setColor }) {
  return (
  <button onClick={() => setColor("red")}>
    빨간불로 바꾸기
    </button>);
}