import React, {useEffect, useState} from 'react';
import {ItemCount} from './ItemCount';
 import {ItemList} from './ItemList';


export const ItemListContainer= () =>{
    const [items, setItems]= useState([])

    useEffect(()=>{

        const prom = new Promise((resolve,reject)=>{
          setTimeout(()=>{
            resolve([
               { id:1, title:"Inducido", price:1800, pictureUrl:"https://dtorcentralresources.azureedge.net/resources/dtwsassets/zoom/5/5_40000/5_47060_K.jpg"},
               { id:2, title:"Regulador de voltaje", price:1500, pictureUrl:"https://www.pruebaderuta.com/wp-content/uploads/2016/02/regulador-alternador.jpg"},
               { id:3, title:"Lámpara H7", price:600, pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_696223-MLA31115296420_062019-O.jpg"}
            ])
          },2000)
        })
    })
    prom.then((resolve)=>{
      setItems(resolve)
    })

  return <div>Lista de items
  <ItemList items={items}/>
<ItemCount stock={10} initial={1}/>
 
 
 </div>
  
}