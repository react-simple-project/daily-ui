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
          <img alt='Water coloring of wire-frame website' src='https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'></img>
          <h3 className={styles['hero__caption']}>Collection of my daily UI projects</h3>
        </div>

      </div>
    </header>
  )
}
