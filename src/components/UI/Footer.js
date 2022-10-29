import React from 'react'
import '../../App.css'
import styles from './Footer.module.css'
export default function Footer() {
  return (
    <footer>
      <div className={styles['linked-in']}>LinkedIN</div>
      <div className={styles.twitter}>Twitter</div>
      <div className={styles.portfolio}>Portfolio</div>
      <div className={styles.github}>GitHub</div>
    </footer>
  )
}
