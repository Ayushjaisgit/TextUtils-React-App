import './App.css';
// import About from './MyComponents/About';
import Header from './MyComponents/Header';
import TextForm from './TextForm';
import About from './MyComponents/About'
import React, { useState } from 'react';
// import Alert from './MyComponents/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light') // whether dark mode is enabled or not
  // const [alert, setAlert] = useState('null')


  // const showAlert = (message, type)=>{
  //         setAlert({
  //           msg: message
  //         })
  // }


  const toggleMode = () => {
    if (mode === 'light') {
      setmode('black')
      document.body.style.backgroundColor = '#181819'

    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      {/* <Header title='TextUtils'  mode = {mode} toggleMode={toggleMode} /> */}
      {/* <Header/> */}
 <Router>

      <Header title='TextUtils' mode={mode} toggleMode={toggleMode} />
      {/* <Alert alert = "this is alert" /> */}
      <div className="container my-3">
      <Routes>
          <Route exact path="/" element={<TextForm heading="Enter The Text To Analyze Below" mode={mode} />}>
          </Route>
          <Route exact path="/about" element={<About/>} />
        </Routes>
      </div>
</Router>
    </>
  )
}

export default App;
