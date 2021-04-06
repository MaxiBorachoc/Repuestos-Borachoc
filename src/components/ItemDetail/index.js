import React, {useState} from 'react';
import {ItemCount} from '../ItemCount';
import {Link} from 'react-router-dom';



export default function ItemDetail ({itemdetail}){
  const [count, setCount] = useState(0)

  const addHandler = (contador)=>{
      console.log("agregué", contador)
      setCount(contador)
     
  }

  return(
   
    <div className="card-mb-3">
      <img src={itemdetail.pictureUrl} className="card-img-top" alt="" style={{width: "18rem"}} />
      <div className="card-body">
        <h5 className="card-title">{itemdetail.title}</h5>
        <p className="card-text" style={{color:"black", size:"1rem"}}>{itemdetail.text}</p>
        <p className="card-text">{itemdetail.price}</p>
      </div>
      { count === 0 ?
          <ItemCount stock={10} initial={1} onAdd={addHandler}/>
          :
          <Link to='/cart'>
            <button>Terminar mi compra</button>
          </Link>
      }
      
    </div>
  )
}