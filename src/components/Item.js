import React from 'react';

 export default function Item({item}){

   return(
     <div>
       <h5>{item.title}</h5>
       <img src={item.pictureUrl} alt="" style={{width: "18rem"}}/>
       <div>{item.price}</div>
     </div>
    
   )


 }