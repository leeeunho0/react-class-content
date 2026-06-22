// Blog.jsx

import React from 'react'

export default function Blog({title, content, image, comment}) {
  return (
    <div className="blog-meta">
          <div className="blog-meta-1">
            <h3>{title}</h3>
            <p>{content}</p>
            <p><span>{comment}</span></p>
          </div>
            <img src={image} alt={title} />
        </div>
  )
}
