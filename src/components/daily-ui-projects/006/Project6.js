import React from 'react'
import styles from './Project6.module.css'
import ProjectWrapper from '../../modular-components/ProjectWrapper'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import ProfileNav from './components/ProfileNav'
import LatestFollowers from './components/LatestFollowers'
import LatestSubs from './components/LatestSubs'
import About from './components/About'
import Calender from './components/Calender'
import PreviousBroadcasts from './components/PreviousBroadcasts'
import Card from '../../modular-components/Card'

export default function Project6() {
  return (
    <ProjectWrapper className={styles['profile-wrapper']}>
      <header className={styles.header}>
        <Card className={styles.nav__wrapper}>
          <NavBar />
        </Card>
        <Hero />
      </header>
      <section>
        <PreviousBroadcasts />
        <LatestFollowers />
        <LatestSubs />
      </section>
      <section>
        <ProfileNav />
        <About />
        <Calender />
      </section>
    </ProjectWrapper >

  )
}
