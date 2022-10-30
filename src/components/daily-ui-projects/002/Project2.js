import React from 'react'
import styles from './Project2.module.css'
import Heading from '../../modular-components/Heading'
import ProjectWrapper from '../../modular-components/ProjectWrapper'
import Card from '../../modular-components/Card'
import CreditCardForm from './components/CreditCardForm'
export default function Project2() {
  const h1 = 'Payment Method'
  const h3 = '🔒 This is a secure 128-bit SSL Encrypted payment. You\'re safe.'
  return (
    <ProjectWrapper className={styles.wrapper}>
      <Card className={styles.card}>
        <Heading
          className={styles.heading}
          h1={h1}
          h3={h3}
        />
        <CreditCardForm />
      </Card>
    </ProjectWrapper>
  )
}
