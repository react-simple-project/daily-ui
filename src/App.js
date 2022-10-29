import Main from './components/Main';
import Footer from './components/UI/Footer';
import Header from './components/UI/Header';
import SideBar from './components/UI/sidebar/SideBar';
import './App.css'
function App() {
  return (
    <>
      <div className='wrapper'>
        <Header />
        <Main />
        <SideBar />
        <Footer />
      </div>
    </>
  );
}

export default App;
