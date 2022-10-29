import React from 'react'
import styles from './NavBar.module.css'
export default function NavBar() {
  return (
    <nav>
      <ul className={styles.nav}>
        <li className={styles.nav__item}>
          Daily-Ui Project
        </li>
        <ul className={styles.nav__links}>
          <li className={styles.nav__item}>
            Home
          </li>
          <li className={styles.nav__item}>
            About
          </li>
        </ul>
      </ul>
    </nav>
  )
}
