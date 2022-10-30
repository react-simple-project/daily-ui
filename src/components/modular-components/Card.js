import React from 'react'
import styles from './modular.module.css'
export default function Card({ children, className }) {
  return (
    <section className={`${styles.card} ${className}`}>
      {children}
    </section>
  )
}
