import React from 'react'
import styles from '../Project2.module.css'
export default function CreditCardForm() {
  return (
    <div className={styles.form}>

      <form>
        <fieldset>
          <div className={styles['name-card']}>
            <label>
              NAME ON THE CARD:
              <input name='full-name' className={styles.name} type='text' />
            </label>


            <label>
              CARD NUMBER:
              <input name='card-number' className={styles.name} type='text' />
            </label>
          </div>

          <div className={styles['exp-cvc']}>
            <label>
              EXPIRATION DATE:
              <input type='date' className={styles.name} />

            </label>

            <label>
              CVC:
              <input name='CVC' className={styles.name} type='text' />
            </label>
          </div>

          <div className={styles.address}>
            <label>
              ADDRESS:
              <input name='Address' className={styles.name} type='text' />
            </label>
            <label>
              ADDRESS 2 (optional):
              <input name='Address2' className={styles.name} type='text' />
            </label>
          </div>
          <div className={styles.address}>
            <label>
              CITY:
              <input name='Address' className={styles.name} type='text' />
            </label>
            <label>
              STATE:
              <input name='Address2' className={styles.name} type='text' />
            </label>
            <label>
              ZIP:
              <input name='Address2' className={styles.name} type='text' />
            </label>
          </div>
        </fieldset>
        <button>Complete Transaction</button>
      </form>
      <section className={styles['col-right']}><img alt='Digital wallet splash art' className={styles.splash} src='https://plus.unsplash.com/premium_photo-1663931932648-cf5545116c35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80' /></section>
    </div>

  )
}
