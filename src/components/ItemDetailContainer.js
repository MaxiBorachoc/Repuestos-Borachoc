import React, {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';

const itemDetalles=[
  {},     
  {id:1, title:"Inducido", price:'$1800', pictureUrl:"https://dtorcentralresources.azureedge.net/resources/dtwsassets/zoom/5/5_40000/5_47060_K.jpg", text: "Este es el detalle del inducido"},
  {id:2, title:"Regulador de voltaje", price:'$1500', pictureUrl:"https://www.pruebaderuta.com/wp-content/uploads/2016/02/regulador-alternador.jpg", text:"Este es el detalle del Regulador"},
  {id:3, title:"Lámpara H7", price:'$600', pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_696223-MLA31115296420_062019-O.jpg", text:"Este es el detalle de la lámpara"},
  {id:4, title:"Alternador Valeo", price:'$18000', pictureUrl:"https://cdn.autodoc.de/uploads/360_photos/1099452/h-preview.jpg", text:"Alternador original modelo Valeo. Corriente de carga: 150A. Tensión: 14v. Con polea de rueda libre."}
]

const getitems =(id) => {
  return new Promise ((resolve)=>{
  setTimeout(()=>{
    resolve(
        itemDetalles[id]
        

        )},2000)})}
        
      
        
      
        

export const ItemDetailContainer=(props)=>{
  const [itemdetail, setDetail] = useState([]);
  const {itemId} = useParams();

   useEffect(() => {
    getitems(itemId).then((resolve)=> setDetail(resolve))
    return;
}, [itemId]);



  



return (
<ItemDetail itemdetail={itemdetail} />
)
}
