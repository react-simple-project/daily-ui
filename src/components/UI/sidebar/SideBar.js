import React from 'react'
import '../../../App.css'
import styles from './Accordion.module.css'
import Accordion from './Accordion'
export default function SideBar() {
  return (
    <section className={`sidebar ${styles.sidebar}`}>
      <Accordion />
      <footer className={styles['sidebar__footer']}>
        <h5 className={styles['sidebar__footer--text']}>Projects will be added as completed.</h5>
      </footer>
    </section>
  )
}
