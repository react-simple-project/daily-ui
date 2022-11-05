import React from 'react'
import styles from '../Project6.module.css'
import selfie from './assets/selfie.png'
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.wrapper}>
        <div className={styles['hero__profile-pic']}>
          <img alt='Lewis Benson' src={selfie} />
        </div>
        <div className={styles['hero__name-block']}>
          <h2>Lewis Benson</h2>
          <p>Last login: or Currently playing?</p>
          <ul>
            <li>Followers</li>
            <li>Subscribers</li>
          </ul>
        </div>
      </div>
      <div className={styles['hero__nav--wrapper']}>
        <ul className={styles['hero__nav']}>
          <li>
            Edit
          </li>
          <li>
            arrow
          </li>
          <li>
            arrow subdued
          </li>

        </ul>
      </div>

    </section>
  )
}
