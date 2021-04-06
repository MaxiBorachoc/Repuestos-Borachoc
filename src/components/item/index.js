import React from 'react';
import {Link} from 'react-router-dom';

 export default function Item({item}){

   return(
     <div className="card-columns">
       <div className="card">
       <img src={item.pictureUrl} className="card-img-top" alt="" style={{width: "18rem"}}/>
       <div className="card-body">
         <h5 className="card-title">{item.title}</h5>
      <p className="card-text">{item.price}</p>
      <Link to={`/item/${item.id}`}>Más info </Link> 
   
      </div>
       </div>
     </div>
    
   )


 }