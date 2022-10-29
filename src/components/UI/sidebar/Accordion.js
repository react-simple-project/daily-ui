import React, { useState } from 'react';
import styles from './Accordion.module.css'

export default function Accordion() {
  const [isActive, setIsActive] = useState(false);

  const accordionData = {
    title: 'Project 001',
    content: <img className={styles['accordion__content--img']} alt='test' src='https://images.unsplash.com/photo-1525011268546-bf3f9b007f6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2lnbiUyMHVwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' ></img>
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