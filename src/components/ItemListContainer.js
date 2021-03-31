import React, {useEffect, useState} from 'react';
import {ItemCount} from './ItemCount';
import {ItemList} from './ItemList';
import {useParams} from 'react-router-dom';


const prom = new Promise((resolve)=>{
  setTimeout(()=>{
    resolve([
       { id:1, title:"Inducido", price:'$1800', pictureUrl:"https://dtorcentralresources.azureedge.net/resources/dtwsassets/zoom/5/5_40000/5_47060_K.jpg", cat:"arr"},
       { id:2, title:"Regulador de voltaje", price:'$1500', pictureUrl:"https://www.pruebaderuta.com/wp-content/uploads/2016/02/regulador-alternador.jpg", cat:"alt"},
       {id:3, title:"Lámpara H7", price:'$600', pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_696223-MLA31115296420_062019-O.jpg", cat:"luz"},
       {id:4, title:"Alternador Valeo", price:'$18000', pictureUrl:"https://cdn.autodoc.de/uploads/360_photos/1099452/h-preview.jpg"}          
  ])
  },2000)
})


export const ItemListContainer= (props) =>{
    const [items, setItems]= useState([])
    const {categoryId} = useParams();
    

  useEffect(() => {
   prom.then((resolve)=> setItems(resolve))
    return;
});
    


  return <div>Lista de items
<ItemList items={items}/>
<ItemCount stock={10} initial={1}/>
{props.greeting}
 
 
 </div>
  
}