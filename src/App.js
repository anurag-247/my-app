import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Alert from './components/Alert';
// import * as React from "react";
// import { createRoot } from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='black';
      showAlert("Dark Mode has been enabled","success");
      document.title='TextUtils - Dark mode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success");
      document.title='TextUtils - Light mode'
    }
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} />  <Alert alert={alert} /><TextArea showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
     </>
      },
    {
      path: "/about",
      element: <><Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} /><About mode={mode} toggleMode={toggleMode}/></>
    },
  ]);
  
  // createRoot(document.getElementById("root")).render(
  //   <RouterProvider router={router} />
  // );
  
  
  return (<>
  {/* <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} /> */}
    <RouterProvider router={router} />
  {/* <div className="container my-3">
  <TextArea showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
  </div>   */}
  </>
  );}



export default App;
