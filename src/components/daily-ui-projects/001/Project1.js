import React from 'react'
import styles from './Project1.module.css'
import Heading from './components/Heading'
import Form from './components/Form'
import Images from './components/Images'
export default function Project1() {
  return (
    <article className={styles.main}>
      <Heading />
      <section className={styles['form--wrapper']}>
        <Form />
        <Images />
      </section>

    </article>
  )
}
