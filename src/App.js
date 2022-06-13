import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Section1 from './components/Section1/Section1';
import dropDown from './static/page1-img/drop_down.svg';
import Burger from './components/BurgerMenu/Burger';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import Section4 from './components/Section4/Section4';
import Section5 from "./components/Section5/Section5";
function App() {
  const [burgerState,setBurgerState] = useState(false);
  return (
    <>
    <div className="app">
      <Navbar burgerState={burgerState} setBurgerState={setBurgerState}/>
      {burgerState &&
        <Burger />
      }
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
    <div className='app__drop'>
      {/* <img src={dropDown} alt="drop down"/> */}
    </div>
    </>
  );
}

export default App;
