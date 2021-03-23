import React from 'react';

export default function ItemDetail ({itemdetail}){

  return(
    <div className="card-mb-3">
      <img src={itemdetail.pictureUrl} className="card-img-top" alt="" style={{width: "18rem"}} />
      <div className="card-body">
        <h5 className="card-title">{itemdetail.title}</h5>
        <p className="card-text" style={{color:"black", size:"1rem"}}>{itemdetail.text}</p>
        <p className="card-text">{itemdetail.price}</p>
      </div>
    </div>
  )
}