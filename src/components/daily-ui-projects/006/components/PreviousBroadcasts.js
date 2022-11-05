import React from 'react'
import styles from './PreviousBroadcasts.module.css'
export default function PreviousBroadcasts() {
  return (

    <div className={styles['container']}>
      <input type="radio" name="slider" id="item-1" checked />
      <input type="radio" name="slider" id="item-2" />
      <input type="radio" name="slider" id="item-3" />
      <div className={styles.cards}>
        <label className={styles.card} for="item-1" id="song-1">
          <img className={styles.img} src="https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80" alt="song" />
        </label>
        <label className={styles.card} for="item-2" id="song-2">
          <img className={styles.img} src="https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80" alt="song" />
        </label>
        <label className={styles.card} for="item-3" id="song-3">
          <img className={styles.img} src="https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="song" />
        </label>
      </div>
      <div className={styles.player}>
        <div className={styles["upper-part"]}>
          <div className={styles["play-icon"]}>
            <svg width="20" height="20" fill="#2992dc" stroke="#2992dc" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className={`${styles.feather} ${styles['feather-play']}`} viewBox="0 0 24 24">
              <defs />
              <path d="M5 3l14 9-14 9V3z" />
            </svg>
          </div>
          <div className={styles["info-area"]} id="test">
            <label className={styles["song-info"]} id="song-info-1">
              <div className={styles.title}>Bunker</div>
              <div className={styles["sub-line"]}>
                <div className={styles["subtitle"]}>Balthazar</div>
                <div className={styles["time"]}>4.05</div>
              </div>
            </label>
            <label className={styles["song-info"]} id="song-info-2">
              <div className={styles["title"]}>Words Remain</div>
              <div className={styles["sub-line"]}>
                <div className={styles["subtitle"]}>Moderator</div>
                <div className={styles["time"]}>4.05</div>
              </div>
            </label>
            <label className={styles["song-info"]} id="song-info-3">
              <div className={styles["title"]}>Falling Out</div>
              <div className={styles["sub-line"]}>
                <div className={styles["subtitle"]}>Otzeki</div>
                <div className={styles["time"]}>4.05</div>
              </div>
            </label>
          </div>
        </div>
        <div className={styles["progress-bar"]}>
          <span className={styles["progress"]}></span>
        </div>
      </div>
    </div >

  )
}
