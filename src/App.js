import Main from './components/Main';
import Footer from './components/UI/Footer';
import Header from './components/UI/Header';
import SideBar from './components/UI/sidebar/SideBar';
import './App.css'
import React, { useState } from 'react';
function App() {
  const [currProj, setProj] = useState(1);
  const selectProjectHandler = (current) => {
    setProj(current)
  }


  return (
    <React.Fragment>
      <div className='wrapper'>
        <Header />
        <Main currProj={currProj} />
        <SideBar onSelectProject={selectProjectHandler} />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
