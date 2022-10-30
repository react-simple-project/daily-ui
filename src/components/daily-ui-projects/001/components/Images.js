import React from 'react'
import styles from '../Project1.module.css'
export default function Images() {
  return (
    <section className={styles['form--images']}>
      <div className={styles['col-left']}>
        <img className={styles['splash-images']} alt='A girl hiking in the mountains' src='https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80' />
        <img className={styles['splash-images']} alt='Items for exploration on a map' src='https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80' />
      </div>
      <div className={styles['col-right']}>
        <img className={styles['splash-images']} alt='colorful astronaut floating in space' src='https://images.unsplash.com/photo-1639823933284-3dba80c84a96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80' />
        <img className={styles['splash-images']} alt='person in the dark looking up at the sky' src='https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80' />
      </div>

    </section>
  )
}
