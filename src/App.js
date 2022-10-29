import Main from './components/Main';
import Footer from './components/UI/Footer';
import Header from './components/UI/Header';
import SideBar from './components/UI/sidebar/SideBar';
import './App.css'
import React from 'react';
function App() {
  return (
    <React.Fragment>
      <div className='wrapper'>
        <Header />
        <Main />
        <SideBar />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
