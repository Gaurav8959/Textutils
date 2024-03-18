//import { Accordion } from 'react-bootstrap';
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
//import { Alert } from 'bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }
  const toggleMode= () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#212529c2'
      showAlert('Dark mode has been enable','success');

    }
    else{
      setMode('light');
      document.body.style.backgroundColor='#fff'
      showAlert('Light mode has been enable','success');
    }
  }
  const greenMode= () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#2E8B57'
      showAlert('Green mode has been enable','success');

    }
    else{
      setMode('light');
      document.body.style.backgroundColor='#fff'
      showAlert('Light mode has been enable','success');
    }
  }
  return (
    <>
<Router>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} greenMode={greenMode} aboutText="About-us"/>
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
          <Route exact path="/About" element={<About/>}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading={"Enter the text to analyze"} mode={mode}/>}/>
          
</Routes>
</div>
</Router>
    </>
  );
}

export default App;
