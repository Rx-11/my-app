
import './App.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import About from './components/About';
import React, {useState} from 'react';



function App() {
  const togglemode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#2D3033'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
  }
  const [mode, setMode]= useState('light');
  return (
    <>
    
    <Navbar title="ABC" mode={mode} togglemode={togglemode}/>
    <div className="container my-3"><TextArea heading="Enter Text" mode={mode} togglemode={togglemode}/></div>
    <div className="container my-3"><TextArea heading="Enter Text" mode={mode} togglemode={togglemode}/></div>
    <About />
  
    </>
  );
}

export default App;
