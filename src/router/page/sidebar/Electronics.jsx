import { useSelector } from "react-redux";
import Cart from "../../../components/UI/Cart";
import './styles/style.css'


export default function Electronics(params) {
    
    const electronics = useSelector(state=>state.basket.product)
  
     const NewArray=electronics.filter((item)=>item.category === 'electronics')
     console.log(NewArray);
 
    return(
        <div className="electro">
               {NewArray?.map((item)=><Cart item={item}/>)} 
        </div>
    )
}