import { NavLink } from 'react-router-dom'
import './cart.css'
import { useDispatch } from 'react-redux'
import { addProductBasket } from '../../redux/Slice/basketSlice'
import { useState } from 'react'

export default function Cart(item) {
    const product = item.item
    const dispatch = useDispatch()
   
    const [styl, setStyl]=useState({s:'none', b: 'block'})
    const AddCounter = ()=>{
        dispatch(addProductBasket(product))
        setStyl({s:'block', b: 'none'})
    }
       
    return(
        <div className="Cart">
            <NavLink to={`/market/cataloge/${product.id}`}>{product.id}.{product.title}</NavLink>
            <button style={{display: styl.b}} onClick={()=>AddCounter()}>Add product</button>
            
            <div style={{display: styl.s}}>
            <button  onClick={()=>{}}>+</button>
            {product.id}
            <button onClick={()=>{}}>-</button>
            </div>
         
        </div>
    )
}