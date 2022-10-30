import React from 'react'
import styles from './modular.module.css'
export default function ProjectWrapper({ children, className }) {
  return (
    <article className={`${styles.main} ${className}`}>
      {children}
    </article>
  )
}
