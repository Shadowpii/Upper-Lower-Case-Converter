import './App.css';
import React,{useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';

function App() {
  const [mode, setMode] = useState('dark');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <>
    <Navbar title="Shadowpii" mode={mode} toggleMode={toggleMode}/>
    <div className="container">
    <TextForm heading="Enter the Text to analyze" mode={mode}/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
