import React, { useState } from 'react';
import styles from './Accordion.module.css'

export default function Accordion() {
  const [isActive, setIsActive] = useState(false);

  const accordionData = {
    title: 'Project 001',
    content: <img className={styles['accordion__content--img']} alt='project 001 thumbnail' src='https://github.com/tm-LBenson/daily-ui/blob/main/public/assets/project-001.png?raw=true' ></img>
  };

  const { title, content } = accordionData;


  return (
    <React.Fragment>
      <h3 className={styles['sidebar__heading']}>Select a project from the list:</h3>
      <div className={styles.accordion}>
        <div className={styles['accordion__item']}>
          <div onClick={() => setIsActive(!isActive)} className={styles['accordion__title']}>
            <div>{title}</div>
            <div>{isActive ? '-' : '+'}</div>
          </div>
          {isActive && <div className={styles['accordion__content']}>{content}</div>}
        </div>
      </div>
    </React.Fragment>
  );
};