import React from 'react'
import styles from '../Project4.module.css'
export default function Buttons() {
  return (
    <section className={styles.buttons}>
      <div className={styles.buttons__row}>

        <button className={styles.buttons__key}>√</button>

        <button className={styles.buttons__key}>+/<sup> _</sup></button>

        <button className={styles.buttons__key}>%</button>
        <button className={styles.buttons__key}>÷</button>
        <button className={styles.buttons__key}>AC</button>
      </div>
      <div className={styles.buttons__row}>
        <button className={styles.buttons__key}>M+</button>
        <button className={styles.buttons__key}>7</button>
        <button className={styles.buttons__key}>8</button>
        <button className={styles.buttons__key}>9</button>
        <button className={styles.buttons__key}>X</button>
      </div>
      <div className={styles.buttons__row}>
        <button className={styles.buttons__key}>M-</button>
        <button className={styles.buttons__key}>4</button>
        <button className={styles.buttons__key}>5</button>
        <button className={styles.buttons__key}>6</button>
        <button className={styles.buttons__key}>—</button>

      </div>
      <div className={styles.buttons__row}>
        <button className={styles.buttons__key}>MC</button>
        <button className={styles.buttons__key}>1</button>
        <button className={styles.buttons__key}>2</button>
        <button className={styles.buttons__key}>3</button>
        <button className={styles.buttons__key}>+</button>
      </div>
      <div className={styles.buttons__row}>
        <button className={styles.buttons__key}>MR</button>
        <button className={styles.buttons__key}>𝛑</button>
        <button className={styles.buttons__key}>0</button>
        <button className={styles.buttons__key}>.</button>
        <button className={styles.buttons__key}>=</button>
      </div>

    </section>
  )
}
