import React from 'react'
import ProjectWrapper from '../../modular-components/ProjectWrapper'
import styles from './Project5.module.css'
import smallImg from './assets/60x60_duck.png'
import medImg from './assets/120x120_duck.png'
import bigImg from './assets/1024x1024_duck.png'
export default function Project5() {
  return (
    <ProjectWrapper className={styles.main}>
      <h1 className={styles.h1}>IOS APP ICONS</h1>
      <section className={styles.container}>

        <img className={styles.small} alt='60 pixel duck' src={smallImg} />
        <img className={styles.med} alt='120 pixel duck' src={medImg} />
        <img className={styles.big} alt='1024 pixel duck' src={bigImg} />
      </section>
    </ProjectWrapper>
  )
}
