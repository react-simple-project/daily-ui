import React, { useState } from 'react';
import styles from './Accordion.module.css'
import accordionData from '../../../projectData.json'
export default function Accordion(props) {
  const [currValue, setValue] = useState(0);
  const { onSelectProject } = props.onSelectProject

  return (

    < div >
      <h3 id='project' className={styles['sidebar__heading']}>Select a project from the list:</h3>
      {
        accordionData.map(project => (

          <div key={project.title}>
            <div className={styles.accordion}>
              <div className={styles['accordion__item']}>
                <div onClick={event => {
                  currValue === event.target.title ? setValue(0) :
                    setValue(event.target.title)
                }}
                  title={+project.title.slice(-3)}
                  className={styles['accordion__title']}>
                  <div title={+project.title.slice(-3)}>{project.title}</div>
                  <div title={+project.title.slice(-3)}>{+currValue === +project.title.slice(-3) ? '-' : '+'}</div>
                </div>
                {+currValue === +project.title.slice(-3) && <div className={styles['accordion__content']}><a onClick={
                  event => onSelectProject(+event.target.alt.split(' ')[1])} href='#project'>
                  <img
                    alt={`project ${+project.title.slice(-3)} thumbnail`}
                    src={project.url}
                  /></a></div>}
              </div>
            </div>
          </div>)
        )
      }
    </div >
  );
};