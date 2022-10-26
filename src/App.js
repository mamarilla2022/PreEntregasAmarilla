import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemLiatContainer';
import { Nav } from 'react-bootstrap';

function App(texto) {
  return (
    <div className='app'>
      <header className="App-Header">
            <NavBar />
            <ItemListContainer greeting="hola como estan"/>

      </header>
 
      </div>
  );
 
  let variable = 2;
  let label =""

  if (variable==1){
    label="Learn React";
  }else{
    label="aprender react"
  }

  //forma sugar sintax de hacer lo mismo:
let label2= variable ==1 ? "learn react" : variable == 2 ? "lo que sea" : "otra cosa";
  
//jsx ejemplos
/* let aHrefStyle ={
  color: "black"
} */


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
