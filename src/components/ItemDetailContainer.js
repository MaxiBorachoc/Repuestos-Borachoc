import React, {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';

export const ItemDetailContainer=(props)=>{
  const [itemdetail, setDetail] = useState([]);

  useEffect(()=>{
    const getitems = new Promise ((resolve, reject)=>{
      setTimeout(()=>{
        resolve(
          { id:4, title:"Alternador Valeo", price:18000, pictureUrl:"https://cdn.autodoc.de/uploads/360_photos/1099452/h-preview.jpg", text:"Alternador original modelo Valeo. Corriente de carga: 150A. Tensión: 14v. Con polea de rueda libre."}
        )
      },2000)
    })
    getitems.then((resolve)=>{
        setDetail(resolve)
    })
  })

return (<div>
  <ItemDetail itemdetail={itemdetail}/>
</div>
)
}