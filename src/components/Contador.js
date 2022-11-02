import React, {useState} from 'react';
  
  /*const Button = ({ increment, onClickFunction }) => {
    const handleClick = () => {
      onClickFunction(increment)
    }
    return <button onClick={handleClick}>+{increment}</button>
  }
  const App = () => {
  let count = 0
  
  
  const incrementCount = increment => {
    }
  
  
  return (
  <div>
  <Button increment={1} onClickFunction={incrementCount} />
  <Button increment={10} onClickFunction={incrementCount} />
  <Button increment={100} onClickFunction={incrementCount} />
  <Button increment={1000} onClickFunction={incrementCount} />
  <span>{count}</span>
  </div>
  )
  } */
/* const sumar = () =>{
    setValor(valor+1);
    return (
            <h1>contador</h1>)
        } */

/* const res = () =>{
    setValor(0);
}

const restar = () =>{
    setValor(valor-1);
}


        <h2>{valor} </h2>
        <button oneClick={sumar} >aumentar</button>


    </div>
) */

const Contar = ({increment}) => {
  return <button>+{increment}</button>
}

const Contador = () => {
  let count = 0

  return (
    <div>
      <Contar increment={1} />
      <Contar increment={10} />
      <Contar increment={100} />
      <Contar increment={1000} />
      <span> {count}</span>
    </div>
  )
}


export default Contador;
