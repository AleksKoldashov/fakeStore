import { NavLink } from 'react-router-dom'
import './cart.css'
import { useDispatch } from 'react-redux'
import { addProductBasket, decrProduct, incProduct } from '../../redux/Slice/basketSlice'


export default function Cart(item) {
    const product = item.item
    const dispatch = useDispatch()
   
 
        const AddCounter = (product)=>{
            dispatch(addProductBasket(product))
          
            dispatch(incProduct(product.id))
        }
 
    console.log( product)
    return(
        <div className='cart'>
            <img src={product.image} alt='pic' style={{width:'100px'}}/>
            <NavLink to={`/market/cataloge/${product.id}`}>{product.id}.{product.title}</NavLink>
            <h3>{product.price}$</h3>
            <div className='wrapper_btn'>
            <button className='btn_minus' onClick={()=>{dispatch(decrProduct(product.id))}}>-</button>
            {product.quantity === undefined ?  0 : product.quantity}
            <button className='btn_plus' onClick={()=>{AddCounter(product)}}>+</button>
            </div>
        </div>
    )
}