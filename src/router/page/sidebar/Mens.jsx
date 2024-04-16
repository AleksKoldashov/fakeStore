import { useSelector } from "react-redux";
import Cart from "../../../components/UI/Cart";
import { useGetCategoriesJeweleryQuery, useGetCategoriesMensQuery } from "../../../redux/apiProducts"
import './styles/style.css'


export default function Mens(params) {

    const men = useSelector(state=>state.basket.product)

    const NewArray=men.filter((item)=>item.category === 'men\'s clothing')
     console.log(NewArray);
  
    return(
        <div className="electro">
               {NewArray?.map((item)=><Cart item={item}/>)} 
        </div>
    )
}