import { useDispatch, useSelector } from "react-redux"
import { decrProduct, incProduct } from "../../redux/Slice/basketSlice";


export default function Basket(params) {
    const basket = useSelector(state=>state.basket)
    const dispatch = useDispatch()
    console.log(basket.order);
    const order = basket.order
    return(
    <div>
            {order?.map((item)=><div>{item.title}
            <button onClick={()=>{dispatch(incProduct(item.id))}}>+</button> 
             {item.quantity} 
             <button onClick={()=>{dispatch(decrProduct(item.id))}}>-</button>  
             </div>)}
    </div>
    )
}