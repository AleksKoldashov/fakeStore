import { useSelector } from "react-redux";
import Cart from "../../../components/UI/Cart";
import './styles/style.css'


export default function Jewelery(params) {
    const jewelery = useSelector(state=>state.basket.product)

    const NewArray=jewelery.filter((item)=>item.category === 'jewelery')
     console.log(NewArray);
    return(
        <div className="electro">
               {NewArray?.map((item)=><Cart item={item}/>)} 
        </div>
    )
}