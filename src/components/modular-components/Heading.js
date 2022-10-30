import React from 'react'

export default function Heading({ h1, h3, className }) {
  return (
    <section className={className}>
      <h1>{h1}</h1>
      <h3>{h3}</h3>
    </section>
  )
}
