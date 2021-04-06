import React, {useState} from 'react';


export const ItemCount=({stock, initial, onAdd})=>{
  const [contador, setContador]= useState(initial);

  


  const suma = ()=>{
    setContador(contador+1);
  };
  const resta=()=>{
    setContador(contador-1);
  };
  
    
  
  return <div>
    <div className="d-flex flex-row justify-content-center">
    <button disabled={contador<=0} onClick={resta} type="button" className="btn btn-primary">-</button>
    <div className="d-inline-flex p-2 bd-highlight">{contador}</div>
    <button disabled={contador>=10} onClick={suma} type="button" className="btn btn-primary">+</button>
    </div>
    <div>
      <button type="button" className="btn btn-success" onClick={()=>onAdd(contador)}>Agregar al carrito</button>
    </div>
  </div>
    
    
 
}