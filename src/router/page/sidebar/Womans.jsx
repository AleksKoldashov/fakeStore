import { useSelector } from "react-redux";
import Cart from "../../../components/UI/Cart";
import { useGetCategoriesJeweleryQuery, useGetCategoriesWomansQuery } from "../../../redux/apiProducts"
import './styles/style.css'


export default function Womans(params) {
    const womans = useSelector(state=>state.basket.product)

    const NewArray=womans.filter((item)=>item.category === 'women\'s clothing')
     console.log(NewArray);
  
    return(
        <div className="electro">
               {NewArray?.map((item)=><Cart item={item}/>)} 
        </div>
    )
}