import React from 'react'
import '../App.css'
import Project1 from './daily-ui-projects/001/Project1'
import Project2 from './daily-ui-projects/002/Project2';
export default function Main(props) {


  return (
    <main>
      {props.currProj === 1 && <Project1 />}
      {props.currProj === 2 && <Project2 />}
    </main>
  )
}
