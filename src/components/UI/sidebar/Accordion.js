import React, { useState } from 'react';
import styles from './Accordion.module.css'

export default function Accordion(props) {
  const [currValue, setValue] = useState(0);

  const accordionData = [{
    title: 'Project 001',
    content: <img className={styles['accordion__content--img']} alt='project 001 thumbnail' src='https://github.com/tm-LBenson/daily-ui/blob/main/public/assets/project-001.png?raw=true' ></img>
  },
  {
    title: 'Project 002',
    content: <img className={styles['accordion__content--img']} alt='project 002 thumbnail' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLNM0AnSq-CTSCq_tA3lpIh9EoulP0Ao66o9_po2Z_WNmjX0L0kyBKCnfJ9QdMtk_wFOA&usqp=CAU' ></img>
  },
  ];

  const handleOnClick = event => {

    if (currValue === event.target.title) {
      setValue(0);
    } else {
      setValue(event.target.title)
    }



  }
  const clickLinkHandler = (event) => {
    props.onSelectProject.onSelectProject(+event.target.alt.split(' ')[1])
  }
  return (

    < div >
      <h3 id='project' className={styles['sidebar__heading']}>Select a project from the list:</h3>

      {
        accordionData.map(project => (
          <div key={project.title}>
            <div className={styles.accordion}>
              <div className={styles['accordion__item']}>
                <div onClick={handleOnClick} title={+project.title.slice(-3)} className={styles['accordion__title']}>
                  <div title={+project.title.slice(-3)}>{project.title}</div>
                  <div title={+project.title.slice(-3)}>{+currValue === +project.title.slice(-3) ? '-' : '+'}</div>
                </div>
                {+currValue === +project.title.slice(-3) && <div className={styles['accordion__content']}><a onClick={clickLinkHandler} href='#project'>{project.content}</a></div>}
              </div>
            </div>
          </div>)
        )
      }
    </div >
  );
};