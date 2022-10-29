import React, { useState } from 'react'
import '../App.css'
import Project1 from './daily-ui-projects/001/Project1'
import Project2 from './daily-ui-projects/002/Project2';
export default function Main() {
  const [currentProject] = useState(1);
  return (
    <main>
      {currentProject === 1 && <Project1 />}
      {currentProject === 2 && <Project2 />}
    </main>
  )
}
