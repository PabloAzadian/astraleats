import React from 'react'
import "./ItemCard.css"

function ItemCard({item}) {
  return (
    <div className='itemcard'>
        <img src={item.imgsrc}/>
        <p>{item.name}</p>
        <p>{item.price}</p>
    </div>
  )
}

export default ItemCard