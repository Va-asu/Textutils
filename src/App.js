import './App.css';import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from "react";
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
   const [mode,setMode]=useState("light");
   const [txt,settxt]=useState("Enable dark mode");
   const[alert,setAlert]=useState(null);//now alert is an object 

   const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })

      setTimeout(() => {
        setAlert(null)
      }, 2000);
      //after 2 second alert will be dismissed automatically
   }
  
     const toggleMode=()=>{
     if(mode==='light')
     {
        setMode('dark');
        settxt('Enable light mode');
        document.body.style.backgroundColor="#031632";//set document color to grey
        showAlert("dark mode enabled","success");
        //document.title="Textutil-darkmode"   this is how we can dynamicaly change our documents title
        //porpose or this interval blinking is to attact attaintion from user
        // setInterval(() => {
        //   document.title="texutils is amazing"
        // }, 2000);
        // setInterval(() => {
        //   document.title="install textutils"
        // }, 1500);
        
     }else{
        setMode('light');
        settxt('Enable dark mode');
        document.body.style.backgroundColor="white";
        showAlert("light mode enabled","success");

     }
   }

  return (
    <>
      <Router>
        <Navbar title="Textutils" about="about textutils" mode={mode} toggleMode={toggleMode}  txt={txt} />
        <Alert alert={alert} />
        <Switch>
          <Route path="/about">
            <About  mode={mode}/>
          </Route>
          <Route path="/">
            <div className="container my-3">
              <TextForm showAlert={showAlert}  heading="Enter the text here"  mode={mode}/>
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

//first component <Navbar/> in which we can change the perticular value like <Navbar title="textutils"/> 
//<Navbar title="textutils"/>  here arrives concept of props 