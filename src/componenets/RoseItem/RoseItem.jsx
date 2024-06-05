import React, { useContext } from 'react'
import './RoseItem.css/'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const RoseItem = ({ id,name,price,description,image }) => {

   const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);
   

    return (
        <div className='rose-item'>
            <div className="rose-item-img-container">
                <img className='rose-item-image' src={image} alt="" />
                {!cartItems[id]
            ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
            :<div className='rose-item-counter'> 
            <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItems[id]}</p>
            <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
           </div>

            }
            </div>
            <div className="rose-item-info">
            <div className="rose-item-name-rating"> 
            <p>{name}</p>
            <img src={assets.rating_starts} />
        </div>
        <p className="rose-item-desc">
            {description}
        </p>
        <p className="rose-item-price">
          ${price}
        </p>
  </div>
  </div> 
)

}

export default RoseItem
