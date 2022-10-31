import React from 'react'
import styles from '../Project1.module.css'
export default function Form() {
  return (
    <div className={styles.form}>

      <form onSubmit={(e) => e.preventDefault()} className={styles['form-element']}>
        <fieldset className={styles.fieldset}>
          <legend><h4 className={styles.h4}>Fill out the form to sign up</h4></legend>
          <label className={styles.label}>
            First Name:
            <input name='first-name' className={styles.name} type='text' />
          </label>
          <label className={styles.label}>
            Last Name:
            <input name='last-name' className={styles.name} type='text' />
          </label>
          <label className={styles.label}>
            Select Adventure Type:
            <select name='departing' className={styles.name} >
              <option>Space</option>
              <option>Dream World</option>
              <option>Forest Realm</option>
              <option>Underwater World</option>
            </select>
          </label>

          <label className={styles.label}>
            Date Departing:
            <input name='departing' className={styles.name} type='date' />
          </label>
          <label className={styles.label}>
            Date Returning:
            <input name='returning' className={styles.name} type='date' />
          </label>
        </fieldset>
        <button className={styles.button}>Submit</button>
      </form>
    </div>
  )
}
