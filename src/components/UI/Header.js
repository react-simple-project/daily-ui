import React from 'react'
import '../../App.css'
import styles from './Header.module.css'
import NavBar from './NavBar'
export default function Header() {
  return (
    <header>
      <NavBar />
      <div className={styles.hero}>

        <div className={styles['hero__img']}>
          <h1 className={styles['hero__heading']}>Daily UI Project</h1>
          <h3 className={styles['hero__caption']}>Collection of my daily UI projects</h3>
        </div>

      </div>
    </header>
  )
}
