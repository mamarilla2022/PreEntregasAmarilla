import logo from './logo.svg';
import './App.css';

function App() {
  let variable = 2;
  let label =""

  if (variable==1){
    label="Learn React";
  }else{
    label="aprender react"
  }



  //forma sugar sintax de hacer lo mismo:
let label2= variable ===1 ? "learn react" : variable === 2 ? "lo que sea" : "otra cosa";
  
//jsx ejemplos
/* let aHrefStyle ={
  color: "black"
} */

function sub2() {
  return
    <div  className="app">
    <h2>Saludos a todos!</h2>
    </div>
  }

return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={() => alert("hola mundo")}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
         /* style={aHrefStyle} */
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {label2}
        </a>
      </header>
    </div>
  );
}

export default App;
