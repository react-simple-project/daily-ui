import React from 'react'
import '../App.css'
import Project1 from './daily-ui-projects/001/Project1';
import Project2 from './daily-ui-projects/002/Project2';
import Project3 from './daily-ui-projects/003/Project3';
import Project4 from './daily-ui-projects/004/Project4';
export default function Main(props) {


  return (
    <main>
      {props.currProj === 0 && <Project1 />}
      {props.currProj === 2 && <Project2 />}
      {props.currProj === 3 && <Project3 />}
      {props.currProj === 1 && <Project4 />}
    </main>
  )
}
