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
   const removeClasses=()=>{
      document.body.classList.remove("bg-success");
      document.body.classList.remove("bg-warning");
      document.body.classList.remove("bg-primary");
      document.body.classList.remove("bg-danger");
      document.body.classList.remove("bg-dark");

   }
  
    const toggleMode=(cls)=>{
       removeClasses();
       if(cls!=="dark"){
         document.body.classList.add("bg-"+cls);
       }
       if(mode==='light')
       {
          setMode('dark');
          document.body.style.backgroundColor="#031632";
          showAlert("dark mode enabled","success");
       }else{
          setMode('light');
          document.body.style.backgroundColor="white";
          showAlert("light mode enabled","success");
  
       }
   }

  return (
    <>
      <Router>
        <Navbar title="Textutils" about="about textutils" mode={mode} toggleMode={toggleMode}   />
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