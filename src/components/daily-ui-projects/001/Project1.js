import React from 'react'
import styles from './Project1.module.css'
import Heading from '../../modular-components/Heading'
import Form from './components/Form'
import Images from './components/Images'
export default function Project1() {
  const h1 = 'Signup for an adventure!'
  const h3 = 'Adventure awaits...'
  return (
    <article className={styles.main}>
      <Heading 
      h1={h1}
      h3={h3}      
      />
      <section className={styles['form--wrapper']}>
        <Form />
        <Images />
      </section>

    </article>
  )
}

