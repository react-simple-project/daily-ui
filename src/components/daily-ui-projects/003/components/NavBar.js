import React from 'react'
import styles from '../Landing.module.css'
export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__links}>
        <li className={styles.nav__item}>
          LifeSound
        </li>
        <div className={styles['nav__links--right']}>
          <li className={styles.nav__item} >
            Home
          </li>
          <li className={styles.nav__item} >
            About
          </li>
        </div>
      </ul>
    </nav >
  )
}
