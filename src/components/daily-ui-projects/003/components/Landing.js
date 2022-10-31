import React from 'react'
import styles from '../Landing.module.css'
import background from './../assets/project3-splash.jpg'
import NavBar from './NavBar'
export default function Landing() {
  return (
    <article className={styles.main}>



      <img alt='background; you are what you listen to' src={background}></img>
      <NavBar />
      <section className={styles.main}>
        <div className={styles.main__content}>
          <div>
            <h1 className={styles.h1}>Be in the know.</h1>
            <h3 className={styles.h3}>Get notified as new stories come out.</h3>
          </div>
          <form onSubmit={(e) => e.preventDefault()} >
            <label className={styles.main__label}>
              EMAIL
              <input className={styles.main__email} type='email' />
            </label>
            <button className={styles.button}>SIGN UP</button>
          </form>

        </div>
      </section>

    </article >
  )
}
