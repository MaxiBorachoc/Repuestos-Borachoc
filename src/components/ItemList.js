 import React from 'react';
 import Item from './Item';


 export const ItemList=({items=[]})=>{

   <div>
     {items.map(item=> <Item item={item}/>)}
   </div>

 }