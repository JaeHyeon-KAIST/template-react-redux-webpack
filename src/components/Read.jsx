import React from 'react'

export default function Read({title, desc}) {
  return (
    <article>
      <h2>{title}</h2>
      {desc}
    </article>
  )
}
