import React from 'react'

export default function Card({path, title, price}) {
  return (
    <div>
      <img src={path} alt="" />
        <h3>{title}</h3>
        <p>{price}</p>
    </div>
  )
}
