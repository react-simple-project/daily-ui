import React from 'react'
import ProjectWrapper from '../../modular-components/ProjectWrapper'
import styles from './Project4.module.css'
import Buttons from './components/Buttons'
import DisplayArea from './components/DisplayArea'
export default function Project4() {
  return (
    <ProjectWrapper>
      <section className={styles.main}>
       
          <DisplayArea />
          <Buttons />
     
      </section>

    </ProjectWrapper >

  )
}
