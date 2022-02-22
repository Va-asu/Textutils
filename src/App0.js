import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

//everything from line 1 to 25 is written in javascript thats why it is named .js file.
//but there is section from line 6 to line 21 which is 90% HTML with some javascript called JSX with only one element or in jsx fragment
//so there instead of using any predefind name we will use new name with camelcase
//ex:- for is reserved in javascript so here it will be htmlFor
// of class is reserved in HTML so here it will be className 