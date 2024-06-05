import React, { useContext } from 'react'
import './RoseDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import RoseItem from '../RoseItem/RoseItem'


const RoseDisplay = ({ category})=>{
  const { food_list } = useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'> 
      <h2>Top dishes near you</h2>
      <div className='food-display-list'>
        {food_list.map((item,index)=>{
          {console.log(category,item.category);}
          if (category==="All"|| category===item.category) {
          return  <RoseItem key={index} id={item._id} name={item.name} description={item.description} pric={item.pric} image={item.image} />

          }

        })}
      </div>
    </div>
  )
}
export default RoseDisplay
